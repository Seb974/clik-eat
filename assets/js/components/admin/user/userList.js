import React from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../../actions/userActions';
import { getCities } from '../../../actions/cityActions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class UserList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        getCities: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers();
        }
        if (this.props.cities.length === 0) {
            this.props.getCities();
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteUser(id);
        this.props.history.push(`/users`);
    };

    displayUsers = () => {
        let User = (props) => {
            const id = props.details.id;
            return (
                <tr>
                    {/* <td>{ id }</td> */}
                    {/* <td>{ props.details.username }</td> */}
                    <td>{ props.details.email }</td>
                    {/* <td>
                        { 
                             props.details.roles.includes("ROLE_ADMIN") ? "ADMIN" : 
                            (props.details.roles.includes("ROLE_SUPPLIER") ? "FOURNISSEUR" : 
                            (props.details.roles.includes("ROLE_DELIVERER") ? "LIVREUR" : "CLIENT")) 
                        }
                    </td> */}
                    {/* <td>{ props.details.isBanned == true ? "BANNI" : "-" }</td> */}
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/users-add-or-edit/" + id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/users" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.users.map( user => <User details={user} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des inscrits</h1>
                        {
                            this.props.isWaiting === false ?
                            <span>
                                <Link role="button" className="btn btn-success" to={ "/users-add-or-edit" } >Créer un utilisateur</Link> 
                                <table class="table">
                                    <thead>
                                        <tr>
                                            {/* <th>Id</th> */}
                                            {/* <th>Nom</th> */}
                                            <th>Email</th>
                                            {/* <th>Rôle</th> */}
                                            {/* <th>Etat</th> */}
                                            <th className="action-column">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            (typeof this.props.users !== 'undefined' && this.props.users.length > 0) ?
                                            this.displayUsers()  : <tr> <td colspan="3">Aucun untilisateur trouvé</td> </tr> 
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
    users: state.user.users,
    cities: state.city.cities,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    user: state.auth.user,
    isWaiting: state.user.isLoading
  });

export default connect(mapStateToProps, { getUsers, getCities, deleteUser })(UserList);
