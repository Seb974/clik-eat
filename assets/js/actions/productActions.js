import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_LOADING, GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './types';
import { tokenConfig } from '../helpers/security';
import { returnErrors } from './errorActions';
import productReducer from '../reducers/productReducer';

export const getProducts = () => dispatch => {
  localStorage.removeItem('products');
  let storedProducts = localStorage.getItem('products') || "";
  if (storedProducts !== "") {
    storedProducts = JSON.parse(storedProducts);
    dispatch({
      type: GET_PRODUCTS,
      payload: storedProducts
    })
  } else {
    dispatch(setProductsLoading());
    axios.get('api/products', tokenConfig())
         .then((res) => {
              dispatch({
                type: GET_PRODUCTS,
                payload: res.data['hydra:member']
              })
         }
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  }
};

export const getProduct = id => dispatch => {
  let storedProducts = localStorage.getItem('products') || "";
  if (storedProducts !== "") {
    storedProducts = JSON.parse(storedProducts);
    for(let i = 0; i < storedProducts.length; i++) {
      if (storedProducts[i].id == id) {
          dispatch({
            type: GET_PRODUCT,
            payload: storedProducts[i]
          })
          break;
      }
    }
  } else {
    dispatch(setProductsLoading());
    axios.get('/api/products/' + id, tokenConfig())
         .then((res) => {
            dispatch({
              type: GET_PRODUCT,
              payload: res.data
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
  }
};

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};

export const updateProductStock = variant => dispatch => {
    dispatch({
      type: UPDATE_PRODUCT_STOCK,
      payload: {
        variant: variant,
      }
    })
}

export const deleteProduct = id => dispatch => {
  axios.delete('/api/products/' + id, tokenConfig())
       .then((res) => {
          dispatch({
              type: DELETE_PRODUCT,
              payload: res.data
          })
       })
       .catch(err => {
          console.log(err);
       });
};

export const addProduct = (fromState) => dispatch =>{
  (async () => {
      const pictureToUpload = fromState.picture;
      let picture = fromState.picture !== '' ? await registerPicture(pictureToUpload) : null;
      const nutritionals = await registerNutritionals(fromState);
      const variants = await registerVariants(fromState);
      const registeredVariants = await Promise.all(variants);
      let product = {
          name: fromState.name,
          description: fromState.description,
          nutritionals: '/api/nutritionals/' + nutritionals.data.id,
          category: '/api/categories/' + fromState.category.id,
          tva: '/api/tvas/' + fromState.tva.id,
          allergens: fromState.allergens.map(allergen => '/api/allergens/' + allergen.id),
          variants: registeredVariants.map(variant => '/api/variants/' + variant.data.id),
          supplier: '/api/suppliers/' + fromState.supplier.id,
          picture: fromState.picture === '' ? null : "api/pics/" + picture.data["@id"].substring( parseInt(picture.data["@id"].lastIndexOf("/")) + 1)
      };
      await axios.post('/api/products', JSON.stringify(product), tokenConfig())
                 .then( (res) => {
                    dispatch({
                        type: ADD_PRODUCT,
                        payload: res.data
                    })
                 });
  })();
};

export const updateProduct = (fromState) => dispatch => {
      (async () => {
          const pictureToUpload = fromState.picture;
          const picture = fromState.picture !== '' && fromState.picture.id !== fromState.initialProduct.picture.id ? await registerPicture(pictureToUpload) : null;
          const updatedProperties = await defineUpdatedProperties(fromState);
          if (picture !== null) {
            updatedProperties['picture'] = "api/pics/" + picture.data["@id"].substring( parseInt(picture.data["@id"].lastIndexOf("/")) + 1);
          }
          await axios.patch('/api/products/' + fromState.initialProduct.id, JSON.stringify(updatedProperties), tokenConfigForUploadFile())
                     .then( (res) => {
                        dispatch({
                            type: UPDATE_PRODUCT,
                            payload: res.data
                        })
                     });
      })();
};

export const registerStock = async (id, variant, fromState) => {
  let newVariant = fromState.variants.filter(element => parseInt(element.id) === parseInt(id));
  let stock = {
      product: '/api/variants/' + id,
      quantity: newVariant.length > 0 ? 
          (typeof newVariant[0].stock.quantity === "string" ? parseFloat(newVariant[0].stock.quantity.replace(',','.')) : newVariant[0].stock.quantity) :
          (typeof variant.stock.quantity === "string" ? parseFloat(variant.stock.quantity.replace(',','.')) : variant.stock.quantity),
  }
  if (typeof variant.stock.id === 'undefined') {
      return await axios.post('/api/stocks', JSON.stringify(stock), tokenConfig());
  } else {
      return await axios.put('/api/stocks/' + variant.stock.id, JSON.stringify(stock), tokenConfig());
  }
}

export const registerVariants = async (fromState) => {
  return await fromState.variants.map( async variant => {
      let newVariant  = { 
          name: variant.name, 
          price: typeof variant.price === "string" ? parseFloat(variant.price.replace(',','.')) : variant.price,
          tva: '/api/tvas/' + fromState.tva.id,
      };
      if (typeof variant.id === 'undefined') {
          return await axios.post('/api/variants', JSON.stringify(newVariant), tokenConfig())
                            .then( (res) => {
                                registerStock(res.data.id, variant, fromState);
                                return res;
                            });
      } else {
          return await axios.put('/api/variants/' + variant.id, JSON.stringify(newVariant), tokenConfig())
                            .then( async (res) => {
                                await registerStock(variant.id, res.data, fromState);
                                return res;
                            })
          ;
      }
  })
};

export const registerNutritionals = async (fromState) => {
    if (typeof fromState.initialProduct.nutritionals === 'undefined') {
        return await axios.post('/api/nutritionals', JSON.stringify(fromState.nutritionals), tokenConfig());
    } else {
        return await axios.put('/api/nutritionals/' + fromState.initialProduct.nutritionals.id, JSON.stringify(fromState.nutritionals), tokenConfig());
    }
};

export const registerMedia = async (media) => {
    let formData = new FormData();
    const token = localStorage.getItem('token');
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          //'Content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
    }
    formData.append('file', media);
    return await axios.post('/api/media_objects', formData, config);
}

export const registerPicture = async (media) => {
  const mediaObject = await registerMedia(media);
  const picture = {b64: mediaObject.data.contentUrl};
  return await axios.post('api/pics', JSON.stringify(picture), tokenConfig());
}

export const getProductFromDb = async (id) => {
  return await axios.get('/api/products/' + id, tokenConfig());
}

export const defineUpdatedProperties = async (fromState) => {
    const initialProduct = {
      name: fromState.initialProduct.name,
      description: fromState.initialProduct.description,
      nutritionals: fromState.initialProduct.nutritionals,
      category: fromState.initialProduct.category,
      tva: fromState.initialProduct.tva,
      allergens: fromState.initialProduct.allergens,
      variants: fromState.initialProduct.variants,
      supplier: fromState.initialProduct.supplier,
    }
    const updatedProduct = {
      name: fromState.name,
      description: fromState.description,
      nutritionals: fromState.nutritionals,
      category: fromState.category,
      tva: fromState.tva,
      allergens: fromState.allergens,
      variants: fromState.variants,
      supplier: fromState.supplier,
    }
    return await registerNewValues(initialProduct, updatedProduct, fromState);
}

export const registerNewValues = async (initialProduct, updatedProduct, fromState) => {
    const updatedProperties = {};
    for (let property in initialProduct) {
          if ( JSON.stringify(initialProduct[property]) !== JSON.stringify(updatedProduct[property])) {
            switch (property) {
              case 'nutritionals':
                  const newNutritionals = await registerNutritionals(fromState);
                  updatedProperties[property] = '/api/nutritionals/' + newNutritionals.data.id;
                  break;
              case 'variants':
                  const variants = await registerVariants(fromState);
                  const registeredVariants = await Promise.all(variants);
                  updatedProperties[property] = registeredVariants.map(variant => '/api/variants/' + variant.data.id);
                  break;
              case 'allergens':
                  updatedProperties[property] = updatedProduct[property].map(allergen => '/api/allergens/' + allergen.id);
                  break;
              case 'category':
              case 'tva':
              case 'supplier':
                  let root = (property === 'category' ? '/api/categories/' : (property === 'supplier' ? '/api/suppliers/' : '/api/tvas/'));
                  updatedProperties[property] = root + updatedProduct[property].id;
                  break;
              case 'name':
              case 'description':
                  updatedProperties[property] = updatedProduct[property];
                  break;
            }
        }
    }
    return updatedProperties;
}

export const tokenConfigForUploadFile = () => {

  const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/merge-patch+json'
      }
    }
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }  
    return config;
};
