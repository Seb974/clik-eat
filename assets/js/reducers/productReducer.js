import { GET_PRODUCTS, GET_PRODUCT, INCREASE_PRODUCT_STOCK, DECREASE_PRODUCT_STOCK, UPDATE_PRODUCT_STOCK, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/types';
  
  const initialState = {
    products: [],
    loading: false,
    selected: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        localStorage.setItem('products', JSON.stringify(action.payload));
        return {
          ...state,
          products: action.payload,
          loading: false,
          selected: {} 
        };
      case GET_PRODUCT:
          return {
            ...state,
            selected: action.payload
          };
      case ADD_PRODUCT:
        const enlargedProducts = [action.payload, ...state.products];
        return {
            ...state,
            products: enlargedProducts,
        };
      case DELETE_PRODUCT:
          const reducedProducts = state.products.filter(product => product.id !== action.payload.id);
          return {
              ...state,
              products: reducedProducts,
          };
      case UPDATE_PRODUCT:
          const previousProducts = state.products.filter(product => product.id !== action.payload.id);
          localStorage.setItem('products', JSON.stringify([...previousProducts, action.payload]));
          return {
              ...state,
              products: [...previousProducts, action.payload],
          }
      case UPDATE_PRODUCT_STOCK:
          let pdtIndex = state.products.findIndex( element => {
              return element.id == action.payload.variant.product.id;
          }); 
          let newVars = state.products[pdtIndex].variants.map( element => {
              return element.id !== action.payload.variant.id ? element : action.payload.variant;
          });
          let newPdts = state.products.map( (element, index) => {
              return index === pdtIndex ? {...element, variants: newVars} : element;
          });
          let newSelection = Object.keys(state.selected).length === 0 ? {} : 
              state.selected.id !== pdtIndex ? state.selected : {...state.selected, variants: newVars};
          
          localStorage.setItem('products', JSON.stringify(newPdts));
          return {
              ...state,
              products: newPdts,
              selected: newSelection
          }
      case DECREASE_PRODUCT_STOCK:
      case INCREASE_PRODUCT_STOCK:
          let productIndex = state.products.findIndex( element => {
              return element.id == action.payload.product.id;
          }); 
          let newVariants = state.products[productIndex].variants.map( element => {
              return element.id !== action.payload.variant.id ? element : 
                  action.type === DECREASE_PRODUCT_STOCK ? 
                      {...element, stock: {...element.stock, quantity: (parseInt(element.stock.quantity) - parseInt(action.payload.quantity) ) } } :
                      {...element, stock: {...element.stock, quantity: (parseInt(element.stock.quantity) + parseInt(action.payload.quantity) ) } } ;
          });
          let newProducts = state.products.map( (element, index) => {
              return index === productIndex ? {...element, variants: newVariants} : element;
          });
          let newSelected = Object.keys(state.selected).length === 0 ? {} : 
              state.selected.id !== productIndex ? state.selected : {...state.selected, variants: newVariants};
          
          localStorage.setItem('products', JSON.stringify(newProducts));
          return {
              ...state,
              products: newProducts,
              selected: newSelected
          }
      default:
        return state;
    }
  }