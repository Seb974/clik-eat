import 'flatpickr/dist/themes/material_green.css'
import React from 'react';
import { connect } from 'react-redux';
import { addCity, updateCity, deleteCity } from '../../../actions/cityActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';
import Flatpickr from 'react-flatpickr'

class CityForm extends React.Component 
{
    id = this.props.match.params.id;

    state = {
        isNew: true,
        name: '',
        zipCode: '',
        isDeliverable: false,
        deliveryPeriod: new Date(2020, 0, 1, 0, 0, 0),
        selection: {}, 
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token),
        origin: new Date(2020, 0, 1, 0, 0, 0),
        time: new Date(2020, 0, 1, 0, 0, 0),
    };

    static propTypes = {
        addCity: PropTypes.func.isRequired,
        updateCity: PropTypes.func.isRequired,
        deleteCity: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        if (typeof this.id !== 'undefined') {
            for (let i = 0; i < this.props.cities.length; i++) {
                if (parseInt(this.props.cities[i].id) === parseInt(this.id)) {
                    const selectedCity = this.props.cities[i];
                    const deliveryTime = (selectedCity.deliveryPeriod !== null && typeof selectedCity.deliveryPeriod !== 'undefined') ? new Date(selectedCity.deliveryPeriod) : this.state.origin;
                    this.setState({
                        isNew: false,
                        name: selectedCity.name,
                        zipCode: selectedCity.zipCode,
                        deliveryPeriod: (selectedCity.deliveryPeriod !== null && typeof selectedCity.deliveryPeriod !== 'undefined') ? selectedCity.deliveryPeriod : this.dateDiff(this.state.origin),
                        isDeliverable: selectedCity.isDeliverable,
                        selection: selectedCity,
                        time: new Date(2020, 0, 1, 0, deliveryTime.getMinutes(), 0),
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

    onTimeChange = time => {
        const period = new Date(2020, 0, 1, time[0].getHours(), time[0].getMinutes());
        this.setState({ 
            time: period,
            deliveryPeriod: this.dateDiff(period)
        });
    }

    dateDiff = (selectedPeriod) => {
        let diff = {};
        let tmp = selectedPeriod - this.state.origin;

            tmp = Math.floor(tmp/1000);
            diff.sec = tmp % 60;
         
            tmp = Math.floor((tmp-diff.sec)/60);
            diff.min = tmp % 60;
         
            tmp = Math.floor((tmp-diff.min)/60);
            diff.hour = tmp % 24;
             
            tmp = Math.floor((tmp-diff.hour)/24); 
            diff.day = tmp;

        return new Date(1970, 0, 1, diff.hour, diff.min, 0);
    };

    handleSubmit = e => {
        e.preventDefault();
        const city = this.state.selection;
        city.name = this.state.name;
        city.zipCode = parseInt(this.state.zipCode);
        city.isDeliverable = this.state.isDeliverable;
        city.deliveryPeriod = this.state.deliveryPeriod;
        if (typeof this.id !== 'undefined') {
            this.props.updateCity(city);
        } else {
            this.props.addCity(city);
        }
        this.props.history.push(`/cities`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteCity(this.id);
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
                            { 
                                this.state.isDeliverable === false ? 
                                    <p></p> 
                                : 
                                    <div className="row with-padding-top">
                                        <div className="col-md-12">
                                            <label htmlFor="time">Temps de livraison</label>
                                            <Flatpickr data-enable-time
                                                value={this.state.time}
                                                onChange={this.onTimeChange}
                                                className="form-control"
                                                options={  {enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: "H:i",
                                                            time_24hr: true, 
                                                            minTime: "00:05",
                                                            maxTime: "00:59",
                                                            minuteIncrement: 1
                                                            }
                                                        }
                                            />
                                        </div>
                                    </div>
                            }
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
