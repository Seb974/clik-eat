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
/*! exports provided: loadUser, register, login, logout, tokenConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");



 // Check token & load user

var loadUser = function loadUser() {
  return function (dispatch, getState) {
    // User loading
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["USER_LOADING"]
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/current', tokenConfig(getState)).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["USER_LOADED"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data, err.response.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["AUTH_ERROR"]
      });
    });
  };
}; // Register User

var register = function register(_ref) {
  var name = _ref.name,
      email = _ref.email,
      password = _ref.password;
  return function (dispatch) {
    // Headers
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }; // Request body

    var body = JSON.stringify({
      name: name,
      email: email,
      password: password
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users', body, config).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTER_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTER_FAIL"]
      });
    });
  };
}; // Login User

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login_check', body, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_2__["returnErrors"])(err.response.data, err.response.status, 'LOGIN_FAIL'));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_FAIL"]
      });
    });
  };
}; // Logout User

var logout = function logout() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"]
  };
}; // Setup config/headers and token

var tokenConfig = function tokenConfig(getState) {
  // Get token from localstorage
  var token = getState().auth.token; // Headers

  var config = {
    headers: {
      'Content-type': 'application/json'
    }
  }; // If token, add to headers

  if (token) {
    // config.headers['x-auth-token'] = token;
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
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
/*! exports provided: getItems, addItem, deleteItem, setItemsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
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
    }); // axios
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
  };
};
var setItemsLoading = function setItemsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["ITEMS_LOADING"]
  };
};

/***/ }),

/***/ "./assets/js/actions/productActions.js":
/*!*********************************************!*\
  !*** ./assets/js/actions/productActions.js ***!
  \*********************************************/
/*! exports provided: getProducts, getProduct, setProductsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProductsLoading", function() { return setProductsLoading; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./assets/js/actions/types.js");
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorActions */ "./assets/js/actions/errorActions.js");
/* harmony import */ var _reducers_productReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/productReducer */ "./assets/js/reducers/productReducer.js");





var getProducts = function getProducts() {
  return function (dispatch) {
    var storedProducts = localStorage.getItem('products') || "";

    if (storedProducts !== "") {
      storedProducts = JSON.parse(storedProducts);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS"],
        payload: storedProducts
      });
    } else {
      dispatch(setProductsLoading());
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api_index').then(function (res) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCTS"],
          payload: res.data
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/product/api/' + id).then(function (res) {
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

/***/ }),

/***/ "./assets/js/actions/types.js":
/*!************************************!*\
  !*** ./assets/js/actions/types.js ***!
  \************************************/
/*! exports provided: USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, GET_ERRORS, CLEAR_ERRORS, GET_PRODUCTS, GET_PRODUCT, INCREASE_PRODUCT_STOCK, DECREASE_PRODUCT_STOCK, PRODUCTS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_LOADING", function() { return PRODUCTS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_LOADING", function() { return ITEMS_LOADING; });
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
var PRODUCTS_LOADING = 'PRODUCTS_LOADING';
var GET_ITEMS = 'GET_ITEMS';
var ADD_ITEM = 'ADD_ITEM';
var DELETE_ITEM = 'DELETE_ITEM';
var ITEMS_LOADING = 'ITEMS_LOADING';

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar */ "./assets/js/components/navbar.js");
/* harmony import */ var _components_productList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/productList */ "./assets/js/components/productList.js");
/* harmony import */ var _components_productDetails__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/productDetails */ "./assets/js/components/productDetails.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login */ "./assets/js/components/login.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store */ "./assets/js/store.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./actions/authActions */ "./assets/js/actions/authActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);













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

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_20__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        id: "react-header"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_16__["default"], null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "page-container"
      }, alert.message && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: 'alert ' + alert.type
      }, alert.message), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/",
        exact: true,
        component: _components_productList__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/show/:id",
        component: _components_productDetails__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/login",
        component: _components_login__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/*",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Redirect"], {
            to: "/"
          });
        }
      }))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

_defineProperty(App, "propTypes", {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.bool,
  user: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.object
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps)(App));
react_dom__WEBPACK_IMPORTED_MODULE_13___default.a.render(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(App, null), document.getElementById("root"));

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      total: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteClick", function (item) {
      _this.props.deleteItem(item);
    });

    _defineProperty(_assertThisInitialized(_this), "displayItems", function () {
      var CartItem = function CartItem(props) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
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
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
        className: "btn btn-outline btn-sm"
      }, "Editer quantit\xE9"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
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
        }, "Se connnnnecter"));
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
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('user_self_show') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-user"
        }), "Mon profil"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        }), props.user.roles.indexOf('ROLE_SUPPLIER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
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
        })), props.user.roles.indexOf('ROLE_DELIVERER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "dropdown-item",
          href: "{{ path('deliverer') }}"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-truck"
        }), "Livraisons"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "dropdown-divider"
        })), props.user.roles.indexOf('ROLE_ADMIN') === -1 ? "" : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
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
          key: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("i", {
          className: "fas fa-dolly"
        }), " ", " ", props.details.stock.quantity, " ", " ", props.details.stock.quantity <= 0 ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, "En rupture de stock !") : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: function onClick() {
            return _this.handleClick(props.product, props.details);
          },
          id: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("i", {
          className: "fas fa-shopping-cart"
        }), props.details.name, "  \xE0 ", props.details.price, "\u20AC"))));
      };

      if (product.variants) {
        return product.variants.map(function (variant) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Variant, {
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
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/productActions */ "./assets/js/actions/productActions.js");
/* harmony import */ var _actions_itemActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/itemActions */ "./assets/js/actions/itemActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
          key: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-dolly"
        }), " ", " ", props.details.stock.quantity, " ", " ", props.details.stock.quantity <= 0 ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "En rupture de stock !") : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
          className: "btn btn-primary btn-sm",
          onClick: function onClick() {
            return _this.handleClick(product, props.details);
          },
          id: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-shopping-cart"
        }), props.details.name, "  \xE0 ", props.details.price, "\u20AC")));
      };

      return product.variants.map(function (variant) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Variant, {
          details: variant,
          product: product
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "displayProducts", function () {
      var Product = function Product(props) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "col-12 col-sm-6 col-md-4 react-product"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "card card-lg"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "card-img"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"], {
          to: "/show/" + props.details.id
        }, typeof props.details.picture === 'undefined' ? '' : props.details.picture !== null && props.details.picture !== "" ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
          src: 'uploads/pictures/' + props.details.picture.b64,
          className: "card-img-top",
          alt: props.details.picture.b64
        }) : "")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "card-block"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
          key: props.details.id
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"], {
          to: "/show/" + props.details.id
        }, props.details.name, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "fas fa-truck"
        }), props.details.supplier.preparationPeriod, "mn @", props.details.supplier.name))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, _this.displayVariants(props.details)))));
      };

      return _this.props.product.products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Product, {
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
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "content-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "product-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "p-t-30",
        id: "react-product-list"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, this.displayProducts())))));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

