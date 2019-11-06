(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/actions/authActions.js":
/*!******************************************!*\
  !*** ./assets/js/actions/authActions.js ***!
  \******************************************/
/*! exports provided: loadUser, register, login, logout, tokenConfig, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");




 // Check token & load user

var loadUser = function loadUser() {
  return function (dispatch, getState) {
    // User loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["USER_LOADING"]
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/current', tokenConfig(getState)).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["USER_LOADED"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_3__["returnErrors"])(err.response.data, err.response.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["AUTH_ERROR"]
      });
    });
  };
}; // Register User

var register = function register(_ref) {
  var name = _ref.name,
      email = _ref.email,
      password = _ref.password;
  return function (dispatch) {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = JSON.stringify({
      name: name,
      email: email,
      password: password
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users', body, config).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["REGISTER_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_3__["returnErrors"])(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["REGISTER_FAIL"]
      });
    });
  };
};
var login = function login(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;
  return function (dispatch) {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = JSON.stringify({
      username: email,
      password: password
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login_check', body, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["LOGIN_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_3__["returnErrors"])(err.response.data, err.response.status, 'LOGIN_FAIL'));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["LOGIN_FAIL"]
      });
    });
  };
};
var logout = function logout() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_SUCCESS"]
  };
};
var tokenConfig = function tokenConfig(getState) {
  var token = getState().auth.token;
  var config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
};
var updateUser = function updateUser(userDetails) {
  return function (dispatch, getState) {
    var phone_number = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'phone_number';
    });
    var delivery_line_1 = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'delivery_line_1';
    });
    var delivery_line_2 = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'delivery_line_2';
    });
    var delivery_city = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'delivery_city';
    });
    var billing_line_1 = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'billing_line_1';
    });
    var billing_line_2 = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'billing_line_2';
    });
    var billing_city = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'billing_city';
    });
    var delivery_gps = userDetails.user.metadata.find(function (metadata) {
      return metadata.type === 'delivery_gps';
    });
    var phone_number_id = typeof phone_number !== 'undefined' ? phone_number.id : -1;
    var delivery_line_1_id = typeof delivery_line_1 !== 'undefined' ? delivery_line_1.id : -1;
    var delivery_line_2_id = typeof delivery_line_2 !== 'undefined' ? delivery_line_2.id : -1;
    var delivery_city_id = typeof delivery_city !== 'undefined' ? delivery_city.id : -1;
    var billing_line_1_id = typeof billing_line_1 !== 'undefined' ? billing_line_1.id : -1;
    var billing_line_2_id = typeof billing_line_2 !== 'undefined' ? billing_line_2.id : -1;
    var billing_city_id = typeof billing_city !== 'undefined' ? billing_city.id : -1;
    var delivery_gps_id = typeof delivery_gps !== 'undefined' ? delivery_gps.id : -1;

    if ((typeof phone_number === 'undefined' || phone_number.field !== userDetails.phone) && userDetails.phone !== '') {
      if (phone_number_id === -1) axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
        type: 'phone_number',
        field: userDetails.phone,
        user: '/api/users/' + userDetails.user.id
      }), tokenConfig(getState));else axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + phone_number_id, JSON.stringify({
        field: userDetails.phone
      }), tokenConfig(getState));
    }

    if ((typeof delivery_line_1 === 'undefined' || delivery_line_1.field !== userDetails.d_address) && userDetails.d_address !== '') {
      if (delivery_line_1_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'delivery_line_1',
          field: userDetails.d_address,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + delivery_line_1_id, JSON.stringify({
          field: userDetails.d_address
        }), tokenConfig(getState));
      }
    }

    if ((typeof delivery_line_2 === 'undefined' || delivery_line_2.field !== userDetails.d_address2) && userDetails.d_address2 !== '') {
      if (delivery_line_2_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'delivery_line_2',
          field: userDetails.d_address2,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + delivery_line_2_id, JSON.stringify({
          field: userDetails.d_address2
        }), tokenConfig(getState));
      }
    }

    if ((typeof delivery_city === 'undefined' || delivery_city.field !== userDetails.d_zipCode) && userDetails.d_zipCode !== '') {
      if (delivery_city_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'delivery_city',
          field: userDetails.d_zipCode,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + delivery_city_id, JSON.stringify({
          field: userDetails.d_zipCode
        }), tokenConfig(getState));
      }
    }

    if ((typeof delivery_gps === 'undefined' || delivery_gps.field !== userDetails.d_gps) && userDetails.d_gps !== '') {
      if (delivery_gps_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'delivery_gps',
          field: userDetails.d_gps,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + delivery_gps_id, JSON.stringify({
          field: userDetails.d_gps
        }), tokenConfig(getState));
      }
    }

    if ((typeof billing_line_1 === 'undefined' || billing_line_1.field !== userDetails.b_address) && userDetails.b_address !== '') {
      if (billing_line_1_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'billing_line_1',
          field: userDetails.b_address,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + billing_line_1_id, JSON.stringify({
          field: userDetails.b_address
        }), tokenConfig(getState));
      }
    }

    if ((typeof billing_line_2 === 'undefined' || billing_line_2.field !== userDetails.b_address2) && userDetails.b_address2 !== '') {
      if (billing_line_2_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'billing_line_2',
          field: userDetails.b_address2,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + billing_line_2_id, JSON.stringify({
          field: userDetails.b_address2
        }), tokenConfig(getState));
      }
    }

    if ((typeof billing_city === 'undefined' || billing_city.field !== userDetails.b_zipCode) && userDetails.b_zipCode !== '') {
      if (billing_city_id === -1) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/metadata', JSON.stringify({
          type: 'billing_city',
          field: userDetails.b_zipCode,
          user: '/api/users/' + userDetails.user.id
        }), tokenConfig(getState));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/metadata/' + billing_city_id, JSON.stringify({
          field: userDetails.b_zipCode
        }), tokenConfig(getState));
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/users/' + userDetails.user.id, JSON.stringify({
      username: userDetails.username,
      email: userDetails.email
    }), tokenConfig(getState)).then(function (res) {
      var refreshBodyRequest = JSON.stringify({
        id: res.data.id
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/updated', refreshBodyRequest, tokenConfig(getState)).then(function (response) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_4__["USER_UPDATED"],
          payload: response.data
        });
      });
    });
  };
};

/***/ }),

/***/ "./assets/js/actions/errorActions.js":
/*!*******************************************!*\
  !*** ./assets/js/actions/errorActions.js ***!
  \*******************************************/
/*! exports provided: returnErrors, clearErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnErrors", function() { return returnErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrors", function() { return clearErrors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");
 // RETURN ERRORS

var returnErrors = function returnErrors(msg, status) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
    payload: {
      msg: msg,
      status: status,
      id: id
    }
  };
}; // CLEAR ERRORS

var clearErrors = function clearErrors() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
  };
};

/***/ }),

/***/ "./assets/js/actions/itemActions.js":
/*!******************************************!*\
  !*** ./assets/js/actions/itemActions.js ***!
  \******************************************/
/*! exports provided: getItems, addItem, deleteItem, updateItem, setItemsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItemsLoading", function() { return setItemsLoading; });
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var _helpers_userExtractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/userExtractor */ "./assets/js/helpers/userExtractor.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./assets/js/store.js");







var getItems = function getItems() {
  return function (dispatch) {
    var storedCart = localStorage.getItem('cart') || {};

    if (Object.keys(storedCart).length > 0) {
      storedCart = JSON.parse(storedCart);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_ITEMS"],
        payload: storedCart
      });
    } else {
      var storedToken = localStorage.getItem('token') || "";
      var currentUserCart = storedToken !== "" ? Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_5__["default"])(storedToken).cart || [] : [];
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_ITEMS"],
        payload: currentUserCart
      });
    }
  };
};
var addItem = function addItem(item) {
  return function (dispatch, getState) {
    //REMPLACE POUR TEMPS REEL MERCURE PAR :
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = JSON.stringify({
      action: _types__WEBPACK_IMPORTED_MODULE_2__["DECREASE_PRODUCT_STOCK"],
      id: item.variant.id,
      quantity: item.quantity
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/app/ping', body, config)["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_4__["returnErrors"])(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL'));
    }); // FIN SUPPLEMENT MERCURE

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["ADD_ITEM"],
      payload: {
        product: item.variant,
        quantity: item.quantity,
        isPaid: false,
        parent: item.product
      }
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["DECREASE_PRODUCT_STOCK"],
      payload: {
        product: item.product,
        variant: item.variant,
        quantity: item.quantity
      }
    });
  };
};
var deleteItem = function deleteItem(item) {
  return function (dispatch, getState) {
    //REMPLACE POUR TEMPS REEL MERCURE PAR :
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = JSON.stringify({
      action: _types__WEBPACK_IMPORTED_MODULE_2__["INCREASE_PRODUCT_STOCK"],
      id: item.product.id,
      quantity: item.quantity
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/app/ping', body, config)["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_4__["returnErrors"])(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL'));
    }); // FIN SUPPLEMENT MERCURE

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["DELETE_ITEM"],
      payload: item
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["INCREASE_PRODUCT_STOCK"],
      payload: {
        product: item.parent,
        variant: item.product,
        quantity: item.quantity
      }
    });
  };
};
var updateItem = function updateItem(item, qty) {
  return function (dispatch, getState) {
    var action = qty > 0 ? _types__WEBPACK_IMPORTED_MODULE_2__["DECREASE_PRODUCT_STOCK"] : _types__WEBPACK_IMPORTED_MODULE_2__["INCREASE_PRODUCT_STOCK"]; //REMPLACE POUR TEMPS REEL MERCURE PAR :

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    var body = JSON.stringify({
      action: action,
      id: item.product.id,
      quantity: Math.abs(qty)
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/app/ping', body, config)["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_4__["returnErrors"])(err.response.data, err.response.status, 'UPDATE_STOCK_FAIL'));
    }); // FIN SUPPLEMENT MERCURE

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_ITEM"],
      payload: item
    });
  };
};
var setItemsLoading = function setItemsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ITEMS_LOADING"]
  };
}; // axios
//   .delete(`/api/items/${id}`, tokenConfig(getState))
//   .then(res =>
//     dispatch({
//       type: DELETE_ITEM,
//       payload: id
//     })
//   )
//   .catch(err =>
//     dispatch(returnErrors(err.response.data, err.response.status))
//   );

/***/ }),

/***/ "./assets/js/actions/productActions.js":
/*!*********************************************!*\
  !*** ./assets/js/actions/productActions.js ***!
  \*********************************************/
/*! exports provided: getProducts, getProduct, setProductsLoading, updateProductStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProductsLoading", function() { return setProductsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductStock", function() { return updateProductStock; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var _reducers_productReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/productReducer */ "./assets/js/reducers/productReducer.js");





var getProducts = function getProducts() {
  return function (dispatch) {
    localStorage.removeItem('products');
    var storedProducts = localStorage.getItem('products') || "";

    if (storedProducts !== "") {
      storedProducts = JSON.parse(storedProducts);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS"],
        payload: storedProducts
      });
    } else {
      dispatch(setProductsLoading());
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/products').then(function (res) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS"],
          payload: res.data['hydra:member']
        });
      })["catch"](function (err) {
        return dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_3__["returnErrors"])(err.response.data, err.response.status));
      });
    }
  };
};
var getProduct = function getProduct(id) {
  return function (dispatch) {
    var storedProducts = localStorage.getItem('products') || "";

    if (storedProducts !== "") {
      storedProducts = JSON.parse(storedProducts);

      for (var i = 0; i < storedProducts.length; i++) {
        if (storedProducts[i].id == id) {
          dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT"],
            payload: storedProducts[i]
          });
          break;
        }
      }
    } else {
      dispatch(setProductsLoading());
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products/' + id).then(function (res) {
        console.log(res.data);
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT"],
          payload: res.data
        });
      })["catch"](function (err) {
        return dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_3__["returnErrors"])(err.response.data, err.response.status));
      });
    }
  };
};
var setProductsLoading = function setProductsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS_LOADING"]
  };
};
var updateProductStock = function updateProductStock(variant) {
  return function (dispatch) {
    console.log(variant);
    dispatch({
      type: UPDATE_PRODUCT_STOCK,
      payload: {
        variant: variant
      }
    });
  };
};

/***/ }),

/***/ "./assets/js/actions/types.js":
/*!************************************!*\
  !*** ./assets/js/actions/types.js ***!
  \************************************/
/*! exports provided: USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, GET_ERRORS, CLEAR_ERRORS, GET_PRODUCTS, GET_PRODUCT, INCREASE_PRODUCT_STOCK, DECREASE_PRODUCT_STOCK, UPDATE_PRODUCT_STOCK, PRODUCTS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING, USER_UPDATED, METADATA_UPDATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADING", function() { return USER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREASE_PRODUCT_STOCK", function() { return INCREASE_PRODUCT_STOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREASE_PRODUCT_STOCK", function() { return DECREASE_PRODUCT_STOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PRODUCT_STOCK", function() { return UPDATE_PRODUCT_STOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_LOADING", function() { return PRODUCTS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM", function() { return UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_LOADING", function() { return ITEMS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATED", function() { return USER_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_UPDATED", function() { return METADATA_UPDATED; });
var USER_LOADING = "USER_LOADING";
var USER_LOADED = "USER_LOADED";
var AUTH_ERROR = "AUTH_ERROR";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_FAIL = "LOGIN_FAIL";
var LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
var REGISTER_SUCCESS = "REGISTER_SUCCESS";
var REGISTER_FAIL = "REGISTER_FAIL";
var GET_ERRORS = 'GET_ERRORS';
var CLEAR_ERRORS = 'CLEAR_ERRORS';
var GET_PRODUCTS = 'GET_PRODUCTS';
var GET_PRODUCT = 'GET_PRODUCT';
var INCREASE_PRODUCT_STOCK = 'INCREASE_PRODUCT_STOCK';
var DECREASE_PRODUCT_STOCK = 'DECREASE_PRODUCT_STOCK';
var UPDATE_PRODUCT_STOCK = 'UPDATE_PRODUCT_STOCK';
var PRODUCTS_LOADING = 'PRODUCTS_LOADING';
var GET_ITEMS = 'GET_ITEMS';
var ADD_ITEM = 'ADD_ITEM';
var DELETE_ITEM = 'DELETE_ITEM';
var UPDATE_ITEM = 'UPDATE_ITEM';
var ITEMS_LOADING = 'ITEMS_LOADING';
var USER_UPDATED = 'USER_UPDATED';
var METADATA_UPDATED = 'METADATA_UPDATED';

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_scrollToTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/scrollToTop */ "./assets/js/helpers/scrollToTop.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./actions/types */ "./assets/js/actions/types.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navbar */ "./assets/js/components/navbar.js");
/* harmony import */ var _components_productList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/productList */ "./assets/js/components/productList.js");
/* harmony import */ var _components_productDetails__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/productDetails */ "./assets/js/components/productDetails.js");
/* harmony import */ var _components_cartList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cartList */ "./assets/js/components/cartList.js");
/* harmony import */ var _components_checkout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/checkout */ "./assets/js/components/checkout.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login */ "./assets/js/components/login.js");
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/profile */ "./assets/js/components/profile.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store */ "./assets/js/store.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_28__);














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cart: _this.props.cart || []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var url = new URL('http://localhost:3000/hub');
      url.searchParams.append('topic', 'pong/ping');
      var eventSource = new EventSource(url);

      eventSource.onmessage = function (event) {
        event.preventDefault();
        _store__WEBPACK_IMPORTED_MODULE_26__["default"].dispatch({
          type: _actions_types__WEBPACK_IMPORTED_MODULE_17__["UPDATE_PRODUCT_STOCK"],
          payload: {
            variant: JSON.parse(event.data)
          }
        });
      };
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_18__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_26__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["BrowserRouter"], {
        onUpdate: function onUpdate() {
          return window.scrollTo(0, 0);
        }
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        id: "react-header"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_19__["default"], null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        id: "page-container"
      }, alert.message && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "alert ".concat(alert.type)
      }, alert.message), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_helpers_scrollToTop__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/",
        exact: true,
        component: _components_productList__WEBPACK_IMPORTED_MODULE_20__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/show/:id",
        component: _components_productDetails__WEBPACK_IMPORTED_MODULE_21__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/login",
        component: _components_login__WEBPACK_IMPORTED_MODULE_24__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/cart",
        component: _components_cartList__WEBPACK_IMPORTED_MODULE_22__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/checkout",
        component: _components_checkout__WEBPACK_IMPORTED_MODULE_23__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/account",
        component: _components_profile__WEBPACK_IMPORTED_MODULE_25__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "*",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Redirect"], {
            to: "/"
          });
        }
      })))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

_defineProperty(App, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_28___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_28___default.a.object,
  updateProductStock: prop_types__WEBPACK_IMPORTED_MODULE_28___default.a.func
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps)(App));
react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.render(react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./assets/js/components/cart.js":
/*!**************************************!*\
  !*** ./assets/js/components/cart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_itemActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/itemActions */ "./assets/js/actions/itemActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Cart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onDeleteClick", function (item) {
      _this.props.deleteItem(item);
    });

    _defineProperty(_assertThisInitialized(_this), "displayItems", function () {
      var CartItem = function CartItem(props) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
          key: "cartitem-item-" + props.details.product.id,
          className: "d-flex flex-row ml-auto"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          href: "#",
          className: "d-flex flex-row ml-auto"
        }, "x", props.details.quantity, " ", props.details.parent.name, " ", props.details.product.name, " | ", props.details.product.price * props.details.quantity, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
          className: "btn btn-link",
          onClick: function onClick() {
            return _this.onDeleteClick(props.details);
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fa fa-trash"
        })));
      };

      return _this.props.item.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(CartItem, {
          key: "cartitem-" + item.product.id,
          details: item
        });
      });
    });

    return _this;
  }

  _createClass(Cart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getItems();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h5", {
        className: "dropdown-header mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "fas fa-shopping-cart"
      }), "Panier"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dropdown-block"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
        className: "dropdown-list"
      }, this.displayItems()), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "d-flex border-bottom mb-2 px-3 py-2"
      }, "Total:", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "ml-auto font-weight-bold text-success"
      }, this.props.item.totalToPayTTC, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "d-flex px-3"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"], {
        to: "/cart",
        className: "btn btn-outline btn-sm"
      }, "Editer quantit\xE9"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"], {
        to: "/checkout",
        className: "btn btn-success btn-sm ml-auto"
      }, "Payer"))));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

_defineProperty(Cart, "propTypes", {
  getItems: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.func.isRequired,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.func.isRequired,
  item: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, {
  getItems: _actions_itemActions__WEBPACK_IMPORTED_MODULE_16__["getItems"],
  deleteItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_16__["deleteItem"]
})(Cart));

/***/ }),

/***/ "./assets/js/components/cartList.js":
/*!******************************************!*\
  !*** ./assets/js/components/cartList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/itemActions */ "./assets/js/actions/itemActions.js");
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions/productActions */ "./assets/js/actions/productActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CartList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CartList, _React$Component);

  function CartList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CartList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CartList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      quantities: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteClick", function (item) {
      _this.props.deleteItem(item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdateQty", function (itemUpdated, event) {
      var qty = parseInt(event.currentTarget.value) - itemUpdated.quantity;

      if (qty !== 0) {
        itemUpdated.quantity += qty;

        _this.props.updateItem(itemUpdated, qty);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "displayItems", function () {
      var CartItem = function CartItem(props) {
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("ul", {
          className: "d-flex flex-row-reverse"
        }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("li", {
          key: "cartitem-item-" + props.details.product.id,
          className: "cartitem-item"
        }, "    ", props.variantInState.stock.quantity > 5 ? "" : props.variantInState.stock.quantity === 0 ? react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("p", {
          className: "badge badge-cart-void"
        }, "Stock épuisé !") : react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("p", {
          className: "badge badge-cart"
        }, "Plus que " + props.variantInState.stock.quantity + " en stock !"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", null, props.details.parent.name, " ", props.details.product.name + "  ", " "), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("input", {
          type: "number",
          value: props.details.quantity,
          onChange: function onChange(event) {
            return _this.handleUpdateQty(props.details, event);
          },
          min: "1",
          max: props.details.product.stock.quantity
        }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
          className: "btn btn-link",
          onClick: function onClick() {
            return _this.onDeleteClick(props.details);
          }
        }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("i", {
          className: "fa fa-trash"
        })))));
      };

      return _this.props.item.items.map(function (item) {
        var productState = _this.props.product.products.find(function (product) {
          return product.id === item.parent.id;
        });

        var variantState = productState.variants.find(function (variant) {
          return variant.id === item.product.id;
        });
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
          key: "cartitem-span-" + item.product.id
        }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(CartItem, {
          key: "cartitem-" + item.product.id,
          details: item,
          variantInState: variantState
        }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("hr", null));
      });
    });

    return _this;
  }

  _createClass(CartList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getItems();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("section", {
        className: "p-t-30"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "post"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "post-header"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", {
        className: "post-title"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("i", {
        className: "fas fa-shopping-cart"
      }), " Panier")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "post-thumbnail"
      }, this.displayItems()), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"], {
        to: "/checkout",
        className: "btn btn-success btn-sm ml-auto"
      }, "Payer")))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex border-bottom"
      }, "Total HT:", react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "ml-auto"
      }, Math.round(this.props.item.totalTax * 100) / 100, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex border-bottom"
      }, "TVA:", react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "ml-auto"
      }, Math.round(this.props.item.totalToPayHT * 100) / 100, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "d-flex border-bottom"
      }, "Total TTC:", react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "ml-auto font-weight-bold text-success"
      }, Math.round(this.props.item.totalToPayTTC * 100) / 100, "\u20AC")))))));
    }
  }]);

  return CartList;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

_defineProperty(CartList, "propTypes", {
  getProduct: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  getItems: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  addItem: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  updateItem: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  item: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: state.product,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps, {
  getItems: _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__["getItems"],
  addItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__["addItem"],
  deleteItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__["deleteItem"],
  updateItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__["updateItem"],
  getProduct: _actions_productActions__WEBPACK_IMPORTED_MODULE_19__["getProduct"]
})(CartList));

/***/ }),

/***/ "./assets/js/components/checkout.js":
/*!******************************************!*\
  !*** ./assets/js/components/checkout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cart */ "./assets/js/components/cart.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _helpers_security__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../helpers/security */ "./assets/js/helpers/security.js");































