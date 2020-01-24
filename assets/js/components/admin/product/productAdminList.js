import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
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
        let currentSupplier = JSON.parse(this.props.user.supplier);
        let Product = (props) => {
            const id = props.details.id;
            return (
                <tr>
                    {/* <td>{ id }</td> */}
                    <td>{ props.details.name }</td>
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/products-add-or-edit/" + id }>Modifier</Link>
                        { "   "}
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/products" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        let productList = this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ? 
                          this.props.products : 
                          this.props.products.filter(product => parseInt(product.supplier.id) === parseInt(currentSupplier.id));
        return productList.map( product => <Product details={product} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des produits</h1>
                    <Link role="button" className="btn btn-success" to={ "/products-add-or-edit" }>Créer un produit</Link>
                    <table class="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Nom</th>
                                <th className="action-column">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.products !== 'undefined' && this.props.products.length > 0) ? 
                                this.displayProducts() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
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
