import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateVariant } from '../../../actions/itemActions';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class StockList extends React.Component 
{
    input = [];

    constructor(props) {
        super(props);
        this.props.products.forEach(product => {
            product.variants.forEach(variant => {
                this.input[variant.id] = React.createRef();
            });
        });
    }

    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        updateVariant: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.products.map( product => {
            return product.variants.map(variant => {
                this.setState({[variant.id]: parseInt(variant.stock.quantity)})
                return variant;
            });
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: parseInt(e.target.current.value)});
    }

    onSubmitNewQty = (e) => {
        e.preventDefault();
        let selectedId = parseInt(e.target.dataset.variant);
        let selectedProduct = this.props.products.filter( product => product.id === parseInt(e.target.dataset.product));
        let selectedVariant = selectedProduct[0].variants.filter( variant => variant.id === selectedId);
        let item = {
            product: selectedProduct[0],
            variant: selectedVariant[0],
            quantity: parseInt(this.input[selectedId].current.value),
        };
        this.props.updateVariant(item);
    }

    displayVariants = (product) => {
        let Variant = (props) => {
            return ( 
                <li>
                    <span className="stocklist-variant-name">{ props.details.name }</span>
                    <input className="stocklist-variant-qty" type="number" ref={ this.input[props.details.id] } defaultValue={ props.details.stock.quantity } />         {/*  data-variant={ props.details.id } data-product={ props.product.id } onChange={ this.onSubmitNewQty } */}
                    <a role="button" href="#" className="btn btn-danger btn-sm stocklist-variant-validation" data-variant={ props.details.id } data-product={ props.product.id } onClick={ this.onSubmitNewQty }>Enregistrer</a>
                </li>
            );
        }
        return product.variants.map(variant => {
            return <Variant details={variant} product={product} />;
        });
    }

    displayProducts = () => {
        let currentSupplier = JSON.parse(this.props.user.supplier);
        let Product = (props) => {
            return (
                <div className={"col-12 col-sm-6 col-lg-6 react-product category-" + props.details.name }>
                <div className="card">
                    <h4 className="card-header">{ props.details.name }</h4>
                    <div className="card-body">
                        <p className="card-text stock-items-container">
                            <ul className="stocklist-variant-list">{ this.displayVariants(props.details) }</ul>
                        </p>
                    </div>
                </div>
                </div>
            );
        }
        let productList = this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ? 
                        //   this.props.products 
                          Object.entries(this.props.selectedCategory).length === 0 && this.props.selectedCategory.constructor === Object ? 
                                this.props.products : 
                                this.props.products.filter( product => {
                                    return product.category.name === this.props.selectedCategory.name;
                                })
                          : 
                          this.props.products.filter(product => parseInt(product.supplier.id) === parseInt(currentSupplier.id));
        return productList.map( product => <Product details={product} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return (
                <div className="container" id="content-wrap">
                    <h1>Etat des stocks</h1>
                    <div className="row">
                    { typeof this.props.products === 'undefined' || this.props.products.length <= 0 ? <p>Aucun produit référencé</p> : this.displayProducts() }
                    </div>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    products: state.product.products,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    user: state.auth.user,
    suppliers: state.supplier.suppliers,
    category: state.category.getCategories,
    selectedCategory: state.category.selected,
    allergen: state.allergen.allergens,
    tax: state.tax.taxes
  });

export default connect(mapStateToProps, { updateVariant })(StockList);