_defineProperty(ProductList, "propTypes", {
  getProducts: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,
  addItem: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,
  product: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    product: state.product,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, {
  getProducts: _actions_productActions__WEBPACK_IMPORTED_MODULE_16__["getProducts"],
  addItem: _actions_itemActions__WEBPACK_IMPORTED_MODULE_17__["addItem"]
})(ProductList));

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

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["LOGIN_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["REGISTER_SUCCESS"]:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__["default"])(action.payload.token));
      return _objectSpread({}, state, {}, action.payload, {
        isAuthenticated: true,
        isLoading: false,
        user: Object(_helpers_userExtractor__WEBPACK_IMPORTED_MODULE_9__["default"])(action.payload.token)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["LOGOUT_SUCCESS"]:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    // if (localStorage.getItem('products')) {
    //   localStorage.removeItem('products')
    // }

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



 //const storedCart = localStorage.getItem('cart') || [];

var initialState = {
  items: [],
  totalToPayTTC: 0,
  //getTotalTTC(storedCart),
  totalToPayHT: 0,
  //getTotalHT(storedCart),
  totalTax: 0,
  //getTotalTax(storedCart),
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
        //state.items.filter(item => item !== action.payload),
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(reducedCart),
        //getTotalTTC(state.items.filter(item => item !== action.payload)),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(reducedCart),
        //getTotalTax(state.items.filter(item => item !== action.payload)),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(reducedCart) //getTotalHT(state.items.filter(item => item !== action.payload)),

      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_23__["ADD_ITEM"]:
      state.items.forEach(function (element) {
        if (element.product.name == action.payload.product.name && element.parent.name == action.payload.parent.name) {
          element.quantity += action.payload.quantity;
          action.payload.quantity = 0;
          return state;
        }
      }); // ATTENTION : Vérifier Impact

      var enlargedCart = action.payload.quantity !== 0 ? [action.payload].concat(_toConsumableArray(state.items)) : state.items; // FIN de modification susceptible de perturber le bon fonctionnement
      //action.payload.quantity !== 0 ? localStorage.setItem('cart', JSON.stringify([action.payload, ...state.items])) : localStorage.setItem('cart', JSON.stringify(state.items));

      localStorage.setItem('cart', JSON.stringify(enlargedCart));
      return _objectSpread({}, state, {
        items: enlargedCart,
        //(action.payload.quantity == 0) ? state.items :[action.payload, ...state.items],
        totalToPayTTC: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTTC"])(enlargedCart),
        //getTotalTTC([action.payload, ...state.items]),
        totalTax: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalTax"])(enlargedCart),
        //getTotalTax([action.payload, ...state.items]),
        totalToPayHT: Object(_helpers_taxCalculator__WEBPACK_IMPORTED_MODULE_22__["getTotalHT"])(enlargedCart) //getTotalHT([action.payload, ...state.items]),

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

    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["DECREASE_PRODUCT_STOCK"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_10__["INCREASE_PRODUCT_STOCK"]:
      var pIndex = 0;
      var sIndex = -1;
      var vIndex = -1;

      for (var i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.product.id) {
          pIndex = i;
        }

        if (Object.keys(state.selected).length > 0) {
          if (state.products[i].id === state.selected.id) {
            sIndex = i;
          }
        }
      }

      for (var _i = 0; _i < state.products[pIndex].variants.length; _i++) {
        if (state.products[pIndex].variants[_i].id === action.payload.variant.id) {
          vIndex = _i;
        }
      }

      var newSelected = state.selected;
      var newProducts = state.products;

      if (vIndex !== -1) {
        var initialQty = state.products[pIndex].variants[vIndex].stock.quantity;
        var newVariants = [];

        for (var _i2 = 0; _i2 < state.products[pIndex].variants.length; _i2++) {
          newVariants[_i2] = state.products[pIndex].variants[_i2];

          if (_i2 === vIndex) {
            action.type === _actions_types__WEBPACK_IMPORTED_MODULE_10__["DECREASE_PRODUCT_STOCK"] ? newVariants[_i2].stock.quantity = initialQty - action.payload.quantity : newVariants[_i2].stock.quantity = initialQty + action.payload.quantity;
          }
        }

        newSelected = sIndex === pIndex ? _objectSpread({}, state.selected, {
          variants: newVariants
        }) : state.selected;
        newProducts = state.products.map(function (product, index) {
          return index === pIndex ? _objectSpread({}, product, {
            variants: newVariants
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2l0ZW1BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvdGF4Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy91c2VyRXh0cmFjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvaXRlbVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Byb2R1Y3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2FkVXNlciIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJ0eXBlIiwiVVNFUl9MT0FESU5HIiwiYXhpb3MiLCJnZXQiLCJ0b2tlbkNvbmZpZyIsInRoZW4iLCJyZXMiLCJVU0VSX0xPQURFRCIsInBheWxvYWQiLCJkYXRhIiwiZXJyIiwicmV0dXJuRXJyb3JzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJBVVRIX0VSUk9SIiwicmVnaXN0ZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpZyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTCIsImxvZ2luIiwidXNlcm5hbWUiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsImxvZ291dCIsIkxPR09VVF9TVUNDRVNTIiwidG9rZW4iLCJhdXRoIiwibXNnIiwiaWQiLCJHRVRfRVJST1JTIiwiY2xlYXJFcnJvcnMiLCJDTEVBUl9FUlJPUlMiLCJnZXRJdGVtcyIsInN0b3JlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhcnNlIiwiR0VUX0lURU1TIiwic3RvcmVkVG9rZW4iLCJjdXJyZW50VXNlckNhcnQiLCJ1c2VyRXh0cmFjdG9yIiwiY2FydCIsImFkZEl0ZW0iLCJpdGVtIiwiQUREX0lURU0iLCJwcm9kdWN0IiwidmFyaWFudCIsInF1YW50aXR5IiwiaXNQYWlkIiwicGFyZW50IiwiREVDUkVBU0VfUFJPRFVDVF9TVE9DSyIsImRlbGV0ZUl0ZW0iLCJERUxFVEVfSVRFTSIsIklOQ1JFQVNFX1BST0RVQ1RfU1RPQ0siLCJzZXRJdGVtc0xvYWRpbmciLCJJVEVNU19MT0FESU5HIiwiZ2V0UHJvZHVjdHMiLCJzdG9yZWRQcm9kdWN0cyIsIkdFVF9QUk9EVUNUUyIsInNldFByb2R1Y3RzTG9hZGluZyIsImdldFByb2R1Y3QiLCJpIiwiR0VUX1BST0RVQ1QiLCJQUk9EVUNUU19MT0FESU5HIiwicmVxdWlyZSIsIkFwcCIsInByb3BzIiwic3RvcmUiLCJhbGVydCIsIm1lc3NhZ2UiLCJQcm9kdWN0TGlzdCIsIlByb2R1Y3REZXRhaWxzIiwiTG9naW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJ1c2VyIiwib2JqZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ2FydCIsInRvdGFsIiwiQ2FydEl0ZW0iLCJkZXRhaWxzIiwicHJpY2UiLCJvbkRlbGV0ZUNsaWNrIiwiaXRlbXMiLCJtYXAiLCJkaXNwbGF5SXRlbXMiLCJ0b3RhbFRvUGF5VFRDIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnQiLCJoYW5kbGVMb2dpbiIsIm9uQ2hhbmdlIiwiZXJyb3IiLCJOYXZiYXIiLCJjb3VudCIsIkFub255bW91cyIsIklkZW50aWZpZWQiLCJyb2xlcyIsImluZGV4T2YiLCJoYW5kbGVMb2dvdXQiLCJkaXNwbGF5TG9nZ2VkVmlldyIsImRpc3BsYXlBbm9ueW1vdXNWaWV3IiwicmVkdWNlIiwiY3VtdWwiLCJjdXJyZW50IiwibmV3SXRlbSIsIkFsbGVyZ2VuIiwiYWxsZXJnZW5zIiwiYWxsZXJnZW4iLCJWYXJpYW50Iiwic3RvY2siLCJoYW5kbGVDbGljayIsInZhcmlhbnRzIiwiTnV0cml0aW9uYWxzIiwia0oiLCJLQ2FsIiwicHJvdGVpbiIsImNhcmJvaHlkcmF0ZXMiLCJzdWdhciIsImZhdCIsInRyYW5zQUciLCJzYWx0IiwibnV0cml0aW9uYWxzIiwibWF0Y2giLCJwYXJhbXMiLCJzZWxlY3RlZCIsImNhdGVnb3J5IiwiZGlzcGxheUFsbGVyZ2VucyIsInBpY3R1cmUiLCJiNjQiLCJkaXNwbGF5VmFyaWFudHMiLCJkaXNwbGF5TnV0cml0aW9uYWxzIiwiUHJvZHVjdCIsInN1cHBsaWVyIiwicHJlcGFyYXRpb25QZXJpb2QiLCJwcm9kdWN0cyIsImRpc3BsYXlQcm9kdWN0cyIsImdldFRvdGFsVFRDIiwiY2FydEl0ZW1zIiwidG90YWxUVEMiLCJmb3JFYWNoIiwiZ2V0VG90YWxUYXgiLCJ0b3RhbFRheCIsInR2YSIsInRhdXgiLCJnZXRUb3RhbEhUIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsImFjdGlvbiIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdFJlZHVjZXIiLCJpdGVtUmVkdWNlciIsImVycm9yUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidG90YWxUb1BheUhUIiwibG9hZGluZyIsInJlZHVjZWRDYXJ0IiwiZmlsdGVyIiwiZWxlbWVudCIsImVubGFyZ2VkQ2FydCIsInBJbmRleCIsInNJbmRleCIsInZJbmRleCIsIm5ld1NlbGVjdGVkIiwibmV3UHJvZHVjdHMiLCJpbml0aWFsUXR5IiwibmV3VmFyaWFudHMiLCJpbmRleCIsIm1pZGRsZVdhcmUiLCJ0aHVuayIsImNvbXBvc2VFbmhhbmNlcnMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0NBYUE7O0FBQ08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUNwRDtBQUNBRCxZQUFRLENBQUM7QUFBRUUsVUFBSSxFQUFFQyxt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MkksT0FBYixDQUFxQixVQUFyQixFQUFpQy9KLElBQUksQ0FBQ0MsU0FBTCxDQUFlK0ssV0FBZixDQUFqQztBQUNIOztBQUNELCtCQUNLMUcsS0FETDtBQUVFcUUsZ0JBQVEsRUFBRXFDLFdBRlo7QUFHRS9DLGdCQUFRLEVBQUU4QztBQUhaOztBQUtKO0FBQ0UsYUFBT3pHLEtBQVA7QUE1REo7QUE4REQsQzs7Ozs7Ozs7Ozs7O0FDdkVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTXNGLFlBQVksR0FBRyxFQUFyQjtBQUVBLElBQU13QixVQUFVLEdBQUcsQ0FBQ0MsbURBQUQsQ0FBbkI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRzVCLE1BQU0sQ0FBQzZCLG9DQUFQLElBQStDQyw2Q0FBeEU7QUFDQSxJQUFNaEksS0FBSyxHQUFHaUkseURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QjlCLFlBRnVCLEVBR3ZCMEIsZ0JBQWdCLENBQUNLLHFEQUFlLE1BQWYsU0FBbUJQLFVBQW5CLENBQUQsQ0FITyxDQUF6QjtBQU1lNUgsb0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgcmV0dXJuRXJyb3JzIH0gZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBVU0VSX0xPQURFRCxcbiAgVVNFUl9MT0FESU5HLFxuICBBVVRIX0VSUk9SLFxuICBMT0dJTl9TVUNDRVNTLFxuICBMT0dJTl9GQUlMLFxuICBMT0dPVVRfU1VDQ0VTUyxcbiAgUkVHSVNURVJfU1VDQ0VTUyxcbiAgUkVHSVNURVJfRkFJTFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gQ2hlY2sgdG9rZW4gJiBsb2FkIHVzZXJcbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgLy8gVXNlciBsb2FkaW5nXG4gIGRpc3BhdGNoKHsgdHlwZTogVVNFUl9MT0FESU5HIH0pO1xuXG4gIGF4aW9zXG4gICAgLmdldCgnL3VzZXIvY3VycmVudCcsIHRva2VuQ29uZmlnKGdldFN0YXRlKSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFVTRVJfTE9BREVELFxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2gocmV0dXJuRXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLCBlcnIucmVzcG9uc2Uuc3RhdHVzKSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1JcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgVXNlclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pID0+IGRpc3BhdGNoID0+IHtcbiAgLy8gSGVhZGVyc1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXF1ZXN0IGJvZHlcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuXG4gIGF4aW9zXG4gICAgLnBvc3QoJy9hcGkvdXNlcnMnLCBib2R5LCBjb25maWcpXG4gICAgLnRoZW4ocmVzID0+XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICB9KVxuICAgIClcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICByZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMsICdSRUdJU1RFUl9GQUlMJylcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFR0lTVEVSX0ZBSUxcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy8gTG9naW4gVXNlclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IGRpc3BhdGNoID0+IHtcblxuICBjb25zdCBjb25maWcgPSB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuXG4gIGF4aW9zXG4gICAgLnBvc3QoJy9hcGkvbG9naW5fY2hlY2snLCBib2R5LCBjb25maWcpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTE9HSU5fU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgcmV0dXJuRXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLCBlcnIucmVzcG9uc2Uuc3RhdHVzLCAnTE9HSU5fRkFJTCcpXG4gICAgICAgIFxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogTE9HSU5fRkFJTFxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vLyBMb2dvdXQgVXNlclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dPVVRfU1VDQ0VTU1xuICB9O1xufTtcblxuLy8gU2V0dXAgY29uZmlnL2hlYWRlcnMgYW5kIHRva2VuXG5leHBvcnQgY29uc3QgdG9rZW5Db25maWcgPSBnZXRTdGF0ZSA9PiB7XG4gIC8vIEdldCB0b2tlbiBmcm9tIGxvY2Fsc3RvcmFnZVxuICBjb25zdCB0b2tlbiA9IGdldFN0YXRlKCkuYXV0aC50b2tlbjtcblxuICAvLyBIZWFkZXJzXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9O1xuXG4gIC8vIElmIHRva2VuLCBhZGQgdG8gaGVhZGVyc1xuICBpZiAodG9rZW4pIHtcbiAgICAvLyBjb25maWcuaGVhZGVyc1sneC1hdXRoLXRva2VuJ10gPSB0b2tlbjtcbiAgICBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTsiLCJpbXBvcnQgeyBHRVRfRVJST1JTLCBDTEVBUl9FUlJPUlMgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gUkVUVVJOIEVSUk9SU1xuZXhwb3J0IGNvbnN0IHJldHVybkVycm9ycyA9IChtc2csIHN0YXR1cywgaWQgPSBudWxsKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogR0VUX0VSUk9SUyxcbiAgICBwYXlsb2FkOiB7IG1zZywgc3RhdHVzLCBpZCB9XG4gIH07XG59O1xuXG4vLyBDTEVBUiBFUlJPUlNcbmV4cG9ydCBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDTEVBUl9FUlJPUlNcbiAgfTtcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEdFVF9JVEVNUywgQUREX0lURU0sIERFTEVURV9JVEVNLCBJVEVNU19MT0FESU5HLCBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLLCBERUNSRUFTRV9QUk9EVUNUX1NUT0NLIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB0b2tlbkNvbmZpZyB9IGZyb20gJy4vYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgcmV0dXJuRXJyb3JzIH0gZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuaW1wb3J0IHVzZXJFeHRyYWN0b3IgZnJvbSAnLi4vaGVscGVycy91c2VyRXh0cmFjdG9yJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgbGV0IHN0b3JlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpIHx8IHt9O1xuICBpZiAoT2JqZWN0LmtleXMoc3RvcmVkQ2FydCkubGVuZ3RoID4gMCkge1xuICAgIHN0b3JlZENhcnQgPSBKU09OLnBhcnNlKHN0b3JlZENhcnQpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdFVF9JVEVNUyxcbiAgICAgIHBheWxvYWQ6IHN0b3JlZENhcnRcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfHwgXCJcIjtcbiAgICBjb25zdCBjdXJyZW50VXNlckNhcnQgPSBzdG9yZWRUb2tlbiAhPT0gXCJcIiA/ICh1c2VyRXh0cmFjdG9yKHN0b3JlZFRva2VuKS5jYXJ0IHx8IFtdICkgOiBbXTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9JVEVNUyxcbiAgICAgICAgcGF5bG9hZDogY3VycmVudFVzZXJDYXJ0LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IGl0ZW0gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQUREX0lURU0sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0udmFyaWFudCwgXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIGlzUGFpZDogZmFsc2UsXG4gICAgICAgICAgICBwYXJlbnQ6IGl0ZW0ucHJvZHVjdCxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBERUNSRUFTRV9QUk9EVUNUX1NUT0NLLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBwcm9kdWN0OiBpdGVtLnByb2R1Y3QsXG4gICAgICAgIHZhcmlhbnQ6IGl0ZW0udmFyaWFudCxcbiAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICB9XG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gaXRlbSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBERUxFVEVfSVRFTSxcbiAgICBwYXlsb2FkOiBpdGVtXG4gIH0pO1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogSU5DUkVBU0VfUFJPRFVDVF9TVE9DSyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBwcm9kdWN0OiBpdGVtLnBhcmVudCwgXG4gICAgICB2YXJpYW50OiBpdGVtLnByb2R1Y3QsXG4gICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXhpb3NcbiAgLy8gICAuZGVsZXRlKGAvYXBpL2l0ZW1zLyR7aWR9YCwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAvLyAgIC50aGVuKHJlcyA9PlxuICAvLyAgICAgZGlzcGF0Y2goe1xuICAvLyAgICAgICB0eXBlOiBERUxFVEVfSVRFTSxcbiAgLy8gICAgICAgcGF5bG9hZDogaWRcbiAgLy8gICAgIH0pXG4gIC8vICAgKVxuICAvLyAgIC5jYXRjaChlcnIgPT5cbiAgLy8gICAgIGRpc3BhdGNoKHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cykpXG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJdGVtc0xvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSVRFTVNfTE9BRElOR1xuICB9O1xufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgR0VUX1BST0RVQ1RTLCBBRERfUFJPRFVDVCwgREVMRVRFX1BST0RVQ1QsIFBST0RVQ1RTX0xPQURJTkcsIEdFVF9QUk9EVUNUIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB0b2tlbkNvbmZpZyB9IGZyb20gJy4vYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgcmV0dXJuRXJyb3JzIH0gZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL3Byb2R1Y3RSZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBsZXQgc3RvcmVkUHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSB8fCBcIlwiO1xuICBpZiAoc3RvcmVkUHJvZHVjdHMgIT09IFwiXCIpIHtcbiAgICBzdG9yZWRQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvZHVjdHMpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdFVF9QUk9EVUNUUyxcbiAgICAgIHBheWxvYWQ6IHN0b3JlZFByb2R1Y3RzXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaChzZXRQcm9kdWN0c0xvYWRpbmcoKSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJy9hcGlfaW5kZXgnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEdFVF9QUk9EVUNUUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT5cbiAgICAgICAgZGlzcGF0Y2gocmV0dXJuRXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLCBlcnIucmVzcG9uc2Uuc3RhdHVzKSlcbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gaWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBsZXQgc3RvcmVkUHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSB8fCBcIlwiO1xuICBpZiAoc3RvcmVkUHJvZHVjdHMgIT09IFwiXCIpIHtcbiAgICBzdG9yZWRQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvZHVjdHMpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yZWRQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0b3JlZFByb2R1Y3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1QsXG4gICAgICAgICAgICBwYXlsb2FkOiBzdG9yZWRQcm9kdWN0c1tpXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoKHNldFByb2R1Y3RzTG9hZGluZygpKTtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL3Byb2R1Y3QvYXBpLycgKyBpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9QUk9EVUNULFxuICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PlxuICAgICAgICBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldFByb2R1Y3RzTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQUk9EVUNUU19MT0FESU5HXG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBVU0VSX0xPQURJTkcgPSBcIlVTRVJfTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gXCJVU0VSX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSBcIkFVVEhfRVJST1JcIjtcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9IFwiTE9HSU5fRkFJTFwiO1xuZXhwb3J0IGNvbnN0IExPR09VVF9TVUNDRVNTID0gXCJMT0dPVVRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSBcIlJFR0lTVEVSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMID0gXCJSRUdJU1RFUl9GQUlMXCI7XG5leHBvcnQgY29uc3QgR0VUX0VSUk9SUyA9ICdHRVRfRVJST1JTJztcbmV4cG9ydCBjb25zdCBDTEVBUl9FUlJPUlMgPSAnQ0xFQVJfRVJST1JTJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSAnR0VUX1BST0RVQ1RTJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9ICdHRVRfUFJPRFVDVCc7XG5leHBvcnQgY29uc3QgSU5DUkVBU0VfUFJPRFVDVF9TVE9DSyA9ICdJTkNSRUFTRV9QUk9EVUNUX1NUT0NLJztcbmV4cG9ydCBjb25zdCBERUNSRUFTRV9QUk9EVUNUX1NUT0NLID0gJ0RFQ1JFQVNFX1BST0RVQ1RfU1RPQ0snO1xuZXhwb3J0IGNvbnN0IFBST0RVQ1RTX0xPQURJTkcgPSAnUFJPRFVDVFNfTE9BRElORyc7XG5leHBvcnQgY29uc3QgR0VUX0lURU1TID0gJ0dFVF9JVEVNUyc7XG5leHBvcnQgY29uc3QgQUREX0lURU0gPSAnQUREX0lURU0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gJ0RFTEVURV9JVEVNJztcbmV4cG9ydCBjb25zdCBJVEVNU19MT0FESU5HID0gJ0lURU1TX0xPQURJTkcnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4nO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgbG9hZFVzZXIgfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnJlcXVpcmUoJy4uL2Nzcy9hcHAuY3NzJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBcbntcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjYXJ0OiB0aGlzLnByb3BzLmNhcnQgfHwgW10sXG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJyZWFjdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FsZXJ0Lm1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0ICcgKyBhbGVydC50eXBlfT57YWxlcnQubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgZXhhY3QgY29tcG9uZW50PXtQcm9kdWN0TGlzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9zaG93LzppZCcgY29tcG9uZW50PXtQcm9kdWN0RGV0YWlsc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpbn0gLz4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLypcIiByZW5kZXI9eygpID0+ICg8UmVkaXJlY3QgdG89XCIvXCIgLz4pfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS5hdXRoLmlzQXV0aGVudGljYXRlZCxcbiAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gIH0pO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzKShBcHApO1xuXG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRJdGVtcywgZGVsZXRlSXRlbSB9IGZyb20gJy4uL2FjdGlvbnMvaXRlbUFjdGlvbnMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBcbntcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgIHRvdGFsOiAwXG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdldEl0ZW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBkZWxldGVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH07XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SXRlbXMoKTtcbiAgICAgIH1cbiAgICBcbiAgICBvbkRlbGV0ZUNsaWNrID0gaXRlbSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbShpdGVtKTtcbiAgICAgIH07XG5cbiAgICBkaXNwbGF5SXRlbXMgPSAoKSA9PiB7XG4gICAgICBsZXQgQ2FydEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgeHsgcHJvcHMuZGV0YWlscy5xdWFudGl0eSB9IHsgcHJvcHMuZGV0YWlscy5wYXJlbnQubmFtZSB9IHsgcHJvcHMuZGV0YWlscy5wcm9kdWN0Lm5hbWUgfSB8IHsgcHJvcHMuZGV0YWlscy5wcm9kdWN0LnByaWNlICogcHJvcHMuZGV0YWlscy5xdWFudGl0eSB94oKsXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlQ2xpY2socHJvcHMuZGV0YWlscyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPiBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBkZXRhaWxzPXtpdGVtfSAvPlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRyb3Bkb3duLWhlYWRlciBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBQYW5pZXJcbiAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1ibG9ja1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheUl0ZW1zKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJvcmRlci1ib3R0b20gbWItMiBweC0zIHB5LTJcIj5Ub3RhbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLWF1dG8gZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXN1Y2Nlc3NcIj57IHRoaXMucHJvcHMuaXRlbS50b3RhbFRvUGF5VFRDIH3igqw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lIGJ0bi1zbVwiID5FZGl0ZXIgcXVhbnRpdMOpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gbWwtYXV0b1wiID5QYXllcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgaXRlbTogc3RhdGUuaXRlbSxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkXG4gIH0pO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgeyBnZXRJdGVtcywgZGVsZXRlSXRlbSB9XG4gICkoQ2FydCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tICcuLi9hY3Rpb25zL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiOyBcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBtc2c6IG51bGxcbiAgICAgIH07XG4gICAgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgbG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsZWFyRXJyb3JzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgfTtcbiAgICBcbiAgICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmR9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogJycsIHBhc3N3b3JkOiAnJ30pO1xuICAgICAgICB0aGlzLnByb3BzLmxvZ2luKHVzZXIpO1xuICAgICAgfTtcblxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCBjb2wtbWQtNCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1pblwiPjwvaT5TZSBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1zZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e3RoaXMuc3RhdGUubXNnfTwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCkgPyBcIlwiIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBsb2dnZWQgaW4gYXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiIFwiICsgdGhpcy5wcm9wcy51c2VyLmVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3sgcGF0aCgnbG9nb3V0JykgfX1cIj4gTG9nb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LWljb24tbGVmdCBtLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgYXV0b0ZvY3VzIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC1pY29uLWxlZnQgbS1iLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJNb3QgZGUgcGFzc2VcIiByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgbS10LTEwXCIgPlNFIENPTk5FQ1RFUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLWluXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXMgZW5jb3JlIGNsaWVudCA/PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiIGhyZWY9XCIvcmVnaXN0ZXJcIiByb2xlPVwiYnV0dG9uXCI+Q1JFRVIgVU4gQ09NUFRFPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89Jy8nLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICBlcnJvcjogc3RhdGUuZXJyb3JcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW4sIGNsZWFyRXJyb3JzIH0pKExvZ2luKTtcblxuey8qIDxkaXYgaWQ9XCJmYi1yb290XCI+PC9kaXY+XG4gICAgPHNjcmlwdCBhc3luYyBkZWZlciBjcm9zc29yaWdpbj1cImFub255bW91c1wiIHNyYz1cImh0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZnJfRlIvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12NC4wJmFwcElkPTUwMjA4NDc4NzAwODgxNSZhdXRvTG9nQXBwRXZlbnRzPTFcIj48L3NjcmlwdD5cbjxkaXYgY2xhc3NOYW1lPVwiZmItbG9naW4tYnV0dG9uXCIgZGF0YS13aWR0aD1cIlwiIGRhdGEtc2l6ZT1cIm1lZGl1bVwiIGRhdGEtYnV0dG9uLXR5cGU9XCJsb2dpbl93aXRoXCIgZGF0YS1hdXRvLWxvZ291dC1saW5rPVwidHJ1ZVwiIGRhdGEtdXNlLWNvbnRpbnVlLWFzPVwidHJ1ZVwiPjwvZGl2PlxuXG48ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICA8c3Bhbj5vdTwvc3Bhbj5cbjwvZGl2PiAqL30iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi9jYXJ0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgbG9nb3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIH07XG5cbiAgICBoYW5kbGVMb2dvdXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgZGlzcGxheUFub255bW91c1ZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGxldCBBbm9ueW1vdXMgPSAoKSA9PiA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5TZSBjb25ubm5uZWN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgcmV0dXJuIDxBbm9ueW1vdXMgLz5cbiAgICB9XG5cbiAgICBkaXNwbGF5TG9nZ2VkVmlldyA9ICh1c2VyKSA9PiB7XG4gICAgICAgIGxldCBJZGVudGlmaWVkID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdXNlci51c2VybmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCd1c2VyX3NlbGZfc2hvdycpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+TW9uIHByb2ZpbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMudXNlci5yb2xlcy5pbmRleE9mKCdST0xFX1NVUFBMSUVSJykgPT09IC0xICYmIHByb3BzLnVzZXIucm9sZXMuaW5kZXhPZignUk9MRV9BRE1JTicpID09PSAtMSkgPyBcIlwiIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3N0b2NrX2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3gtb3BlblwiPjwvaT5TdG9ja3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2dldF9vcmRlcicpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FzaC1yZWdpc3RlclwiPjwvaT5PcmRlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy51c2VyLnJvbGVzLmluZGV4T2YoJ1JPTEVfREVMSVZFUkVSJykgPT09IC0xICYmIHByb3BzLnVzZXIucm9sZXMuaW5kZXhPZignUk9MRV9BRE1JTicpID09PSAtMSkgPyBcIlwiIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2RlbGl2ZXJlcicpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJ1Y2tcIj48L2k+TGl2cmFpc29uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKHByb3BzLnVzZXIucm9sZXMuaW5kZXhPZignUk9MRV9BRE1JTicpID09PSAtMSkgPyBcIlwiIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3VzZXJfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCI+PC9pPlVzZXJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCdjaXR5X2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaXR5XCI+PC9pPkNpdHk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3Byb2R1Y3RfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXV0ZW5zaWxzXCI+PC9pPlByb2R1aXRzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCd2YXJpYW50X2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc29ydFwiPjwvaT5WYXJpYW50ZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2NhdGVnb3J5X2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2x1bW5zXCI+PC9pPkNhdMOpZ29yaWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ7eyBwYXRoKCd0dmFfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGN1bGF0b3JcIj48L2k+VGF4ZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2FsbGVyZ2VuX2luZGV4JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5BbGxlcmfDqG5lczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVMb2dvdXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1vdXQtYWx0XCI+PC9pPlNlIGTDqWNvbm5lY3RlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPElkZW50aWZpZWQgdXNlcj17dXNlcn0vPlxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGl0ZW0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYmFja2Ryb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPiA8aW1nIHNyYz1cInVwbG9hZHMvbG9nb3MvY2xpa0VhdC5wbmdcIiBhbHQ9XCJDbGlrIEVhdCBMb2dvXCIgaGVpZ2h0PVwiNTBweFwiLz48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGhlbnRpY2F0ZWQgPyB0aGlzLmRpc3BsYXlMb2dnZWRWaWV3KHVzZXIpIDogdGhpcy5kaXNwbGF5QW5vbnltb3VzVmlldygpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCI+PC9pPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1ub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7cGF0aCgnZ2V0X2NhcnQnKSB9fVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLml0ZW1zLmxlbmd0aCA8PSAwID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWNhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLml0ZW1zLnJlZHVjZSgoY3VtdWwsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnF1YW50aXR5ID09IG51bGwgPyBjdW11bCA6IGN1bXVsICsgY3VycmVudC5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBpZD1cImNhcnQtc3VtbWFyeVwiPjxDYXJ0Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlci4uLlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGNsb3NlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIGl0ZW06IHN0YXRlLml0ZW0sXG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICB9KTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dvdXQgfSkoTmF2YmFyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEl0ZW1zLCBhZGRJdGVtLCBkZWxldGVJdGVtIH0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtQWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0IH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0QWN0aW9ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBcbntcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnZXRQcm9kdWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBhZGRJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBwcm9kdWN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0UHJvZHVjdCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgPSAocHJvZHVjdCwgdmFyaWFudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0geyBwcm9kdWN0OiBwcm9kdWN0LCB2YXJpYW50OiB2YXJpYW50LCBxdWFudGl0eTogMSB9O1xuICAgICAgICB0aGlzLnByb3BzLmFkZEl0ZW0obmV3SXRlbSk7XG4gICAgfTtcblxuICAgIGRpc3BsYXlBbGxlcmdlbnMgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgQWxsZXJnZW4gPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5uYW1lICsgXCIgXCIgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2R1Y3QuYWxsZXJnZW5zKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5hbGxlcmdlbnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hbGxlcmdlbnMubWFwKCAoYWxsZXJnZW4pID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5hbGxlcmdlbnMuaW5kZXhPZihhbGxlcmdlbikgPT0gMCA/IDxzcGFuPkFsbGVyZ8OobmVzIDogIDxBbGxlcmdlbiBkZXRhaWxzPXthbGxlcmdlbn0gLz48L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3Bhbj48QWxsZXJnZW4gZGV0YWlscz17YWxsZXJnZW59IC8+PC9zcGFuPiAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPHNwYW4+TmUgY29udGllbnQgcGFzIGRlIHByb2R1aXRzIGFsbGVyZ8OobmVzLjwvc3Bhbj5cbiAgICB9XG5cbiAgICBkaXNwbGF5VmFyaWFudHMgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgVmFyaWFudCA9IChwcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdy1yZXZlcnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wcy5kZXRhaWxzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG9sbHlcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn0ge3Byb3BzLmRldGFpbHMuc3RvY2sucXVhbnRpdHl9IHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5zdG9jay5xdWFudGl0eSA8PSAwID8gPHNwYW4+RW4gcnVwdHVyZSBkZSBzdG9jayAhPC9zcGFuPiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhwcm9wcy5wcm9kdWN0LCBwcm9wcy5kZXRhaWxzKX0gaWQ9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5uYW1lfSAgw6Age3Byb3BzLmRldGFpbHMucHJpY2V94oKsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2R1Y3QudmFyaWFudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnZhcmlhbnRzLm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFyaWFudCBkZXRhaWxzPXt2YXJpYW50fSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5TnV0cml0aW9uYWxzID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IE51dHJpdGlvbmFscyA9IChwcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PnZhbGV1cnMgbnV0cml0aW9ubmVsbGVzIG1veWVubmVzIHBvdXIgMTAwZzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+RW5lcmdpZSAoS0opIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMua0ogfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkVuZXJnaWUgKEtDYWwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuS0NhbCB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+UHJvdGVpbmVzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMucHJvdGVpbiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+Q2FyYm9oeWRyYXRlcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLmNhcmJvaHlkcmF0ZXMgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlN1Y3JlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc3VnYXIgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPk1hdGnDqHJlIGdyYXNzZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLmZhdCB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+ZG9udCBhY2lkZXMgZ3JhcyBzYXR1csOpcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLnRyYW5zQUcgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlNlbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLnNhbHQgfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2R1Y3QubnV0cml0aW9uYWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE51dHJpdGlvbmFscyBkZXRhaWxzPXtwcm9kdWN0Lm51dHJpdGlvbmFsc30gLz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gdGhpcy5wcm9wcy5wcm9kdWN0LnNlbGVjdGVkIDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInAtdC0zMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+eyBwcm9kdWN0Lm5hbWUgfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXRlbnNpbHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3QuY2F0ZWdvcnkgPyBwcm9kdWN0LmNhdGVnb3J5Lm5hbWUgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57IHRoaXMuZGlzcGxheUFsbGVyZ2Vucyhwcm9kdWN0KSB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICghcHJvZHVjdC5waWN0dXJlIHx8IHByb2R1Y3QucGljdHVyZSA9PT0gXCJcIiApID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9eyAnLi4vdXBsb2Fkcy9waWN0dXJlcy8nICsgcHJvZHVjdC5waWN0dXJlLmI2NCB9IGFsdD17IHByb2R1Y3QucGljdHVyZS5iNjQgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheVZhcmlhbnRzKHByb2R1Y3QpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheU51dHJpdGlvbmFscyhwcm9kdWN0KSB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHslIGlmIGlzX2dyYW50ZWQoJ1JPTEVfQURNSU4nKSAlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3sgcGF0aCgncHJvZHVjdF9lZGl0JywgeydpZCc6IHByb2R1Y3QuaWR9KSB9fVwiPmVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGluY2x1ZGUoJ3Byb2R1Y3QvX2RlbGV0ZV9mb3JtLmh0bWwudHdpZycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHslIGVuZGlmICV9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3Q6IHN0YXRlLnByb2R1Y3QsXG4gICAgaXRlbTogc3RhdGUuaXRlbSxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkXG4gIH0pO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgeyBnZXRJdGVtcywgZGVsZXRlSXRlbSwgZ2V0UHJvZHVjdCwgYWRkSXRlbSB9XG4gICkoUHJvZHVjdERldGFpbHMpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zJztcbmltcG9ydCB7IGFkZEl0ZW0gfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW1BY3Rpb25zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IFxue1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdldFByb2R1Y3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBhZGRJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBwcm9kdWN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgPSAocHJvZHVjdCwgdmFyaWFudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0geyBwcm9kdWN0OiBwcm9kdWN0LCB2YXJpYW50OiB2YXJpYW50LCBxdWFudGl0eTogMSB9O1xuICAgICAgICB0aGlzLnByb3BzLmFkZEl0ZW0obmV3SXRlbSk7XG4gICAgfTtcblxuICAgIGRpc3BsYXlWYXJpYW50cyA9IChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGxldCBWYXJpYW50ID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wcy5kZXRhaWxzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb2xseVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9IHtwcm9wcy5kZXRhaWxzLnN0b2NrLnF1YW50aXR5fSB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5zdG9jay5xdWFudGl0eSA8PSAwID8gPHNwYW4+RW4gcnVwdHVyZSBkZSBzdG9jayAhPC9zcGFuPiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKHByb2R1Y3QsIHByb3BzLmRldGFpbHMpfSBpZD17cHJvcHMuZGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy5uYW1lfSAgw6Age3Byb3BzLmRldGFpbHMucHJpY2V94oKsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2R1Y3QudmFyaWFudHMubWFwKHZhcmlhbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgPFZhcmlhbnQgZGV0YWlscz17dmFyaWFudH0gcHJvZHVjdD17cHJvZHVjdH0vPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgUHJvZHVjdCA9IChwcm9wcykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCByZWFjdC1wcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyBcIi9zaG93L1wiICsgcHJvcHMuZGV0YWlscy5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm9wcy5kZXRhaWxzLnBpY3R1cmUgPT09ICd1bmRlZmluZWQnID8gJycgOiAocHJvcHMuZGV0YWlscy5waWN0dXJlICE9PSBudWxsICYmIHByb3BzLmRldGFpbHMucGljdHVyZSAhPT0gXCJcIikgPyA8aW1nIHNyYz17ICd1cGxvYWRzL3BpY3R1cmVzLycgKyBwcm9wcy5kZXRhaWxzLnBpY3R1cmUuYjY0IH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PXsgcHJvcHMuZGV0YWlscy5waWN0dXJlLmI2NCB9Lz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcHMuZGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgXCIvc2hvdy9cIiArIHByb3BzLmRldGFpbHMuaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJ1Y2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc3VwcGxpZXIucHJlcGFyYXRpb25QZXJpb2QgfW1uIEBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5zdXBwbGllci5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5VmFyaWFudHMocHJvcHMuZGV0YWlscykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnByb2R1Y3QucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQcm9kdWN0IGRldGFpbHM9e3Byb2R1Y3R9IC8+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLXQtMzBcIiBpZD1cInJlYWN0LXByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheVByb2R1Y3RzKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0OiBzdGF0ZS5wcm9kdWN0LFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldFByb2R1Y3RzLCBhZGRJdGVtIH1cbiAgKShQcm9kdWN0TGlzdCk7XG4iLCJmdW5jdGlvbiBnZXRUb3RhbFRUQyhjYXJ0SXRlbXMpXG57XG4gICAgbGV0IHRvdGFsVFRDID0gMDtcbiAgICBjYXJ0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdG90YWxUVEMgKz0gKGl0ZW0ucHJvZHVjdC5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0b3RhbFRUQztcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxUYXgoY2FydEl0ZW1zKVxue1xuICAgIGxldCB0b3RhbFRheCA9IDA7XG4gICAgY2FydEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRvdGFsVGF4ICs9ICgoaXRlbS5wcm9kdWN0LnByaWNlICogaXRlbS5xdWFudGl0eSkvKGl0ZW0ucHJvZHVjdC50dmEudGF1eCArIDEpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG90YWxUYXg7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsSFQoY2FydEl0ZW1zKVxue1xuICAgIHJldHVybiAoZ2V0VG90YWxUVEMoY2FydEl0ZW1zKSAtIGdldFRvdGFsVGF4KGNhcnRJdGVtcykpO1xufVxuXG5leHBvcnQgeyBnZXRUb3RhbFRUQywgZ2V0VG90YWxUYXgsIGdldFRvdGFsSFQgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0b2tlbikge1xuICAgIGNvbnN0IGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgY29uc3QgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xuICAgIHJldHVybiBkYXRhLmRhdGE7XG59IiwiaW1wb3J0IHVzZXJFeHRyYWN0b3IgZnJvbSAnLi4vaGVscGVycy91c2VyRXh0cmFjdG9yJztcbmltcG9ydCB7XG4gICAgVVNFUl9MT0FERUQsXG4gICAgVVNFUl9MT0FESU5HLFxuICAgIEFVVEhfRVJST1IsXG4gICAgTE9HSU5fU1VDQ0VTUyxcbiAgICBMT0dJTl9GQUlMLFxuICAgIExPR09VVF9TVUNDRVNTLFxuICAgIFJFR0lTVEVSX1NVQ0NFU1MsXG4gICAgUkVHSVNURVJfRkFJTFxuICB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuICBcbiAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBcIlwiO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdG9rZW46IHN0b3JlZFRva2VuIHx8IFwiXCIsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdG9yZWRUb2tlbiAhPT0gXCJcIiA/IHRydWUgOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHVzZXI6IHN0b3JlZFRva2VuICE9PSBcIlwiID8gdXNlckV4dHJhY3RvcihzdG9yZWRUb2tlbikgOiBudWxsXG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBVU0VSX0xPQURJTkc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIFVTRVJfTE9BREVEOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICB1c2VyOiB1c2VyRXh0cmFjdG9yKGFjdGlvbi5wYXlsb2FkLnRva2VuKVxuICAgICAgICB9O1xuICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxuICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZC50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdXNlckV4dHJhY3RvcihhY3Rpb24ucGF5bG9hZC50b2tlbikpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHVzZXI6IHVzZXJFeHRyYWN0b3IoYWN0aW9uLnBheWxvYWQudG9rZW4pXG4gICAgICAgIH07XG4gICAgICBjYXNlIExPR09VVF9TVUNDRVNTOlxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gICAgICAgICAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpKSB7XG4gICAgICAgICAgLy8gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZHVjdHMnKVxuICAgICAgICAgIC8vIH1cbiAgICAgIGNhc2UgQVVUSF9FUlJPUjpcbiAgICAgIGNhc2UgTE9HSU5fRkFJTDpcbiAgICAgIGNhc2UgUkVHSVNURVJfRkFJTDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IEdFVF9FUlJPUlMsIENMRUFSX0VSUk9SUyB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1zZzoge30sXG4gIHN0YXR1czogbnVsbCxcbiAgaWQ6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9FUlJPUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtc2c6IGFjdGlvbi5wYXlsb2FkLm1zZyxcbiAgICAgICAgc3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXMsXG4gICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgfTtcbiAgICBjYXNlIENMRUFSX0VSUk9SUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1zZzoge30sXG4gICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgaWQ6IG51bGxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSAnLi9lcnJvclJlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gJy4vcHJvZHVjdFJlZHVjZXInO1xuaW1wb3J0IGl0ZW1SZWR1Y2VyIGZyb20gJy4vaXRlbVJlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBwcm9kdWN0OiBwcm9kdWN0UmVkdWNlcixcbiAgaXRlbTogaXRlbVJlZHVjZXIsXG4gIGVycm9yOiBlcnJvclJlZHVjZXIsXG4gIGF1dGg6IGF1dGhSZWR1Y2VyXG59KTsiLCJpbXBvcnQgdXNlckV4dHJhY3RvciBmcm9tICcuLi9oZWxwZXJzL3VzZXJFeHRyYWN0b3InO1xuaW1wb3J0IHsgZ2V0VG90YWxUVEMsIGdldFRvdGFsVGF4LCBnZXRUb3RhbEhUIH0gZnJvbSAnLi4vaGVscGVycy90YXhDYWxjdWxhdG9yJztcbmltcG9ydCB7XG4gICAgR0VUX0lURU1TLFxuICAgIEFERF9JVEVNLFxuICAgIERFTEVURV9JVEVNLFxuICAgIElURU1TX0xPQURJTkdcbiAgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbiAgXG4gIC8vY29uc3Qgc3RvcmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgfHwgW107XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgdG90YWxUb1BheVRUQzogMCwgICAvL2dldFRvdGFsVFRDKHN0b3JlZENhcnQpLFxuICAgIHRvdGFsVG9QYXlIVDogMCwgICAgLy9nZXRUb3RhbEhUKHN0b3JlZENhcnQpLFxuICAgIHRvdGFsVGF4OiAwLCAgICAgICAgLy9nZXRUb3RhbFRheChzdG9yZWRDYXJ0KSxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgR0VUX0lURU1TOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB0b3RhbFRvUGF5VFRDOiBnZXRUb3RhbFRUQyhhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgdG90YWxUYXg6IGdldFRvdGFsVGF4KGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgICB0b3RhbFRvUGF5SFQ6IGdldFRvdGFsSFQoYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICBjYXNlIERFTEVURV9JVEVNOlxuICAgICAgICBjb25zdCByZWR1Y2VkQ2FydCA9IHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShyZWR1Y2VkQ2FydCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiByZWR1Y2VkQ2FydCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgdG90YWxUb1BheVRUQzogZ2V0VG90YWxUVEMocmVkdWNlZENhcnQpLCAgICAgICAvL2dldFRvdGFsVFRDKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICAgICAgdG90YWxUYXg6IGdldFRvdGFsVGF4KHJlZHVjZWRDYXJ0KSwgICAgICAgICAgICAvL2dldFRvdGFsVGF4KHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICAgICAgdG90YWxUb1BheUhUOiBnZXRUb3RhbEhUKHJlZHVjZWRDYXJ0KSAgICAgICAgICAvL2dldFRvdGFsSFQoc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpKSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgQUREX0lURU06XG4gICAgICAgIHN0YXRlLml0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQucHJvZHVjdC5uYW1lID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSAmJiBlbGVtZW50LnBhcmVudC5uYW1lID09IGFjdGlvbi5wYXlsb2FkLnBhcmVudC5uYW1lICkge1xuICAgICAgICAgICAgZWxlbWVudC5xdWFudGl0eSArPSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIEFUVEVOVElPTiA6IFbDqXJpZmllciBJbXBhY3RcbiAgICAgICAgY29uc3QgZW5sYXJnZWRDYXJ0ID0gYWN0aW9uLnBheWxvYWQucXVhbnRpdHkgIT09IDAgPyBbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLml0ZW1zXSA6IHN0YXRlLml0ZW1zO1xuICAgICAgICAvLyBGSU4gZGUgbW9kaWZpY2F0aW9uIHN1c2NlcHRpYmxlIGRlIHBlcnR1cmJlciBsZSBib24gZm9uY3Rpb25uZW1lbnRcblxuICAgICAgICAgIC8vYWN0aW9uLnBheWxvYWQucXVhbnRpdHkgIT09IDAgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaXRlbXNdKSkgOiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHN0YXRlLml0ZW1zKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoZW5sYXJnZWRDYXJ0KSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXRlbXM6IGVubGFyZ2VkQ2FydCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8oYWN0aW9uLnBheWxvYWQucXVhbnRpdHkgPT0gMCkgPyBzdGF0ZS5pdGVtcyA6W2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5pdGVtc10sXG4gICAgICAgICAgdG90YWxUb1BheVRUQzogZ2V0VG90YWxUVEMoZW5sYXJnZWRDYXJ0KSwgICAgICAgLy9nZXRUb3RhbFRUQyhbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLml0ZW1zXSksXG4gICAgICAgICAgdG90YWxUYXg6IGdldFRvdGFsVGF4KGVubGFyZ2VkQ2FydCksICAgICAgICAgICAgLy9nZXRUb3RhbFRheChbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLml0ZW1zXSksXG4gICAgICAgICAgdG90YWxUb1BheUhUOiBnZXRUb3RhbEhUKGVubGFyZ2VkQ2FydCkgICAgICAgICAgLy9nZXRUb3RhbEhUKFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaXRlbXNdKSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgSVRFTVNfTE9BRElORzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgR0VUX1BST0RVQ1RTLCBHRVRfUFJPRFVDVCwgSU5DUkVBU0VfUFJPRFVDVF9TVE9DSywgREVDUkVBU0VfUFJPRFVDVF9TVE9DSyB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuICBcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBzZWxlY3RlZDoge31cbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEdFVF9QUk9EVUNUUzpcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHt9IFxuICAgICAgICB9O1xuICAgICAgY2FzZSBHRVRfUFJPRFVDVDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzZWxlY3RlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSBERUNSRUFTRV9QUk9EVUNUX1NUT0NLOlxuICAgICAgY2FzZSBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLOlxuICAgICAgICAgIGxldCBwSW5kZXggPSAwO1xuICAgICAgICAgIGxldCBzSW5kZXggPSAtMTtcbiAgICAgICAgICBsZXQgdkluZGV4ID0gLTE7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW2ldLmlkID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkKSB7XG4gICAgICAgICAgICAgIHBJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW2ldLmlkID09PSBzdGF0ZS5zZWxlY3RlZC5pZCkge1xuICAgICAgICAgICAgICAgIHNJbmRleCA9IGk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wcm9kdWN0c1twSW5kZXhdLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50c1tpXS5pZCA9PT0gYWN0aW9uLnBheWxvYWQudmFyaWFudC5pZCkge1xuICAgICAgICAgICAgICB2SW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZDtcbiAgICAgICAgICBsZXQgbmV3UHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcbiAgICAgICAgICBpZiAodkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICBsZXQgaW5pdGlhbFF0eSA9IHN0YXRlLnByb2R1Y3RzW3BJbmRleF0udmFyaWFudHNbdkluZGV4XS5zdG9jay5xdWFudGl0eTtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhcmlhbnRzID0gW107XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbmV3VmFyaWFudHNbaV0gPSBzdGF0ZS5wcm9kdWN0c1twSW5kZXhdLnZhcmlhbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHZJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gREVDUkVBU0VfUFJPRFVDVF9TVE9DSyA/IG5ld1ZhcmlhbnRzW2ldLnN0b2NrLnF1YW50aXR5ID0gaW5pdGlhbFF0eSAtIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXdWYXJpYW50c1tpXS5zdG9jay5xdWFudGl0eSA9IGluaXRpYWxRdHkgKyBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdTZWxlY3RlZCA9IChzSW5kZXggPT09IHBJbmRleCkgPyB7Li4uc3RhdGUuc2VsZWN0ZWQsIHZhcmlhbnRzOiBuZXdWYXJpYW50c30gOiBzdGF0ZS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgbmV3UHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cy5tYXAoXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IHBJbmRleCA/IHsuLi5wcm9kdWN0LCB2YXJpYW50czogbmV3VmFyaWFudHN9IDogcHJvZHVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3RzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiBuZXdQcm9kdWN0cyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBuZXdTZWxlY3RlZFxuICAgICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBbdGh1bmtdO1xuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxlV2FyZSkpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9