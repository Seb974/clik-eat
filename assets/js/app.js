import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ScrollToTop from './helpers/scrollToTop';
import { UPDATE_PRODUCT_STOCK } from './actions/types';
import { Provider } from 'react-redux';
import Navbar from './components/layout/navbar';
import ProductList from './components/product/productList';
import ProductDetails from './components/product/productDetails';
import CartList from './components/cart/cartList';
import Checkout from './components/payment/checkout';
import Login from './components/user/login';
import Register from './components/user/register';
import Profile from './components/user/profile';
import AllergenList from './components/admin/allergen/allergenList';
import AllergenDetails from './components/admin/allergen/allergenDetails';
import AllergenForm from './components/admin/allergen/allergenForm';
import TaxList from './components/admin/tax/taxList';
import TaxDetails from './components/admin/tax/taxDetails';
import TaxForm from './components/admin/tax/taxForm';
import CategoryList from './components/admin/category/categoryList';
import CategoryDetails from './components/admin/category/categoryDetails';
import CategoryForm from './components/admin/category/categoryForm';
import CityList from './components/admin/city/cityList';
import CityDetails from './components/admin/city/cityDetails';
import CityForm from './components/admin/city/cityForm';
import store from './store';
import { loadUser } from './actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

require('../css/app.css');

class App extends React.Component 
{

    state = {
        cart: this.props.cart || [],
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        updateProductStock: PropTypes.func,
    };

    componentDidMount = () => {
        const url = new URL('https:clikeat.re:3000/.well-known/mercure');
        url.searchParams.append('topic', 'pong/ping');

        const eventSource = new EventSource(url);
        eventSource.onmessage = event => {
            event.preventDefault();
            store.dispatch({
                type: UPDATE_PRODUCT_STOCK,
                payload: {
                    variant: JSON.parse(event.data),
                }
              })
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router onUpdate={() => window.scrollTo(0, 0)}>
                <span>
                    <span id="react-header">
                        <Navbar/>
                    </span>
                    <div id="page-container">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                            <ScrollToTop>
                                <Switch>
                                    <Route path='/' exact component={ProductList} />
                                    <Route path='/show/:id' component={ProductDetails} />
                                    <Route path='/login' component={Login} />
                                    <Route path='/register' component={Register} />
                                    <Route path='/cart' component={CartList} />
                                    <Route path='/checkout' component={Checkout} />
                                    <Route path='/account' component={Profile} />
                                    <Route path='/allergens' component={AllergenList} />
                                    <Route path='/allergens-show/:id' component={AllergenDetails} />
                                    <Route path='/allergens-add-or-edit/:id?' component={AllergenForm} />
                                    <Route path='/taxes' component={TaxList} />
                                    <Route path='/taxes-show/:id' component={TaxDetails} />
                                    <Route path='/taxes-add-or-edit/:id?' component={TaxForm} />
                                    <Route path='/categories' component={CategoryList} />
                                    <Route path='/categories-show/:id' component={CategoryDetails} />
                                    <Route path='/categories-add-or-edit/:id?' component={CategoryForm} />
                                    <Route path='/cities' component={CityList} />
                                    <Route path='/cities-show/:id' component={CityDetails} />
                                    <Route path='/cities-add-or-edit/:id?' component={CityForm} />
                                    <Route path="*" render={() => (<Redirect to="/" />)} /> 
                                </Switch>
                            </ScrollToTop>
                    </div>
                </span>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  });
  
  export default connect( mapStateToProps)(App);

  ReactDOM.render(<App/>, document.getElementById("root"));
