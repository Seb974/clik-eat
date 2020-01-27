import React from 'react';
import { connect } from 'react-redux';
import { getCities, deleteCity } from '../../../actions/cityActions';
import {  Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CityList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCities: PropTypes.func.isRequired,
        deleteCity: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.cities.length === 0) {
            this.props.getCities();
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteCity(id);
        this.props.history.push(`/cities`);
    };

    displayCities = () => {
        let City = (props) => {
            return (
                <tr>
                    <td>{ props.details.zipCode }{ props.details.isDeliverable === true ? '*' : '' }</td>
                    <td>{ props.details.name }</td>
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/cities-add-or-edit/" + props.details.id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/cities" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.cities.map( city => <City details={city} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des villes</h1>
                    { 
                        this.props.isWaiting === false ?
                        <span>
                            <Link role="button" className="btn btn-success" to={ "/cities-add-or-edit" }>Créer une ville</Link>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Code postal</th>
                                        <th>Nom</th>
                                        <th className="action-column">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (typeof this.props.cities !== 'undefined' && this.props.cities.length > 0) ? 
                                        this.displayCities() : <tr> <td colspan="3">Aucune ville trouvée</td> </tr>
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
    cities: state.city.cities,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isWaiting: state.city.isLoading,
  });

export default connect(mapStateToProps, { getCities, deleteCity })(CityList);
