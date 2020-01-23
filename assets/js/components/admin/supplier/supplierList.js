import React from 'react';
import { connect } from 'react-redux';
import { getSuppliers } from '../../../actions/supplierActions';
import { getUsers } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class SupplierList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getSuppliers: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        if (this.props.suppliers.length == 0) {
            this.props.getSuppliers();
        } 
        this.props.getUsers();
    }

    displaySuppliers = () => {
        let Supplier = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>{ props.details.address }</td>
                    <td>
                        <Link to={ "/suppliers-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/suppliers-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.suppliers.map( supplier => <Supplier details={supplier} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des fournisseurs</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Adresse</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.suppliers !== 'undefined' && this.props.suppliers.length > 0) ? 
                                this.displaySuppliers() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/suppliers-add-or-edit" }>Create new</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    users: state.user.users,
    suppliers: state.supplier.suppliers,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getSuppliers, getUsers })(SupplierList);