function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Checkout =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      user: _this.props.user || {},
      username: _this.props.user === null ? '' : _this.props.user.username || '',
      email: _this.props.user === null ? '' : _this.props.user.email || '',
      phone: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'phone_number';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'phone_number';
      }).field || '',
      d_address: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_1';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_1';
      }).field || '',
      d_address2: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_2';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_2';
      }).field || '',
      d_zipCode: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_city';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_city';
      }).field || '',
      b_address: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_1';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_1';
      }).field || '',
      b_address2: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_2';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_2';
      }).field || '',
      b_zipCode: _this.props.user === null ? '' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_city';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_city';
      }).field || '',
      d_gps: _this.props.user === null ? '-21.329519,55.471617' : typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_gps';
      }) === 'undefined' ? '-21.329519,55.471617' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_gps';
      }).field || '-21.329519,55.471617',
      identicalBillingAddress: true,
      d_city: '',
      b_city: '',
      cities: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.initMap();

      if (_this.state.b_address === _this.state.d_address && _this.state.b_address2 === _this.state.d_address2 && _this.state.b_zipCode === _this.state.d_zipCode) _this.setState({
        identicalBillingAddress: true
      });else _this.setState({
        identicalBillingAddress: false
      });
      axios__WEBPACK_IMPORTED_MODULE_31___default.a.get('/api/cities', Object(_helpers_security__WEBPACK_IMPORTED_MODULE_37__["tokenConfig"])()).then(function (res) {
        _this.setState({
          cities: res.data['hydra:member']
        });

        if (_this.props.user !== null) {
          if (_this.props.user.metadata.length > 0) {
            var user_d_city = _this.props.user.metadata.find(function (meta) {
              return meta.type === 'delivery_city';
            });

            var user_b_city = _this.props.user.metadata.find(function (meta) {
              return meta.type === 'billing_city';
            });

            var d_city = typeof user_d_city !== 'undefined' ? res.data['hydra:member'].find(function (city) {
              return city.zipCode === parseInt(user_d_city.field);
            }) : '';
            var b_city = user_b_city === user_d_city ? d_city : typeof user_b_city !== 'undefined' ? res.data['hydra:member'].find(function (city) {
              return city.zipCode === parseInt(user_b_city.field);
            }) : '';

            _this.setState({
              d_city: d_city,
              b_city: b_city
            });
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initMap", function () {
      var markers = [];

      var _this$state$d_gps$spl = _this.state.d_gps.split(','),
          _this$state$d_gps$spl2 = _slicedToArray(_this$state$d_gps$spl, 2),
          lat = _this$state$d_gps$spl2[0],
          _long = _this$state$d_gps$spl2[1];

      var placesAutocomplete = places({
        appId: Object({"NODE_ENV":"development"}).ALGOLIA_APPID,
        apiKey: Object({"NODE_ENV":"development"}).ALGOLIA_APIKEY,
        container: document.querySelector('#input-map')
      }).configure({
        countries: ['fr'],
        useDeviceLocation: false
      });
      var map = L.map('map-example-container', {
        scrollWheelZoom: true,
        zoomControl: true
      });
      var osmLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 19,
        attribution: 'Map © <a href="https://openstreetmap.org">OpenStreetMap</a>'
      });
      var userAddress = new L.LatLng(lat, _long);
      map.setView(userAddress, 1);
      map.addLayer(osmLayer);
      var marker = L.marker(userAddress, {
        opacity: .4
      });
      marker.addTo(map);
      markers.push(marker);

      if (_this.state.d_gps !== '-21.329519,55.471617') {
        findBestZoom();
      }

      placesAutocomplete.on('suggestions', handleOnSuggestions.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('cursorchanged', handleOnCursorchanged.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('change', handleOnChange.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('clear', handleOnClear.bind(_assertThisInitialized(_this)));

      function handleOnSuggestions(e) {
        markers.forEach(removeMarker);
        markers = [];

        if (e.suggestions.length === 0) {
          map.setView(new L.LatLng(0, 0), 1);
          return;
        }

        e.suggestions.forEach(addMarker);
        findBestZoom();
      }

      function handleOnChange(e) {
        markers.forEach(function (marker, markerIndex) {
          if (markerIndex === e.suggestionIndex) {
            markers = [marker];
            marker.setOpacity(1);
            findBestZoom();
          } else {
            removeMarker(marker);
          }
        });
        this.setState({
          d_address: e.suggestion.value,
          d_gps: e.suggestion.latlng.lat + ',' + e.suggestion.latlng.lng
        });
      }

      function handleOnClear() {
        map.setView(new L.LatLng(0, 0), 1);
        markers.forEach(removeMarker);
      }

      function handleOnCursorchanged(e) {
        markers.forEach(function (marker, markerIndex) {
          if (markerIndex === e.suggestionIndex) {
            marker.setOpacity(1);
            marker.setZIndexOffset(1000);
          } else {
            marker.setZIndexOffset(0);
            marker.setOpacity(0.5);
          }
        });
      }

      function addMarker(suggestion) {
        var marker = L.marker(suggestion.latlng, {
          opacity: .4
        });
        marker.addTo(map);
        markers.push(marker);
      }

      function removeMarker(marker) {
        map.removeLayer(marker);
      }

      function findBestZoom() {
        var featureGroup = L.featureGroup(markers);
        map.fitBounds(featureGroup.getBounds().pad(0.5), {
          animate: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onZipCodeChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      var errorMsg = "Code postal invalide.";
      var notDeliverableMsg = "Nous ne livrons malheureusement pas encore votre ville...";
      var cityId = e.target.id === 'b_zip' ? 'b_city' : 'd_city';
      var cityInput = document.getElementById(cityId);

      if (e.target.value.length > 0 && e.target.value.length < 5 || e.target.value.length <= 0 || e.target.value.length > 5) {
        cityInput.textContent = e.target.value.length !== 0 ? errorMsg : '';
        return;
      }

      var selectedCity = _this.state.cities.find(function (city) {
        return city.zipCode === parseInt(e.target.value);
      });

      cityInput.textContent = typeof selectedCity === 'undefined' ? errorMsg : cityId === 'd_city' && selectedCity.isDeliverable === false ? notDeliverableMsg : selectedCity.name;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBillingAddress", function (e) {
      _this.setState({
        identicalBillingAddress: !_this.state.identicalBillingAddress
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();

      var userDetails = _objectSpread({}, _this.state, {
        b_address: _this.state.identicalBillingAddress === false ? _this.state.b_address : _this.state.d_address,
        b_address2: _this.state.identicalBillingAddress === false ? _this.state.b_address2 : _this.state.d_address2,
        b_zipCode: _this.state.identicalBillingAddress === false ? _this.state.b_zipCode : _this.state.d_zipCode,
        b_city: _this.state.identicalBillingAddress === false ? _this.state.b_city : _this.state.d_city,
        cities: []
      }); // this.props.updateUser(userDetails);

    });

    _defineProperty(_assertThisInitialized(_this), "displayItems", function () {
      var CartItem = function CartItem(props) {
        return react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("li", {
          className: "list-group-item d-flex justify-content-between lh-condensed"
        }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("h6", {
          className: "my-0"
        }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("strong", null, props.details.parent.name + " ", props.details.product.name), "    x" + props.details.quantity), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("small", {
          className: "text-muted"
        }, props.details.product.category ? props.details.product.category.name : "")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
          className: "text-muted"
        }, props.details.product.price, "\u20AC"));
      };

      return _this.props.item.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(CartItem, {
          key: "cartitem-" + item.product.id,
          details: item
        });
      });
    });

    return _this;
  }

  _createClass(Checkout, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "container mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 order-md-2 mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("h4", {
        className: "d-flex justify-content-between align-items-center mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        className: "text-muted"
      }, "Votre panier"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        className: "badge badge-secondary badge-pill"
      }, item.items.reduce(function (cumul, current) {
        return current.quantity == null ? cumul : cumul + current.quantity;
      }, 0) + " articles")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("ul", {
        className: "list-group mb-3"
      }, this.displayItems(), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("li", {
        className: "list-group-item d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", null, "Total (HT)"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("strong", null, Math.round(item.totalTax * 100) / 100, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("li", {
        className: "list-group-item d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", null, "TVA"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("strong", null, Math.round(item.totalToPayHT * 100) / 100, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("li", {
        className: "list-group-item d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", null, "Total (TTC)"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("strong", null, Math.round(item.totalToPayTTC * 100) / 100, "\u20AC")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("a", {
        href: "{ payment_url }"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("button", {
        className: "btn btn-primary btn-lg btn-block",
        type: "submit"
      }, "PAYER")))), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-8 order-md-1",
        id: "adresses-panel"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("form", {
        className: "needs-validation",
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "firstName"
      }, "Nom"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "firstName",
        name: "username",
        value: this.state.username,
        onChange: this.onChange,
        required: true
      }), "     ", react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Un pr\xE9nom est n\xE9cessaire pour la livraison.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.onChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de renseigner un email afin d'\xEAtre inform\xE9 de \xE9tapes de votre commande.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "phone"
      }, "Tel"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.onChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de renseigner un tel afin d'\xEAtre inform\xE9 de \xE9tapes de votre commande.")))), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("hr", {
        className: "mb-4"
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("h4", {
        className: "mb-3"
      }, "Adresse de livraison")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        id: "map-example-container"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "input-map"
      }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "input-map",
        name: "d_address",
        value: this.state.d_address,
        onChange: this.onChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de saisir une adresse de livraison.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "compl\xE9ment"
      }, "Complement d'adresse"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "textarea",
        className: "form-control",
        id: "compl\xE9ment",
        name: "d_address2",
        value: this.state.d_address2,
        placeholder: "Appt, Immeuble, Digicode, etc",
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "zip"
      }, "CP"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "d_zip",
        name: "d_zipCode",
        value: this.state.d_zipCode,
        onChange: this.onZipCodeChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Code Postal n\xE9cessaire.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        id: "d_city"
      }, this.state.d_city.name)), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-2 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "compl\xE9ment"
      }, "GPS"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "hidden",
        className: "form-control",
        id: "gps",
        name: "d_gps",
        value: this.state.d_gps,
        placeholder: "",
        onChange: this.onChange
      }))))), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("hr", {
        className: "mb-4"
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("h4", {
        className: "mb-3"
      }, "Adresse de facturation")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        className: "custom-control custom-checkbox custom-checkbox-primary"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        id: "billingAddress-checkbox",
        type: "checkbox",
        className: "custom-control-input",
        checked: this.state.identicalBillingAddress,
        onChange: this.handleBillingAddress
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        className: "custom-control-indicator"
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        className: "custom-control-description"
      }, "Identique \xE0 adresse de livraison"))), this.state.identicalBillingAddress === true ? react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("p", null) : react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "address"
      }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "address",
        name: "b_address",
        value: this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de saisir une adresse de livraison.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "compl\xE9ment"
      }, "Complement d'adresse"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "textarea",
        className: "form-control",
        id: "compl\xE9ment",
        name: "b_address2",
        value: this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2,
        onChange: this.onChange,
        placeholder: "Appt, Immeuble, etc"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("label", {
        htmlFor: "zip"
      }, "CP"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "b_zip",
        name: "b_zipCode",
        value: this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode,
        onChange: this.onZipCodeChange
      }), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Code Postal n\xE9cessaire.")), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("span", {
        id: "b_city"
      }, this.state.b_city.name)))))))));
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_30__["Component"]);

_defineProperty(Checkout, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_36___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_36___default.a.object
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    item: state.item,
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_34__["connect"])(mapStateToProps)(Checkout));

/***/ }),

/***/ "./assets/js/components/login.js":
/*!***************************************!*\
  !*** ./assets/js/components/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _actions_errorActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: '',
      password: '',
      msg: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogin", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      var user = {
        email: email,
        password: password
      };

      _this.setState({
        email: '',
        password: ''
      });

      _this.props.login(user);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      if (!this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "col-12 col-sm-8 col-md-4 mx-auto"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "card m-b-0"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "card-header"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", {
          className: "card-title"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
          className: "fa fa-sign-in"
        }), "Se connecter")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "card-block"
        }, this.state.msg ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
          color: "danger"
        }, this.state.msg) : null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", {
          onSubmit: this.handleLogin
        }, !this.props.isAuthenticated ? "" : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "mb-3"
        }, "You are logged in as", " " + this.props.user.email, ",", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
          href: "{{ path('logout') }}"
        }, " Logout")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "form-group input-icon-left m-b-10"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
          className: "fa fa-user"
        }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", {
          className: "sr-only"
        }, "Email"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
          type: "email",
          name: "email",
          id: "inputEmail",
          className: "form-control",
          placeholder: "Email",
          required: true,
          autoFocus: true,
          value: this.state.email,
          onChange: this.onChange
        })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "form-group input-icon-left m-b-15"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
          className: "fa fa-lock"
        }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", {
          className: "sr-only"
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
          type: "password",
          name: "password",
          id: "inputPassword",
          className: "form-control",
          placeholder: "Mot de passe",
          required: true,
          value: this.state.password,
          onChange: this.onChange
        })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
          className: "btn btn-primary btn-block m-t-10"
        }, "SE CONNECTER", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
          className: "fa fa-sign-in"
        })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "divider"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, "Pas encore client ?")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
          className: "btn btn-secondary btn-block",
          href: "/register",
          role: "button"
        }, "CREER UN COMPTE")))))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Redirect"], {
          to: "/"
        });
      }
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

_defineProperty(Login, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  error: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object.isRequired,
  login: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func.isRequired,
  clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, {
  login: _actions_authActions__WEBPACK_IMPORTED_MODULE_17__["login"],
  clearErrors: _actions_errorActions__WEBPACK_IMPORTED_MODULE_18__["clearErrors"]
})(Login));
{
  /* <div id="fb-root"></div>
     <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v4.0&appId=502084787008815&autoLogAppEvents=1"></script>
  <div className="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
  <div className="divider">
     <span>ou</span>
  </div> */
}

/***/ }),

/***/ "./assets/js/components/navbar.js":
/*!****************************************!*\
  !*** ./assets/js/components/navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart */ "./assets/js/components/cart.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      count: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogout", function (e) {
      e.preventDefault();

      _this.props.logout();
    });

    _defineProperty(_assertThisInitialized(_this), "displayAnonymousView", function () {
      var Anonymous = function Anonymous() {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          to: "/login"
        }, "Se connecter"));
      };

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Anonymous, null);
    });

    _defineProperty(_assertThisInitialized(_this), "displayLoggedView", function (user) {
      var Identified = function Identified(props) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
          className: "dropdown"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          to: "/",
          "data-toggle": "dropdown"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
          src: "",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, user.username, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-chevron-down"
        }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-menu dropdown-menu-right"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          className: "dropdown-item",
          to: "/account"
        }, "  ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-user"
        }), "Mon profil"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), typeof props.user === 'undefined' ? "" : props.user.roles.indexOf('ROLE_SUPPLIER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('stock_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-box-open"
        }), "Stocks"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('get_order') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-cash-register"
        }), "Orders"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        })), typeof props.user === 'undefined' ? "" : props.user.roles.indexOf('ROLE_DELIVERER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('deliverer') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-truck"
        }), "Livraisons"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        })), typeof props.user === 'undefined' ? "" : props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('user_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-users"
        }), "Users"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('city_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-city"
        }), "City"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('product_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-utensils"
        }), "Produits"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('variant_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-sort"
        }), "Variantes"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('category_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-columns"
        }), "Cat\xE9gories"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('tva_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-calculator"
        }), "Taxes"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('allergen_index') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-exclamation-triangle"
        }), "Allerg\xE8nes"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "#",
          onClick: _this.handleLogout
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-sign-out-alt"
        }), "Se d\xE9connecter")));
      };

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Identified, {
        user: user
      });
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          isAuthenticated = _this$props.isAuthenticated,
          item = _this$props.item;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "navbar-backdrop"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "navbar"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        to: "/",
        className: "logo"
      }, " ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        src: "uploads/logos/clikEat.png",
        alt: "Clik Eat Logo",
        height: "50px"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "toright"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("nav", {
        className: "nav"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, isAuthenticated ? this.displayLoggedView(user) : this.displayAnonymousView(), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "fas fa-home"
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "dropdown dropdown-notification"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: "{{path('get_cart') }}",
        "data-toggle": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "fas fa-shopping-cart"
      }), item.items.length <= 0 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "badge badge-cart"
      }, item.items.reduce(function (cumul, current) {
        return current.quantity == null ? cumul : cumul + current.quantity;
      }, 0))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right",
        id: "cart-summary"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_cart__WEBPACK_IMPORTED_MODULE_15__["default"], null))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        "data-toggle": "search"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "fas fa-search"
      })))))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "navbar-search"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Rechercher..."
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "fas fa-times close"
      }))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

_defineProperty(Navbar, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object,
  logout: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    item: state.item,
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps, {
  logout: _actions_authActions__WEBPACK_IMPORTED_MODULE_18__["logout"]
})(Navbar));

/***/ }),

/***/ "./assets/js/components/productDetails.js":
/*!************************************************!*\
  !*** ./assets/js/components/productDetails.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_itemActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions/itemActions */ "./assets/js/actions/itemActions.js");
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../actions/productActions */ "./assets/js/actions/productActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ProductDetails =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductDetails, _React$Component);

  function ProductDetails() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (product, variant) {
      var newItem = {
        product: product,
        variant: variant,
        quantity: 1
      };

      _this.props.addItem(newItem);
    });

    _defineProperty(_assertThisInitialized(_this), "displayAllergens", function (product) {
      var Allergen = function Allergen(props) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, props.details.name + " ");
      };

      if (product.allergens) {
        if (product.allergens.length > 0) {
          return product.allergens.map(function (allergen) {
            return product.allergens.indexOf(allergen) == 0 ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, "Allerg\xE8nes :  ", react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Allergen, {
              details: allergen
            })) : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Allergen, {
              details: allergen
            }));
          });
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, "Ne contient pas de produits allerg\xE8nes.");
    });

    _defineProperty(_assertThisInitialized(_this), "displayVariants", function (product) {
      var Variant = function Variant(props) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("ul", {
          className: "d-flex flex-row-reverse"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("li", {
          key: "variant-item-" + props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("i", {
          className: "fas fa-dolly"
        }), " ", " ", props.details.stock.quantity, " ", " ", props.details.stock.quantity > 5 ? "" : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
          className: "badge badge-cart"
        }, "Plus que " + props.details.stock.quantity + " en stock !"), props.details.stock.quantity <= 0 ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, "En rupture de stock !") : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: function onClick() {
            return _this.handleClick(product, props.details);
          },
          id: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("i", {
          className: "fas fa-shopping-cart"
        }), props.details.name, "  \xE0 ", props.details.price, "\u20AC"))));
      };

      if (product.variants) {
        return product.variants.map(function (variant) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
            key: "variant-span-" + variant.id
          }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Variant, {
            details: variant,
            product: product
          }));
        });
      } else {
        return "";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "displayNutritionals", function (product) {
      var Nutritionals = function Nutritionals(props) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h4", null, "valeurs nutritionnelles moyennes pour 100g"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Energie (KJ) :", props.details.kJ)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Energie (KCal) :", props.details.KCal)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Proteines :", props.details.protein)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Carbohydrates :", props.details.carbohydrates)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Sucre :", props.details.sugar)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Mati\xE8re grasse :", props.details.fat)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "dont acides gras satur\xE9s :", props.details.transAG)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
          className: "widget"
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h5", {
          className: "widget-title"
        }, "Sel :", props.details.salt)));
      };

      if (product.nutritionals) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Nutritionals, {
          details: product.nutritionals
        });
      } else {
        return "";
      }
    });

    return _this;
  }

  _createClass(ProductDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProduct(this.props.match.params.id);
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product.selected;
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("section", {
        className: "p-t-30"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "post"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "post-header"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h2", {
        className: "post-title"
      }, product.name), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "post-meta"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("i", {
        className: "fas fa-utensils"
      }), product.category ? product.category.name : ""), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p", null, this.displayAllergens(product))))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "post-thumbnail"
      }, !product.picture || product.picture === "" ? "" : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "embed-responsive embed-responsive-16by9"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("img", {
        className: "embed-responsive-item",
        src: '../uploads/pictures/' + product.picture.b64,
        alt: product.picture.b64
      }))), this.displayVariants(product))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "sidebar"
      }, this.displayNutritionals(product))))));
    }
  }]);

  return ProductDetails;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);

_defineProperty(ProductDetails, "propTypes", {
  getProduct: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  addItem: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.func.isRequired,
  product: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.bool
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: state.product,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, {
  getItems: _actions_itemActions__WEBPACK_IMPORTED_MODULE_19__["getItems"],
  deleteItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_19__["deleteItem"],
  getProduct: _actions_productActions__WEBPACK_IMPORTED_MODULE_20__["getProduct"],
  addItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_19__["addItem"]
})(ProductDetails));

/***/ }),

/***/ "./assets/js/components/productList.js":
/*!*********************************************!*\
  !*** ./assets/js/components/productList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/productActions */ "./assets/js/actions/productActions.js");
/* harmony import */ var _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/itemActions */ "./assets/js/actions/itemActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (product, variant) {
      var newItem = {
        product: product,
        variant: variant,
        quantity: 1
      };

      _this.props.addItem(newItem);
    });

    _defineProperty(_assertThisInitialized(_this), "displayVariants", function (product) {
      var Variant = function Variant(props) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li", {
          key: "variant-item-" + props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", {
          className: "fas fa-dolly"
        }), " ", " ", props.details.stock.quantity, " ", " ", props.details.stock.quantity <= 0 ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", null, "En rupture de stock !") : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: function onClick() {
            return _this.handleClick(product, props.details);
          },
          id: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", {
          className: "fas fa-shopping-cart"
        }), props.details.name, "  \xE0 ", props.details.price, "\u20AC")));
      };

      return product.variants.map(function (variant) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          key: "variant-span-" + variant.id
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Variant, {
          details: variant,
          product: product
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "displayProducts", function () {
      var Product = function Product(props) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          className: "col-12 col-sm-6 col-md-4 react-product"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          className: "card card-lg"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          className: "card-img"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Link"], {
          to: "/show/" + props.details.id
        }, props.details.picture !== null && props.details.picture !== "" && typeof props.details.picture !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("img", {
          src: 'uploads/pictures/' + props.details.picture.b64,
          className: "card-img-top",
          alt: props.details.picture.b64
        }) : "")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          className: "card-block"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li", {
          key: "product-item-" + props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Link"], {
          to: "/show/" + props.details.id
        }, props.details.name, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", {
          className: "fas fa-truck"
        }), " ", " ", new Date(props.details.supplier.preparationPeriod).getMinutes(), "mn @", props.details.supplier.name))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("ul", null, _this.displayVariants(props.details)))));
      };

      return _this.props.product.products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Product, {
          key: "product-" + product.id,
          details: product
        });
      });
    });

    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProducts();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        id: "content-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "product-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("section", {
        className: "p-t-30",
        id: "react-product-list"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "row"
      }, this.displayProducts())))));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

_defineProperty(ProductList, "propTypes", {
  getProducts: prop_types__WEBPACK_IMPORTED_MODULE_20___default.a.func.isRequired,
  addItem: prop_types__WEBPACK_IMPORTED_MODULE_20___default.a.func.isRequired,
  product: prop_types__WEBPACK_IMPORTED_MODULE_20___default.a.object.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_20___default.a.bool
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: state.product,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, {
  getProducts: _actions_productActions__WEBPACK_IMPORTED_MODULE_17__["getProducts"],
  addItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_18__["addItem"]
})(ProductList));

/***/ }),

