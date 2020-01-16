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
                    <tr>
                        <td>{ props.details.id }</td>
                        <td>{ props.product.name }</td>
                        <td>{ props.details.name }</td>
                        {/* <td><input type="number" name={ props.details.id } value={ this.state[props.details.id] || '' } onChange={ this.onChange } /></td> */}
                        <td><input type="number" ref={ this.input[props.details.id] } defaultValue={ props.details.stock.quantity || '' } /></td>
                        <td>
                            <a href="#" data-variant={ props.details.id } data-product={ props.product.id } onClick={ this.onSubmitNewQty }>Enregistrer</a>
                        </td>
                    </tr>
              );
            }
        return product.variants.map(variant => {
            return <Variant details={variant} product={product} />;
        });
    }

    displayProducts = () => {
        return this.props.products.map( product => this.displayVariants(product) );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des stocks</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Variante</th>
                                <th>Quantité</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.products !== 'undefined' && this.props.products.length > 0) ? 
                                    this.displayProducts() :
                                    <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/products-add-or-edit" }>Create new</Link>
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
    allergen: state.allergen.allergens,
    tax: state.tax.taxes
  });

export default connect(mapStateToProps, { updateVariant })(StockList);
// export default connect(mapStateToProps, { getProducts, deleteProduct, getSuppliers, getCategories, getAllergens, getTaxes })(StockList);
