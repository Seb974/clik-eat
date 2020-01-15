import userExtractor from '../helpers/userExtractor';
import { getTotalTTC, getTotalTax, getTotalHT } from '../helpers/taxCalculator';
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    DELETE_CART,
    ITEMS_LOADING
  } from '../actions/types';
  
  const initialState = {
    items: [],
    totalToPayTTC: 0,
    totalToPayHT: 0,
    totalTax: 0,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          totalToPayTTC: getTotalTTC(action.payload),
          totalTax: getTotalTax(action.payload),
          totalToPayHT: getTotalHT(action.payload),
          loading: false
        };
      case DELETE_ITEM:
        const reducedCart = state.items.filter(item => item !== action.payload);
        localStorage.setItem('cart', JSON.stringify(reducedCart));
        return {
          ...state,
          items: reducedCart,
          totalToPayTTC: getTotalTTC(reducedCart),
          totalTax: getTotalTax(reducedCart),
          totalToPayHT: getTotalHT(reducedCart)
        };
      case ADD_ITEM:
        let itemIndex = state.items.findIndex( element => {
            return element.product.name == action.payload.product.name && element.parent.name == action.payload.parent.name;
        });
        let newItems = itemIndex === -1 ? [action.payload, ...state.items] : 
            state.items.map( (element, index) => {
                return index !== itemIndex ? element : {...element, quantity: ( parseInt(element.quantity) + parseInt(action.payload.quantity) ) }
            });
        localStorage.setItem('cart', JSON.stringify(newItems));
        return {
            ...state,
            items: newItems,
            totalToPayTTC: getTotalTTC(newItems),
            totalTax: getTotalTax(newItems),
            totalToPayHT: getTotalHT(newItems)
        };

      // case UPDATE_ITEM:
      //     localStorage.setItem('cart', JSON.stringify(state.items));
      //     return {
      //       ...state,
      //       totalToPayTTC: getTotalTTC(state.items),
      //       totalTax: getTotalTax(state.items),
      //       totalToPayHT: getTotalHT(state.items)
      //     };
      case DELETE_CART:
          localStorage.removeItem('cart');
          return {
            items: [],
            totalToPayTTC: 0,
            totalToPayHT: 0,
            totalTax: 0,
            loading: false
          };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }