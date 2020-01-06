import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import { addItem, deleteCart } from '../../actions/itemActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';

class ProductList extends React.Component 
{
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
        deleteCart: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    
    componentDidMount() {
        const params = qs.parse(this.props.location.search);
        if (typeof params.paymentStatus !== 'undefined' && params.paymentStatus === 'success') {
            this.props.deleteCart();
        }
        this.props.getProducts();
    }

    handleClick = (product, variant) => {
        const newItem = { product: product, variant: variant, quantity: 1 };
        this.props.addItem(newItem);
    };

    displayVariants = (product) => {
        let Variant = (props) => {
            return (
                     <li key={"variant-item-" + props.details.id} className="d-flex flex-row-reverse variant-list">
                        {props.details.stock.quantity <= 0 ? <span class="react-stock">Rupture de stock !</span> : 
                            (<span>
                                <span class="stock-info">
                                    <i className="fas fa-dolly"></i> 
                                    {" "} {props.details.stock.quantity} {" "}
                                </span>
                                <button className="btn btn-primary btn-sm" onClick={() => this.handleClick(product, props.details)} id={props.details.id}>
                                    <i className="fas fa-shopping-cart"></i>
                                    {props.details.name}  à {props.details.price}€
                                </button>
                            </span>)
                        }
                    </li>
              );
            }
        return product.variants.map(variant => {
            return (
                <span key={"variant-span-" + variant.id}>
                    <hr/>
                    <Variant details={variant} product={product}/>
                </span>
            )
        });
    }

    displayProducts = (productsToDisplay) => {
        let Product = (props) => {
          return (
            <div className={"col-12 col-sm-6 col-lg-4 react-product category-" + props.details.category.name }>
                <div className="card card-lg home-card">
                    <div className="card-img">
                        <Link to={ "/show/" + props.details.id } className="article-details-link">
                            { 
                                (props.details.picture !== null && props.details.picture !== "" && typeof props.details.picture !== 'undefined') ? 
                                <img src={ props.details.picture.b64 } className="card-img-top" alt={ props.details.picture.b64 }/> : ""
                            }
                        </Link>
                    </div>
                    <div className="card-text">
                        <ul>
                            <li key={"product-item-" + props.details.id}>
                                <Link to={ "/show/" + props.details.id }>
                                    { props.details.name }
                                    <br/>
                                    <i className="fas fa-truck"></i> {" "}
                                    { new Date(props.details.supplier.preparationPeriod).getMinutes() }mn @
                                    { props.details.supplier.name }
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-block">
                        <ul className="d-flex flex-column">
                            { this.displayVariants(props.details) }
                        </ul>
                    </div>
                </div>
            </div>
          );
        }
        return productsToDisplay.map(product => {
            return <Product key={"product-" + product.id} details={product} />
        });
    }

    render() {
        return (
            <div className="product-wrapper">
                <section className="p-t-30" id="react-product-list">
                    <div className="container">
                        <div className="row">
                            { 
                                Object.entries(this.props.selectedCategory).length === 0 && this.props.selectedCategory.constructor === Object ? 
                                    this.displayProducts(this.props.product.products) : 
                                    this.displayProducts(this.props.product.products.filter( product => {
                                        return product.category.name === this.props.selectedCategory.name;
                                    }))
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    isAuthenticated: state.auth.isAuthenticated,
    selectedCategory: state.category.selected,
  });
  
  export default connect(
    mapStateToProps,
    { getProducts, addItem, deleteCart }
  )(ProductList);
