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
    axios
      .get('api/products')
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
    axios
      .get('/api/products/' + id)
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
  axios.delete('/api/products/' + id)
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

// export const addProduct = (fromState) => dispatch =>{
//   const config = { headers: { 'Content-Type': 'application/json' } };
//   let product = {
//     name: fromState.name,
//     description: fromState.description,
//     // nutritionals: fromState.nutritionals,
//     category: fromState.category,
//     tva: '/api/tvas/' + fromState.tva.id,
//     allergens: fromState.allergens.map(allergen => '/api/allergens/' + allergen.id),
//     variants: fromState.variants,
//     supplier: '/api/suppliers/' + fromState.supplier.id
//   };
//   axios.post('/api/products', JSON.stringify(product), config)
//       .then((res) => {
//           const newProductId = res.data.id;
//           (async () => {
//               await registerVariants(fromState, newProductId);
//               const newProduct = await getProductFromDb(newProductId);
//               dispatch({
//                   type: ADD_PRODUCT,
//                   payload: newProduct.data
//               })
//           })();
//           console.log(res.data);
//       })
//       .catch(err => {
//           console.log(err);
//       });
// };

export const addProduct = (fromState) => dispatch =>{
  (async () => {
      const nutritionals = await registerNutritionals(fromState);
      const variants = await registerVariants(fromState);
      const registeredVariants = await Promise.all(variants);
      console.log(registeredVariants);
      let product = {
          name: fromState.name,
          description: fromState.description,
          nutritionals: '/api/nutritionals/' + nutritionals.data.id,
          category: '/api/categories/' + fromState.category.id,
          tva: '/api/tvas/' + fromState.tva.id,
          allergens: fromState.allergens.map(allergen => '/api/allergens/' + allergen.id),
          variants: registeredVariants.map(variant => '/api/variants/' + variant.data.id),
          supplier: '/api/suppliers/' + fromState.supplier.id
      };
      await axios.post('/api/products', 
          JSON.stringify(product), tokenConfig())
          .then( (res) => {
              console.log(res);
              dispatch({
                  type: ADD_PRODUCT,
                  payload: res.data
              })
          });
  })();
};

export const updateProduct = (fromState) => dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const product = fromState.selection;
  const body = JSON.stringify({ 
      name: fromState.name, 
      description: fromState.description
  });
  axios.put('/api/users/' + product.id, body, config)
      .then((res) => {
          const updatedProductId = res.data.id;
          (async () => {
              await registerMetas(fromState, updatedProductId);
              const updatedUser = await getProductFromDb(updatedUserId);
              await dispatch({
                  type: UPDATE_USER,
                  payload: updatedUser.data
              })
          })();
      })
      .catch(err => {
          console.log(err);
      });
};

export const registerVariants = async (fromState) => {
    // for (let i = 0, variants = fromState.variants; i < variants.length; i++) {
      return await fromState.variants.map( async variant => {
          let newVariant  = { 
              name: variant.name, 
              price: parseFloat(variant.price.replace(',','.')),
              tva: '/api/tvas/' + fromState.tva.id,
          };
          if (typeof variant.id === 'undefined') {
              return await axios.post('/api/variants', JSON.stringify(newVariant), tokenConfig())
                                .then( (res) => {
                                    registerStock(res.data.id, variant);
                                    return res;
                                });
          } else {
              return await axios.put('/api/variants' + variant.id, JSON.stringify(newVariant), tokenConfig())
                                .then( (res) => {
                                    registerStock(res.data.id, variant);
                                    return res;
                                });
          }
      })
    // }
};

export const registerNutritionals = async (fromState) => {
    if (typeof fromState.initialProduct.nutritionals === 'undefined') {
        return await axios.post('/api/nutritionals', JSON.stringify(fromState.nutritionals), tokenConfig());
    } else {
        return await axios.put('/api/nutritionals' + fromState.initialProduct.nutritionals.id, JSON.stringify(fromState.nutritionals), tokenConfig());
    }
};

export const registerStock = async (id, variant) => {
    let stock = {
        quantity: parseFloat(variant.stock.quantity.replace(',','.')),
        product: '/api/variants/' + id
    }
    if (typeof variant.stock.id === 'undefined') {
        axios.post('/api/stocks', JSON.stringify(stock), tokenConfig());
    } else {
        axios.put('/api/stocks/' + variant.stock.id, JSON.stringify(stock), tokenConfig());
    }
}

export const getProductFromDb = async (id) => {
  return await axios.get('/api/products/' + id);
}