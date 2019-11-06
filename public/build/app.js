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
        }, props.details.picture !== null && props.details.picture !== "" ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL2l0ZW1BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvdGF4Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy91c2VyRXh0cmFjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdWNlcnMvaXRlbVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHVjZXJzL3Byb2R1Y3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJsb2FkVXNlciIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJ0eXBlIiwiVVNFUl9MT0FESU5HIiwiYXhpb3MiLCJnZXQiLCJ0b2tlbkNvbmZpZyIsInRoZW4iLCJyZXMiLCJVU0VSX0xPQURFRCIsInBheWxvYWQiLCJkYXRhIiwiZXJyIiwicmV0dXJuRXJyb3JzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJBVVRIX0VSUk9SIiwicmVnaXN0ZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpZyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTCIsImxvZ2luIiwidXNlcm5hbWUiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsImxvZ291dCIsIkxPR09VVF9TVUNDRVNTIiwidG9rZW4iLCJhdXRoIiwibXNnIiwiaWQiLCJHRVRfRVJST1JTIiwiY2xlYXJFcnJvcnMiLCJDTEVBUl9FUlJPUlMiLCJnZXRJdGVtcyIsInN0b3JlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhcnNlIiwiR0VUX0lURU1TIiwic3RvcmVkVG9rZW4iLCJjdXJyZW50VXNlckNhcnQiLCJ1c2VyRXh0cmFjdG9yIiwiY2FydCIsImFkZEl0ZW0iLCJpdGVtIiwiQUREX0lURU0iLCJwcm9kdWN0IiwidmFyaWFudCIsInF1YW50aXR5IiwiaXNQYWlkIiwicGFyZW50IiwiREVDUkVBU0VfUFJPRFVDVF9TVE9DSyIsImRlbGV0ZUl0ZW0iLCJERUxFVEVfSVRFTSIsIklOQ1JFQVNFX1BST0RVQ1RfU1RPQ0siLCJzZXRJdGVtc0xvYWRpbmciLCJJVEVNU19MT0FESU5HIiwiZ2V0UHJvZHVjdHMiLCJzdG9yZWRQcm9kdWN0cyIsIkdFVF9QUk9EVUNUUyIsInNldFByb2R1Y3RzTG9hZGluZyIsImdldFByb2R1Y3QiLCJpIiwiR0VUX1BST0RVQ1QiLCJQUk9EVUNUU19MT0FESU5HIiwicmVxdWlyZSIsIkFwcCIsInByb3BzIiwic3RvcmUiLCJhbGVydCIsIm1lc3NhZ2UiLCJQcm9kdWN0TGlzdCIsIlByb2R1Y3REZXRhaWxzIiwiTG9naW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJ1c2VyIiwib2JqZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ2FydCIsInRvdGFsIiwiQ2FydEl0ZW0iLCJkZXRhaWxzIiwicHJpY2UiLCJvbkRlbGV0ZUNsaWNrIiwiaXRlbXMiLCJtYXAiLCJkaXNwbGF5SXRlbXMiLCJ0b3RhbFRvUGF5VFRDIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnQiLCJoYW5kbGVMb2dpbiIsIm9uQ2hhbmdlIiwiZXJyb3IiLCJOYXZiYXIiLCJjb3VudCIsIkFub255bW91cyIsIklkZW50aWZpZWQiLCJyb2xlcyIsImluZGV4T2YiLCJoYW5kbGVMb2dvdXQiLCJkaXNwbGF5TG9nZ2VkVmlldyIsImRpc3BsYXlBbm9ueW1vdXNWaWV3IiwicmVkdWNlIiwiY3VtdWwiLCJjdXJyZW50IiwibmV3SXRlbSIsIkFsbGVyZ2VuIiwiYWxsZXJnZW5zIiwiYWxsZXJnZW4iLCJWYXJpYW50Iiwic3RvY2siLCJoYW5kbGVDbGljayIsInZhcmlhbnRzIiwiTnV0cml0aW9uYWxzIiwia0oiLCJLQ2FsIiwicHJvdGVpbiIsImNhcmJvaHlkcmF0ZXMiLCJzdWdhciIsImZhdCIsInRyYW5zQUciLCJzYWx0IiwibnV0cml0aW9uYWxzIiwibWF0Y2giLCJwYXJhbXMiLCJzZWxlY3RlZCIsImNhdGVnb3J5IiwiZGlzcGxheUFsbGVyZ2VucyIsInBpY3R1cmUiLCJiNjQiLCJkaXNwbGF5VmFyaWFudHMiLCJkaXNwbGF5TnV0cml0aW9uYWxzIiwiUHJvZHVjdCIsInN1cHBsaWVyIiwicHJlcGFyYXRpb25QZXJpb2QiLCJwcm9kdWN0cyIsImRpc3BsYXlQcm9kdWN0cyIsImdldFRvdGFsVFRDIiwiY2FydEl0ZW1zIiwidG90YWxUVEMiLCJmb3JFYWNoIiwiZ2V0VG90YWxUYXgiLCJ0b3RhbFRheCIsInR2YSIsInRhdXgiLCJnZXRUb3RhbEhUIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwid2luZG93IiwiYXRvYiIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsImFjdGlvbiIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdFJlZHVjZXIiLCJpdGVtUmVkdWNlciIsImVycm9yUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwidG90YWxUb1BheUhUIiwibG9hZGluZyIsInJlZHVjZWRDYXJ0IiwiZmlsdGVyIiwiZWxlbWVudCIsImVubGFyZ2VkQ2FydCIsInBJbmRleCIsInNJbmRleCIsInZJbmRleCIsIm5ld1NlbGVjdGVkIiwibmV3UHJvZHVjdHMiLCJpbml0aWFsUXR5IiwibmV3VmFyaWFudHMiLCJpbmRleCIsIm1pZGRsZVdhcmUiLCJ0aHVuayIsImNvbXBvc2VFbmhhbmNlcnMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJjb21wb3NlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0NBYUE7O0FBQ08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUNwRDtBQUNBRCxZQUFRLENBQUM7QUFBRUUsVUFBSSxFQUFFQyxt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O0FBQ0QsK0JBQ0sxRyxLQURMO0FBRUVxRSxnQkFBUSxFQUFFcUMsV0FGWjtBQUdFL0MsZ0JBQVEsRUFBRThDO0FBSFo7O0FBS0o7QUFDRSxhQUFPekcsS0FBUDtBQTVESjtBQThERCxDOzs7Ozs7Ozs7Ozs7QUN2RUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNc0YsWUFBWSxHQUFHLEVBQXJCO0FBRUEsSUFBTXdCLFVBQVUsR0FBRyxDQUFDQyxtREFBRCxDQUFuQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHNUIsTUFBTSxDQUFDNkIsb0NBQVAsSUFBK0NDLDZDQUF4RTtBQUNBLElBQU1oSSxLQUFLLEdBQUdpSSx5REFBVyxDQUN2QkMsaURBRHVCLEVBRXZCOUIsWUFGdUIsRUFHdkIwQixnQkFBZ0IsQ0FBQ0sscURBQWUsTUFBZixTQUFtQlAsVUFBbkIsQ0FBRCxDQUhPLENBQXpCO0FBTWU1SCxvRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyByZXR1cm5FcnJvcnMgfSBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmltcG9ydCB7XG4gIFVTRVJfTE9BREVELFxuICBVU0VSX0xPQURJTkcsXG4gIEFVVEhfRVJST1IsXG4gIExPR0lOX1NVQ0NFU1MsXG4gIExPR0lOX0ZBSUwsXG4gIExPR09VVF9TVUNDRVNTLFxuICBSRUdJU1RFUl9TVUNDRVNTLFxuICBSRUdJU1RFUl9GQUlMXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBDaGVjayB0b2tlbiAmIGxvYWQgdXNlclxuZXhwb3J0IGNvbnN0IGxvYWRVc2VyID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAvLyBVc2VyIGxvYWRpbmdcbiAgZGlzcGF0Y2goeyB0eXBlOiBVU0VSX0xPQURJTkcgfSk7XG5cbiAgYXhpb3NcbiAgICAuZ2V0KCcvdXNlci9jdXJyZW50JywgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVVNFUl9MT0FERUQsXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQVVUSF9FUlJPUlxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciBVc2VyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkgPT4gZGlzcGF0Y2ggPT4ge1xuICAvLyBIZWFkZXJzXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9O1xuXG4gIC8vIFJlcXVlc3QgYm9keVxuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG5cbiAgYXhpb3NcbiAgICAucG9zdCgnL2FwaS91c2VycycsIGJvZHksIGNvbmZpZylcbiAgICAudGhlbihyZXMgPT5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVHSVNURVJfU1VDQ0VTUyxcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgIH0pXG4gICAgKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cywgJ1JFR0lTVEVSX0ZBSUwnKVxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVHSVNURVJfRkFJTFxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vLyBMb2dpbiBVc2VyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4gZGlzcGF0Y2ggPT4ge1xuXG4gIGNvbnN0IGNvbmZpZyA9IHsgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfTtcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSk7XG5cbiAgYXhpb3NcbiAgICAucG9zdCgnL2FwaS9sb2dpbl9jaGVjaycsIGJvZHksIGNvbmZpZylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBMT0dJTl9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICByZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMsICdMT0dJTl9GQUlMJylcbiAgICAgICAgXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBMT0dJTl9GQUlMXG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8vIExvZ291dCBVc2VyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR09VVF9TVUNDRVNTXG4gIH07XG59O1xuXG4vLyBTZXR1cCBjb25maWcvaGVhZGVycyBhbmQgdG9rZW5cbmV4cG9ydCBjb25zdCB0b2tlbkNvbmZpZyA9IGdldFN0YXRlID0+IHtcbiAgLy8gR2V0IHRva2VuIGZyb20gbG9jYWxzdG9yYWdlXG4gIGNvbnN0IHRva2VuID0gZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xuXG4gIC8vIEhlYWRlcnNcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH07XG5cbiAgLy8gSWYgdG9rZW4sIGFkZCB0byBoZWFkZXJzXG4gIGlmICh0b2tlbikge1xuICAgIC8vIGNvbmZpZy5oZWFkZXJzWyd4LWF1dGgtdG9rZW4nXSA9IHRva2VuO1xuICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59OyIsImltcG9ydCB7IEdFVF9FUlJPUlMsIENMRUFSX0VSUk9SUyB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBSRVRVUk4gRVJST1JTXG5leHBvcnQgY29uc3QgcmV0dXJuRXJyb3JzID0gKG1zZywgc3RhdHVzLCBpZCA9IG51bGwpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHRVRfRVJST1JTLFxuICAgIHBheWxvYWQ6IHsgbXNnLCBzdGF0dXMsIGlkIH1cbiAgfTtcbn07XG5cbi8vIENMRUFSIEVSUk9SU1xuZXhwb3J0IGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENMRUFSX0VSUk9SU1xuICB9O1xufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgR0VUX0lURU1TLCBBRERfSVRFTSwgREVMRVRFX0lURU0sIElURU1TX0xPQURJTkcsIElOQ1JFQVNFX1BST0RVQ1RfU1RPQ0ssIERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHRva2VuQ29uZmlnIH0gZnJvbSAnLi9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyByZXR1cm5FcnJvcnMgfSBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgdXNlckV4dHJhY3RvciBmcm9tICcuLi9oZWxwZXJzL3VzZXJFeHRyYWN0b3InO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW1zID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBsZXQgc3RvcmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgfHwge307XG4gIGlmIChPYmplY3Qua2V5cyhzdG9yZWRDYXJ0KS5sZW5ndGggPiAwKSB7XG4gICAgc3RvcmVkQ2FydCA9IEpTT04ucGFyc2Uoc3RvcmVkQ2FydCk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0lURU1TLFxuICAgICAgcGF5bG9hZDogc3RvcmVkQ2FydFxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyQ2FydCA9IHN0b3JlZFRva2VuICE9PSBcIlwiID8gKHVzZXJFeHRyYWN0b3Ioc3RvcmVkVG9rZW4pLmNhcnQgfHwgW10gKSA6IFtdO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR0VUX0lURU1TLFxuICAgICAgICBwYXlsb2FkOiBjdXJyZW50VXNlckNhcnQsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfSVRFTSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHJvZHVjdDogaXRlbS52YXJpYW50LCBcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXNQYWlkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudDogaXRlbS5wcm9kdWN0LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0ssXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHByb2R1Y3Q6IGl0ZW0ucHJvZHVjdCxcbiAgICAgICAgdmFyaWFudDogaXRlbS52YXJpYW50LFxuICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgIH1cbiAgICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSBpdGVtID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IERFTEVURV9JVEVNLFxuICAgIHBheWxvYWQ6IGl0ZW1cbiAgfSk7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHByb2R1Y3Q6IGl0ZW0ucGFyZW50LCBcbiAgICAgIHZhcmlhbnQ6IGl0ZW0ucHJvZHVjdCxcbiAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgIH1cbiAgfSlcblxuICAvLyBheGlvc1xuICAvLyAgIC5kZWxldGUoYC9hcGkvaXRlbXMvJHtpZH1gLCB0b2tlbkNvbmZpZyhnZXRTdGF0ZSkpXG4gIC8vICAgLnRoZW4ocmVzID0+XG4gIC8vICAgICBkaXNwYXRjaCh7XG4gIC8vICAgICAgIHR5cGU6IERFTEVURV9JVEVNLFxuICAvLyAgICAgICBwYXlsb2FkOiBpZFxuICAvLyAgICAgfSlcbiAgLy8gICApXG4gIC8vICAgLmNhdGNoKGVyciA9PlxuICAvLyAgICAgZGlzcGF0Y2gocmV0dXJuRXJyb3JzKGVyci5yZXNwb25zZS5kYXRhLCBlcnIucmVzcG9uc2Uuc3RhdHVzKSlcbiAgLy8gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEl0ZW1zTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJVEVNU19MT0FESU5HXG4gIH07XG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMsIEFERF9QUk9EVUNULCBERUxFVEVfUFJPRFVDVCwgUFJPRFVDVFNfTE9BRElORywgR0VUX1BST0RVQ1QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHRva2VuQ29uZmlnIH0gZnJvbSAnLi9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyByZXR1cm5FcnJvcnMgfSBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGxldCBzdG9yZWRQcm9kdWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpIHx8IFwiXCI7XG4gIGlmIChzdG9yZWRQcm9kdWN0cyAhPT0gXCJcIikge1xuICAgIHN0b3JlZFByb2R1Y3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9kdWN0cyk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX1BST0RVQ1RTLFxuICAgICAgcGF5bG9hZDogc3RvcmVkUHJvZHVjdHNcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoKHNldFByb2R1Y3RzTG9hZGluZygpKTtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL2FwaV9pbmRleCcpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1RTLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVyciA9PlxuICAgICAgICBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSBpZCA9PiBkaXNwYXRjaCA9PiB7XG4gIGxldCBzdG9yZWRQcm9kdWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpIHx8IFwiXCI7XG4gIGlmIChzdG9yZWRQcm9kdWN0cyAhPT0gXCJcIikge1xuICAgIHN0b3JlZFByb2R1Y3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9kdWN0cyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RvcmVkUHJvZHVjdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBHRVRfUFJPRFVDVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHN0b3JlZFByb2R1Y3RzW2ldXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGF0Y2goc2V0UHJvZHVjdHNMb2FkaW5nKCkpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KCcvcHJvZHVjdC9hcGkvJyArIGlkKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1QsXG4gICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgIGRpc3BhdGNoKHJldHVybkVycm9ycyhlcnIucmVzcG9uc2UuZGF0YSwgZXJyLnJlc3BvbnNlLnN0YXR1cykpXG4gICAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvZHVjdHNMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBST0RVQ1RTX0xPQURJTkdcbiAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IFVTRVJfTE9BRElORyA9IFwiVVNFUl9MT0FESU5HXCI7XG5leHBvcnQgY29uc3QgVVNFUl9MT0FERUQgPSBcIlVTRVJfTE9BREVEXCI7XG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9IFwiQVVUSF9FUlJPUlwiO1xuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcIkxPR0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gXCJMT0dJTl9GQUlMXCI7XG5leHBvcnQgY29uc3QgTE9HT1VUX1NVQ0NFU1MgPSBcIkxPR09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9IFwiUkVHSVNURVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSBcIlJFR0lTVEVSX0ZBSUxcIjtcbmV4cG9ydCBjb25zdCBHRVRfRVJST1JTID0gJ0dFVF9FUlJPUlMnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SUyA9ICdDTEVBUl9FUlJPUlMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9ICdHRVRfUFJPRFVDVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUID0gJ0dFVF9QUk9EVUNUJztcbmV4cG9ydCBjb25zdCBJTkNSRUFTRV9QUk9EVUNUX1NUT0NLID0gJ0lOQ1JFQVNFX1BST0RVQ1RfU1RPQ0snO1xuZXhwb3J0IGNvbnN0IERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgPSAnREVDUkVBU0VfUFJPRFVDVF9TVE9DSyc7XG5leHBvcnQgY29uc3QgUFJPRFVDVFNfTE9BRElORyA9ICdQUk9EVUNUU19MT0FESU5HJztcbmV4cG9ydCBjb25zdCBHRVRfSVRFTVMgPSAnR0VUX0lURU1TJztcbmV4cG9ydCBjb25zdCBBRERfSVRFTSA9ICdBRERfSVRFTSc7XG5leHBvcnQgY29uc3QgREVMRVRFX0lURU0gPSAnREVMRVRFX0lURU0nO1xuZXhwb3J0IGNvbnN0IElURU1TX0xPQURJTkcgPSAnSVRFTVNfTE9BRElORyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RMaXN0JztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJy4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxucmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IFxue1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhcnQ6IHRoaXMucHJvcHMuY2FydCB8fCBbXSxcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInJlYWN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWxlcnQubWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgJyArIGFsZXJ0LnR5cGV9PnthbGVydC5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBleGFjdCBjb21wb25lbnQ9e1Byb2R1Y3RMaXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL3Nob3cvOmlkJyBjb21wb25lbnQ9e1Byb2R1Y3REZXRhaWxzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2lufSAvPiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvKlwiIHJlbmRlcj17KCkgPT4gKDxSZWRpcmVjdCB0bz1cIi9cIiAvPil9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG5cbiAgUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEl0ZW1zLCBkZWxldGVJdGVtIH0gZnJvbSAnLi4vYWN0aW9ucy9pdGVtQWN0aW9ucyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IFxue1xuICAgIHN0YXRlID0ge1xuICAgICAgICAgdG90YWw6IDBcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2V0SXRlbXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGRlbGV0ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgfTtcbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJdGVtcygpO1xuICAgICAgfVxuICAgIFxuICAgIG9uRGVsZXRlQ2xpY2sgPSBpdGVtID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKGl0ZW0pO1xuICAgICAgfTtcblxuICAgIGRpc3BsYXlJdGVtcyA9ICgpID0+IHtcbiAgICAgIGxldCBDYXJ0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICB4eyBwcm9wcy5kZXRhaWxzLnF1YW50aXR5IH0geyBwcm9wcy5kZXRhaWxzLnBhcmVudC5uYW1lIH0geyBwcm9wcy5kZXRhaWxzLnByb2R1Y3QubmFtZSB9IHwgeyBwcm9wcy5kZXRhaWxzLnByb2R1Y3QucHJpY2UgKiBwcm9wcy5kZXRhaWxzLnF1YW50aXR5IH3igqxcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25EZWxldGVDbGljayhwcm9wcy5kZXRhaWxzKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+IFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gPENhcnRJdGVtIGRldGFpbHM9e2l0ZW19IC8+XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZHJvcGRvd24taGVhZGVyIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFBhbmllclxuICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWJsb2NrXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5SXRlbXMoKSB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYm9yZGVyLWJvdHRvbSBtYi0yIHB4LTMgcHktMlwiPlRvdGFsOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byBmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPnsgdGhpcy5wcm9wcy5pdGVtLnRvdGFsVG9QYXlUVEMgfeKCrDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUgYnRuLXNtXCIgPkVkaXRlciBxdWFudGl0w6k8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBtbC1hdXRvXCIgPlBheWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldEl0ZW1zLCBkZWxldGVJdGVtIH1cbiAgKShDYXJ0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBbGVydH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5pbXBvcnQgeyBjbGVhckVycm9ycyB9IGZyb20gJy4uL2FjdGlvbnMvZXJyb3JBY3Rpb25zJztcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7IFxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBcbntcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIG1zZzogbnVsbFxuICAgICAgfTtcbiAgICBcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBsb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgY2xlYXJFcnJvcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICB9O1xuICAgIFxuICAgIGhhbmRsZUxvZ2luID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiAnJywgcGFzc3dvcmQ6ICcnfSk7XG4gICAgICAgIHRoaXMucHJvcHMubG9naW4odXNlcik7XG4gICAgICB9O1xuXG4gICAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IGNvbC1tZC00IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLWluXCI+PC9pPlNlIGNvbm5lY3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubXNnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz57dGhpcy5zdGF0ZS5tc2d9PC9BbGVydD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlTG9naW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkKSA/IFwiXCIgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIGxvZ2dlZCBpbiBhcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIgXCIgKyB0aGlzLnByb3BzLnVzZXIuZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7eyBwYXRoKCdsb2dvdXQnKSB9fVwiPiBMb2dvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtaWNvbi1sZWZ0IG0tYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiaW5wdXRFbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCBhdXRvRm9jdXMgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LWljb24tbGVmdCBtLWItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk1vdCBkZSBwYXNzZVwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBtLXQtMTBcIiA+U0UgQ09OTkVDVEVSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24taW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBhcyBlbmNvcmUgY2xpZW50ID88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWJsb2NrXCIgaHJlZj1cIi9yZWdpc3RlclwiIHJvbGU9XCJidXR0b25cIj5DUkVFUiBVTiBDT01QVEU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz0nLycvPlxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgIGVycm9yOiBzdGF0ZS5lcnJvclxuICB9KTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dpbiwgY2xlYXJFcnJvcnMgfSkoTG9naW4pO1xuXG57LyogPGRpdiBpZD1cImZiLXJvb3RcIj48L2Rpdj5cbiAgICA8c2NyaXB0IGFzeW5jIGRlZmVyIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgc3JjPVwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9mcl9GUi9zZGsuanMjeGZibWw9MSZ2ZXJzaW9uPXY0LjAmYXBwSWQ9NTAyMDg0Nzg3MDA4ODE1JmF1dG9Mb2dBcHBFdmVudHM9MVwiPjwvc2NyaXB0PlxuPGRpdiBjbGFzc05hbWU9XCJmYi1sb2dpbi1idXR0b25cIiBkYXRhLXdpZHRoPVwiXCIgZGF0YS1zaXplPVwibWVkaXVtXCIgZGF0YS1idXR0b24tdHlwZT1cImxvZ2luX3dpdGhcIiBkYXRhLWF1dG8tbG9nb3V0LWxpbms9XCJ0cnVlXCIgZGF0YS11c2UtY29udGludWUtYXM9XCJ0cnVlXCI+PC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgIDxzcGFuPm91PC9zcGFuPlxuPC9kaXY+ICovfSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL2NhcnQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjb3VudDogMCxcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBsb2dvdXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QW5vbnltb3VzVmlldyA9ICgpID0+IHtcbiAgICAgICAgbGV0IEFub255bW91cyA9ICgpID0+IDxsaT48TGluayB0bz1cIi9sb2dpblwiPlNlIGNvbm5lY3RlcjwvTGluaz48L2xpPlxuICAgICAgICByZXR1cm4gPEFub255bW91cyAvPlxuICAgIH1cblxuICAgIGRpc3BsYXlMb2dnZWRWaWV3ID0gKHVzZXIpID0+IHtcbiAgICAgICAgbGV0IElkZW50aWZpZWQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyB1c2VyLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3VzZXJfc2VsZl9zaG93JykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5Nb24gcHJvZmlsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy51c2VyLnJvbGVzLmluZGV4T2YoJ1JPTEVfU1VQUExJRVInKSA9PT0gLTEgJiYgcHJvcHMudXNlci5yb2xlcy5pbmRleE9mKCdST0xFX0FETUlOJykgPT09IC0xKSA/IFwiXCIgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnc3RvY2tfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveC1vcGVuXCI+PC9pPlN0b2NrczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnZ2V0X29yZGVyJykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXNoLXJlZ2lzdGVyXCI+PC9pPk9yZGVyczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKHByb3BzLnVzZXIucm9sZXMuaW5kZXhPZignUk9MRV9ERUxJVkVSRVInKSA9PT0gLTEgJiYgcHJvcHMudXNlci5yb2xlcy5pbmRleE9mKCdST0xFX0FETUlOJykgPT09IC0xKSA/IFwiXCIgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnZGVsaXZlcmVyJykgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cnVja1wiPjwvaT5MaXZyYWlzb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMudXNlci5yb2xlcy5pbmRleE9mKCdST0xFX0FETUlOJykgPT09IC0xKSA/IFwiXCIgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgndXNlcl9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIj48L2k+VXNlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ2NpdHlfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNpdHlcIj48L2k+Q2l0eTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgncHJvZHVjdF9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXRlbnNpbHNcIj48L2k+UHJvZHVpdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3ZhcmlhbnRfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zb3J0XCI+PC9pPlZhcmlhbnRlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnY2F0ZWdvcnlfaW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbHVtbnNcIj48L2k+Q2F0w6lnb3JpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cInt7IHBhdGgoJ3R2YV9pbmRleCcpIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsY3VsYXRvclwiPjwvaT5UYXhlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwie3sgcGF0aCgnYWxsZXJnZW5faW5kZXgnKSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPkFsbGVyZ8OobmVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUxvZ291dCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLW91dC1hbHRcIj48L2k+U2UgZMOpY29ubmVjdGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8SWRlbnRpZmllZCB1c2VyPXt1c2VyfS8+XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgaXRlbSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1iYWNrZHJvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+IDxpbWcgc3JjPVwidXBsb2Fkcy9sb2dvcy9jbGlrRWF0LnBuZ1wiIGFsdD1cIkNsaWsgRWF0IExvZ29cIiBoZWlnaHQ9XCI1MHB4XCIvPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aGVudGljYXRlZCA/IHRoaXMuZGlzcGxheUxvZ2dlZFZpZXcodXNlcikgOiB0aGlzLmRpc3BsYXlBbm9ueW1vdXNWaWV3KCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLW5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3twYXRoKCdnZXRfY2FydCcpIH19XCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uaXRlbXMubGVuZ3RoIDw9IDAgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uaXRlbXMucmVkdWNlKChjdW11bCwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQucXVhbnRpdHkgPT0gbnVsbCA/IGN1bXVsIDogY3VtdWwgKyBjdXJyZW50LnF1YW50aXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGlkPVwiY2FydC1zdW1tYXJ5XCI+PENhcnQvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyLi4uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgY2xvc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgaXRlbTogc3RhdGUuaXRlbSxcbiAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gIH0pO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IGxvZ291dCB9KShOYXZiYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0SXRlbXMsIGFkZEl0ZW0sIGRlbGV0ZUl0ZW0gfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW1BY3Rpb25zJztcbmltcG9ydCB7IGdldFByb2R1Y3QgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IFxue1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdldFByb2R1Y3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGFkZEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRQcm9kdWN0KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayA9IChwcm9kdWN0LCB2YXJpYW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IHByb2R1Y3Q6IHByb2R1Y3QsIHZhcmlhbnQ6IHZhcmlhbnQsIHF1YW50aXR5OiAxIH07XG4gICAgICAgIHRoaXMucHJvcHMuYWRkSXRlbShuZXdJdGVtKTtcbiAgICB9O1xuXG4gICAgZGlzcGxheUFsbGVyZ2VucyA9IChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGxldCBBbGxlcmdlbiA9IChwcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLm5hbWUgKyBcIiBcIiB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZHVjdC5hbGxlcmdlbnMpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmFsbGVyZ2Vucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmFsbGVyZ2Vucy5tYXAoIChhbGxlcmdlbikgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmFsbGVyZ2Vucy5pbmRleE9mKGFsbGVyZ2VuKSA9PSAwID8gPHNwYW4+QWxsZXJnw6huZXMgOiAgPEFsbGVyZ2VuIGRldGFpbHM9e2FsbGVyZ2VufSAvPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPjxBbGxlcmdlbiBkZXRhaWxzPXthbGxlcmdlbn0gLz48L3NwYW4+ICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8c3Bhbj5OZSBjb250aWVudCBwYXMgZGUgcHJvZHVpdHMgYWxsZXJnw6huZXMuPC9zcGFuPlxuICAgIH1cblxuICAgIGRpc3BsYXlWYXJpYW50cyA9IChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGxldCBWYXJpYW50ID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93LXJldmVyc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb2xseVwiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifSB7cHJvcHMuZGV0YWlscy5zdG9jay5xdWFudGl0eX0ge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXRhaWxzLnN0b2NrLnF1YW50aXR5IDw9IDAgPyA8c3Bhbj5FbiBydXB0dXJlIGRlIHN0b2NrICE8L3NwYW4+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKHByb3BzLnByb2R1Y3QsIHByb3BzLmRldGFpbHMpfSBpZD17cHJvcHMuZGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXRhaWxzLm5hbWV9ICDDoCB7cHJvcHMuZGV0YWlscy5wcmljZX3igqxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZHVjdC52YXJpYW50cykge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QudmFyaWFudHMubWFwKHZhcmlhbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYXJpYW50IGRldGFpbHM9e3ZhcmlhbnR9IHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlOdXRyaXRpb25hbHMgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgICBsZXQgTnV0cml0aW9uYWxzID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+dmFsZXVycyBudXRyaXRpb25uZWxsZXMgbW95ZW5uZXMgcG91ciAxMDBnPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5FbmVyZ2llIChLSikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5rSiB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+RW5lcmdpZSAoS0NhbCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5LQ2FsIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5Qcm90ZWluZXMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5wcm90ZWluIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5DYXJib2h5ZHJhdGVzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuY2FyYm9oeWRyYXRlcyB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U3VjcmUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlscy5zdWdhciB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+TWF0acOocmUgZ3Jhc3NlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuZmF0IH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGVcIj5kb250IGFjaWRlcyBncmFzIHNhdHVyw6lzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMudHJhbnNBRyB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U2VsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc2FsdCB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZHVjdC5udXRyaXRpb25hbHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TnV0cml0aW9uYWxzIGRldGFpbHM9e3Byb2R1Y3QubnV0cml0aW9uYWxzfSAvPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb3BzLnByb2R1Y3Quc2VsZWN0ZWQgO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC10LTMwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57IHByb2R1Y3QubmFtZSB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11dGVuc2lsc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5jYXRlZ29yeSA/IHByb2R1Y3QuY2F0ZWdvcnkubmFtZSA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgdGhpcy5kaXNwbGF5QWxsZXJnZW5zKHByb2R1Y3QpIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCFwcm9kdWN0LnBpY3R1cmUgfHwgcHJvZHVjdC5waWN0dXJlID09PSBcIlwiICkgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiIHNyYz17ICcuLi91cGxvYWRzL3BpY3R1cmVzLycgKyBwcm9kdWN0LnBpY3R1cmUuYjY0IH0gYWx0PXsgcHJvZHVjdC5waWN0dXJlLmI2NCB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5VmFyaWFudHMocHJvZHVjdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5kaXNwbGF5TnV0cml0aW9uYWxzKHByb2R1Y3QpIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyUgaWYgaXNfZ3JhbnRlZCgnUk9MRV9BRE1JTicpICV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7eyBwYXRoKCdwcm9kdWN0X2VkaXQnLCB7J2lkJzogcHJvZHVjdC5pZH0pIH19XCI+ZWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW5jbHVkZSgncHJvZHVjdC9fZGVsZXRlX2Zvcm0uaHRtbC50d2lnJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyUgZW5kaWYgJX0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdDogc3RhdGUucHJvZHVjdCxcbiAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWRcbiAgfSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICB7IGdldEl0ZW1zLCBkZWxldGVJdGVtLCBnZXRQcm9kdWN0LCBhZGRJdGVtIH1cbiAgKShQcm9kdWN0RGV0YWlscyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdEFjdGlvbnMnO1xuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4uL2FjdGlvbnMvaXRlbUFjdGlvbnMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXG57XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2V0UHJvZHVjdHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGFkZEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayA9IChwcm9kdWN0LCB2YXJpYW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IHByb2R1Y3Q6IHByb2R1Y3QsIHZhcmlhbnQ6IHZhcmlhbnQsIHF1YW50aXR5OiAxIH07XG4gICAgICAgIHRoaXMucHJvcHMuYWRkSXRlbShuZXdJdGVtKTtcbiAgICB9O1xuXG4gICAgZGlzcGxheVZhcmlhbnRzID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IFZhcmlhbnQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRvbGx5XCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn0ge3Byb3BzLmRldGFpbHMuc3RvY2sucXVhbnRpdHl9IHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXRhaWxzLnN0b2NrLnF1YW50aXR5IDw9IDAgPyA8c3Bhbj5FbiBydXB0dXJlIGRlIHN0b2NrICE8L3NwYW4+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2socHJvZHVjdCwgcHJvcHMuZGV0YWlscyl9IGlkPXtwcm9wcy5kZXRhaWxzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXRhaWxzLm5hbWV9ICDDoCB7cHJvcHMuZGV0YWlscy5wcmljZX3igqxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZHVjdC52YXJpYW50cy5tYXAodmFyaWFudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICA8VmFyaWFudCBkZXRhaWxzPXt2YXJpYW50fSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBQcm9kdWN0ID0gKHByb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IHJlYWN0LXByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17IFwiL3Nob3cvXCIgKyBwcm9wcy5kZXRhaWxzLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmRldGFpbHMucGljdHVyZSAhPT0gbnVsbCAmJiBwcm9wcy5kZXRhaWxzLnBpY3R1cmUgIT09IFwiXCIpID8gPGltZyBzcmM9eyAndXBsb2Fkcy9waWN0dXJlcy8nICsgcHJvcHMuZGV0YWlscy5waWN0dXJlLmI2NCB9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD17IHByb3BzLmRldGFpbHMucGljdHVyZS5iNjQgfS8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BzLmRldGFpbHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17IFwiL3Nob3cvXCIgKyBwcm9wcy5kZXRhaWxzLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRydWNrXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWxzLnN1cHBsaWVyLnByZXBhcmF0aW9uUGVyaW9kIH1tbiBAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRldGFpbHMuc3VwcGxpZXIubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuZGlzcGxheVZhcmlhbnRzKHByb3BzLmRldGFpbHMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcm9kdWN0LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBkZXRhaWxzPXtwcm9kdWN0fSAvPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC10LTMwXCIgaWQ9XCJyZWFjdC1wcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmRpc3BsYXlQcm9kdWN0cygpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdDogc3RhdGUucHJvZHVjdCxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkXG4gIH0pO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgeyBnZXRQcm9kdWN0cywgYWRkSXRlbSB9XG4gICkoUHJvZHVjdExpc3QpO1xuIiwiZnVuY3Rpb24gZ2V0VG90YWxUVEMoY2FydEl0ZW1zKVxue1xuICAgIGxldCB0b3RhbFRUQyA9IDA7XG4gICAgY2FydEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRvdGFsVFRDICs9IChpdGVtLnByb2R1Y3QucHJpY2UgKiBpdGVtLnF1YW50aXR5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG90YWxUVEM7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsVGF4KGNhcnRJdGVtcylcbntcbiAgICBsZXQgdG90YWxUYXggPSAwO1xuICAgIGNhcnRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0b3RhbFRheCArPSAoKGl0ZW0ucHJvZHVjdC5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLyhpdGVtLnByb2R1Y3QudHZhLnRhdXggKyAxKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsVGF4O1xufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEhUKGNhcnRJdGVtcylcbntcbiAgICByZXR1cm4gKGdldFRvdGFsVFRDKGNhcnRJdGVtcykgLSBnZXRUb3RhbFRheChjYXJ0SXRlbXMpKTtcbn1cblxuZXhwb3J0IHsgZ2V0VG90YWxUVEMsIGdldFRvdGFsVGF4LCBnZXRUb3RhbEhUIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odG9rZW4pIHtcbiAgICBjb25zdCBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcbiAgICByZXR1cm4gZGF0YS5kYXRhO1xufSIsImltcG9ydCB1c2VyRXh0cmFjdG9yIGZyb20gJy4uL2hlbHBlcnMvdXNlckV4dHJhY3Rvcic7XG5pbXBvcnQge1xuICAgIFVTRVJfTE9BREVELFxuICAgIFVTRVJfTE9BRElORyxcbiAgICBBVVRIX0VSUk9SLFxuICAgIExPR0lOX1NVQ0NFU1MsXG4gICAgTE9HSU5fRkFJTCxcbiAgICBMT0dPVVRfU1VDQ0VTUyxcbiAgICBSRUdJU1RFUl9TVUNDRVNTLFxuICAgIFJFR0lTVEVSX0ZBSUxcbiAgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbiAgXG4gIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfHwgXCJcIjtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRva2VuOiBzdG9yZWRUb2tlbiB8fCBcIlwiLFxuICAgIGlzQXV0aGVudGljYXRlZDogc3RvcmVkVG9rZW4gIT09IFwiXCIgPyB0cnVlIDogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBzdG9yZWRUb2tlbiAhPT0gXCJcIiA/IHVzZXJFeHRyYWN0b3Ioc3RvcmVkVG9rZW4pIDogbnVsbFxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgVVNFUl9MT0FESU5HOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBVU0VSX0xPQURFRDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgdXNlcjogdXNlckV4dHJhY3RvcihhY3Rpb24ucGF5bG9hZC50b2tlbilcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcbiAgICAgIGNhc2UgUkVHSVNURVJfU1VDQ0VTUzpcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWN0aW9uLnBheWxvYWQudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXJFeHRyYWN0b3IoYWN0aW9uLnBheWxvYWQudG9rZW4pKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB1c2VyOiB1c2VyRXh0cmFjdG9yKGFjdGlvbi5wYXlsb2FkLnRva2VuKVxuICAgICAgICB9O1xuICAgICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHMnKSkge1xuICAgICAgICAgIC8vICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2R1Y3RzJylcbiAgICAgICAgICAvLyB9XG4gICAgICBjYXNlIEFVVEhfRVJST1I6XG4gICAgICBjYXNlIExPR0lOX0ZBSUw6XG4gICAgICBjYXNlIFJFR0lTVEVSX0ZBSUw6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBHRVRfRVJST1JTLCBDTEVBUl9FUlJPUlMgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtc2c6IHt9LFxuICBzdGF0dXM6IG51bGwsXG4gIGlkOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfRVJST1JTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbXNnOiBhY3Rpb24ucGF5bG9hZC5tc2csXG4gICAgICAgIHN0YXR1czogYWN0aW9uLnBheWxvYWQuc3RhdHVzLFxuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIH07XG4gICAgY2FzZSBDTEVBUl9FUlJPUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtc2c6IHt9LFxuICAgICAgICBzdGF0dXM6IG51bGwsXG4gICAgICAgIGlkOiBudWxsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgZXJyb3JSZWR1Y2VyIGZyb20gJy4vZXJyb3JSZWR1Y2VyJztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJztcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tICcuL3Byb2R1Y3RSZWR1Y2VyJztcbmltcG9ydCBpdGVtUmVkdWNlciBmcm9tICcuL2l0ZW1SZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXG4gIGl0ZW06IGl0ZW1SZWR1Y2VyLFxuICBlcnJvcjogZXJyb3JSZWR1Y2VyLFxuICBhdXRoOiBhdXRoUmVkdWNlclxufSk7IiwiaW1wb3J0IHVzZXJFeHRyYWN0b3IgZnJvbSAnLi4vaGVscGVycy91c2VyRXh0cmFjdG9yJztcbmltcG9ydCB7IGdldFRvdGFsVFRDLCBnZXRUb3RhbFRheCwgZ2V0VG90YWxIVCB9IGZyb20gJy4uL2hlbHBlcnMvdGF4Q2FsY3VsYXRvcic7XG5pbXBvcnQge1xuICAgIEdFVF9JVEVNUyxcbiAgICBBRERfSVRFTSxcbiAgICBERUxFVEVfSVRFTSxcbiAgICBJVEVNU19MT0FESU5HXG4gIH0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG4gIFxuICAvL2NvbnN0IHN0b3JlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpIHx8IFtdO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIHRvdGFsVG9QYXlUVEM6IDAsICAgLy9nZXRUb3RhbFRUQyhzdG9yZWRDYXJ0KSxcbiAgICB0b3RhbFRvUGF5SFQ6IDAsICAgIC8vZ2V0VG90YWxIVChzdG9yZWRDYXJ0KSxcbiAgICB0b3RhbFRheDogMCwgICAgICAgIC8vZ2V0VG90YWxUYXgoc3RvcmVkQ2FydCksXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEdFVF9JVEVNUzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgdG90YWxUb1BheVRUQzogZ2V0VG90YWxUVEMoYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIHRvdGFsVGF4OiBnZXRUb3RhbFRheChhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgdG90YWxUb1BheUhUOiBnZXRUb3RhbEhUKGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBERUxFVEVfSVRFTTpcbiAgICAgICAgY29uc3QgcmVkdWNlZENhcnQgPSBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocmVkdWNlZENhcnQpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpdGVtczogcmVkdWNlZENhcnQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpLFxuICAgICAgICAgIHRvdGFsVG9QYXlUVEM6IGdldFRvdGFsVFRDKHJlZHVjZWRDYXJ0KSwgICAgICAgLy9nZXRUb3RhbFRUQyhzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCkpLFxuICAgICAgICAgIHRvdGFsVGF4OiBnZXRUb3RhbFRheChyZWR1Y2VkQ2FydCksICAgICAgICAgICAgLy9nZXRUb3RhbFRheChzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCkpLFxuICAgICAgICAgIHRvdGFsVG9QYXlIVDogZ2V0VG90YWxIVChyZWR1Y2VkQ2FydCkgICAgICAgICAgLy9nZXRUb3RhbEhUKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICAgIH07XG4gICAgICBjYXNlIEFERF9JVEVNOlxuICAgICAgICBzdGF0ZS5pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3QubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgJiYgZWxlbWVudC5wYXJlbnQubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wYXJlbnQubmFtZSApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBBVFRFTlRJT04gOiBWw6lyaWZpZXIgSW1wYWN0XG4gICAgICAgIGNvbnN0IGVubGFyZ2VkQ2FydCA9IGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5ICE9PSAwID8gW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5pdGVtc10gOiBzdGF0ZS5pdGVtcztcbiAgICAgICAgLy8gRklOIGRlIG1vZGlmaWNhdGlvbiBzdXNjZXB0aWJsZSBkZSBwZXJ0dXJiZXIgbGUgYm9uIGZvbmN0aW9ubmVtZW50XG5cbiAgICAgICAgICAvL2FjdGlvbi5wYXlsb2FkLnF1YW50aXR5ICE9PSAwID8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLml0ZW1zXSkpIDogbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5pdGVtcykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGVubGFyZ2VkQ2FydCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zOiBlbmxhcmdlZENhcnQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vKGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5ID09IDApID8gc3RhdGUuaXRlbXMgOlthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaXRlbXNdLFxuICAgICAgICAgIHRvdGFsVG9QYXlUVEM6IGdldFRvdGFsVFRDKGVubGFyZ2VkQ2FydCksICAgICAgIC8vZ2V0VG90YWxUVEMoW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5pdGVtc10pLFxuICAgICAgICAgIHRvdGFsVGF4OiBnZXRUb3RhbFRheChlbmxhcmdlZENhcnQpLCAgICAgICAgICAgIC8vZ2V0VG90YWxUYXgoW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5pdGVtc10pLFxuICAgICAgICAgIHRvdGFsVG9QYXlIVDogZ2V0VG90YWxIVChlbmxhcmdlZENhcnQpICAgICAgICAgIC8vZ2V0VG90YWxIVChbYWN0aW9uLnBheWxvYWQsIC4uLnN0YXRlLml0ZW1zXSksXG4gICAgICAgIH07XG4gICAgICBjYXNlIElURU1TX0xPQURJTkc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IEdFVF9QUk9EVUNUUywgR0VUX1BST0RVQ1QsIElOQ1JFQVNFX1BST0RVQ1RfU1RPQ0ssIERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbiAgXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW10sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgc2VsZWN0ZWQ6IHt9XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBHRVRfUFJPRFVDVFM6XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdGVkOiB7fSBcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgR0VUX1BST0RVQ1Q6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgREVDUkVBU0VfUFJPRFVDVF9TVE9DSzpcbiAgICAgIGNhc2UgSU5DUkVBU0VfUFJPRFVDVF9TVE9DSzpcbiAgICAgICAgICBsZXQgcEluZGV4ID0gMDtcbiAgICAgICAgICBsZXQgc0luZGV4ID0gLTE7XG4gICAgICAgICAgbGV0IHZJbmRleCA9IC0xO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1tpXS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCkge1xuICAgICAgICAgICAgICBwSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1tpXS5pZCA9PT0gc3RhdGUuc2VsZWN0ZWQuaWQpIHtcbiAgICAgICAgICAgICAgICBzSW5kZXggPSBpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW3BJbmRleF0udmFyaWFudHNbaV0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnZhcmlhbnQuaWQpIHtcbiAgICAgICAgICAgICAgdkluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG5ld1NlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWQ7XG4gICAgICAgICAgbGV0IG5ld1Byb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICAgICAgaWYgKHZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgbGV0IGluaXRpYWxRdHkgPSBzdGF0ZS5wcm9kdWN0c1twSW5kZXhdLnZhcmlhbnRzW3ZJbmRleF0uc3RvY2sucXVhbnRpdHk7XG4gICAgICAgICAgICAgIGxldCBuZXdWYXJpYW50cyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnByb2R1Y3RzW3BJbmRleF0udmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhcmlhbnRzW2ldID0gc3RhdGUucHJvZHVjdHNbcEluZGV4XS52YXJpYW50c1tpXTtcbiAgICAgICAgICAgICAgICAgIGlmIChpID09PSB2SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09IERFQ1JFQVNFX1BST0RVQ1RfU1RPQ0sgPyBuZXdWYXJpYW50c1tpXS5zdG9jay5xdWFudGl0eSA9IGluaXRpYWxRdHkgLSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3VmFyaWFudHNbaV0uc3RvY2sucXVhbnRpdHkgPSBpbml0aWFsUXR5ICsgYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSAoc0luZGV4ID09PSBwSW5kZXgpID8gey4uLnN0YXRlLnNlbGVjdGVkLCB2YXJpYW50czogbmV3VmFyaWFudHN9IDogc3RhdGUuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIG5ld1Byb2R1Y3RzID0gc3RhdGUucHJvZHVjdHMubWFwKFxuICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSBwSW5kZXggPyB7Li4ucHJvZHVjdCwgdmFyaWFudHM6IG5ld1ZhcmlhbnRzfSA6IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwcm9kdWN0czogbmV3UHJvZHVjdHMsXG4gICAgICAgICAgICBzZWxlY3RlZDogbmV3U2VsZWN0ZWRcbiAgICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGVXYXJlID0gW3RodW5rXTtcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZVdhcmUpKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==