import React from 'react';
import { connect } from 'react-redux';
import { addCity, updateCity, deleteCity } from '../../../actions/cityActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CityForm extends React.Component 
{
    state = {
        isNew: true,
        name: '',
        zipCode: '',
        isDeliverable: false,
        selection: {}, 
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        addCity: PropTypes.func.isRequired,
        updateCity: PropTypes.func.isRequired,
        deleteCity: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const id = this.props.match.params.id;
        if (typeof id !== 'undefined') {
            for (let i = 0; i < this.props.cities.length; i++) {
                if (parseInt(this.props.cities[i].id) === parseInt(id)) {
                    const selectedCity = this.props.cities[i];
                    this.setState({
                        isNew: false,
                        name: selectedCity.name,
                        zipCode: selectedCity.zipCode,
                        isDeliverable: selectedCity.isDeliverable,
                        selection: selectedCity,
                    });
                    break;
                }
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onCheckboxChange = e => {
        this.setState({ isDeliverable: !this.state.isDeliverable });
    };

    handleSubmit = e => {
        e.preventDefault();
        const city = this.state.selection;
        city.name = this.state.name;
        city.zipCode = parseInt(this.state.zipCode);
        city.isDeliverable = this.state.isDeliverable;
        if (typeof this.props.match.params.id !== 'undefined') {
            this.props.updateCity(city);
        } else {
            this.props.addCity(city);
        }
        this.props.history.push(`/cities`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteCity(this.props.match.params.id);
        this.props.history.push(`/cities`);
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="productform-container" className="container">
                    <div className="col-md-10 order-md-1" id="adresses-panel">
                        <h1>{ (typeof this.id !== 'undefined' && this.id !== null) ? 'Modifier la ville "' + this.state.name + '"': (this.state.name !== '' ? 'Créer la ville "' + this.state.name +'"' : 'Créer une ville') }</h1>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="name">Nom de la ville</label>
                                    <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la catégorie" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="zipCode">Code postal</label>
                                    <input type="text" name="zipCode" id="inputZipCode" className="form-control" placeholder="Code postal" required value={ this.state.zipCode } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-6">
                                    <label htmlFor="role">Livraison</label>
                                    <label className="custom-control custom-checkbox custom-checkbox-primary">
                                        <input type="checkbox" id="inputIsDeliverable" name="isDeliverable" className="custom-control-input" checked={ this.state.isDeliverable } onChange={ this.onCheckboxChange } />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">{ this.state.isDeliverable === true ? 'Opérée' : 'Non opérée' }</span>
                                    </label>
                                </div>
                            </div>
                                    
                            <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                        </form>
                        <Link role="button" className="btn btn-light btn-sm product-button with-padding-top" to={ "/cities" }>Retourner à la liste</Link>
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
    user: state.auth.user,
    cities: state.city.cities,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addCity, updateCity, deleteCity })(CityForm);
