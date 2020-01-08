import React, { Component } from 'react';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { getCategories } from '../../actions/categoryActions';
import { getCategory } from '../../actions/categoryActions';
import PropTypes from 'prop-types';

class Navbar extends Component {

    state = {
        count: 0,
        selectedCategory: "Tous",
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        logout: PropTypes.func.isRequired,
        getCategories: PropTypes.func.isRequired,
        getCategory: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getCategories();
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
    }

    onChange = e => {
        e.preventDefault();
        this.setState({ selectedCategory: e.currentTarget.dataset["name"] });
        this.props.getCategory(e.currentTarget.id, this.props.categories);
    };

    displayAnonymousView = () => {
        let Anonymous = () => <li><Link to="/login">Se connecter</Link></li>
        return <Anonymous />
    }

    displayLoggedView = (user) => {
        let Identified = (props) => {
            return (
                <li className="dropdown">
                    <Link to="/" data-toggle="dropdown">
                        <img src="" alt=""/>
                        <span>{ user.username }
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/account">  <i className="fas fa-user"></i>Mon profil</Link>
                        <div className="dropdown-divider"></div>
                        { typeof props.user === 'undefined' ? "" : (props.user.roles.indexOf('ROLE_SUPPLIER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1) ? "" : (
                            <span>
                                <a className="dropdown-item" href="{{ path('stock_index') }}">
                                    <i className="fas fa-box-open"></i>Stocks</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="{{ path('get_order') }}">
                                    <i className="fas fa-cash-register"></i>Orders</a>
                                <div className="dropdown-divider"></div>
                            </span>
                            )
                        }
                        { typeof props.user === 'undefined' ? "" : (props.user.roles.indexOf('ROLE_DELIVERER') === -1 && props.user.roles.indexOf('ROLE_ADMIN') === -1) ? "" : (
                            <span>
                                <a className="dropdown-item" href="{{ path('deliverer') }}">
                                    <i className="fas fa-truck"></i>Livraisons</a>
                                <div className="dropdown-divider"></div>
                            </span>
                            )
                        }
                        { typeof props.user === 'undefined' ? "" : (props.user.roles.indexOf('ROLE_ADMIN') === -1) ? "" : (
                            <span>
                                <Link className="dropdown-item" to="/users">
                                    <i className="fas fa-users"></i>Utilisateurs</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/suppliers">
                                    <i className="fas fa-industry"></i>Fournisseurs</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/cities">
                                    <i className="fas fa-city"></i>Villes</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/products">
                                    <i class="fas fa-utensils"></i>Produits</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/categories">
                                    <i className="fas fa-columns"></i>Catégories</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/taxes">
                                    <i className="fas fa-calculator"></i>Taxes</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/allergens">
                                    <i className="fas fa-exclamation-triangle"></i>Allergènes</Link>
                                <div className="dropdown-divider"></div>
                            </span>
                            )
                        }
                            <a className="dropdown-item" href="#" onClick={ this.handleLogout }>
                            <i className="fas fa-sign-out-alt"></i>Se déconnecter</a>
                    </div>
                </li>
              );
        }
        return <Identified user={user}/>
    }

    displayCategories = (categories) => {
        const selectedStyle = {
            color: "#74be6b",
            backgroundColor: "#e1f7de", 
        }
        const notSelectedStyle = {
            color: "black",
            backgroundColor: "white", 
        }
        let Categories = (props) => {
            return (
                <li className="dropdown">
                    <Link to="/" data-toggle="dropdown">
                        <img src="" alt=""/>
                        <span> <i class="fas fa-filter" ></i><i className="fas fa-chevron-down"></i></span>
                    </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div id="-1" data-name="Tous" className={ this.state.selectedCategory == "Tous" ? "selected-Category" : "not-selected-Category" } onClick={ this.onChange } >     {/* style={ this.state.selectedCategory = "Tous" ? selectedStyle : notSelectedStyle } */}
                                <div className="void"></div>
                                <p className="dropdown-item" >Tous les articles</p>
                            </div>
                            { 
                                props.details.map( (category) => {
                                    return (
                                        <div id={category.id} data-name={ category.name } className={ this.state.selectedCategory == category.name ? "selected-Category" : "not-selected-Category" } onClick={ this.onChange } >
                                            <div className="dropdown-divider"></div>
                                            <p className="dropdown-item">{ category.name }</p>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </li>
              );
        }
        return <Categories details={categories}/>
    }

    render() {
        const { user, isAuthenticated, item, categories } = this.props;
        return (
            <header id="header">
                <div className="container">
                    <div className="navbar-backdrop">
                        <div className="navbar">
                            <Link to="/" className="logo"> <img src="uploads/logos/ClikEat-logo-with-name.png" alt="Clik Eat Logo" height="50px"/></Link>
                            <div className="toright">
                                <nav className="nav">
                                    <ul>
                                        { isAuthenticated ? this.displayLoggedView(user) : this.displayAnonymousView() }
                                        <li>
                                            <Link to="/"><i className="fas fa-home"></i></Link>
                                        </li>
                                        <li className="dropdown dropdown-notification">
                                            <a href="{{path('get_cart') }}" data-toggle="dropdown">
                                                <i className="fas fa-shopping-cart"></i>
                                                { item.items.length <= 0 ? "" :
                                                    (<span className="badge badge-cart">
                                                        { item.items.reduce((cumul, current) => {
                                                            return current.quantity == null ? cumul : cumul + current.quantity;
                                                            }, 0) 
                                                        }
                                                    </span>) 
                                                }
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" id="cart-summary"><Cart/></div>
                                        </li>
                                        {/* <li>
                                            <a data-toggle="search">
                                                <i className="fas fa-search"></i>
                                            </a>
                                        </li> */}
                                        { this.displayCategories(categories) }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-search">
                        <div className="container">
                            <form method="post">
                                <input type="text" className="form-control" placeholder="Rechercher..."/>
                                <i className="fas fa-times close"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    item: state.item,
    user: state.auth.user,
    categories: state.category.categories,
    selectedCategory: state.category.selected,
  });
  
  export default connect( mapStateToProps, { logout, getCategories, getCategory })(Navbar);