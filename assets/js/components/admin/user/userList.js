import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/userActions';
import { getCities } from '../../../actions/cityActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class UserList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        getCities: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getUsers();
        this.props.getCities();
    }

    displayUsers = () => {
        let User = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.username }</td>
                    <td>{ props.details.email }</td>
                    <td>
                        { 
                             props.details.roles.includes("ROLE_ADMIN") ? "ADMIN" : 
                            (props.details.roles.includes("ROLE_SUPPLIER") ? "FOURNISSEUR" : 
                            (props.details.roles.includes("ROLE_DELIVERER") ? "LIVREUR" : "CLIENT")) 
                        }
                    </td>
                    <td>{ props.details.isBanned == true ? "BANNI" : "-" }</td>
                    <td>
                        {/* <Link to={ "/users-show/" + props.details.id }>Show</Link> -  */}
                        <Link to={ "/users-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.users.map( user => <User details={user} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des inscrits</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Rôle</th>
                                <th>Etat</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.users !== 'undefined' && this.props.users.length > 0) ? 
                                this.displayUsers() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/users-add-or-edit" }>Create new</Link>
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
    user: state.auth.user
  });

export default connect(mapStateToProps, { getUsers, getCities })(UserList);
