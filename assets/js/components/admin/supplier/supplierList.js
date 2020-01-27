import React from 'react';
import { connect } from 'react-redux';
import { getSuppliers, deleteSupplier } from '../../../actions/supplierActions';
import { getUsers } from '../../../actions/userActions';
import {  Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class SupplierList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getSuppliers: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
        deleteSupplier: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.suppliers.length == 0) {
            this.props.getSuppliers();
        } 
        this.props.getUsers();
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteSupplier(id);
        this.props.history.push(`/suppliers`);
    };

    displaySuppliers = () => {
        let Supplier = (props) => {
            return (
                <tr>
                    {/* <td>{ props.details.id }</td> */}
                    <td>{ props.details.name }</td>
                    {/* <td>{ props.details.address }</td> */}
                    <td className="action-column">
                        {/* <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/suppliers-show/" + props.details.id }>Voir</Link> */}
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/suppliers-add-or-edit/" + props.details.id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/suppliers" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.suppliers.map( supplier => <Supplier details={supplier} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des fournisseurs</h1>
                    { 
                        this.props.isWaiting === false ?
                            <span>
                                <Link role="button" className="btn btn-success" to={ "/suppliers-add-or-edit" }>Créer un fournisseur</Link>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            {/* <th>Id</th> */}
                                            <th>Nom</th>
                                            {/* <th>Adresse</th> */}
                                            <th className="action-column">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (typeof this.props.suppliers !== 'undefined' && this.props.suppliers.length > 0) ? 
                                            this.displaySuppliers() : <tr> <td colspan="3">no records found</td> </tr>
                                        }
                                    </tbody>
                                </table>
                            </span> 
                        :
                            <div className="spinner-container">
                                <div class="spinner-border text-danger text-center" role="status"> 
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    user: state.auth.user,
    users: state.user.users,
    suppliers: state.supplier.suppliers,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isWaiting: state.supplier.isLoading
  });

export default connect(mapStateToProps, { getSuppliers, getUsers, deleteSupplier })(SupplierList);