/***/ "./assets/js/components/profile.js":
/*!*****************************************!*\
  !*** ./assets/js/components/profile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _actions_errorActions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../actions/errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_security__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../helpers/security */ "./assets/js/helpers/security.js");






























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      user: _this.props.user || {},
      username: _this.props.user.username || '',
      email: _this.props.user.email || '',
      phone: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'phone_number';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'phone_number';
      }).field || '',
      d_address: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_1';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_1';
      }).field || '',
      d_address2: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_2';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_line_2';
      }).field || '',
      d_zipCode: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_city';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_city';
      }).field || '',
      b_address: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_1';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_1';
      }).field || '',
      b_address2: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_2';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_line_2';
      }).field || '',
      b_zipCode: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_city';
      }) === 'undefined' ? '' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'billing_city';
      }).field || '',
      d_gps: typeof _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_gps';
      }) === 'undefined' ? '-21.329519,55.471617' : _this.props.user.metadata.find(function (metadata) {
        return metadata.type === 'delivery_gps';
      }).field || '-21.329519,55.471617',
      identicalBillingAddress: true,
      d_city: '',
      b_city: '',
      cities: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.initMap();

      if (_this.state.b_address === _this.state.d_address && _this.state.b_address2 === _this.state.d_address2 && _this.state.b_zipCode === _this.state.d_zipCode) _this.setState({
        identicalBillingAddress: true
      });else _this.setState({
        identicalBillingAddress: false
      });
      axios__WEBPACK_IMPORTED_MODULE_30___default.a.get('/api/cities', Object(_helpers_security__WEBPACK_IMPORTED_MODULE_37__["tokenConfig"])()).then(function (res) {
        _this.setState({
          cities: res.data['hydra:member']
        });

        if (_this.props.user.metadata.length > 0) {
          var user_d_city = _this.props.user.metadata.find(function (meta) {
            return meta.type === 'delivery_city';
          });

          var user_b_city = _this.props.user.metadata.find(function (meta) {
            return meta.type === 'billing_city';
          });

          var d_city = typeof user_d_city !== 'undefined' ? res.data['hydra:member'].find(function (city) {
            return city.zipCode === parseInt(user_d_city.field);
          }) : '';
          var b_city = user_b_city === user_d_city ? d_city : typeof user_b_city !== 'undefined' ? res.data['hydra:member'].find(function (city) {
            return city.zipCode === parseInt(user_b_city.field);
          }) : '';

          _this.setState({
            d_city: d_city,
            b_city: b_city
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initMap", function () {
      var markers = [];
      console.log(_this.state.d_gps);

      var _this$state$d_gps$spl = _this.state.d_gps.split(','),
          _this$state$d_gps$spl2 = _slicedToArray(_this$state$d_gps$spl, 2),
          lat = _this$state$d_gps$spl2[0],
          _long = _this$state$d_gps$spl2[1];

      console.log("Latitude = " + lat);
      console.log("Longitude = " + _long);
      var placesAutocomplete = places({
        appId: Object({"NODE_ENV":"development"}).ALGOLIA_APPID,
        apiKey: Object({"NODE_ENV":"development"}).ALGOLIA_APIKEY,
        container: document.querySelector('#input-map')
      }).configure({
        countries: ['fr'],
        useDeviceLocation: false
      });
      var map = L.map('map-example-container', {
        scrollWheelZoom: true,
        zoomControl: true
      });
      var osmLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 19,
        attribution: 'Map © <a href="https://openstreetmap.org">OpenStreetMap</a>'
      });
      var userAddress = new L.LatLng(lat, _long);
      map.setView(userAddress, 1);
      map.addLayer(osmLayer);
      var marker = L.marker(userAddress, {
        opacity: .4
      });
      marker.addTo(map);
      markers.push(marker);

      if (_this.state.d_gps !== '-21.329519,55.471617') {
        findBestZoom();
      }

      placesAutocomplete.on('suggestions', handleOnSuggestions.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('cursorchanged', handleOnCursorchanged.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('change', handleOnChange.bind(_assertThisInitialized(_this)));
      placesAutocomplete.on('clear', handleOnClear.bind(_assertThisInitialized(_this)));

      function handleOnSuggestions(e) {
        markers.forEach(removeMarker);
        markers = [];

        if (e.suggestions.length === 0) {
          map.setView(new L.LatLng(0, 0), 1);
          return;
        }

        e.suggestions.forEach(addMarker);
        findBestZoom();
      }

      function handleOnChange(e) {
        markers.forEach(function (marker, markerIndex) {
          if (markerIndex === e.suggestionIndex) {
            markers = [marker];
            marker.setOpacity(1);
            findBestZoom();
          } else {
            removeMarker(marker);
          }
        });
        this.setState({
          d_address: e.suggestion.value,
          d_gps: e.suggestion.latlng.lat + ',' + e.suggestion.latlng.lng
        });
      }

      function handleOnClear() {
        map.setView(new L.LatLng(0, 0), 1);
        markers.forEach(removeMarker);
      }

      function handleOnCursorchanged(e) {
        markers.forEach(function (marker, markerIndex) {
          if (markerIndex === e.suggestionIndex) {
            marker.setOpacity(1);
            marker.setZIndexOffset(1000);
          } else {
            marker.setZIndexOffset(0);
            marker.setOpacity(0.5);
          }
        });
      }

      function addMarker(suggestion) {
        var marker = L.marker(suggestion.latlng, {
          opacity: .4
        });
        marker.addTo(map);
        markers.push(marker);
      }

      function removeMarker(marker) {
        map.removeLayer(marker);
      }

      function findBestZoom() {
        var featureGroup = L.featureGroup(markers);
        map.fitBounds(featureGroup.getBounds().pad(0.5), {
          animate: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onZipCodeChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      var errorMsg = "Code postal invalide.";
      var notDeliverableMsg = "Nous ne livrons malheureusement pas encore votre ville...";
      var cityId = e.target.id === 'b_zip' ? 'b_city' : 'd_city';
      var cityInput = document.getElementById(cityId);

      if (e.target.value.length > 0 && e.target.value.length < 5 || e.target.value.length <= 0 || e.target.value.length > 5) {
        cityInput.textContent = e.target.value.length !== 0 ? errorMsg : '';
        return;
      }

      var selectedCity = _this.state.cities.find(function (city) {
        return city.zipCode === parseInt(e.target.value);
      });

      cityInput.textContent = typeof selectedCity === 'undefined' ? errorMsg : cityId === 'd_city' && selectedCity.isDeliverable === false ? notDeliverableMsg : selectedCity.name;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleBillingAddress", function (e) {
      _this.setState({
        identicalBillingAddress: !_this.state.identicalBillingAddress
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();

      var userDetails = _objectSpread({}, _this.state, {
        b_address: _this.state.identicalBillingAddress === false ? _this.state.b_address : _this.state.d_address,
        b_address2: _this.state.identicalBillingAddress === false ? _this.state.b_address2 : _this.state.d_address2,
        b_zipCode: _this.state.identicalBillingAddress === false ? _this.state.b_zipCode : _this.state.d_zipCode,
        b_city: _this.state.identicalBillingAddress === false ? _this.state.b_city : _this.state.d_city,
        cities: []
      });

      _this.props.updateUser(userDetails);
    });

    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "container mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-8 order-md-1",
        id: "adresses-panel"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("form", {
        className: "needs-validation",
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "firstName"
      }, "Nom"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "firstName",
        name: "username",
        value: this.state.username,
        onChange: this.onChange
      }), "     ", react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Un pr\xE9nom est n\xE9cessaire pour la livraison.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de renseigner un email afin d'\xEAtre inform\xE9 de \xE9tapes de votre commande.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "phone"
      }, "Tel"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de renseigner un tel afin d'\xEAtre inform\xE9 de \xE9tapes de votre commande.")))), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("hr", {
        className: "mb-4"
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("h4", {
        className: "mb-3"
      }, "Adresse de livraison")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        id: "map-example-container"
      })), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "address"
      }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "input-map",
        name: "d_address",
        value: this.state.d_address,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de saisir une adresse de livraison.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "compl\xE9ment"
      }, "Complement d'adresse"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "textarea",
        className: "form-control",
        id: "compl\xE9ment",
        name: "d_address2",
        value: this.state.d_address2,
        onChange: this.onChange,
        placeholder: "Appt, Immeuble, Digicode, etc"
      })), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "zip"
      }, "CP"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "d_zip",
        name: "d_zipCode",
        value: this.state.d_zipCode,
        onChange: this.onZipCodeChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback",
        id: "d_zip_error"
      }, "Code Postal n\xE9cessaire.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("span", {
        id: "d_city"
      }, this.state.b_city.name)), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-2 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "gps"
      }, "GPS"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "hidden",
        name: "d_gps",
        className: "form-control",
        id: "gps",
        value: this.state.d_gps,
        placeholder: "",
        onChange: this.onChange
      }))))), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("hr", {
        className: "mb-4"
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("h4", {
        className: "mb-3"
      }, "Adresse de facturation")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        className: "custom-control custom-checkbox custom-checkbox-primary"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        id: "billingAddress-checkbox",
        type: "checkbox",
        className: "custom-control-input",
        checked: this.state.identicalBillingAddress,
        onChange: this.handleBillingAddress
      }), "      ", react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("span", {
        className: "custom-control-indicator"
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("span", {
        className: "custom-control-description"
      }, "Identique \xE0 adresse de livraison"))), this.state.identicalBillingAddress === true ? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("p", null) : react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "address"
      }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "address",
        name: "b_address",
        value: this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback"
      }, "Merci de saisir une adresse de livraison.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "compl\xE9ment"
      }, "Complement d'adresse"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "textarea",
        className: "form-control",
        id: "compl\xE9ment",
        name: "b_address2",
        value: this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2,
        onChange: this.onChange,
        placeholder: "Appt, Immeuble, etc"
      })), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("label", {
        htmlFor: "zip"
      }, "CP"), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "b_zip",
        name: "b_zipCode",
        value: this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode,
        onChange: this.onZipCodeChange
      }), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "invalid-feedback",
        id: "b_zip_error"
      }, "Code Postal n\xE9cessaire.")), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("div", {
        className: "col-md-4 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("span", {
        id: "b_city"
      }, this.state.b_city.name))))), react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement("button", {
        className: "btn btn-primary btn-lg btn-block",
        type: "submit"
      }, "Mettre \xE0 jour")))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_29___default.a.Component);

_defineProperty(Profile, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.object,
  error: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.object.isRequired,
  login: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.func.isRequired,
  updateUser: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.func.isRequired,
  clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_32__["connect"])(mapStateToProps, {
  login: _actions_authActions__WEBPACK_IMPORTED_MODULE_34__["login"],
  updateUser: _actions_authActions__WEBPACK_IMPORTED_MODULE_34__["updateUser"],
  clearErrors: _actions_errorActions__WEBPACK_IMPORTED_MODULE_35__["clearErrors"]
})(Profile));

/***/ }),

/***/ "./assets/js/helpers/scrollToTop.js":
/*!******************************************!*\
  !*** ./assets/js/helpers/scrollToTop.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ScrollToTop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollToTop, _React$Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "./assets/js/helpers/security.js":
/*!***************************************!*\
  !*** ./assets/js/helpers/security.js ***!
  \***************************************/
/*! exports provided: tokenConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
function tokenConfig() {
  var token = localStorage.getItem('token');
  var config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}



/***/ }),

/***/ "./assets/js/helpers/taxCalculator.js":
/*!********************************************!*\
  !*** ./assets/js/helpers/taxCalculator.js ***!
  \********************************************/
/*! exports provided: getTotalTTC, getTotalTax, getTotalHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTTC", function() { return getTotalTTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTax", function() { return getTotalTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalHT", function() { return getTotalHT; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);



function getTotalTTC(cartItems) {
  var totalTTC = 0;
  cartItems.forEach(function (item) {
    totalTTC += item.product.price * item.quantity;
  });
  return totalTTC;
}

function getTotalTax(cartItems) {
  var totalTax = 0;
  cartItems.forEach(function (item) {
    totalTax += item.product.price * item.quantity / (item.product.tva.taux + 1);
  });
  return totalTax;
}

function getTotalHT(cartItems) {
  return getTotalTTC(cartItems) - getTotalTax(cartItems);
}



/***/ }),

/***/ "./assets/js/helpers/userExtractor.js":
/*!********************************************!*\
  !*** ./assets/js/helpers/userExtractor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  var data = JSON.parse(window.atob(base64));

  if (data.data.metadata.length > 0) {
    data.data.metadata = JSON.parse(data.data.metadata);
  }

  return data.data;
});

/***/ }),

