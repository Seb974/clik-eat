import React from 'react';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../../actions/productActions';
import { getSuppliers } from '../../../actions/supplierActions';
import { getCategories } from '../../../actions/categoryActions';
import { getAllergens } from '../../../actions/allergenActions';
import { getTaxes } from '../../../actions/taxActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class ProductAdminList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getProducts:  PropTypes.func.isRequired,
        deleteProduct: PropTypes.func.isRequired,
        getSuppliers: PropTypes.func.isRequired,
        getCategories: PropTypes.func.isRequired,
        getAllergens: PropTypes.func.isRequired,
        getTaxes: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.props.getProducts();
        this.props.getSuppliers();
        this.props.getCategories();
        this.props.getAllergens();
        this.props.getTaxes();
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteProduct(id);
    };

    displayProducts = () => {
        let Product = (props) => {
            const id = props.details.id;
            return (
                <tr>
                    <td>{ id }</td>
                    <td>{ props.details.name }</td>
                    <td>{ props.details.description }</td>
                    <td>
                        {/* <Link to={ "/users-show/" + props.details.id }>Show</Link> -  */}
                        <Link to={ "/products-add-or-edit/" + id }>Edit</Link>
                        <Link to={ "/products" } onClick={(e) => this.handleDelete(id, e)}>Delete</Link>
                    </td>
                </tr>
            );
        }
        return this.props.products.map( product => <Product details={product} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des produits</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.products !== 'undefined' && this.props.products.length > 0) ? 
                                this.displayProducts() : <tr> <td colspan="3">no records found</td> </tr>
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

export default connect(mapStateToProps, { getProducts, deleteProduct, getSuppliers, getCategories, getAllergens, getTaxes })(ProductAdminList);
