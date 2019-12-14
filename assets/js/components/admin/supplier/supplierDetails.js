import React from 'react';
import { connect } from 'react-redux';
import { getSupplier } from '../../../actions/supplierActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class SupplierDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getSupplier: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getSupplier(this.props.match.params.id, this.props.suppliers);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedSupplier;
            return (
                <span>
                    <h1>TVA</h1>

                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{ typeof selection !== 'undefined' ? selection.id : '' }</td>
                            </tr>
                            <tr>
                                <th>Nom</th>
                                <td>{ typeof selection !== 'undefined' ? selection.name : '' }</td>
                            </tr>
                            <tr>
                                <th>Adresse</th>
                                <td>{ typeof selection !== 'undefined' ? selection.address : '' }</td>
                            </tr>
                            <tr>
                                <th>Utilisateurs</th>
                                <td>{ typeof selection.users !== 'undefined' ? 
                                    selection.users.map(user => { 
                                        return `${user.username} - ${user.email}   `;
                                    }) : '' }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={ "/suppliers" }>back to list</Link>

                    <Link to={ "/suppliers-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    suppliers: state.supplier.suppliers,
    selectedSupplier: state.supplier.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getSupplier })(SupplierDetails);