/***/ "./assets/js/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./assets/js/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/userExtractor */ "./assets/js/helpers/userExtractor.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var storedToken = localStorage.getItem('token') || "";
var initialState = {
  token: storedToken || "",
  isAuthenticated: storedToken !== "" ? true : false,
  isLoading: false,
  user: storedToken !== "" ? Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__["default"])(storedToken) : null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["USER_LOADING"]:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["USER_LOADED"]:
      return _objectSpread({}, state, {
        isAuthenticated: true,
        isLoading: false,
        user: Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__["default"])(action.payload.token)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["USER_UPDATED"]:
      localStorage.removeItem('token');
      localStorage.removeItem('user');

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["LOGIN_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["REGISTER_SUCCESS"]:
      var user = Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__["default"])(action.payload.token);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', user);
      return _objectSpread({}, state, {}, action.payload, {
        isAuthenticated: true,
        isLoading: false,
        user: user
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["LOGOUT_SUCCESS"]:
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      if (localStorage.getItem('products')) {
        localStorage.removeItem('products');
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["LOGIN_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["REGISTER_FAIL"]:
      return _objectSpread({}, state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/errorReducer.js":
/*!********************************************!*\
  !*** ./assets/js/reducers/errorReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");

var initialState = {
  msg: {},
  status: null,
  id: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"]:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return {
        msg: {},
        status: null,
        id: null
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/index.js":
/*!*************************************!*\
  !*** ./assets/js/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorReducer */ "./assets/js/reducers/errorReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./assets/js/reducers/authReducer.js");
/* harmony import */ var _productReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productReducer */ "./assets/js/reducers/productReducer.js");
/* harmony import */ var _itemReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemReducer */ "./assets/js/reducers/itemReducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _productReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  item: _itemReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  error: _errorReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./assets/js/reducers/itemReducer.js":
/*!*******************************************!*\
  !*** ./assets/js/reducers/itemReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _helpers_userExtractor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../helpers/userExtractor */ "./assets/js/helpers/userExtractor.js");
/* harmony import */ var _helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../helpers/taxCalculator */ "./assets/js/helpers/taxCalculator.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");






















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  items: [],
  totalToPayTTC: 0,
  totalToPayHT: 0,
  totalTax: 0,
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["GET_ITEMS"]:
      return _objectSpread({}, state, {
        items: action.payload,
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(action.payload),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(action.payload),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(action.payload),
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["DELETE_ITEM"]:
      var reducedCart = state.items.filter(function (item) {
        return item !== action.payload;
      });
      localStorage.setItem('cart', JSON.stringify(reducedCart));
      return _objectSpread({}, state, {
        items: reducedCart,
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(reducedCart),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(reducedCart),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(reducedCart)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["ADD_ITEM"]:
      state.items.forEach(function (element) {
        if (element.product.name == action.payload.product.name && element.parent.name == action.payload.parent.name) {
          element.quantity += action.payload.quantity;
          action.payload.quantity = 0;
          return state;
        }
      });
      var enlargedCart = action.payload.quantity !== 0 ? [action.payload].concat(_toConsumableArray(state.items)) : state.items;
      localStorage.setItem('cart', JSON.stringify(enlargedCart));
      return _objectSpread({}, state, {
        items: enlargedCart,
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(enlargedCart),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(enlargedCart),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(enlargedCart)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["UPDATE_ITEM"]:
      localStorage.setItem('cart', JSON.stringify(state.items));
      return _objectSpread({}, state, {
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(state.items),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(state.items),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(state.items)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["ITEMS_LOADING"]:
      return _objectSpread({}, state, {
        loading: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/reducers/productReducer.js":
/*!**********************************************!*\
  !*** ./assets/js/reducers/productReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/types */ "./assets/js/actions/types.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  products: [],
  loading: false,
  selected: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["GET_PRODUCTS"]:
      localStorage.setItem('products', JSON.stringify(action.payload));
      return _objectSpread({}, state, {
        products: action.payload,
        loading: false,
        selected: {}
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["GET_PRODUCT"]:
      return _objectSpread({}, state, {
        selected: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["UPDATE_PRODUCT_STOCK"]:
      var p = -1;
      var s = -1;
      var v = -1;

      for (var i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.variant.product.id) {
          p = i;
        }

        if (Object.keys(state.selected).length > 0) {
          if (state.products[i].id === state.selected.id) {
            s = i;
          }
        }
      }

      for (var _i = 0; _i < state.products[p].variants.length; _i++) {
        if (state.products[p].variants[_i].id === action.payload.variant.id) {
          v = _i;
        }
      }

      var newSelectedState = state.selected;
      var newProductsState = state.products;

      if (v !== -1) {
        var newVariants = [];

        for (var _i2 = 0; _i2 < state.products[p].variants.length; _i2++) {
          newVariants[_i2] = state.products[p].variants[_i2];

          if (_i2 === v) {
            newVariants[_i2] = action.payload.variant;
          }
        }

        newSelectedState = s === p ? _objectSpread({}, state.selected, {
          variants: newVariants
        }) : state.selected;
        newProductsState = state.products.map(function (product, index) {
          return index === p ? _objectSpread({}, product, {
            variants: newVariants
          }) : product;
        });
        localStorage.setItem('products', JSON.stringify(newProductsState));
      }

      return _objectSpread({}, state, {
        products: newProductsState,
        selected: newSelectedState
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["DECREASE_PRODUCT_STOCK"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["INCREASE_PRODUCT_STOCK"]:
      var pIndex = 0;
      var sIndex = -1;
      var vIndex = -1;

      for (var _i3 = 0; _i3 < state.products.length; _i3++) {
        if (state.products[_i3].id === action.payload.product.id) {
          pIndex = _i3;
        }

        if (Object.keys(state.selected).length > 0) {
          if (state.products[_i3].id === state.selected.id) {
            sIndex = _i3;
          }
        }
      }

      for (var _i4 = 0; _i4 < state.products[pIndex].variants.length; _i4++) {
        if (state.products[pIndex].variants[_i4].id === action.payload.variant.id) {
          vIndex = _i4;
        }
      }

      var newSelected = state.selected;
      var newProducts = state.products;

      if (vIndex !== -1) {
        var initialQty = state.products[pIndex].variants[vIndex].stock.quantity;
        var _newVariants = [];

        for (var _i5 = 0; _i5 < state.products[pIndex].variants.length; _i5++) {
          _newVariants[_i5] = state.products[pIndex].variants[_i5];

          if (_i5 === vIndex) {
            action.type === _actions_types__WEBPACK_IMPORTED_MODULE_10__["DECREASE_PRODUCT_STOCK"] ? _newVariants[_i5].stock.quantity = initialQty - action.payload.quantity : _newVariants[_i5].stock.quantity = initialQty + action.payload.quantity;
          }
        }

        newSelected = sIndex === pIndex ? _objectSpread({}, state.selected, {
          variants: _newVariants
        }) : state.selected;
        newProducts = state.products.map(function (product, index) {
          return index === pIndex ? _objectSpread({}, product, {
            variants: _newVariants
          }) : product;
        });
        localStorage.setItem('products', JSON.stringify(newProducts));
      }

      return _objectSpread({}, state, {
        products: newProducts,
        selected: newSelected
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/js/store.js":
/*!****************************!*\
  !*** ./assets/js/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./assets/js/reducers/index.js");



var initialState = {};
var middleWare = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleWare)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2l0ZW1BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jYXJ0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9zY3JvbGxUb1RvcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy90YXhDYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL3VzZXJFeHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9pdGVtUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlLmpzIl0sIm5hbWVzIjpbImxvYWRVc2VyIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInR5cGUiLCJVU0VSX0xPQURJTkciLCJheGlvcyIsImdldCIsInRva2VuQ29uZmlnIiwidGhlbiIsInJlcyIsIlVTRVJfTE9BREVEIiwicGF5bG9hZCIsImRhdGEiLCJlcnIiLCJyZXR1cm5FcnJvcnMiLCJyZXNwb25zZSIsInN0YXR1cyIsIkFVVEhfRVJST1IiLCJyZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlnIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwibG9naW4iLCJ1c2VybmFtZSIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwibG9nb3V0IiwiTE9HT1VUX1NVQ0NFU1MiLCJ0b2tlbiIsImF1dGgiLCJ1cGRhdGVVc2VyIiwidXNlckRldGFpbHMiLCJwaG9uZV9udW1iZXIiLCJ1c2VyIiwibWV0YWRhdGEiLCJmaW5kIiwiZGVsaXZlcnlfbGluZV8xIiwiZGVsaXZlcnlfbGluZV8yIiwiZGVsaXZlcnlfY2l0eSIsImJpbGxpbmdfbGluZV8xIiwiYmlsbGluZ19saW5lXzIiLCJiaWxsaW5nX2NpdHkiLCJkZWxpdmVyeV9ncHMiLCJwaG9uZV9udW1iZXJfaWQiLCJpZCIsImRlbGl2ZXJ5X2xpbmVfMV9pZCIsImRlbGl2ZXJ5X2xpbmVfMl9pZCIsImRlbGl2ZXJ5X2NpdHlfaWQiLCJiaWxsaW5nX2xpbmVfMV9pZCIsImJpbGxpbmdfbGluZV8yX2lkIiwiYmlsbGluZ19jaXR5X2lkIiwiZGVsaXZlcnlfZ3BzX2lkIiwiZmllbGQiLCJwaG9uZSIsInB1dCIsImRfYWRkcmVzcyIsImRfYWRkcmVzczIiLCJkX3ppcENvZGUiLCJkX2dwcyIsImJfYWRkcmVzcyIsImJfYWRkcmVzczIiLCJiX3ppcENvZGUiLCJyZWZyZXNoQm9keVJlcXVlc3QiLCJVU0VSX1VQREFURUQiLCJtc2ciLCJHRVRfRVJST1JTIiwiY2xlYXJFcnJvcnMiLCJDTEVBUl9FUlJPUlMiLCJnZXRJdGVtcyIsInN0b3JlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhcnNlIiwiR0VUX0lURU1TIiwic3RvcmVkVG9rZW4iLCJjdXJyZW50VXNlckNhcnQiLCJ1c2VyRXh0cmFjdG9yIiwiY2FydCIsImFkZEl0ZW0iLCJpdGVtIiwiYWN0aW9uIiwiREVDUkVBU0VfUFJPRFVDVF9TVE9DSyIsInZhcmlhbnQiLCJxdWFudGl0eSIsIkFERF9JVEVNIiwicHJvZHVjdCIsImlzUGFpZCIsInBhcmVudCIsImRlbGV0ZUl0ZW0iLCJJTkNSRUFTRV9QUk9EVUNUX1NUT0NLIiwiREVMRVRFX0lURU0iLCJ1cGRhdGVJdGVtIiwicXR5IiwiTWF0aCIsImFicyIsIlVQREFURV9JVEVNIiwic2V0SXRlbXNMb2FkaW5nIiwiSVRFTVNfTE9BRElORyIsImdldFByb2R1Y3RzIiwicmVtb3ZlSXRlbSIsInN0b3JlZFByb2R1Y3RzIiwiR0VUX1BST0RVQ1RTIiwic2V0UHJvZHVjdHNMb2FkaW5nIiwiZ2V0UHJvZHVjdCIsImkiLCJHRVRfUFJPRFVDVCIsImNvbnNvbGUiLCJsb2ciLCJQUk9EVUNUU19MT0FESU5HIiwidXBkYXRlUHJvZHVjdFN0b2NrIiwiVVBEQVRFX1BST0RVQ1RfU1RPQ0siLCJNRVRBREFUQV9VUERBVEVEIiwicmVxdWlyZSIsIkFwcCIsInByb3BzIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsIm9ubWVzc2FnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9yZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiYWxlcnQiLCJtZXNzYWdlIiwiUHJvZHVjdExpc3QiLCJQcm9kdWN0RGV0YWlscyIsIkxvZ2luIiwiQ2FydExpc3QiLCJDaGVja291dCIsIlByb2ZpbGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ2FydCIsIkNhcnRJdGVtIiwiZGV0YWlscyIsInByaWNlIiwib25EZWxldGVDbGljayIsIml0ZW1zIiwibWFwIiwiZGlzcGxheUl0ZW1zIiwidG90YWxUb1BheVRUQyIsImlzUmVxdWlyZWQiLCJxdWFudGl0aWVzIiwiaXRlbVVwZGF0ZWQiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInZhcmlhbnRJblN0YXRlIiwic3RvY2siLCJoYW5kbGVVcGRhdGVRdHkiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0cyIsInZhcmlhbnRTdGF0ZSIsInZhcmlhbnRzIiwicm91bmQiLCJ0b3RhbFRheCIsInRvdGFsVG9QYXlIVCIsImlkZW50aWNhbEJpbGxpbmdBZGRyZXNzIiwiZF9jaXR5IiwiYl9jaXR5IiwiY2l0aWVzIiwiaW5pdE1hcCIsInNldFN0YXRlIiwidXNlcl9kX2NpdHkiLCJtZXRhIiwidXNlcl9iX2NpdHkiLCJjaXR5IiwiemlwQ29kZSIsIm1hcmtlcnMiLCJzcGxpdCIsImxhdCIsImxvbmciLCJwbGFjZXNBdXRvY29tcGxldGUiLCJwbGFjZXMiLCJhcHBJZCIsInByb2Nlc3MiLCJBTEdPTElBX0FQUElEIiwiYXBpS2V5IiwiQUxHT0xJQV9BUElLRVkiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlndXJlIiwiY291bnRyaWVzIiwidXNlRGV2aWNlTG9jYXRpb24iLCJMIiwic2Nyb2xsV2hlZWxab29tIiwiem9vbUNvbnRyb2wiLCJvc21MYXllciIsIlRpbGVMYXllciIsIm1pblpvb20iLCJtYXhab29tIiwiYXR0cmlidXRpb24iLCJ1c2VyQWRkcmVzcyIsIkxhdExuZyIsInNldFZpZXciLCJhZGRMYXllciIsIm1hcmtlciIsIm9wYWNpdHkiLCJhZGRUbyIsInB1c2giLCJmaW5kQmVzdFpvb20iLCJvbiIsImhhbmRsZU9uU3VnZ2VzdGlvbnMiLCJiaW5kIiwiaGFuZGxlT25DdXJzb3JjaGFuZ2VkIiwiaGFuZGxlT25DaGFuZ2UiLCJoYW5kbGVPbkNsZWFyIiwiZSIsImZvckVhY2giLCJyZW1vdmVNYXJrZXIiLCJzdWdnZXN0aW9ucyIsImFkZE1hcmtlciIsIm1hcmtlckluZGV4Iiwic3VnZ2VzdGlvbkluZGV4Iiwic2V0T3BhY2l0eSIsInN1Z2dlc3Rpb24iLCJsYXRsbmciLCJsbmciLCJzZXRaSW5kZXhPZmZzZXQiLCJyZW1vdmVMYXllciIsImZlYXR1cmVHcm91cCIsImZpdEJvdW5kcyIsImdldEJvdW5kcyIsInBhZCIsImFuaW1hdGUiLCJ0YXJnZXQiLCJlcnJvck1zZyIsIm5vdERlbGl2ZXJhYmxlTXNnIiwiY2l0eUlkIiwiY2l0eUlucHV0IiwidGV4dENvbnRlbnQiLCJzZWxlY3RlZENpdHkiLCJpc0RlbGl2ZXJhYmxlIiwiY2F0ZWdvcnkiLCJyZWR1Y2UiLCJjdW11bCIsImN1cnJlbnQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwib25aaXBDb2RlQ2hhbmdlIiwiaGFuZGxlQmlsbGluZ0FkZHJlc3MiLCJoYW5kbGVMb2dpbiIsImVycm9yIiwiTmF2YmFyIiwiY291bnQiLCJBbm9ueW1vdXMiLCJJZGVudGlmaWVkIiwicm9sZXMiLCJpbmRleE9mIiwiaGFuZGxlTG9nb3V0IiwiZGlzcGxheUxvZ2dlZFZpZXciLCJkaXNwbGF5QW5vbnltb3VzVmlldyIsIm5ld0l0ZW0iLCJBbGxlcmdlbiIsImFsbGVyZ2VucyIsImFsbGVyZ2VuIiwiVmFyaWFudCIsImhhbmRsZUNsaWNrIiwiTnV0cml0aW9uYWxzIiwia0oiLCJLQ2FsIiwicHJvdGVpbiIsImNhcmJvaHlkcmF0ZXMiLCJzdWdhciIsImZhdCIsInRyYW5zQUciLCJzYWx0IiwibnV0cml0aW9uYWxzIiwibWF0Y2giLCJwYXJhbXMiLCJzZWxlY3RlZCIsImRpc3BsYXlBbGxlcmdlbnMiLCJwaWN0dXJlIiwiYjY0IiwiZGlzcGxheVZhcmlhbnRzIiwiZGlzcGxheU51dHJpdGlvbmFscyIsIlByb2R1Y3QiLCJEYXRlIiwic3VwcGxpZXIiLCJwcmVwYXJhdGlvblBlcmlvZCIsImdldE1pbnV0ZXMiLCJkaXNwbGF5UHJvZHVjdHMiLCJTY3JvbGxUb1RvcCIsInByZXZQcm9wcyIsImxvY2F0aW9uIiwiY2hpbGRyZW4iLCJ3aXRoUm91dGVyIiwiZ2V0VG90YWxUVEMiLCJjYXJ0SXRlbXMiLCJ0b3RhbFRUQyIsImdldFRvdGFsVGF4IiwidHZhIiwidGF1eCIsImdldFRvdGFsSFQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwiYXRvYiIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsInNldEl0ZW0iLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0UmVkdWNlciIsIml0ZW1SZWR1Y2VyIiwiZXJyb3JSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJsb2FkaW5nIiwicmVkdWNlZENhcnQiLCJmaWx0ZXIiLCJlbGVtZW50IiwiZW5sYXJnZWRDYXJ0IiwicCIsInMiLCJ2IiwibmV3U2VsZWN0ZWRTdGF0ZSIsIm5ld1Byb2R1Y3RzU3RhdGUiLCJuZXdWYXJpYW50cyIsImluZGV4IiwicEluZGV4Iiwic0luZGV4IiwidkluZGV4IiwibmV3U2VsZWN0ZWQiLCJuZXdQcm9kdWN0cyIsImluaXRpYWxRdHkiLCJtaWRkbGVXYXJlIiwidGh1bmsiLCJjb21wb3NlRW5oYW5jZXJzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7Q0FjQTs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQU0sVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3BEO0FBQ0FELFlBQVEsQ0FBQztBQUFFRSxVQUFJLEVBQUVDLG1EQUFZQTtBQUFwQixLQUFELENBQVI7QUFDQUMsZ0RBQUssQ0FDRkMsR0FESCxDQUNPLGVBRFAsRUFDd0JDLFdBQVcsQ0FBQ0wsUUFBRCxDQURuQyxFQUVHTSxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JSLGNBQVEsQ0FBQztBQUNQRSxZQUFJLEVBQUVPLGtEQURDO0FBRVBDLGVBQU8sRUFBRUYsR0FBRyxDQUFDRztBQUZOLE9BQUQsQ0FBUjtBQUlELEtBUEgsV0FRUyxVQUFBQyxHQUFHLEVBQUk7QUFDWlosY0FBUSxDQUFDYSxrRUFBWSxDQUFDRCxHQUFHLENBQUNFLFFBQUosQ0FBYUgsSUFBZCxFQUFvQkMsR0FBRyxDQUFDRSxRQUFKLENBQWFDLE1BQWpDLENBQWIsQ0FBUjtBQUNBZixjQUFRLENBQUM7QUFDUEUsWUFBSSxFQUFFYyxpREFBVUE7QUFEVCxPQUFELENBQVI7QUFHRCxLQWJIO0FBY0QsR0FqQnVCO0FBQUEsQ0FBakIsQyxDQW1CUDs7QUFDTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLE1BQWdCQyxRQUFoQixRQUFnQkEsUUFBaEI7QUFBQSxTQUErQixVQUFBcEIsUUFBUSxF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LElBQUksQ0FBQ0MsU0FBTCxDQUFlb1UsV0FBZixDQUFqQztBQUNIOztBQUNELCtCQUNLcE0sS0FETDtBQUVFeUIsZ0JBQVEsRUFBRTJLLFdBRlo7QUFHRXBELGdCQUFRLEVBQUVtRDtBQUhaOztBQUtKO0FBQ0UsYUFBT25NLEtBQVA7QUF0R0o7QUF3R0QsQzs7Ozs7Ozs7Ozs7O0FDakhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTTRLLFlBQVksR0FBRyxFQUFyQjtBQUVBLElBQU0wQixVQUFVLEdBQUcsQ0FBQ0MsbURBQUQsQ0FBbkI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRzFOLE1BQU0sQ0FBQzJOLG9DQUFQLElBQStDQyw2Q0FBeEU7QUFDQSxJQUFNN04sS0FBSyxHQUFHOE4seURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QmhDLFlBRnVCLEVBR3ZCNEIsZ0JBQWdCLENBQUNLLHFEQUFlLE1BQWYsU0FBbUJQLFVBQW5CLENBQUQsQ0FITyxDQUF6QjtBQU1lek4sb0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgcmV0dXJuRXJyb3JzIH0gZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBVU0VSX0xPQURFRCxcbiAgVVNFUl9MT0FESU5HLFxuICBBVVRIX0VSUk9SLFxuICBMT0dJTl9TVUNDRVNTLFxuICBMT0dJTl9GQUlMLFxuICBMT0dPVVRfU1VDQ0VTUyxcbiAgUkVHSVNURVJfU1VDQ0VTUyxcbiAgUkVHSVNURVJfRkFJTCxcbiAgVVNFUl9VUERBVEVELFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gQ2hlY2sgdG9rZW4gJiBsb2FkIHVzZXJcbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgLy8gVXNlciBsb2FkaW5nXG4gIGRpc3BhdGNoKHsgdHlwZTogVVNFUl9MT0FESU5HIH0pO1xuICBheGlvc1xuICAgIC5nZXQoJy91c2VyL2N1cnJlbnQnLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVU0VSX0xPQURFRCxcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cykpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBVVRIX0VSUk9SXG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8vIFJlZ2lzdGVyIFVzZXJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9ICh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSA9PiBkaXNwYXRjaCA9PiB7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICB9O1xuXG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgYXhpb3MucG9zdCgnL2FwaS91c2VycycsIGJvZHksIGNvbmZpZylcbiAgICAgICAudGhlbihyZXMgPT5cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBSRUdJU1RFUl9TVUNDRVNTLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgIClcbiAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cywgJ1JFR0lTVEVSX0ZBSUwnKVxuICAgICAgICAgICk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogUkVHSVNURVJfRkFJTFxuICAgICAgICAgIH0pO1xuICAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IGRpc3BhdGNoID0+IHtcbiAgY29uc3QgY29uZmlnID0geyBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9O1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcblxuICBheGlvc1xuICAgIC5wb3N0KCcvYXBpL2xvZ2luX2NoZWNrJywgYm9keSwgY29uZmlnKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IExPR0lOX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cywgJ0xPR0lOX0ZBSUwnKVxuICAgICAgICBcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IExPR0lOX0ZBSUxcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dPVVRfU1VDQ0VTU1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRva2VuQ29uZmlnID0gZ2V0U3RhdGUgPT4ge1xuXG4gIGNvbnN0IHRva2VuID0gZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfTtcblxuICBpZiAodG9rZW4pIHtcbiAgICBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSB1c2VyRGV0YWlscyA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cbiAgY29uc3QgcGhvbmVfbnVtYmVyID0gdXNlckRldGFpbHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAncGhvbmVfbnVtYmVyJykpO1xuICBjb25zdCBkZWxpdmVyeV9saW5lXzEgPSB1c2VyRGV0YWlscy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdkZWxpdmVyeV9saW5lXzEnKSk7XG4gIGNvbnN0IGRlbGl2ZXJ5X2xpbmVfMiA9IHVzZXJEZXRhaWxzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2RlbGl2ZXJ5X2xpbmVfMicpKTtcbiAgY29uc3QgZGVsaXZlcnlfY2l0eSA9IHVzZXJEZXRhaWxzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2RlbGl2ZXJ5X2NpdHknKSk7XG4gIGNvbnN0IGJpbGxpbmdfbGluZV8xID0gdXNlckRldGFpbHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnYmlsbGluZ19saW5lXzEnKSk7XG4gIGNvbnN0IGJpbGxpbmdfbGluZV8yID0gdXNlckRldGFpbHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnYmlsbGluZ19saW5lXzInKSk7XG4gIGNvbnN0IGJpbGxpbmdfY2l0eSA9IHVzZXJEZXRhaWxzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfY2l0eScpKTtcbiAgY29uc3QgZGVsaXZlcnlfZ3BzID0gdXNlckRldGFpbHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfZ3BzJykpO1xuICBjb25zdCBwaG9uZV9udW1iZXJfaWQgPSB0eXBlb2YgcGhvbmVfbnVtYmVyICE9PSAndW5kZWZpbmVkJyA/IHBob25lX251bWJlci5pZCA6IC0xO1xuICBjb25zdCBkZWxpdmVyeV9saW5lXzFfaWQgPSB0eXBlb2YgZGVsaXZlcnlfbGluZV8xICE9PSAndW5kZWZpbmVkJyA/IGRlbGl2ZXJ5X2xpbmVfMS5pZCA6IC0xO1xuICBjb25zdCBkZWxpdmVyeV9saW5lXzJfaWQgPSB0eXBlb2YgZGVsaXZlcnlfbGluZV8yICE9PSAndW5kZWZpbmVkJyA/IGRlbGl2ZXJ5X2xpbmVfMi5pZCA6IC0xO1xuICBjb25zdCBkZWxpdmVyeV9jaXR5X2lkID0gdHlwZW9mIGRlbGl2ZXJ5X2NpdHkgIT09ICd1bmRlZmluZWQnID8gZGVsaXZlcnlfY2l0eS5pZCA6IC0xO1xuICBjb25zdCBiaWxsaW5nX2xpbmVfMV9pZCA9IHR5cGVvZiBiaWxsaW5nX2xpbmVfMSAhPT0gJ3VuZGVmaW5lZCcgPyBiaWxsaW5nX2xpbmVfMS5pZCA6IC0xO1xuICBjb25zdCBiaWxsaW5nX2xpbmVfMl9pZCA9IHR5cGVvZiBiaWxsaW5nX2xpbmVfMiAhPT0gJ3VuZGVmaW5lZCcgPyBiaWxsaW5nX2xpbmVfMi5pZCA6IC0xO1xuICBjb25zdCBiaWxsaW5nX2NpdHlfaWQgPSB0eXBlb2YgYmlsbGluZ19jaXR5ICE9PSAndW5kZWZpbmVkJyA/IGJpbGxpbmdfY2l0eS5pZCA6IC0xO1xuICBjb25zdCBkZWxpdmVyeV9ncHNfaWQgPSB0eXBlb2YgZGVsaXZlcnlfZ3BzICE9PSAndW5kZWZpbmVkJyA/IGRlbGl2ZXJ5X2dwcy5pZCA6IC0xO1xuXG4gIGlmICgodHlwZW9mIHBob25lX251bWJlciA9PT0gJ3VuZGVmaW5lZCcgfHwgcGhvbmVfbnVtYmVyLmZpZWxkICE9PSB1c2VyRGV0YWlscy5waG9uZSkgJiYgdXNlckRldGFpbHMucGhvbmUgIT09ICcnKSB7XG4gICAgICBpZiAocGhvbmVfbnVtYmVyX2lkID09PSAtMSlcbiAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkoe3R5cGU6J3Bob25lX251bWJlcicsIGZpZWxkOiB1c2VyRGV0YWlscy5waG9uZSwgdXNlcjogJy9hcGkvdXNlcnMvJyArIHVzZXJEZXRhaWxzLnVzZXIuaWR9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgICAgZWxzZVxuICAgICAgICAgIGF4aW9zLnB1dCgnL2FwaS9tZXRhZGF0YS8nICsgcGhvbmVfbnVtYmVyX2lkLCBKU09OLnN0cmluZ2lmeSh7ZmllbGQ6IHVzZXJEZXRhaWxzLnBob25lfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgfVxuXG4gIGlmICgodHlwZW9mIGRlbGl2ZXJ5X2xpbmVfMSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGVsaXZlcnlfbGluZV8xLmZpZWxkICE9PSB1c2VyRGV0YWlscy5kX2FkZHJlc3MpICYmIHVzZXJEZXRhaWxzLmRfYWRkcmVzcyAhPT0gJycpIHtcbiAgICBpZiAoZGVsaXZlcnlfbGluZV8xX2lkID09PSAtMSkge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkoe3R5cGU6J2RlbGl2ZXJ5X2xpbmVfMScsIGZpZWxkOiB1c2VyRGV0YWlscy5kX2FkZHJlc3MsIHVzZXI6ICcvYXBpL3VzZXJzLycgKyB1c2VyRGV0YWlscy51c2VyLmlkfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBheGlvcy5wdXQoJy9hcGkvbWV0YWRhdGEvJyArIGRlbGl2ZXJ5X2xpbmVfMV9pZCwgSlNPTi5zdHJpbmdpZnkoe2ZpZWxkOiB1c2VyRGV0YWlscy5kX2FkZHJlc3N9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH1cbiAgfVxuXG4gIGlmICgodHlwZW9mIGRlbGl2ZXJ5X2xpbmVfMiA9PT0gJ3VuZGVmaW5lZCcgfHwgZGVsaXZlcnlfbGluZV8yLmZpZWxkICE9PSB1c2VyRGV0YWlscy5kX2FkZHJlc3MyKSAmJiB1c2VyRGV0YWlscy5kX2FkZHJlc3MyICE9PSAnJykge1xuICAgIGlmIChkZWxpdmVyeV9saW5lXzJfaWQgPT09IC0xKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeSh7dHlwZTonZGVsaXZlcnlfbGluZV8yJywgZmllbGQ6IHVzZXJEZXRhaWxzLmRfYWRkcmVzczIsIHVzZXI6ICcvYXBpL3VzZXJzLycgKyB1c2VyRGV0YWlscy51c2VyLmlkfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBheGlvcy5wdXQoJy9hcGkvbWV0YWRhdGEvJyArIGRlbGl2ZXJ5X2xpbmVfMl9pZCwgSlNPTi5zdHJpbmdpZnkoe2ZpZWxkOiB1c2VyRGV0YWlscy5kX2FkZHJlc3MyfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICB9XG4gIH1cblxuICBpZiAoKHR5cGVvZiBkZWxpdmVyeV9jaXR5ID09PSAndW5kZWZpbmVkJyB8fCBkZWxpdmVyeV9jaXR5LmZpZWxkICE9PSB1c2VyRGV0YWlscy5kX3ppcENvZGUpICYmIHVzZXJEZXRhaWxzLmRfemlwQ29kZSAhPT0gJycpIHtcbiAgICBpZiAoZGVsaXZlcnlfY2l0eV9pZCA9PT0gLTEpIHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9tZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHt0eXBlOidkZWxpdmVyeV9jaXR5JywgZmllbGQ6IHVzZXJEZXRhaWxzLmRfemlwQ29kZSwgdXNlcjogJy9hcGkvdXNlcnMvJyArIHVzZXJEZXRhaWxzLnVzZXIuaWR9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aW9zLnB1dCgnL2FwaS9tZXRhZGF0YS8nICsgZGVsaXZlcnlfY2l0eV9pZCwgSlNPTi5zdHJpbmdpZnkoe2ZpZWxkOiB1c2VyRGV0YWlscy5kX3ppcENvZGV9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH1cbiAgfVxuXG4gIGlmICgodHlwZW9mIGRlbGl2ZXJ5X2dwcyA9PT0gJ3VuZGVmaW5lZCcgfHwgZGVsaXZlcnlfZ3BzLmZpZWxkICE9PSB1c2VyRGV0YWlscy5kX2dwcykgJiYgdXNlckRldGFpbHMuZF9ncHMgIT09ICcnKSB7XG4gICAgaWYgKGRlbGl2ZXJ5X2dwc19pZCA9PT0gLTEpIHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9tZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHt0eXBlOidkZWxpdmVyeV9ncHMnLCBmaWVsZDogdXNlckRldGFpbHMuZF9ncHMsIHVzZXI6ICcvYXBpL3VzZXJzLycgKyB1c2VyRGV0YWlscy51c2VyLmlkfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBheGlvcy5wdXQoJy9hcGkvbWV0YWRhdGEvJyArIGRlbGl2ZXJ5X2dwc19pZCwgSlNPTi5zdHJpbmdpZnkoe2ZpZWxkOiB1c2VyRGV0YWlscy5kX2dwc30pLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgYmlsbGluZ19saW5lXzEgPT09ICd1bmRlZmluZWQnIHx8IGJpbGxpbmdfbGluZV8xLmZpZWxkICE9PSB1c2VyRGV0YWlscy5iX2FkZHJlc3MpICYmIHVzZXJEZXRhaWxzLmJfYWRkcmVzcyAhPT0gJycpIHtcbiAgICBpZiAoYmlsbGluZ19saW5lXzFfaWQgPT09IC0xKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeSh7dHlwZTonYmlsbGluZ19saW5lXzEnLCBmaWVsZDogdXNlckRldGFpbHMuYl9hZGRyZXNzLCB1c2VyOiAnL2FwaS91c2Vycy8nICsgdXNlckRldGFpbHMudXNlci5pZH0pLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXhpb3MucHV0KCcvYXBpL21ldGFkYXRhLycgKyBiaWxsaW5nX2xpbmVfMV9pZCwgSlNPTi5zdHJpbmdpZnkoe2ZpZWxkOiB1c2VyRGV0YWlscy5iX2FkZHJlc3N9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH1cbiAgfVxuXG4gIGlmICgodHlwZW9mIGJpbGxpbmdfbGluZV8yID09PSAndW5kZWZpbmVkJyB8fCBiaWxsaW5nX2xpbmVfMi5maWVsZCAhPT0gdXNlckRldGFpbHMuYl9hZGRyZXNzMikgJiYgdXNlckRldGFpbHMuYl9hZGRyZXNzMiAhPT0gJycpIHtcbiAgICBpZiAoYmlsbGluZ19saW5lXzJfaWQgPT09IC0xKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeSh7dHlwZTonYmlsbGluZ19saW5lXzInLCBmaWVsZDogdXNlckRldGFpbHMuYl9hZGRyZXNzMiwgdXNlcjogJy9hcGkvdXNlcnMvJyArIHVzZXJEZXRhaWxzLnVzZXIuaWR9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aW9zLnB1dCgnL2FwaS9tZXRhZGF0YS8nICsgYmlsbGluZ19saW5lXzJfaWQsIEpTT04uc3RyaW5naWZ5KHtmaWVsZDogdXNlckRldGFpbHMuYl9hZGRyZXNzMn0pLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gICAgfVxuICB9XG5cbiAgaWYgKCh0eXBlb2YgYmlsbGluZ19jaXR5ID09PSAndW5kZWZpbmVkJyB8fCBiaWxsaW5nX2NpdHkuZmllbGQgIT09IHVzZXJEZXRhaWxzLmJfemlwQ29kZSkgJiYgdXNlckRldGFpbHMuYl96aXBDb2RlICE9PSAnJykge1xuICAgIGlmIChiaWxsaW5nX2NpdHlfaWQgPT09IC0xKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeSh7dHlwZTonYmlsbGluZ19jaXR5JywgZmllbGQ6IHVzZXJEZXRhaWxzLmJfemlwQ29kZSwgdXNlcjogJy9hcGkvdXNlcnMvJyArIHVzZXJEZXRhaWxzLnVzZXIuaWR9KSwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF4aW9zLnB1dCgnL2FwaS9tZXRhZGF0YS8nICsgYmlsbGluZ19jaXR5X2lkLCBKU09OLnN0cmluZ2lmeSh7ZmllbGQ6IHVzZXJEZXRhaWxzLmJfemlwQ29kZX0pLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gICAgfVxuICB9XG5cbiAgYXhpb3MucHV0KCcvYXBpL3VzZXJzLycgKyB1c2VyRGV0YWlscy51c2VyLmlkLCBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiB1c2VyRGV0YWlscy51c2VybmFtZSwgZW1haWw6IHVzZXJEZXRhaWxzLmVtYWlsfSksIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGxldCByZWZyZXNoQm9keVJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeSh7aWQ6IHJlcy5kYXRhLmlkfSk7XG4gICAgICAgICAgYXhpb3MucG9zdCgnL3VzZXIvdXBkYXRlZCcsIHJlZnJlc2hCb2R5UmVxdWVzdCwgdG9rZW5Db25maWcoZ2V0U3RhdGUpIClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNFUl9VUERBVEVELFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG59IiwiaW1wb3J0IHsgR0VUX0VSUk9SUywgQ0xFQVJfRVJST1JTIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIFJFVFVSTiBFUlJPUlNcbmV4cG9ydCBjb25zdCByZXR1cm5FcnJvcnMgPSAobXNnLCBzdGF0dXMsIGlkID0gbnVsbCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEdFVF9FUlJPUlMsXG4gICAgcGF5bG9hZDogeyBtc2csIHN0YXR1cywgaWQgfVxuICB9O1xufTtcblxuLy8gQ0xFQVIgRVJST1JTXG5leHBvcnQgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ0xFQVJfRVJST1JTXG4gIH07XG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBHRVRfSVRFTVMsIEFERF9JVEVNLCBVUERBVEVfSVRFTSwgREVMRVRFX0lURU0sIElURU1TX0xPQURJTkcsIElOQ1JFQVNFX1BST0RVQ1RfU1RPQ0ssIERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHRva2VuQ29uZmlnIH0gZnJvbSAnLi9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyByZXR1cm5FcnJvcnMgfSBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgdXNlckV4dHJhY3RvciBmcm9tICcuLi9oZWxwZXJzL3VzZXJFeHRyYWN0b3InO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW1zID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBsZXQgc3RvcmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgfHwge307XG4gIGlmIChPYmplY3Qua2V5cyhzdG9yZWRDYXJ0KS5sZW5ndGggPiAwKSB7XG4gICAgc3RvcmVkQ2FydCA9IEpTT04ucGFyc2Uoc3RvcmVkQ2FydCk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0lURU1TLFxuICAgICAgcGF5bG9hZDogc3RvcmVkQ2FydFxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyQ2FydCA9IHN0b3JlZFRva2VuICE9PSBcIlwiID8gKHVzZXJFeHRyYWN0b3Ioc3RvcmVkVG9rZW4pLmNhcnQgfHwgW10gKSA6IFtdO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR0VUX0lURU1TLFxuICAgICAgICBwYXlsb2FkOiBjdXJyZW50VXNlckNhcnQsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIC8vUkVNUExBQ0UgUE9VUiBURU1QUyBSRUVMIE1FUkNVUkUgUEFSIDpcbiAgY29uc3QgY29uZmlnID0geyBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9O1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHsgYWN0aW9uOiBERUNSRUFTRV9QUk9EVUNUX1NUT0NLLCBpZDogaXRlbS52YXJpYW50LmlkLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSB9IClcbiAgYXhpb3MucG9zdCgnL2FwcC9waW5nJywgYm9keSwgY29uZmlnKVxuICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICByZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMsICdVUERBVEVfU1RPQ0tfRkFJTCcpICAgICAgIFxuICAgICAgICApXG4gICAgICAgIH0pO1xuICAvLyBGSU4gU1VQUExFTUVOVCBNRVJDVVJFXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfSVRFTSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHJvZHVjdDogaXRlbS52YXJpYW50LCBcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXNQYWlkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudDogaXRlbS5wcm9kdWN0LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogREVDUkVBU0VfUFJPRFVDVF9TVE9DSyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcHJvZHVjdDogaXRlbS5wcm9kdWN0LFxuICAgICAgICB2YXJpYW50OiBpdGVtLnZhcmlhbnQsXG4gICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSBpdGVtID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgLy9SRU1QTEFDRSBQT1VSIFRFTVBTIFJFRUwgTUVSQ1VSRSBQQVIgOlxuICBjb25zdCBjb25maWcgPSB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggeyBhY3Rpb246IElOQ1JFQVNFX1BST0RVQ1RfU1RPQ0ssIGlkOiBpdGVtLnByb2R1Y3QuaWQsIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IH0gKVxuICBheGlvcy5wb3N0KCcvYXBwL3BpbmcnLCBib2R5LCBjb25maWcpXG4gICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cywgJ1VQREFURV9TVE9DS19GQUlMJykgICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICAgIH0pO1xuICAvLyBGSU4gU1VQUExFTUVOVCBNRVJDVVJFXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBERUxFVEVfSVRFTSxcbiAgICBwYXlsb2FkOiBpdGVtXG4gIH0pO1xuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHByb2R1Y3Q6IGl0ZW0ucGFyZW50LCBcbiAgICAgIHZhcmlhbnQ6IGl0ZW0ucHJvZHVjdCxcbiAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgIH1cbiAgfSlcbn07XG5cblxuXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChpdGVtLCBxdHkpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgYWN0aW9uID0gKHF0eSA+IDApID8gREVDUkVBU0VfUFJPRFVDVF9TVE9DSyA6IElOQ1JFQVNFX1BST0RVQ1RfU1RPQ0s7XG4gIC8vUkVNUExBQ0UgUE9VUiBURU1QUyBSRUVMIE1FUkNVUkUgUEFSIDpcbiAgY29uc3QgY29uZmlnID0geyBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9O1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHsgYWN0aW9uOiBhY3Rpb24sIGlkOiBpdGVtLnByb2R1Y3QuaWQsIHF1YW50aXR5OiBNYXRoLmFicyhxdHkpIH0gKVxuICBheGlvcy5wb3N0KCcvYXBwL3BpbmcnLCBib2R5LCBjb25maWcpXG4gICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cywgJ1VQREFURV9TVE9DS19GQUlMJykgICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICAgIH0pO1xuICAvLyBGSU4gU1VQUExFTUVOVCBNRVJDVVJFXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBVUERBVEVfSVRFTSxcbiAgICBwYXlsb2FkOiBpdGVtXG4gIH0pO1xufVxuXG5cblxuXG5leHBvcnQgY29uc3Qgc2V0SXRlbXNMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElURU1TX0xPQURJTkdcbiAgfTtcbn07XG5cbi8vIGF4aW9zXG4gIC8vICAgLmRlbGV0ZShgL2FwaS9pdGVtcy8ke2lkfWAsIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgLy8gICAudGhlbihyZXMgPT5cbiAgLy8gICAgIGRpc3BhdGNoKHtcbiAgLy8gICAgICAgdHlwZTogREVMRVRFX0lURU0sXG4gIC8vICAgICAgIHBheWxvYWQ6IGlkXG4gIC8vICAgICB9KVxuICAvLyAgIClcbiAgLy8gICAuY2F0Y2goZXJyID0+XG4gIC8vICAgICBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKVxuICAvLyAgICk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEdFVF9QUk9EVUNUUywgUFJPRFVDVFNfTE9BRElORywgR0VUX1BST0RVQ1QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHRva2VuQ29uZmlnIH0gZnJvbSAnLi9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyByZXR1cm5FcnJvcnMgfSBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9kdWN0cycpO1xuICBsZXQgc3RvcmVkUHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSB8fCBcIlwiO1xuICBpZiAoc3RvcmVkUHJvZHVjdHMgIT09IFwiXCIpIHtcbiAgICBzdG9yZWRQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvZHVjdHMpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdFVF9QUk9EVUNUUyxcbiAgICAgIHBheWxvYWQ6IHN0b3JlZFByb2R1Y3RzXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaChzZXRQcm9kdWN0c0xvYWRpbmcoKSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJ2FwaS9wcm9kdWN0cycpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1RTLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT5cbiAgICAgICAgZGlzcGF0Y2gocmV0dXJuRXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLCBlcnIucmVzcG9uc2Uuc3RhdHVzKSlcbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gaWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBsZXQgc3RvcmVkUHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSB8fCBcIlwiO1xuICBpZiAoc3RvcmVkUHJvZHVjdHMgIT09IFwiXCIpIHtcbiAgICBzdG9yZWRQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvZHVjdHMpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yZWRQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0b3JlZFByb2R1Y3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1QsXG4gICAgICAgICAgICBwYXlsb2FkOiBzdG9yZWRQcm9kdWN0c1tpXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoKHNldFByb2R1Y3RzTG9hZGluZygpKTtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL2FwaS9wcm9kdWN0cy8nICsgaWQpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9QUk9EVUNULFxuICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PlxuICAgICAgICBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldFByb2R1Y3RzTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQUk9EVUNUU19MT0FESU5HXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdFN0b2NrID0gdmFyaWFudCA9PiBkaXNwYXRjaCA9PiB7XG4gICAgY29uc29sZS5sb2codmFyaWFudCk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1BST0RVQ1RfU1RPQ0ssXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICB9XG4gICAgfSlcblxufSIsImV4cG9ydCBjb25zdCBVU0VSX0xPQURJTkcgPSBcIlVTRVJfTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gXCJVU0VSX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSBcIkFVVEhfRVJST1JcIjtcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9IFwiTE9HSU5fRkFJTFwiO1xuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gXCJMT0dPVVRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSBcIlJFR0lTVEVSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMID0gXCJSRUdJU1RFUl9GQUlMXCI7XG5leHBvcnQgY29uc3QgR0VUX0VSUk9SUyA9ICdHRVRfRVJST1JTJztcbmV4cG9ydCBjb25zdCBDTEVBUl9FUlJPUlMgPSAnQ0xFQVJfRVJST1JTJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSAnR0VUX1BST0RVQ1RTJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9ICdHRVRfUFJPRFVDVCc7XG5leHBvcnQgY29uc3QgSU5DUkVBU0VfUFJPRFVDVF9TVE9DSyA9ICdJTkNSRUFTRV9QUk9EVUNUX1NUT0NLJztcbmV4cG9ydCBjb25zdCBERUNSRUFTRV9QUk9EVUNUX1NUT0NLID0gJ0RFQ1JFQVNFX1BST0RVQ1RfU1RPQ0snO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9EVUNUX1NUT0NLID0gJ1VQREFURV9QUk9EVUNUX1NUT0NLJztcbmV4cG9ydCBjb25zdCBQUk9EVUNUU19MT0FESU5HID0gJ1BST0RVQ1RTX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IEdFVF9JVEVNUyA9ICdHRVRfSVRFTVMnO1xuZXhwb3J0IGNvbnN0IEFERF9JVEVNID0gJ0FERF9JVEVNJztcbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTSA9ICdERUxFVEVfSVRFTSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0lURU0gPSAnVVBEQVRFX0lURU0nO1xuZXhwb3J0IGNvbnN0IElURU1TX0xPQURJTkcgPSAnSVRFTVNfTE9BRElORyc7XG5leHBvcnQgY29uc3QgVVNFUl9VUERBVEVEID0gJ1VTRVJfVVBEQVRFRCc7XG5leHBvcnQgY29uc3QgTUVUQURBVEFfVVBEQVRFRCA9ICdNRVRBREFUQV9VUERBVEVEJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tICcuL2hlbHBlcnMvc2Nyb2xsVG9Ub3AnO1xuaW1wb3J0IHsgVVBEQVRFX1BST0RVQ1RfU1RPQ0sgfSBmcm9tICcuL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzJztcbmltcG9ydCBDYXJ0TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvY2FydExpc3QnO1xuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAnLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2FydDogdGhpcy5wcm9wcy5jYXJ0IHx8IFtdLFxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB1cGRhdGVQcm9kdWN0U3RvY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2h1YicpO1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCAncG9uZy9waW5nJyk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsKTtcbiAgICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUFJPRFVDVF9TVE9DSyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IEpTT04ucGFyc2UoZXZlbnQuZGF0YSksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFJvdXRlciBvblVwZGF0ZT17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZWFjdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FsZXJ0Lm1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0ICR7YWxlcnQudHlwZX1gfT57YWxlcnQubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsVG9Ub3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgZXhhY3QgY29tcG9uZW50PXtQcm9kdWN0TGlzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvc2hvdy86aWQnIGNvbXBvbmVudD17UHJvZHVjdERldGFpbHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jYXJ0JyBjb21wb25lbnQ9e0NhcnRMaXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jaGVja291dCcgY29tcG9uZW50PXtDaGVja291dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWNjb3VudCcgY29tcG9uZW50PXtQcm9maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgcmVuZGVyPXsoKSA9PiAoPFJlZGlyZWN0IHRvPVwiL1wiIC8+KX0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsVG9Ub3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICB9KTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcblxuICBSZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0SXRlbXMsIGRlbGV0ZUl0ZW0gfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW1BY3Rpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnZXRJdGVtczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgZGVsZXRlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgICB9O1xuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldEl0ZW1zKCk7XG4gICAgICB9XG4gICAgXG4gICAgb25EZWxldGVDbGljayA9IGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUl0ZW0oaXRlbSk7XG4gICAgICB9O1xuXG4gICAgZGlzcGxheUl0ZW1zID0gKCkgPT4ge1xuICAgICAgbGV0IENhcnRJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17XCJjYXJ0aXRlbS1pdGVtLVwiICsgcHJvcHMuZGV0YWlscy5wcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICB4eyBwcm9wcy5kZXRhaWxzLnF1YW50aXR5IH0geyBwcm9wcy5kZXRhaWxzLnBhcmVudC5uYW1lIH0geyBwcm9wcy5kZXRhaWxzLnByb2R1Y3QubmFtZSB9IHwgeyBwcm9wcy5kZXRhaWxzLnByb2R1Y3QucHJpY2UgKiBwcm9wcy5kZXRhaWxzLnF1YW50aXR5IH3igqxcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25EZWxldGVDbGljayhwcm9wcy5kZXRhaWxzKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+IFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gPENhcnRJdGVtIGtleT17XCJjYXJ0aXRlbS1cIiArIGl0ZW0ucHJvZHVjdC5pZH0gZGV0YWlscz17aXRlbX0gLz5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXIgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgUGFuaWVyXG4gICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYmxvY2tcIj5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmRpc3BsYXlJdGVtcygpIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBib3JkZXItYm90dG9tIG1iLTIgcHgtMyBweS0yXCI+VG90YWw6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC1hdXRvIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+eyB0aGlzLnByb3BzLml0ZW0udG90YWxUb1BheVRUQyB94oKsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17IFwiL2NhcnRcIiB9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZSBidG4tc21cIj5FZGl0ZXIgcXVhbnRpdMOpPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lIGJ0bi1zbVwiID5FZGl0ZXIgcXVhbnRpdMOpPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyBcIi9jaGVja291dFwiIH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBtbC1hdXRvXCI+UGF5ZXI8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtIG1sLWF1dG9cIiA+UGF5ZXI8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldEl0ZW1zLCBkZWxldGVJdGVtIH1cbiAgKShDYXJ0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEl0ZW1zLCBhZGRJdGVtLCBkZWxldGVJdGVtLCB1cGRhdGVJdGVtIH0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtQWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0IH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0QWN0aW9ucyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuY2xhc3MgQ2FydExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGUgPSB7XG4gICAgICBxdWFudGl0aWVzOiAnJyxcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2V0UHJvZHVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgZ2V0SXRlbXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGFkZEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGRlbGV0ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHVwZGF0ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgfTtcbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJdGVtcygpO1xuICAgICAgfVxuICAgIFxuICAgIG9uRGVsZXRlQ2xpY2sgPSBpdGVtID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKGl0ZW0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVVcGRhdGVRdHkgPSAoaXRlbVVwZGF0ZWQsIGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBxdHkgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSAtIGl0ZW1VcGRhdGVkLnF1YW50aXR5O1xuICAgICAgICBpZiAocXR5ICE9PSAwKSB7XG4gICAgICAgICAgaXRlbVVwZGF0ZWQucXVhbnRpdHkgKz0gcXR5O1xuICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlSXRlbShpdGVtVXBkYXRlZCwgcXR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlJdGVtcyA9ICgpID0+IHtcbiAgICAgIGxldCBDYXJ0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e1wiY2FydGl0ZW0taXRlbS1cIiArIHByb3BzLmRldGFpbHMucHJvZHVjdC5pZH0gY2xhc3NOYW1lPXtcImNhcnRpdGVtLWl0ZW1cIn0+ICAgIHsvKiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgbWwtYXV0b1wiICovfVxuICAgICAgICAgICAgICAgICAgIHsgcHJvcHMudmFyaWFudEluU3RhdGUuc3RvY2sucXVhbnRpdHkgPiA1ID8gXCJcIiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudmFyaWFudEluU3RhdGUuc3RvY2sucXVhbnRpdHkgPT09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWNhcnQtdm9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJTdG9jayDDqXB1aXPDqSAhXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJQbHVzIHF1ZSBcIiArIHByb3BzLnZhcmlhbnRJblN0YXRlLnN0b2NrLnF1YW50aXR5ICsgXCIgZW4gc3RvY2sgIVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IHByb3BzLmRldGFpbHMucGFyZW50Lm5hbWUgfSB7IHByb3BzLmRldGFpbHMucHJvZHVjdC5uYW1lICsgXCIgIFwifSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHh7IHByb3BzLmRldGFpbHMucXVhbnRpdHkgfSB7IHByb3BzLmRldGFpbHMucGFyZW50Lm5hbWUgfSB7IHByb3BzLmRldGFpbHMucHJvZHVjdC5uYW1lIH0gfCB7IHByb3BzLmRldGFpbHMucHJvZHVjdC5wcmljZSAqIHByb3BzLmRldGFpbHMucXVhbnRpdHkgfeKCrFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cHJvcHMuZGV0YWlscy5xdWFudGl0eX0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVRdHkocHJvcHMuZGV0YWlscywgZXZlbnQpfSBtaW49XCIxXCIgbWF4PXtwcm9wcy5kZXRhaWxzLnByb2R1Y3Quc3RvY2sucXVhbnRpdHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlQ2xpY2socHJvcHMuZGV0YWlscyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgcHJvZHVjdFN0YXRlID0gdGhpcy5wcm9wcy5wcm9kdWN0LnByb2R1Y3RzLmZpbmQocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBpdGVtLnBhcmVudC5pZCk7XG4gICAgICAgICAgbGV0IHZhcmlhbnRTdGF0ZSA9IHByb2R1Y3RTdGF0ZS52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gdmFyaWFudC5pZCA9PT0gaXRlbS5wcm9kdWN0LmlkKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtcImNhcnRpdGVtLXNwYW4tXCIgKyBpdGVtLnByb2R1Y3QuaWR9ID5cbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtcImNhcnRpdGVtLVwiICsgaXRlbS5wcm9kdWN0LmlkfSBkZXRhaWxzPXtpdGVtfSB2YXJpYW50SW5TdGF0ZT17dmFyaWFudFN0YXRlfS8+XG4gICAgICAgICAgICAgICAgPGhyLz4gXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLXQtMzBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPiBQYW5pZXI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVUSUxJU0FCTEUgUE9VUiBESVNQTEFZIFVOIFRFTVBTIEFQUFJPWElNQVRJRiBERSBMSVZSQUlTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11dGVuc2lsc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3QuY2F0ZWdvcnkgPyBwcm9kdWN0LmNhdGVnb3J5Lm5hbWUgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgdGhpcy5kaXNwbGF5QWxsZXJnZW5zKHByb2R1Y3QpIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5SXRlbXMoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gbWwtYXV0b1wiID5QYXllcjwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyBcIi9jaGVja291dFwiIH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBtbC1hdXRvXCI+UGF5ZXI8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJvcmRlci1ib3R0b21cIj5Ub3RhbCBIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0b1wiPnsgTWF0aC5yb3VuZCh0aGlzLnByb3BzLml0ZW0udG90YWxUYXggKiAxMDApLzEwMCB94oKsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJvcmRlci1ib3R0b21cIj5UVkE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj57IE1hdGgucm91bmQodGhpcy5wcm9wcy5pdGVtLnRvdGFsVG9QYXlIVCAqIDEwMCkvMTAwIH3igqw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYm9yZGVyLWJvdHRvbVwiPlRvdGFsIFRUQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byBmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPnsgTWF0aC5yb3VuZCh0aGlzLnByb3BzLml0ZW0udG90YWxUb1BheVRUQyAqMTAwKS8xMDAgfeKCrDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyB0aGlzLmRpc3BsYXlOdXRyaXRpb25hbHMocHJvZHVjdCkgfSAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7JSBpZiBpc19ncmFudGVkKCdST0xFX0FETUlOJykgJX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7IHBhdGgoJ3Byb2R1Y3RfZWRpdCcsIHsnaWQnOiBwcm9kdWN0LmlkfSkgfX1cIj5lZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW5jbHVkZSgncHJvZHVjdC9fZGVsZXRlX2Zvcm0uaHRtbC50d2lnJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHslIGVuZGlmICV9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0OiBzdGF0ZS5wcm9kdWN0LFxuICAgIGl0ZW06IHN0YXRlLml0ZW0sXG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS5hdXRoLmlzQXV0aGVudGljYXRlZFxuICB9KTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIHsgZ2V0SXRlbXMsIGFkZEl0ZW0sIGRlbGV0ZUl0ZW0sIHVwZGF0ZUl0ZW0sIGdldFByb2R1Y3QgfVxuICApKENhcnRMaXN0KTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdG9rZW5Db25maWcgfSBmcm9tICcuLi9oZWxwZXJzL3NlY3VyaXR5JztcblxuY2xhc3MgQ2hlY2tvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHVzZXI6IHRoaXMucHJvcHMudXNlciB8fCB7fSxcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMudXNlciA9PT0gbnVsbCA/ICcnIDogdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIHx8ICcnLFxuICAgICAgICBlbWFpbDogdGhpcy5wcm9wcy51c2VyID09PSBudWxsID8gJycgOiB0aGlzLnByb3BzLnVzZXIuZW1haWwgfHwgJycsXG4gICAgICAgIHBob25lOiB0aGlzLnByb3BzLnVzZXIgPT09IG51bGwgPyAnJyA6IHR5cGVvZiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ3Bob25lX251bWJlcicpKSA9PT0gJ3VuZGVmaW5lZCcgPyBcbiAgICAgICAgICAgICAgICAnJyA6IHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAncGhvbmVfbnVtYmVyJykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBkX2FkZHJlc3M6IHRoaXMucHJvcHMudXNlciA9PT0gbnVsbCA/ICcnIDogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfbGluZV8xJykpID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgICAgICAgJycgOiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2RlbGl2ZXJ5X2xpbmVfMScpKS5maWVsZCB8fCAnJyxcbiAgICAgICAgZF9hZGRyZXNzMjogdGhpcy5wcm9wcy51c2VyID09PSBudWxsID8gJycgOiB0eXBlb2YgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdkZWxpdmVyeV9saW5lXzInKSkgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICAgICAgICAnJyA6IHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfbGluZV8yJykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBkX3ppcENvZGU6IHRoaXMucHJvcHMudXNlciA9PT0gbnVsbCA/ICcnIDogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfY2l0eScpKSA9PT0gJ3VuZGVmaW5lZCcgPyBcbiAgICAgICAgICAgICAgICAnJyA6IHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfY2l0eScpKS5maWVsZCB8fCAnJyxcbiAgICAgICAgYl9hZGRyZXNzOiB0aGlzLnByb3BzLnVzZXIgPT09IG51bGwgPyAnJyA6IHR5cGVvZiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8xJykpID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgICAgICAgJycgOiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8xJykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBiX2FkZHJlc3MyOiB0aGlzLnByb3BzLnVzZXIgPT09IG51bGwgPyAnJyA6IHR5cGVvZiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8yJykpID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgICAgICAgJycgOiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8yJykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBiX3ppcENvZGU6IHRoaXMucHJvcHMudXNlciA9PT0gbnVsbCA/ICcnIDogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnYmlsbGluZ19jaXR5JykpID09PSAndW5kZWZpbmVkJyA/IFxuICAgICAgICAgICAgICAgICcnIDogdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdiaWxsaW5nX2NpdHknKSkuZmllbGQgfHwgJycsXG4gICAgICAgIGRfZ3BzOiB0aGlzLnByb3BzLnVzZXIgPT09IG51bGwgPyAnLTIxLjMyOTUxOSw1NS40NzE2MTcnIDogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfZ3BzJykpID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgICAgICAgJy0yMS4zMjk1MTksNTUuNDcxNjE3JyA6IHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfZ3BzJykpLmZpZWxkIHx8ICctMjEuMzI5NTE5LDU1LjQ3MTYxNycsXG4gICAgICAgIGlkZW50aWNhbEJpbGxpbmdBZGRyZXNzOiB0cnVlLFxuICAgICAgICBkX2NpdHk6ICcnLFxuICAgICAgICBiX2NpdHk6ICcnLFxuICAgICAgICBjaXRpZXM6IFtdXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdE1hcCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iX2FkZHJlc3MgPT09IHRoaXMuc3RhdGUuZF9hZGRyZXNzICYmIHRoaXMuc3RhdGUuYl9hZGRyZXNzMiA9PT0gdGhpcy5zdGF0ZS5kX2FkZHJlc3MyICYmIHRoaXMuc3RhdGUuYl96aXBDb2RlID09PSB0aGlzLnN0YXRlLmRfemlwQ29kZSApXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGlkZW50aWNhbEJpbGxpbmdBZGRyZXNzOiB0cnVlIH0gKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3M6IGZhbHNlIH0gKTtcblxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvY2l0aWVzJywgdG9rZW5Db25maWcoKSlcbiAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdGllcyA6IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXSB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJfZF9jaXR5ID0gdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YSA9PiBtZXRhLnR5cGUgPT09ICdkZWxpdmVyeV9jaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9iX2NpdHkgPSB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhID0+IG1ldGEudHlwZSA9PT0gJ2JpbGxpbmdfY2l0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRfY2l0eSA9ICh0eXBlb2YgdXNlcl9kX2NpdHkgIT09ICd1bmRlZmluZWQnKSA/IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXS5maW5kKGNpdHkgPT4gY2l0eS56aXBDb2RlID09PSBwYXJzZUludCh1c2VyX2RfY2l0eS5maWVsZCkpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYl9jaXR5ID0gKHVzZXJfYl9jaXR5ID09PSB1c2VyX2RfY2l0eSkgPyBkX2NpdHkgOiAoKHR5cGVvZiB1c2VyX2JfY2l0eSAhPT0gJ3VuZGVmaW5lZCcpID8gcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddLmZpbmQoY2l0eSA9PiBjaXR5LnppcENvZGUgPT09IHBhcnNlSW50KHVzZXJfYl9jaXR5LmZpZWxkKSkgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkX2NpdHk6IGRfY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiX2NpdHk6IGJfY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRNYXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtYXJrZXJzID0gW107XG4gICAgICAgIGxldCBbbGF0LCBsb25nXSA9IHRoaXMuc3RhdGUuZF9ncHMuc3BsaXQoJywnKTtcbiAgICAgICAgbGV0IHBsYWNlc0F1dG9jb21wbGV0ZSA9IHBsYWNlcygge1xuICAgICAgICAgICAgYXBwSWQgICAgIDogcHJvY2Vzcy5lbnYuQUxHT0xJQV9BUFBJRCxcbiAgICAgICAgICAgIGFwaUtleSAgICA6IHByb2Nlc3MuZW52LkFMR09MSUFfQVBJS0VZLFxuICAgICAgICAgICAgY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNpbnB1dC1tYXAnICksXG4gICAgICAgIH0gKS5jb25maWd1cmUoIHtcbiAgICAgICAgICAgIGNvdW50cmllcyAgICAgICAgIDogWydmciddLFxuICAgICAgICAgICAgdXNlRGV2aWNlTG9jYXRpb24gOiBmYWxzZVxuICAgICAgICB9ICk7XG5cbiAgICAgICAgbGV0IG1hcCA9IEwubWFwKCAnbWFwLWV4YW1wbGUtY29udGFpbmVyJywge1xuICAgICAgICAgICAgc2Nyb2xsV2hlZWxab29tIDogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21Db250cm9sICAgICA6IHRydWVcbiAgICAgICAgfSApO1xuXG4gICAgICAgIGxldCBvc21MYXllciA9IG5ldyBMLlRpbGVMYXllciggJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgICAgICAgICAgbWluWm9vbSAgICAgOiA4LFxuICAgICAgICAgICAgbWF4Wm9vbSAgICAgOiAxOSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uIDogJ01hcCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+J1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgbGV0IHVzZXJBZGRyZXNzID0gbmV3IEwuTGF0TG5nKCBsYXQsIGxvbmcpO1xuICAgICAgICBtYXAuc2V0VmlldyggdXNlckFkZHJlc3MsIDEgKTtcbiAgICAgICAgbWFwLmFkZExheWVyKCBvc21MYXllciApO1xuICAgICAgICBsZXQgbWFya2VyID0gTC5tYXJrZXIoIHVzZXJBZGRyZXNzLCB7b3BhY2l0eTogLjR9ICk7XG4gICAgICAgIG1hcmtlci5hZGRUbyggbWFwICk7XG4gICAgICAgIG1hcmtlcnMucHVzaCggbWFya2VyICk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRfZ3BzICE9PSAnLTIxLjMyOTUxOSw1NS40NzE2MTcnKSB7XG4gICAgICAgICAgICBmaW5kQmVzdFpvb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbiggJ3N1Z2dlc3Rpb25zJyAgLCBoYW5kbGVPblN1Z2dlc3Rpb25zLmJpbmQodGhpcykpO1xuICAgICAgICBwbGFjZXNBdXRvY29tcGxldGUub24oICdjdXJzb3JjaGFuZ2VkJywgaGFuZGxlT25DdXJzb3JjaGFuZ2VkLmJpbmQodGhpcykpO1xuICAgICAgICBwbGFjZXNBdXRvY29tcGxldGUub24oICdjaGFuZ2UnICAgICAgICwgaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbiggJ2NsZWFyJyAgICAgICAgLCBoYW5kbGVPbkNsZWFyLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU9uU3VnZ2VzdGlvbnMoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIHJlbW92ZU1hcmtlciApO1xuICAgICAgICAgICAgbWFya2VycyA9IFtdO1xuICAgICAgICAgICAgaWYgKCBlLnN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0VmlldyggbmV3IEwuTGF0TG5nKCAwLCAwICksIDEgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnN1Z2dlc3Rpb25zLmZvckVhY2goIGFkZE1hcmtlciApO1xuICAgICAgICAgICAgZmluZEJlc3Rab29tKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIGZ1bmN0aW9uICggbWFya2VyLCBtYXJrZXJJbmRleCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcmtlckluZGV4ID09PSBlLnN1Z2dlc3Rpb25JbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VycyA9IFttYXJrZXJdO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0T3BhY2l0eSggMSApO1xuICAgICAgICAgICAgICAgICAgICBmaW5kQmVzdFpvb20oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVNYXJrZXIoIG1hcmtlciApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRfYWRkcmVzczogZS5zdWdnZXN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRfZ3BzOiBlLnN1Z2dlc3Rpb24ubGF0bG5nLmxhdCArICcsJyArIGUuc3VnZ2VzdGlvbi5sYXRsbmcubG5nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlT25DbGVhcigpIHtcbiAgICAgICAgICAgIG1hcC5zZXRWaWV3KCBuZXcgTC5MYXRMbmcoIDAsIDAgKSwgMSApO1xuICAgICAgICAgICAgbWFya2Vycy5mb3JFYWNoKCByZW1vdmVNYXJrZXIgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVPbkN1cnNvcmNoYW5nZWQoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIGZ1bmN0aW9uICggbWFya2VyLCBtYXJrZXJJbmRleCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcmtlckluZGV4ID09PSBlLnN1Z2dlc3Rpb25JbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE9wYWNpdHkoIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldFpJbmRleE9mZnNldCggMTAwMCApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRaSW5kZXhPZmZzZXQoIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE9wYWNpdHkoIDAuNSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJrZXIoIHN1Z2dlc3Rpb24gKSB7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gTC5tYXJrZXIoIHN1Z2dlc3Rpb24ubGF0bG5nLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjRcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIG1hcmtlci5hZGRUbyggbWFwICk7XG4gICAgICAgICAgICBtYXJrZXJzLnB1c2goIG1hcmtlciApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1hcmtlciggbWFya2VyICkge1xuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKCBtYXJrZXIgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdFpvb20oKSB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZUdyb3VwID0gTC5mZWF0dXJlR3JvdXAoIG1hcmtlcnMgKTtcbiAgICAgICAgICAgIG1hcC5maXRCb3VuZHMoIGZlYXR1cmVHcm91cC5nZXRCb3VuZHMoKS5wYWQoIDAuNSApLCB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBvblppcENvZGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gXCJDb2RlIHBvc3RhbCBpbnZhbGlkZS5cIjtcbiAgICAgICAgY29uc3Qgbm90RGVsaXZlcmFibGVNc2cgPSBcIk5vdXMgbmUgbGl2cm9ucyBtYWxoZXVyZXVzZW1lbnQgcGFzIGVuY29yZSB2b3RyZSB2aWxsZS4uLlwiO1xuICAgICAgICBsZXQgY2l0eUlkID0gZS50YXJnZXQuaWQgPT09ICdiX3ppcCcgPyAnYl9jaXR5JyA6ICdkX2NpdHknO1xuICAgICAgICBsZXQgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2l0eUlkKTtcbiAgICAgICAgaWYgKCAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMCAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPCA1KSB8fCBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMCB8fCBlLnRhcmdldC52YWx1ZS5sZW5ndGggPiA1ICkge1xuICAgICAgICAgICAgY2l0eUlucHV0LnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWUubGVuZ3RoICE9PSAwID8gZXJyb3JNc2cgOiAnJztcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXR5ID0gdGhpcy5zdGF0ZS5jaXRpZXMuZmluZChjaXR5ID0+IGNpdHkuemlwQ29kZSA9PT0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgY2l0eUlucHV0LnRleHRDb250ZW50ID0gKHR5cGVvZiBzZWxlY3RlZENpdHkgPT09ICd1bmRlZmluZWQnKSA/IGVycm9yTXNnIDogKChjaXR5SWQgPT09ICdkX2NpdHknICYmIHNlbGVjdGVkQ2l0eS5pc0RlbGl2ZXJhYmxlID09PSBmYWxzZSkgPyBub3REZWxpdmVyYWJsZU1zZyA6IHNlbGVjdGVkQ2l0eS5uYW1lKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQmlsbGluZ0FkZHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlkZW50aWNhbEJpbGxpbmdBZGRyZXNzOiAhdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdXNlckRldGFpbHMgPSB7IFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGJfYWRkcmVzczogdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gZmFsc2UgPyB0aGlzLnN0YXRlLmJfYWRkcmVzcyA6IHRoaXMuc3RhdGUuZF9hZGRyZXNzLFxuICAgICAgICAgICAgYl9hZGRyZXNzMjogdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gZmFsc2UgPyB0aGlzLnN0YXRlLmJfYWRkcmVzczIgOiB0aGlzLnN0YXRlLmRfYWRkcmVzczIsXG4gICAgICAgICAgICBiX3ppcENvZGU6IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX3ppcENvZGUgOiB0aGlzLnN0YXRlLmRfemlwQ29kZSxcbiAgICAgICAgICAgIGJfY2l0eTogdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gZmFsc2UgPyB0aGlzLnN0YXRlLmJfY2l0eSA6IHRoaXMuc3RhdGUuZF9jaXR5LFxuICAgICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy51cGRhdGVVc2VyKHVzZXJEZXRhaWxzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBDYXJ0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBsaC1jb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IHByb3BzLmRldGFpbHMucGFyZW50Lm5hbWUgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5wcm9kdWN0Lm5hbWUgfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiICAgIHhcIiArIHByb3BzLmRldGFpbHMucXVhbnRpdHkgfVxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnsgcHJvcHMuZGV0YWlscy5wcm9kdWN0LmNhdGVnb3J5ID8gcHJvcHMuZGV0YWlscy5wcm9kdWN0LmNhdGVnb3J5Lm5hbWUgOiBcIlwiIH08L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57IHByb3BzLmRldGFpbHMucHJvZHVjdC5wcmljZSB94oKsPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW0uaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBrZXk9e1wiY2FydGl0ZW0tXCIgKyBpdGVtLnByb2R1Y3QuaWR9IGRldGFpbHM9e2l0ZW19IC8+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpdGVtIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBSaWdodCBQYW5lbCBCbG9jayAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBvcmRlci1tZC0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Vm90cmUgcGFuaWVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBiYWRnZS1waWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5pdGVtcy5yZWR1Y2UoKGN1bXVsLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC5xdWFudGl0eSA9PSBudWxsID8gY3VtdWwgOiBjdW11bCArIGN1cnJlbnQucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKSArIFwiIGFydGljbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBtYi0zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheUl0ZW1zKCkgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgKEhUKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57ICBNYXRoLnJvdW5kKGl0ZW0udG90YWxUYXggKiAxMDApIC8gMTAwIH3igqw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRWQTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57IE1hdGgucm91bmQoaXRlbS50b3RhbFRvUGF5SFQgKiAxMDApIC8gMTAwIH3igqw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIChUVEMpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnsgTWF0aC5yb3VuZChpdGVtLnRvdGFsVG9QYXlUVEMgKiAxMDApIC8gMTAwIH3igqw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7IHBheW1lbnRfdXJsIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5QQVlFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGRyZXNzZXMgcGFuZWwgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggb3JkZXItbWQtMVwiIGlkPVwiYWRyZXNzZXMtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5lZWRzLXZhbGlkYXRpb25cIiBvblN1Ym1pdD17IHRoaXMub25TdWJtaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBVc2VyIGluZm8gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmaXJzdE5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17IHRoaXMuc3RhdGUudXNlcm5hbWUgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSByZXF1aXJlZC8+ICAgICB7Lyogc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7ZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQkhrbEVRVlE0RWFWVE8yNkRRQkQxb2hRV2FTMmxnOUp5YlorQUs3aE53eDJvSW9WZjRVUFEwTGoxRmRLa3RldklwZWw4QUtOVWtEY1dNeHBnU2FJRWFUVnYzc3g3dXp0aVRkdTJzLzk4RHl3T3czRHVlZDRXaG8vTTJhSXg1bFpWMWFFc3kwK3Fpd0hFTHlpK1l0bDBQUTY5U3hBeGtXSUE0Uk1SVGROc0tFNTlqdU1jdVpkNnhJQUZlWjZmR0NkSjhrWTR5N0tBdVRSTkdkN2p5RUJYc2RPUEUzYTBRR1BzbmlPbm5ZTU82N0xnU1FOOVQ0MUYyUUdyUVJSRkN3eXpvSUYycXlCdUtLYmNPZ1BYZFZlWTlyTVdnTnNqZjljY1llc0poazNmNWRZVDFIWDlnUjBMTFFSMzBUbmprVUVjeDJ1SXVTNFJuSSthajZzSlIwQU04QWF1bVBhTS9yUmVoeVdoWHFiRkFBOWtoMy84L052SHhBWUdBc1ovaWw4SWFsa0NMQmZOVkFBQUFBQkpSVTVFcmtKZ2dnPT0mcXVvdDspOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDsgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE4cHg7IGJhY2tncm91bmQtcG9zaXRpb246IDk4JSA1MCU7XCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW4gcHLDqW5vbSBlc3QgbsOpY2Vzc2FpcmUgcG91ciBsYSBsaXZyYWlzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXsgdGhpcy5zdGF0ZS5lbWFpbCB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXJjaSBkZSByZW5zZWlnbmVyIHVuIGVtYWlsIGFmaW4gZCfDqnRyZSBpbmZvcm3DqSBkZSDDqXRhcGVzIGRlIHZvdHJlIGNvbW1hbmRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGhvbmVcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT17IHRoaXMuc3RhdGUucGhvbmUgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyY2kgZGUgcmVuc2VpZ25lciB1biB0ZWwgYWZpbiBkJ8OqdHJlIGluZm9ybcOpIGRlIMOpdGFwZXMgZGUgdm90cmUgY29tbWFuZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWxpdmVyeSBhZGRyZXNzIHBhbmVsICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi00XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5BZHJlc3NlIGRlIGxpdnJhaXNvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcC1leGFtcGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNYXAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtbWFwXCI+QWRyZXNzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXQtbWFwXCIgbmFtZT1cImRfYWRkcmVzc1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5kX2FkZHJlc3MgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lcmNpIGRlIHNhaXNpciB1bmUgYWRyZXNzZSBkZSBsaXZyYWlzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBsw6ltZW50XCI+Q29tcGxlbWVudCBkJ2FkcmVzc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb21wbMOpbWVudFwiIG5hbWU9XCJkX2FkZHJlc3MyXCIgdmFsdWU9eyB0aGlzLnN0YXRlLmRfYWRkcmVzczIgfSBwbGFjZWhvbGRlcj1cIkFwcHQsIEltbWV1YmxlLCBEaWdpY29kZSwgZXRjXCIgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBcIj5DUDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZF96aXBcIiBuYW1lPVwiZF96aXBDb2RlXCIgIHZhbHVlPXsgdGhpcy5zdGF0ZS5kX3ppcENvZGUgfSBvbkNoYW5nZT17IHRoaXMub25aaXBDb2RlQ2hhbmdlIH0gcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgUG9zdGFsIG7DqWNlc3NhaXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJkX2NpdHlcIj57IHRoaXMuc3RhdGUuIGRfY2l0eS5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IHRoaXMuc3RhdGUuIGRfY2l0eS5uYW1lIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGzDqW1lbnRcIj5HUFM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImdwc1wiIG5hbWU9XCJkX2dwc1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5kX2dwcyB9IHBsYWNlaG9sZGVyPVwiXCIgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IG9yZGVyLW1kLTFcIiBpZD1cImFkcmVzc2VzLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZWVkcy12YWxpZGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVXNlciBpbmZvIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZmlyc3ROYW1lXCIgdmFsdWU9eyB0aGlzLnByb3BzLmlzYXV0aGVudGljYXRlZCA9PT0gZmFsc2UgPyBcIlwiIDogdXNlci51c2VybmFtZSB9IHJlcXVpcmVkPVwiXCIvPiAgICAgey8qIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCZxdW90O2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUJIa2xFUVZRNEVhVlRPMjZEUUJEMW9oUVdhUzJsZzlKeWJaK0FLN2hOd3gyb0lvVmY0VVBRMExqMUZkS2t0ZXZJcGVsOEFLTlVrRGNXTXhwZ1NhSUVhVFZ2M3N4N3V6dGlUZHUycy85OER5d093M0R1ZWQ0V2hvL00yYUl4NWxaVjFhRXN5MCtxaXdIRUx5aStZdGwwUFE2OVN4QXhrV0lBNFJNUlRkTnNLRTU5anVNY3VaZDZ4SUFGZVo2ZkdDZEo4a1k0eTdLQXVUUk5HZDdqeUVCWHNkT1BFM2EwUUdQc25pT25uWU1PNjdMZ1NRTjlUNDFGMlFHclFSUkZDd3l6b0lGMnF5QnVLS2JjT2dQWGRWZVk5ck1XZ05zamY5Y2NZZXNKaGszZjVkWVQxSFg5Z1IwTExRUjMwVG5qa1VFY3gydUl1UzRSbkkrYWo2c0pSMEFNOEFhdW1QYU0vclJlaHlXaFhxYkZBQTlraDMvOC9Odkh4QVlHQXNaL2lsOElhbGtDTEJmTlZBQUFBQUJKUlU1RXJrSmdnZz09JnF1b3Q7KTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7IGJhY2tncm91bmQtc2l6ZTogMTZweCAxOHB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCUgNTAlO1wiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW4gcHLDqW5vbSBlc3QgbsOpY2Vzc2FpcmUgcG91ciBsYSBsaXZyYWlzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgdmFsdWU9eyB0aGlzLnByb3BzLmlzYXV0aGVudGljYXRlZCA9PT0gZmFsc2UgPyBcIlwiIDogdXNlci5lbWFpbCB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lcmNpIGRlIHJlbnNlaWduZXIgdW4gZW1haWwgYWZpbiBkJ8OqdHJlIGluZm9ybcOpIGRlIMOpdGFwZXMgZGUgdm90cmUgY29tbWFuZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBob25lXCIgdmFsdWU9eyB0aGlzLnByb3BzLmlzYXV0aGVudGljYXRlZCA9PT0gZmFsc2UgPyBcIlwiIDogKHR5cGVvZiB1c2VyLm1ldGFkYXRhLnBob25lICE9PSAndW5kZWZpbmVkJyA/IHVzZXIubWV0YWRhdGEucGhvbmUuZmllbGQgOiBcIlwiKSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lcmNpIGRlIHJlbnNlaWduZXIgdW4gdGVsIGFmaW4gZCfDqnRyZSBpbmZvcm3DqSBkZSDDqXRhcGVzIGRlIHZvdHJlIGNvbW1hbmRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERlbGl2ZXJ5IGFkZHJlc3MgcGFuZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1iLTRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5BZHJlc3NlIGRlIGxpdnJhaXNvbjwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcC1leGFtcGxlLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtbWFwXCI+UnVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgaWQ9XCJpbnB1dC1tYXBcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNhaXNpciBub20gZCd1bmUgcnVlIDpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wbMOpbWVudFwiPkNvbXBsZW1lbnQgZCdhZHJlc3NlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbXBsw6ltZW50XCIgdmFsdWU9XCJcIiByZXF1aXJlZD1cIlwiIHBsYWNlaG9sZGVyPVwiQXBwdCwgSW1tZXVibGUsIERpZ2ljb2RlLCBldGNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBsw6ltZW50XCI+R1BTPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJncHNcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPVwiXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJpbGxpbmcgYWRkcmVzcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cIm1iLTRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPkFkcmVzc2UgZGUgZmFjdHVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggY3VzdG9tLWNoZWNrYm94LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBjaGVja2VkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCI+SWRlbnRpcXVlIMOgIGFkcmVzc2UgZGUgbGl2cmFpc29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkcmVzc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYWRkcmVzc1wiIHZhbHVlPXsgIXRoaXMucHJvcHMuaXNhdXRoZW50aWNhdGVkID8gXCJcIiA6IHVzZXIubWV0YWRhdGEuYmlsbGluZzEuZmllbGQgfSByZXF1aXJlZD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lcmNpIGRlIHNhaXNpciB1bmUgYWRyZXNzZSBkZSBsaXZyYWlzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwXCI+Q1A8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiemlwXCIgdmFsdWU9eyAhdGhpcy5wcm9wcy5pc2F1dGhlbnRpY2F0ZWQgPyBcIlwiIDogdXNlci5tZXRhZGF0YS5iaWxsaW5nX2NpdHkuemlwQ29kZSB9IHJlcXVpcmVkPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBQb3N0YWwgbsOpY2Vzc2FpcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzczJcIj5BZHJlc3NlIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPihPcHRpb25lbCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImFkZHJlc3MyXCIgdmFsdWU9eyAhdGhpcy5wcm9wcy5pc2F1dGhlbnRpY2F0ZWQgPyBcIlwiIDogdXNlci5tZXRhZGF0YS5iaWxsaW5nMi5maWVsZCB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmlsbGluZ19jaXR5XCI+Q1A8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYmlsbGluZ19jaXR5XCIgdmFsdWU9eyAhdGhpcy5wcm9wcy5pc2F1dGhlbnRpY2F0ZWQgPyBcIlwiIDogdXNlci5tZXRhZGF0YS5iaWxsaW5nX2NpdHkubmFtZSB9IHJlcXVpcmVkPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBQb3N0YWwgbsOpY2Vzc2FpcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1iLTRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPkFkcmVzc2UgZGUgZmFjdHVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggY3VzdG9tLWNoZWNrYm94LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJiaWxsaW5nQWRkcmVzcy1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzc30gb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUJpbGxpbmdBZGRyZXNzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIj5JZGVudGlxdWUgw6AgYWRyZXNzZSBkZSBsaXZyYWlzb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IHRydWUgPyA8cD48L3A+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZHJlc3NlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYWRkcmVzc1wiIG5hbWU9XCJiX2FkZHJlc3NcIiB2YWx1ZT17IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX2FkZHJlc3MgOiB0aGlzLnN0YXRlLmRfYWRkcmVzcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXJjaSBkZSBzYWlzaXIgdW5lIGFkcmVzc2UgZGUgbGl2cmFpc29uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGzDqW1lbnRcIj5Db21wbGVtZW50IGQnYWRyZXNzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb21wbMOpbWVudFwiIG5hbWU9XCJiX2FkZHJlc3MyXCIgdmFsdWU9eyB0aGlzLnN0YXRlLmlkZW50aWNhbEJpbGxpbmdBZGRyZXNzID09PSBmYWxzZSA/IHRoaXMuc3RhdGUuYl9hZGRyZXNzMiA6IHRoaXMuc3RhdGUuZF9hZGRyZXNzMiB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHBsYWNlaG9sZGVyPVwiQXBwdCwgSW1tZXVibGUsIGV0Y1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwXCI+Q1A8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJiX3ppcFwiIG5hbWU9XCJiX3ppcENvZGVcIiB2YWx1ZT17IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX3ppcENvZGUgOiB0aGlzLnN0YXRlLmRfemlwQ29kZSB9IG9uQ2hhbmdlPXsgdGhpcy5vblppcENvZGVDaGFuZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBQb3N0YWwgbsOpY2Vzc2FpcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJiX2NpdHlcIj57IHRoaXMuc3RhdGUuYl9jaXR5Lm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IHRoaXMuc3RhdGUuIGRfY2l0eS5uYW1lIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIGl0ZW06IHN0YXRlLml0ZW0sXG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICB9KTtcbiAgXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMgKShDaGVja291dCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tICcuLi9hY3Rpb25zL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiOyBcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBtc2c6IG51bGxcbiAgICAgIH07XG4gICAgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgbG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsZWFyRXJyb3JzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgfTtcbiAgICBcbiAgICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmR9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogJycsIHBhc3N3b3JkOiAnJ30pO1xuICAgICAgICB0aGlzLnByb3BzLmxvZ2luKHVzZXIpO1xuICAgICAgfTtcblxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCBjb2wtbWQtNCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1pblwiPjwvaT5TZSBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1zZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e3RoaXMuc3RhdGUubXNnfTwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCkgPyBcIlwiIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBsb2dnZWQgaW4gYXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiIFwiICsgdGhpcy5wcm9wcy51c2VyLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3sgcGF0aCgnbG9nb3V0JykgfX1cIj4gTG9nb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LWljb24tbGVmdCBtLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgYXV0b0ZvY3VzIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC1pY29uLWxlZnQgbS1iLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNb3QgZGUgcGFzc2VcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgbS10LTEwXCIgPlNFIENPTk5FQ1RFUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLWluXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXMgZW5jb3JlIGNsaWVudCA/PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiIGhyZWY9XCIvcmVnaXN0ZXJcIiByb2xlPVwiYnV0dG9uXCI+Q1JFRVIgVU4gQ09NUFRFPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89Jy8nLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICBlcnJvcjogc3RhdGUuZXJyb3JcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW4sIGNsZWFyRXJyb3JzIH0pKExvZ2luKTtcblxuey8qIDxkaXYgaWQ9XCJmYi1yb290XCI+PC9kaXY+XG4gICAgPHNjcmlwdCBhc3luYyBkZWZlciBjcm9zc29yaWdpbj1cImFub255bW91c1wiIHNyYz1cImh0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZnJfRlIvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12NC4wJmFwcElkPTUwMjA4NDc4NzAwODgxNSZhdXRvTG9nQXBwRXZlbnRzPTFcIj48L3NjcmlwdD5cbjxkaXYgY2xhc3NOYW1lPVwiZmItbG9naW4tYnV0dG9uXCIgZGF0YS13aWR0aD1cIlwiIGRhdGEtc2l6ZT1cIm1lZGl1bVwiIGRhdGEtYnV0dG9uLXR5cGU9XCJsb2dpbl93aXRoXCIgZGF0YS1hdXRvLWxvZ291dC1saW5rPVwidHJ1ZVwiIGRhdGEtdXNlLWNvbnRpbnVlLWFzPVwidHJ1ZVwiPjwvZGl2PlxuXG48ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICA8c3Bhbj5vdTwvc3Bhbj5cbjwvZGl2PiAqL30iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgbG9nb3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIH07XG5cbiAgICBoYW5kbGVMb2dvdXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgZGlzcGxheUFub255bW91c1ZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGxldCBBbm9ueW1vdXMgPSAoKSA9PiA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5TZSBjb25uZWN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgcmV0dXJuIDxBbm9ueW1vdXMgLz5cbiAgICB9XG5cbiAgICBkaXNwbGF5TG9nZ2VkVmlldyA9ICh1c2VyKSA9PiB7XG4gICAgICAgIGxldCBJZGVudGlmaWVkID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdXNlci51c2VybmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIHRvPVwiL2FjY291bnRcIj4gIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPk1vbiBwcm9maWw8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZW9mIHByb3BzLnVzZXIgPT09ICd1bmRlZmluZWQnID8gXCJcIiA6IChwcm9wcy51c2VyLnJvbGVzLmluZGV4T2YoJ1JPTEVfU1VQUExJRVInKSA9PT0gLTEgJiYgcHJvcHMudXNlci5yb2xlcy5pbmRleE9mKCdST0xFX0FETUlOJykgPT09IC0xKSA/IFwiXCIgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnc3RvY2tfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveC1vcGVuXCI+PC9pPlN0b2NrczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnZ2V0X29yZGVyJykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXNoLXJlZ2lzdGVyXCI+PC9pPk9yZGVyczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZW9mIHByb3BzLnVzZXIgPT09ICd1bmRlZmluZWQnID8gXCJcIiA6IChwcm9wcy51c2VyLnJvbGVzLmluZGV4T2YoJ1JPTEVfREVMSVZFUkVSJykgPT09IC0xICYmIHByb3BzLnVzZXIucm9sZXMuaW5kZXhPZignUk9MRV9BRE1JTicpID09PSAtMSkgPyBcIlwiIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2RlbGl2ZXJlcicpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJ1Y2tcIj48L2k+TGl2cmFpc29uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZW9mIHByb3BzLnVzZXIgPT09ICd1bmRlZmluZWQnID8gXCJcIiA6IChwcm9wcy51c2VyLnJvbGVzLmluZGV4T2YoJ1JPTEVfQURNSU4nKSA9PT0gLTEpID8gXCJcIiA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCd1c2VyX2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiPjwvaT5Vc2VyczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnY2l0eV9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2l0eVwiPjwvaT5DaXR5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCdwcm9kdWN0X2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11dGVuc2lsc1wiPjwvaT5Qcm9kdWl0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgndmFyaWFudF9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNvcnRcIj48L2k+VmFyaWFudGVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCdjYXRlZ29yeV9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29sdW1uc1wiPjwvaT5DYXTDqWdvcmllczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgndHZhX2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxjdWxhdG9yXCI+PC9pPlRheGVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCdhbGxlcmdlbl9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+QWxsZXJnw6huZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgb25DbGljaz17IHRoaXMuaGFuZGxlTG9nb3V0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT5TZSBkw6ljb25uZWN0ZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxJZGVudGlmaWVkIHVzZXI9e3VzZXJ9Lz5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBpdGVtIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJhY2tkcm9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImxvZ29cIj4gPGltZyBzcmM9XCJ1cGxvYWRzL2xvZ29zL2NsaWtFYXQucG5nXCIgYWx0PVwiQ2xpayBFYXQgTG9nb1wiIGhlaWdodD1cIjUwcHhcIi8+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXNBdXRoZW50aWNhdGVkID8gdGhpcy5kaXNwbGF5TG9nZ2VkVmlldyh1c2VyKSA6IHRoaXMuZGlzcGxheUFub255bW91c1ZpZXcoKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiPjwvaT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e3BhdGgoJ2dldF9jYXJ0JykgfX1cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5pdGVtcy5sZW5ndGggPD0gMCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5pdGVtcy5yZWR1Y2UoKGN1bXVsLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC5xdWFudGl0eSA9PSBudWxsID8gY3VtdWwgOiBjdW11bCArIGN1cnJlbnQucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgaWQ9XCJjYXJ0LXN1bW1hcnlcIj48Q2FydC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIuLi5cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBjbG9zZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS5hdXRoLmlzQXV0aGVudGljYXRlZCxcbiAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgbG9nb3V0IH0pKE5hdmJhcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRJdGVtcywgYWRkSXRlbSwgZGVsZXRlSXRlbSB9IGZyb20gJy4uL2FjdGlvbnMvaXRlbUFjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdCB9IGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdEFjdGlvbnMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2V0UHJvZHVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgYWRkSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcHJvZHVjdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFByb2R1Y3QodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrID0gKHByb2R1Y3QsIHZhcmlhbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHsgcHJvZHVjdDogcHJvZHVjdCwgdmFyaWFudDogdmFyaWFudCwgcXVhbnRpdHk6IDEgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgIH07XG5cbiAgICBkaXNwbGF5QWxsZXJnZW5zID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IEFsbGVyZ2VuID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMubmFtZSArIFwiIFwiIH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9kdWN0LmFsbGVyZ2Vucykge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuYWxsZXJnZW5zLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWxsZXJnZW5zLm1hcCggKGFsbGVyZ2VuKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuYWxsZXJnZW5zLmluZGV4T2YoYWxsZXJnZW4pID09IDAgPyA8c3Bhbj5BbGxlcmfDqG5lcyA6ICA8QWxsZXJnZW4gZGV0YWlscz17YWxsZXJnZW59IC8+PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4+PEFsbGVyZ2VuIGRldGFpbHM9e2FsbGVyZ2VufSAvPjwvc3Bhbj4gIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxzcGFuPk5lIGNvbnRpZW50IHBhcyBkZSBwcm9kdWl0cyBhbGxlcmfDqG5lcy48L3NwYW4+XG4gICAgfVxuXG4gICAgZGlzcGxheVZhcmlhbnRzID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IFZhcmlhbnQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17XCJ2YXJpYW50LWl0ZW0tXCIgKyBwcm9wcy5kZXRhaWxzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG9sbHlcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn0ge3Byb3BzLmRldGFpbHMuc3RvY2sucXVhbnRpdHl9IHtcIiBcIn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXRhaWxzLnN0b2NrLnF1YW50aXR5ID4gNSA/IFwiXCIgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWNhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJQbHVzIHF1ZSBcIiArIHByb3BzLmRldGFpbHMuc3RvY2sucXVhbnRpdHkgKyBcIiBlbiBzdG9jayAhXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5zdG9jay5xdWFudGl0eSA8PSAwID8gPHNwYW4+RW4gcnVwdHVyZSBkZSBzdG9jayAhPC9zcGFuPiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhwcm9kdWN0LCBwcm9wcy5kZXRhaWxzKX0gaWQ9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5uYW1lfSAgw6Age3Byb3BzLmRldGFpbHMucHJpY2V94oKsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2R1Y3QudmFyaWFudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnZhcmlhbnRzLm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e1widmFyaWFudC1zcGFuLVwiICsgdmFyaWFudC5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYXJpYW50IGRldGFpbHM9e3ZhcmlhbnR9IHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlOdXRyaXRpb25hbHMgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgTnV0cml0aW9uYWxzID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+dmFsZXVycyBudXRyaXRpb25uZWxsZXMgbW95ZW5uZXMgcG91ciAxMDBnPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5FbmVyZ2llIChLSikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5rSiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+RW5lcmdpZSAoS0NhbCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5LQ2FsIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5Qcm90ZWluZXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5wcm90ZWluIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5DYXJib2h5ZHJhdGVzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuY2FyYm9oeWRyYXRlcyB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U3VjcmUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5zdWdhciB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+TWF0acOocmUgZ3Jhc3NlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuZmF0IH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5kb250IGFjaWRlcyBncmFzIHNhdHVyw6lzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMudHJhbnNBRyB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U2VsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc2FsdCB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZHVjdC5udXRyaXRpb25hbHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TnV0cml0aW9uYWxzIGRldGFpbHM9e3Byb2R1Y3QubnV0cml0aW9uYWxzfSAvPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb3BzLnByb2R1Y3Quc2VsZWN0ZWQgO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC10LTMwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57IHByb2R1Y3QubmFtZSB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11dGVuc2lsc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5jYXRlZ29yeSA/IHByb2R1Y3QuY2F0ZWdvcnkubmFtZSA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgdGhpcy5kaXNwbGF5QWxsZXJnZW5zKHByb2R1Y3QpIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCFwcm9kdWN0LnBpY3R1cmUgfHwgcHJvZHVjdC5waWN0dXJlID09PSBcIlwiICkgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiIHNyYz17ICcuLi91cGxvYWRzL3BpY3R1cmVzLycgKyBwcm9kdWN0LnBpY3R1cmUuYjY0IH0gYWx0PXsgcHJvZHVjdC5waWN0dXJlLmI2NCB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5VmFyaWFudHMocHJvZHVjdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5TnV0cml0aW9uYWxzKHByb2R1Y3QpIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyUgaWYgaXNfZ3JhbnRlZCgnUk9MRV9BRE1JTicpICV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7eyBwYXRoKCdwcm9kdWN0X2VkaXQnLCB7J2lkJzogcHJvZHVjdC5pZH0pIH19XCI+ZWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW5jbHVkZSgncHJvZHVjdC9fZGVsZXRlX2Zvcm0uaHRtbC50d2lnJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyUgZW5kaWYgJX0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdDogc3RhdGUucHJvZHVjdCxcbiAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldEl0ZW1zLCBkZWxldGVJdGVtLCBnZXRQcm9kdWN0LCBhZGRJdGVtIH1cbiAgKShQcm9kdWN0RGV0YWlscyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdEFjdGlvbnMnO1xuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4uL2FjdGlvbnMvaXRlbUFjdGlvbnMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2V0UHJvZHVjdHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGFkZEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayA9IChwcm9kdWN0LCB2YXJpYW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IHByb2R1Y3Q6IHByb2R1Y3QsIHZhcmlhbnQ6IHZhcmlhbnQsIHF1YW50aXR5OiAxIH07XG4gICAgICAgIHRoaXMucHJvcHMuYWRkSXRlbShuZXdJdGVtKTtcbiAgICB9O1xuXG4gICAgZGlzcGxheVZhcmlhbnRzID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IFZhcmlhbnQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e1widmFyaWFudC1pdGVtLVwiICsgcHJvcHMuZGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG9sbHlcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifSB7cHJvcHMuZGV0YWlscy5zdG9jay5xdWFudGl0eX0ge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRldGFpbHMuc3RvY2sucXVhbnRpdHkgPD0gMCA/IDxzcGFuPkVuIHJ1cHR1cmUgZGUgc3RvY2sgITwvc3Bhbj4gOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhwcm9kdWN0LCBwcm9wcy5kZXRhaWxzKX0gaWQ9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRldGFpbHMubmFtZX0gIMOgIHtwcm9wcy5kZXRhaWxzLnByaWNlfeKCrFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9kdWN0LnZhcmlhbnRzLm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtcInZhcmlhbnQtc3Bhbi1cIiArIHZhcmlhbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICA8VmFyaWFudCBkZXRhaWxzPXt2YXJpYW50fSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IHJlYWN0LXByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17IFwiL3Nob3cvXCIgKyBwcm9wcy5kZXRhaWxzLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmRldGFpbHMucGljdHVyZSAhPT0gbnVsbCAmJiBwcm9wcy5kZXRhaWxzLnBpY3R1cmUgIT09IFwiXCIgJiYgdHlwZW9mIHByb3BzLmRldGFpbHMucGljdHVyZSAhPT0gJ3VuZGVmaW5lZCcpID8gPGltZyBzcmM9eyAndXBsb2Fkcy9waWN0dXJlcy8nICsgcHJvcHMuZGV0YWlscy5waWN0dXJlLmI2NCB9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD17IHByb3BzLmRldGFpbHMucGljdHVyZS5iNjQgfS8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e1wicHJvZHVjdC1pdGVtLVwiICsgcHJvcHMuZGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgXCIvc2hvdy9cIiArIHByb3BzLmRldGFpbHMuaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJ1Y2tcIj48L2k+IHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmV3IERhdGUocHJvcHMuZGV0YWlscy5zdXBwbGllci5wcmVwYXJhdGlvblBlcmlvZCkuZ2V0TWludXRlcygpIH1tbiBAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc3VwcGxpZXIubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheVZhcmlhbnRzKHByb3BzLmRldGFpbHMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcm9kdWN0LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBrZXk9e1wicHJvZHVjdC1cIiArIHByb2R1Y3QuaWR9IGRldGFpbHM9e3Byb2R1Y3R9IC8+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLXQtMzBcIiBpZD1cInJlYWN0LXByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheVByb2R1Y3RzKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0OiBzdGF0ZS5wcm9kdWN0LFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldFByb2R1Y3RzLCBhZGRJdGVtIH1cbiAgKShQcm9kdWN0TGlzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBsb2dpbiwgdXBkYXRlVXNlciB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tICcuLi9hY3Rpb25zL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7IFxuaW1wb3J0IHsgdG9rZW5Db25maWcgfSBmcm9tICcuLi9oZWxwZXJzL3NlY3VyaXR5JztcblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBcbntcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyIHx8IHt9LFxuICAgICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIHx8ICcnLFxuICAgICAgICBlbWFpbDogdGhpcy5wcm9wcy51c2VyLmVtYWlsIHx8ICcnLFxuICAgICAgICBwaG9uZTogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAncGhvbmVfbnVtYmVyJykpID09PSAndW5kZWZpbmVkJyA/ICcnIDogXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdwaG9uZV9udW1iZXInKSkuZmllbGQgfHwgJycsXG4gICAgICAgIGRfYWRkcmVzczogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfbGluZV8xJykpID09PSAndW5kZWZpbmVkJyA/ICcnIDpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2RlbGl2ZXJ5X2xpbmVfMScpKS5maWVsZCB8fCAnJyxcbiAgICAgICAgZF9hZGRyZXNzMjogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfbGluZV8yJykpID09PSAndW5kZWZpbmVkJyA/ICcnIDogXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdkZWxpdmVyeV9saW5lXzInKSkuZmllbGQgfHwgJycsXG4gICAgICAgIGRfemlwQ29kZTogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfY2l0eScpKSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdkZWxpdmVyeV9jaXR5JykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBiX2FkZHJlc3M6IHR5cGVvZiB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8xJykpID09PSAndW5kZWZpbmVkJyA/ICcnIDpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhZGF0YSA9PiAobWV0YWRhdGEudHlwZSA9PT0gJ2JpbGxpbmdfbGluZV8xJykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBiX2FkZHJlc3MyOiB0eXBlb2YgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdiaWxsaW5nX2xpbmVfMicpKSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdiaWxsaW5nX2xpbmVfMicpKS5maWVsZCB8fCAnJyxcbiAgICAgICAgYl96aXBDb2RlOiB0eXBlb2YgdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YWRhdGEgPT4gKG1ldGFkYXRhLnR5cGUgPT09ICdiaWxsaW5nX2NpdHknKSkgPT09ICd1bmRlZmluZWQnID8gJycgOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnYmlsbGluZ19jaXR5JykpLmZpZWxkIHx8ICcnLFxuICAgICAgICBkX2dwczogdHlwZW9mIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfZ3BzJykpID09PSAndW5kZWZpbmVkJyA/ICctMjEuMzI5NTE5LDU1LjQ3MTYxNycgOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlci5tZXRhZGF0YS5maW5kKG1ldGFkYXRhID0+IChtZXRhZGF0YS50eXBlID09PSAnZGVsaXZlcnlfZ3BzJykpLmZpZWxkIHx8ICctMjEuMzI5NTE5LDU1LjQ3MTYxNycsXG4gICAgICAgIGlkZW50aWNhbEJpbGxpbmdBZGRyZXNzOiB0cnVlLFxuICAgICAgICBkX2NpdHk6ICcnLFxuICAgICAgICBiX2NpdHk6ICcnLFxuICAgICAgICBjaXRpZXM6IFtdXG4gICAgfTtcbiAgICBcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBsb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgdXBkYXRlVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgY2xlYXJFcnJvcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdE1hcCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iX2FkZHJlc3MgPT09IHRoaXMuc3RhdGUuZF9hZGRyZXNzICYmIHRoaXMuc3RhdGUuYl9hZGRyZXNzMiA9PT0gdGhpcy5zdGF0ZS5kX2FkZHJlc3MyICYmIHRoaXMuc3RhdGUuYl96aXBDb2RlID09PSB0aGlzLnN0YXRlLmRfemlwQ29kZSApXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGlkZW50aWNhbEJpbGxpbmdBZGRyZXNzOiB0cnVlIH0gKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3M6IGZhbHNlIH0gKTtcbiAgICAgICAgXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9jaXRpZXMnLCB0b2tlbkNvbmZpZygpKVxuICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzIDogcmVzLmRhdGFbJ2h5ZHJhOm1lbWJlciddIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9kX2NpdHkgPSB0aGlzLnByb3BzLnVzZXIubWV0YWRhdGEuZmluZChtZXRhID0+IG1ldGEudHlwZSA9PT0gJ2RlbGl2ZXJ5X2NpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJfYl9jaXR5ID0gdGhpcy5wcm9wcy51c2VyLm1ldGFkYXRhLmZpbmQobWV0YSA9PiBtZXRhLnR5cGUgPT09ICdiaWxsaW5nX2NpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRfY2l0eSA9ICh0eXBlb2YgdXNlcl9kX2NpdHkgIT09ICd1bmRlZmluZWQnKSA/IHJlcy5kYXRhWydoeWRyYTptZW1iZXInXS5maW5kKGNpdHkgPT4gY2l0eS56aXBDb2RlID09PSBwYXJzZUludCh1c2VyX2RfY2l0eS5maWVsZCkpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiX2NpdHkgPSAodXNlcl9iX2NpdHkgPT09IHVzZXJfZF9jaXR5KSA/IGRfY2l0eSA6ICgodHlwZW9mIHVzZXJfYl9jaXR5ICE9PSAndW5kZWZpbmVkJykgPyByZXMuZGF0YVsnaHlkcmE6bWVtYmVyJ10uZmluZChjaXR5ID0+IGNpdHkuemlwQ29kZSA9PT0gcGFyc2VJbnQodXNlcl9iX2NpdHkuZmllbGQpKSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkX2NpdHk6IGRfY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJfY2l0eTogYl9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluaXRNYXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtYXJrZXJzID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZF9ncHMpO1xuICAgICAgICBsZXQgW2xhdCwgbG9uZ10gPSB0aGlzLnN0YXRlLmRfZ3BzLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF0aXR1ZGUgPSBcIiArIGxhdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRlID0gXCIgKyBsb25nKTtcbiAgICAgICAgbGV0IHBsYWNlc0F1dG9jb21wbGV0ZSA9IHBsYWNlcygge1xuICAgICAgICAgICAgYXBwSWQgICAgIDogcHJvY2Vzcy5lbnYuQUxHT0xJQV9BUFBJRCxcbiAgICAgICAgICAgIGFwaUtleSAgICA6IHByb2Nlc3MuZW52LkFMR09MSUFfQVBJS0VZLFxuICAgICAgICAgICAgY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNpbnB1dC1tYXAnICksXG4gICAgICAgIH0gKS5jb25maWd1cmUoIHtcbiAgICAgICAgICAgIGNvdW50cmllcyAgICAgICAgIDogWydmciddLFxuICAgICAgICAgICAgdXNlRGV2aWNlTG9jYXRpb24gOiBmYWxzZVxuICAgICAgICB9ICk7XG5cbiAgICAgICAgbGV0IG1hcCA9IEwubWFwKCAnbWFwLWV4YW1wbGUtY29udGFpbmVyJywge1xuICAgICAgICAgICAgc2Nyb2xsV2hlZWxab29tIDogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21Db250cm9sICAgICA6IHRydWVcbiAgICAgICAgfSApO1xuXG4gICAgICAgIGxldCBvc21MYXllciA9IG5ldyBMLlRpbGVMYXllciggJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgICAgICAgICAgbWluWm9vbSAgICAgOiA4LFxuICAgICAgICAgICAgbWF4Wm9vbSAgICAgOiAxOSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uIDogJ01hcCDCqSA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+J1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgbGV0IHVzZXJBZGRyZXNzID0gbmV3IEwuTGF0TG5nKCBsYXQsIGxvbmcpO1xuICAgICAgICBtYXAuc2V0VmlldyggdXNlckFkZHJlc3MsIDEgKTtcbiAgICAgICAgbWFwLmFkZExheWVyKCBvc21MYXllciApO1xuICAgICAgICBsZXQgbWFya2VyID0gTC5tYXJrZXIoIHVzZXJBZGRyZXNzLCB7b3BhY2l0eTogLjR9ICk7XG4gICAgICAgIG1hcmtlci5hZGRUbyggbWFwICk7XG4gICAgICAgIG1hcmtlcnMucHVzaCggbWFya2VyICk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRfZ3BzICE9PSAnLTIxLjMyOTUxOSw1NS40NzE2MTcnKSB7XG4gICAgICAgICAgICBmaW5kQmVzdFpvb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbiggJ3N1Z2dlc3Rpb25zJyAgLCBoYW5kbGVPblN1Z2dlc3Rpb25zLmJpbmQodGhpcykpO1xuICAgICAgICBwbGFjZXNBdXRvY29tcGxldGUub24oICdjdXJzb3JjaGFuZ2VkJywgaGFuZGxlT25DdXJzb3JjaGFuZ2VkLmJpbmQodGhpcykpO1xuICAgICAgICBwbGFjZXNBdXRvY29tcGxldGUub24oICdjaGFuZ2UnICAgICAgICwgaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbiggJ2NsZWFyJyAgICAgICAgLCBoYW5kbGVPbkNsZWFyLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU9uU3VnZ2VzdGlvbnMoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIHJlbW92ZU1hcmtlciApO1xuICAgICAgICAgICAgbWFya2VycyA9IFtdO1xuICAgICAgICAgICAgaWYgKCBlLnN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0VmlldyggbmV3IEwuTGF0TG5nKCAwLCAwICksIDEgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnN1Z2dlc3Rpb25zLmZvckVhY2goIGFkZE1hcmtlciApO1xuICAgICAgICAgICAgZmluZEJlc3Rab29tKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlT25DaGFuZ2UoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIGZ1bmN0aW9uICggbWFya2VyLCBtYXJrZXJJbmRleCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcmtlckluZGV4ID09PSBlLnN1Z2dlc3Rpb25JbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VycyA9IFttYXJrZXJdO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0T3BhY2l0eSggMSApO1xuICAgICAgICAgICAgICAgICAgICBmaW5kQmVzdFpvb20oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVNYXJrZXIoIG1hcmtlciApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRfYWRkcmVzczogZS5zdWdnZXN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRfZ3BzOiBlLnN1Z2dlc3Rpb24ubGF0bG5nLmxhdCArICcsJyArIGUuc3VnZ2VzdGlvbi5sYXRsbmcubG5nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlT25DbGVhcigpIHtcbiAgICAgICAgICAgIG1hcC5zZXRWaWV3KCBuZXcgTC5MYXRMbmcoIDAsIDAgKSwgMSApO1xuICAgICAgICAgICAgbWFya2Vycy5mb3JFYWNoKCByZW1vdmVNYXJrZXIgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVPbkN1cnNvcmNoYW5nZWQoIGUgKSB7XG4gICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goIGZ1bmN0aW9uICggbWFya2VyLCBtYXJrZXJJbmRleCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIG1hcmtlckluZGV4ID09PSBlLnN1Z2dlc3Rpb25JbmRleCApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE9wYWNpdHkoIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldFpJbmRleE9mZnNldCggMTAwMCApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRaSW5kZXhPZmZzZXQoIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE9wYWNpdHkoIDAuNSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJrZXIoIHN1Z2dlc3Rpb24gKSB7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gTC5tYXJrZXIoIHN1Z2dlc3Rpb24ubGF0bG5nLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjRcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIG1hcmtlci5hZGRUbyggbWFwICk7XG4gICAgICAgICAgICBtYXJrZXJzLnB1c2goIG1hcmtlciApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1hcmtlciggbWFya2VyICkge1xuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKCBtYXJrZXIgKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdFpvb20oKSB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZUdyb3VwID0gTC5mZWF0dXJlR3JvdXAoIG1hcmtlcnMgKTtcbiAgICAgICAgICAgIG1hcC5maXRCb3VuZHMoIGZlYXR1cmVHcm91cC5nZXRCb3VuZHMoKS5wYWQoIDAuNSApLCB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uWmlwQ29kZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBcIkNvZGUgcG9zdGFsIGludmFsaWRlLlwiO1xuICAgICAgICBjb25zdCBub3REZWxpdmVyYWJsZU1zZyA9IFwiTm91cyBuZSBsaXZyb25zIG1hbGhldXJldXNlbWVudCBwYXMgZW5jb3JlIHZvdHJlIHZpbGxlLi4uXCI7XG4gICAgICAgIGxldCBjaXR5SWQgPSBlLnRhcmdldC5pZCA9PT0gJ2JfemlwJyA/ICdiX2NpdHknIDogJ2RfY2l0eSc7XG4gICAgICAgIGxldCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaXR5SWQpO1xuICAgICAgICBpZiAoIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwICYmIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDUpIHx8IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAwIHx8IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDUgKSB7XG4gICAgICAgICAgICBjaXR5SW5wdXQudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZS5sZW5ndGggIT09IDAgPyBlcnJvck1zZyA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZENpdHkgPSB0aGlzLnN0YXRlLmNpdGllcy5maW5kKGNpdHkgPT4gY2l0eS56aXBDb2RlID09PSBwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICBjaXR5SW5wdXQudGV4dENvbnRlbnQgPSAodHlwZW9mIHNlbGVjdGVkQ2l0eSA9PT0gJ3VuZGVmaW5lZCcpID8gZXJyb3JNc2cgOiAoKGNpdHlJZCA9PT0gJ2RfY2l0eScgJiYgc2VsZWN0ZWRDaXR5LmlzRGVsaXZlcmFibGUgPT09IGZhbHNlKSA/IG5vdERlbGl2ZXJhYmxlTXNnIDogc2VsZWN0ZWRDaXR5Lm5hbWUpO1xuICAgIH07XG5cbiAgICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vIGhhbmRsZUxvZ2luID0gZSA9PiB7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZH07XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiAnJywgcGFzc3dvcmQ6ICcnfSk7XG4gICAgLy8gICAgIHRoaXMucHJvcHMubG9naW4odXNlcik7XG4gICAgLy8gfTtcblxuICAgIGhhbmRsZUJpbGxpbmdBZGRyZXNzID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpZGVudGljYWxCaWxsaW5nQWRkcmVzczogIXRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHVzZXJEZXRhaWxzID0geyBcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICBiX2FkZHJlc3M6IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX2FkZHJlc3MgOiB0aGlzLnN0YXRlLmRfYWRkcmVzcyxcbiAgICAgICAgICAgIGJfYWRkcmVzczI6IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX2FkZHJlc3MyIDogdGhpcy5zdGF0ZS5kX2FkZHJlc3MyLFxuICAgICAgICAgICAgYl96aXBDb2RlOiB0aGlzLnN0YXRlLmlkZW50aWNhbEJpbGxpbmdBZGRyZXNzID09PSBmYWxzZSA/IHRoaXMuc3RhdGUuYl96aXBDb2RlIDogdGhpcy5zdGF0ZS5kX3ppcENvZGUsXG4gICAgICAgICAgICBiX2NpdHk6IHRoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3MgPT09IGZhbHNlID8gdGhpcy5zdGF0ZS5iX2NpdHkgOiB0aGlzLnN0YXRlLmRfY2l0eSxcbiAgICAgICAgICAgIGNpdGllczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih1c2VyRGV0YWlscyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGRyZXNzZXMgcGFuZWwgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggb3JkZXItbWQtMVwiIGlkPVwiYWRyZXNzZXMtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5lZWRzLXZhbGlkYXRpb25cIiBvblN1Ym1pdD17IHRoaXMub25TdWJtaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBVc2VyIGluZm8gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Tm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmaXJzdE5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17IHRoaXMuc3RhdGUudXNlcm5hbWUgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfS8+ICAgICB7Lyogc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJnF1b3Q7ZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQkhrbEVRVlE0RWFWVE8yNkRRQkQxb2hRV2FTMmxnOUp5YlorQUs3aE53eDJvSW9WZjRVUFEwTGoxRmRLa3RldklwZWw4QUtOVWtEY1dNeHBnU2FJRWFUVnYzc3g3dXp0aVRkdTJzLzk4RHl3T3czRHVlZDRXaG8vTTJhSXg1bFpWMWFFc3kwK3Fpd0hFTHlpK1l0bDBQUTY5U3hBeGtXSUE0Uk1SVGROc0tFNTlqdU1jdVpkNnhJQUZlWjZmR0NkSjhrWTR5N0tBdVRSTkdkN2p5RUJYc2RPUEUzYTBRR1BzbmlPbm5ZTU82N0xnU1FOOVQ0MUYyUUdyUVJSRkN3eXpvSUYycXlCdUtLYmNPZ1BYZFZlWTlyTVdnTnNqZjljY1llc0poazNmNWRZVDFIWDlnUjBMTFFSMzBUbmprVUVjeDJ1SXVTNFJuSSthajZzSlIwQU04QWF1bVBhTS9yUmVoeVdoWHFiRkFBOWtoMy84L052SHhBWUdBc1ovaWw4SWFsa0NMQmZOVkFBQUFBQkpSVTVFcmtKZ2dnPT0mcXVvdDspOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDsgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE4cHg7IGJhY2tncm91bmQtcG9zaXRpb246IDk4JSA1MCU7XCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW4gcHLDqW5vbSBlc3QgbsOpY2Vzc2FpcmUgcG91ciBsYSBsaXZyYWlzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXsgdGhpcy5zdGF0ZS5lbWFpbCB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXJjaSBkZSByZW5zZWlnbmVyIHVuIGVtYWlsIGFmaW4gZCfDqnRyZSBpbmZvcm3DqSBkZSDDqXRhcGVzIGRlIHZvdHJlIGNvbW1hbmRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGhvbmVcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT17IHRoaXMuc3RhdGUucGhvbmUgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyY2kgZGUgcmVuc2VpZ25lciB1biB0ZWwgYWZpbiBkJ8OqdHJlIGluZm9ybcOpIGRlIMOpdGFwZXMgZGUgdm90cmUgY29tbWFuZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWxpdmVyeSBhZGRyZXNzIHBhbmVsICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi00XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTNcIj5BZHJlc3NlIGRlIGxpdnJhaXNvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcC1leGFtcGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNYXAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRyZXNzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXQtbWFwXCIgbmFtZT1cImRfYWRkcmVzc1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5kX2FkZHJlc3MgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyY2kgZGUgc2Fpc2lyIHVuZSBhZHJlc3NlIGRlIGxpdnJhaXNvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGzDqW1lbnRcIj5Db21wbGVtZW50IGQnYWRyZXNzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbXBsw6ltZW50XCIgbmFtZT1cImRfYWRkcmVzczJcIiB2YWx1ZT17IHRoaXMuc3RhdGUuZF9hZGRyZXNzMiB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHBsYWNlaG9sZGVyPVwiQXBwdCwgSW1tZXVibGUsIERpZ2ljb2RlLCBldGNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInppcFwiPkNQPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkX3ppcFwiIG5hbWU9XCJkX3ppcENvZGVcIiB2YWx1ZT17IHRoaXMuc3RhdGUuZF96aXBDb2RlIH0gb25DaGFuZ2U9eyB0aGlzLm9uWmlwQ29kZUNoYW5nZSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgaWQ9XCJkX3ppcF9lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBQb3N0YWwgbsOpY2Vzc2FpcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImRfY2l0eVwiPnsgdGhpcy5zdGF0ZS5iX2NpdHkubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyB0aGlzLnN0YXRlLiBkX2NpdHkubmFtZSB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJncHNcIj5HUFM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZF9ncHNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImdwc1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5kX2dwcyB9IHBsYWNlaG9sZGVyPVwiXCIgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCaWxsaW5nIGFkZHJlc3MgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1iLTRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItM1wiPkFkcmVzc2UgZGUgZmFjdHVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggY3VzdG9tLWNoZWNrYm94LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYmlsbGluZ0FkZHJlc3MtY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaWRlbnRpY2FsQmlsbGluZ0FkZHJlc3N9IG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVCaWxsaW5nQWRkcmVzcyB9IC8+ICAgICAgey8qIGRlZmF1bHRDaGVja2VkICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvblwiPklkZW50aXF1ZSDDoCBhZHJlc3NlIGRlIGxpdnJhaXNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gdHJ1ZSA/IDxwPjwvcD4gOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkcmVzc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJhZGRyZXNzXCIgbmFtZT1cImJfYWRkcmVzc1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gZmFsc2UgPyB0aGlzLnN0YXRlLmJfYWRkcmVzcyA6IHRoaXMuc3RhdGUuZF9hZGRyZXNzIH0gb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyY2kgZGUgc2Fpc2lyIHVuZSBhZHJlc3NlIGRlIGxpdnJhaXNvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBsw6ltZW50XCI+Q29tcGxlbWVudCBkJ2FkcmVzc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiY29tcGzDqW1lbnRcIiBuYW1lPVwiYl9hZGRyZXNzMlwiIHZhbHVlPXsgdGhpcy5zdGF0ZS5pZGVudGljYWxCaWxsaW5nQWRkcmVzcyA9PT0gZmFsc2UgPyB0aGlzLnN0YXRlLmJfYWRkcmVzczIgOiB0aGlzLnN0YXRlLmRfYWRkcmVzczIgfSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSBwbGFjZWhvbGRlcj1cIkFwcHQsIEltbWV1YmxlLCBldGNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInppcFwiPkNQPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYl96aXBcIiBuYW1lPVwiYl96aXBDb2RlXCIgdmFsdWU9eyB0aGlzLnN0YXRlLmlkZW50aWNhbEJpbGxpbmdBZGRyZXNzID09PSBmYWxzZSA/IHRoaXMuc3RhdGUuYl96aXBDb2RlIDogdGhpcy5zdGF0ZS5kX3ppcENvZGUgfSBvbkNoYW5nZT17IHRoaXMub25aaXBDb2RlQ2hhbmdlIH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCIgaWQ9XCJiX3ppcF9lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgUG9zdGFsIG7DqWNlc3NhaXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYl9jaXR5XCI+eyB0aGlzLnN0YXRlLmJfY2l0eS5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyB0aGlzLnN0YXRlLiBkX2NpdHkubmFtZSB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiPk1ldHRyZSDDoCBqb3VyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgIGVycm9yOiBzdGF0ZS5lcnJvclxuICB9KTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dpbiwgdXBkYXRlVXNlciwgY2xlYXJFcnJvcnMgfSkoUHJvZmlsZSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgU2Nyb2xsVG9Ub3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbiAhPT0gcHJldlByb3BzLmxvY2F0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2Nyb2xsVG9Ub3ApIiwiZnVuY3Rpb24gdG9rZW5Db25maWcoKSB7XG5cbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICB9ICBcbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgeyB0b2tlbkNvbmZpZyB9OyIsImZ1bmN0aW9uIGdldFRvdGFsVFRDKGNhcnRJdGVtcylcbntcbiAgICBsZXQgdG90YWxUVEMgPSAwO1xuICAgIGNhcnRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0b3RhbFRUQyArPSAoaXRlbS5wcm9kdWN0LnByaWNlICogaXRlbS5xdWFudGl0eSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsVFRDO1xufVxuXG5mdW5jdGlvbiBnZXRUb3RhbFRheChjYXJ0SXRlbXMpXG57XG4gICAgbGV0IHRvdGFsVGF4ID0gMDtcbiAgICBjYXJ0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdG90YWxUYXggKz0gKChpdGVtLnByb2R1Y3QucHJpY2UgKiBpdGVtLnF1YW50aXR5KS8oaXRlbS5wcm9kdWN0LnR2YS50YXV4ICsgMSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0b3RhbFRheDtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxIVChjYXJ0SXRlbXMpXG57XG4gICAgcmV0dXJuIChnZXRUb3RhbFRUQyhjYXJ0SXRlbXMpIC0gZ2V0VG90YWxUYXgoY2FydEl0ZW1zKSk7XG59XG5cbmV4cG9ydCB7IGdldFRvdGFsVFRDLCBnZXRUb3RhbFRheCwgZ2V0VG90YWxIVCB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XG4gICAgaWYgKCBkYXRhLmRhdGEubWV0YWRhdGEubGVuZ3RoID4gMCApIHtcbiAgICAgICAgZGF0YS5kYXRhLm1ldGFkYXRhID0gSlNPTi5wYXJzZShkYXRhLmRhdGEubWV0YWRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5kYXRhO1xufSIsImltcG9ydCB1c2VyRXh0cmFjdG9yIGZyb20gJy4uL2hlbHBlcnMvdXNlckV4dHJhY3Rvcic7XG5pbXBvcnQge1xuICAgIFVTRVJfTE9BREVELFxuICAgIFVTRVJfTE9BRElORyxcbiAgICBBVVRIX0VSUk9SLFxuICAgIExPR0lOX1NVQ0NFU1MsXG4gICAgTE9HSU5fRkFJTCxcbiAgICBMT0dPVVRfU1VDQ0VTUyxcbiAgICBSRUdJU1RFUl9TVUNDRVNTLFxuICAgIFJFR0lTVEVSX0ZBSUwsXG4gICAgVVNFUl9VUERBVEVELFxuICB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuICBcbiAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBcIlwiO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdG9rZW46IHN0b3JlZFRva2VuIHx8IFwiXCIsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdG9yZWRUb2tlbiAhPT0gXCJcIiA/IHRydWUgOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHVzZXI6IHN0b3JlZFRva2VuICE9PSBcIlwiID8gdXNlckV4dHJhY3RvcihzdG9yZWRUb2tlbikgOiBudWxsXG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBVU0VSX0xPQURJTkc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIFVTRVJfTE9BREVEOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICB1c2VyOiB1c2VyRXh0cmFjdG9yKGFjdGlvbi5wYXlsb2FkLnRva2VuKVxuICAgICAgICB9O1xuICAgICAgY2FzZSBVU0VSX1VQREFURUQ6XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxuICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxuICAgICAgICBsZXQgdXNlciA9IHVzZXJFeHRyYWN0b3IoYWN0aW9uLnBheWxvYWQudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZC50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdXNlcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgdXNlcjogdXNlclxuICAgICAgICB9O1xuICAgICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSkge1xuICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9kdWN0cycpXG4gICAgICAgICAgfVxuICAgICAgY2FzZSBBVVRIX0VSUk9SOlxuICAgICAgY2FzZSBMT0dJTl9GQUlMOlxuICAgICAgY2FzZSBSRUdJU1RFUl9GQUlMOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgR0VUX0VSUk9SUywgQ0xFQVJfRVJST1JTIH0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbXNnOiB7fSxcbiAgc3RhdHVzOiBudWxsLFxuICBpZDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX0VSUk9SUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZzogYWN0aW9uLnBheWxvYWQubXNnLFxuICAgICAgICBzdGF0dXM6IGFjdGlvbi5wYXlsb2FkLnN0YXR1cyxcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICB9O1xuICAgIGNhc2UgQ0xFQVJfRVJST1JTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbXNnOiB7fSxcbiAgICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgICBpZDogbnVsbFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGVycm9yUmVkdWNlciBmcm9tICcuL2Vycm9yUmVkdWNlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5pbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSAnLi9wcm9kdWN0UmVkdWNlcic7XG5pbXBvcnQgaXRlbVJlZHVjZXIgZnJvbSAnLi9pdGVtUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHByb2R1Y3Q6IHByb2R1Y3RSZWR1Y2VyLFxuICBpdGVtOiBpdGVtUmVkdWNlcixcbiAgZXJyb3I6IGVycm9yUmVkdWNlcixcbiAgYXV0aDogYXV0aFJlZHVjZXJcbn0pOyIsImltcG9ydCB1c2VyRXh0cmFjdG9yIGZyb20gJy4uL2hlbHBlcnMvdXNlckV4dHJhY3Rvcic7XG5pbXBvcnQgeyBnZXRUb3RhbFRUQywgZ2V0VG90YWxUYXgsIGdldFRvdGFsSFQgfSBmcm9tICcuLi9oZWxwZXJzL3RheENhbGN1bGF0b3InO1xuaW1wb3J0IHtcbiAgICBHRVRfSVRFTVMsXG4gICAgQUREX0lURU0sXG4gICAgREVMRVRFX0lURU0sXG4gICAgVVBEQVRFX0lURU0sXG4gICAgSVRFTVNfTE9BRElOR1xuICB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuICBcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICB0b3RhbFRvUGF5VFRDOiAwLFxuICAgIHRvdGFsVG9QYXlIVDogMCxcbiAgICB0b3RhbFRheDogMCxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgR0VUX0lURU1TOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB0b3RhbFRvUGF5VFRDOiBnZXRUb3RhbFRUQyhhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgdG90YWxUYXg6IGdldFRvdGFsVGF4KGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgICB0b3RhbFRvUGF5SFQ6IGdldFRvdGFsSFQoYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIERFTEVURV9JVEVNOlxuICAgICAgICBjb25zdCByZWR1Y2VkQ2FydCA9IHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShyZWR1Y2VkQ2FydCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiByZWR1Y2VkQ2FydCxcbiAgICAgICAgICB0b3RhbFRvUGF5VFRDOiBnZXRUb3RhbFRUQyhyZWR1Y2VkQ2FydCksXG4gICAgICAgICAgdG90YWxUYXg6IGdldFRvdGFsVGF4KHJlZHVjZWRDYXJ0KSxcbiAgICAgICAgICB0b3RhbFRvUGF5SFQ6IGdldFRvdGFsSFQocmVkdWNlZENhcnQpXG4gICAgICAgIH07XG4gICAgICBjYXNlIEFERF9JVEVNOlxuICAgICAgICBzdGF0ZS5pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3QubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgJiYgZWxlbWVudC5wYXJlbnQubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wYXJlbnQubmFtZSApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBlbmxhcmdlZENhcnQgPSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eSAhPT0gMCA/IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaXRlbXNdIDogc3RhdGUuaXRlbXM7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoZW5sYXJnZWRDYXJ0KSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IGVubGFyZ2VkQ2FydCxcbiAgICAgICAgICB0b3RhbFRvUGF5VFRDOiBnZXRUb3RhbFRUQyhlbmxhcmdlZENhcnQpLFxuICAgICAgICAgIHRvdGFsVGF4OiBnZXRUb3RhbFRheChlbmxhcmdlZENhcnQpLFxuICAgICAgICAgIHRvdGFsVG9QYXlIVDogZ2V0VG90YWxIVChlbmxhcmdlZENhcnQpXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgVVBEQVRFX0lURU06XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5pdGVtcykpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvdGFsVG9QYXlUVEM6IGdldFRvdGFsVFRDKHN0YXRlLml0ZW1zKSxcbiAgICAgICAgICAgIHRvdGFsVGF4OiBnZXRUb3RhbFRheChzdGF0ZS5pdGVtcyksXG4gICAgICAgICAgICB0b3RhbFRvUGF5SFQ6IGdldFRvdGFsSFQoc3RhdGUuaXRlbXMpXG4gICAgICAgICAgfTtcblxuICAgICAgY2FzZSBJVEVNU19MT0FESU5HOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBHRVRfUFJPRFVDVFMsIEdFVF9QUk9EVUNULCBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLLCBERUNSRUFTRV9QUk9EVUNUX1NUT0NLLCBVUERBVEVfUFJPRFVDVF9TVE9DSyB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuICBcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBzZWxlY3RlZDoge31cbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEdFVF9QUk9EVUNUUzpcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHt9IFxuICAgICAgICB9O1xuICAgICAgY2FzZSBHRVRfUFJPRFVDVDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzZWxlY3RlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSBVUERBVEVfUFJPRFVDVF9TVE9DSzpcbiAgICAgICAgICBsZXQgcCA9IC0xO1xuICAgICAgICAgIGxldCBzID0gLTE7XG4gICAgICAgICAgbGV0IHYgPSAtMTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHNbaV0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnZhcmlhbnQucHJvZHVjdC5pZCkge1xuICAgICAgICAgICAgICBwID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzdGF0ZS5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHNbaV0uaWQgPT09IHN0YXRlLnNlbGVjdGVkLmlkKSB7XG4gICAgICAgICAgICAgICAgcyA9IGk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wcm9kdWN0c1twXS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW3BdLnZhcmlhbnRzW2ldLmlkID09PSBhY3Rpb24ucGF5bG9hZC52YXJpYW50LmlkKSB7XG4gICAgICAgICAgICAgIHYgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWRTdGF0ZSA9IHN0YXRlLnNlbGVjdGVkO1xuICAgICAgICAgIGxldCBuZXdQcm9kdWN0c1N0YXRlID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICAgICAgaWYgKHYgIT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgbmV3VmFyaWFudHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHNbcF0udmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdWYXJpYW50c1tpXSA9IHN0YXRlLnByb2R1Y3RzW3BdLnZhcmlhbnRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSB2KSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYXJpYW50c1tpXSA9IGFjdGlvbi5wYXlsb2FkLnZhcmlhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3U2VsZWN0ZWRTdGF0ZSA9IChzID09PSBwKSA/IHsuLi5zdGF0ZS5zZWxlY3RlZCwgdmFyaWFudHM6IG5ld1ZhcmlhbnRzfSA6IHN0YXRlLnNlbGVjdGVkO1xuICAgICAgICAgICAgbmV3UHJvZHVjdHNTdGF0ZSA9IHN0YXRlLnByb2R1Y3RzLm1hcChcbiAgICAgICAgICAgICAgICAocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gcCA/IHsuLi5wcm9kdWN0LCB2YXJpYW50czogbmV3VmFyaWFudHN9IDogcHJvZHVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3RzU3RhdGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcHJvZHVjdHM6IG5ld1Byb2R1Y3RzU3RhdGUsXG4gICAgICAgICAgICBzZWxlY3RlZDogbmV3U2VsZWN0ZWRTdGF0ZVxuICAgICAgICAgIH1cbiAgICAgIGNhc2UgREVDUkVBU0VfUFJPRFVDVF9TVE9DSzpcbiAgICAgIGNhc2UgSU5DUkVBU0VfUFJPRFVDVF9TVE9DSzpcbiAgICAgICAgICBsZXQgcEluZGV4ID0gMDtcbiAgICAgICAgICBsZXQgc0luZGV4ID0gLTE7XG4gICAgICAgICAgbGV0IHZJbmRleCA9IC0xO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1tpXS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCkge1xuICAgICAgICAgICAgICBwSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1tpXS5pZCA9PT0gc3RhdGUuc2VsZWN0ZWQuaWQpIHtcbiAgICAgICAgICAgICAgICBzSW5kZXggPSBpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW3BJbmRleF0udmFyaWFudHNbaV0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnZhcmlhbnQuaWQpIHtcbiAgICAgICAgICAgICAgdkluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWQ7XG4gICAgICAgICAgbGV0IG5ld1Byb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICAgICAgaWYgKHZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgbGV0IGluaXRpYWxRdHkgPSBzdGF0ZS5wcm9kdWN0c1twSW5kZXhdLnZhcmlhbnRzW3ZJbmRleF0uc3RvY2sucXVhbnRpdHk7XG4gICAgICAgICAgICAgIGxldCBuZXdWYXJpYW50cyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnByb2R1Y3RzW3BJbmRleF0udmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhcmlhbnRzW2ldID0gc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50c1tpXTtcbiAgICAgICAgICAgICAgICAgIGlmIChpID09PSB2SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09IERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgPyBuZXdWYXJpYW50c1tpXS5zdG9jay5xdWFudGl0eSA9IGluaXRpYWxRdHkgLSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3VmFyaWFudHNbaV0uc3RvY2sucXVhbnRpdHkgPSBpbml0aWFsUXR5ICsgYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSAoc0luZGV4ID09PSBwSW5kZXgpID8gey4uLnN0YXRlLnNlbGVjdGVkLCB2YXJpYW50czogbmV3VmFyaWFudHN9IDogc3RhdGUuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIG5ld1Byb2R1Y3RzID0gc3RhdGUucHJvZHVjdHMubWFwKFxuICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSBwSW5kZXggPyB7Li4ucHJvZHVjdCwgdmFyaWFudHM6IG5ld1ZhcmlhbnRzfSA6IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwcm9kdWN0czogbmV3UHJvZHVjdHMsXG4gICAgICAgICAgICBzZWxlY3RlZDogbmV3U2VsZWN0ZWRcbiAgICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGVXYXJlID0gW3RodW5rXTtcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZVdhcmUpKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==