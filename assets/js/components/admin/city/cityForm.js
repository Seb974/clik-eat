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
        title: 'Créer une nouvelle ville',
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
                        title: 'Modifier la ville ' + selectedCity.name,
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
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-4 mx-auto">
                            <div className="card m-b-0">
                                <div className="card-header">
                                    <h4 class="card-title"><i class="fa fa-user-plus"></i>{ this.state.title }</h4>
                                </div>
                                <div className="card-block">
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className="form-group input-icon-left m-b-10">
                                            <i className="fa fa-user"></i>
                                            <label className="sr-only">Nom de la ville</label>
                                            <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la catégorie" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                        </div>
                                        <div className="form-group input-icon-left m-b-10">
                                            <i className="fa fa-user"></i>
                                            <label className="sr-only">Code postal</label>
                                            <input type="text" name="zipCode" id="inputZipCode" className="form-control" placeholder="Code postal" required value={ this.state.zipCode } onChange={ this.onChange }/>
                                        </div>
                                        <div className="form-group input-icon-left m-b-10">
                                            <i className="fa fa-user"></i>
                                            <label className="sr-only">Code postal</label>
                                            <input type="checkbox" name="isDeliverable" id="inputIsDeliverable" className="form-control" placeholder="Livrable" checked={ this.state.isDeliverable } onChange={ this.onCheckboxChange }/>
                                        </div>
                                        <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/cities" } onClick={ this.handleDelete }>Delete</Link>}
                    <Link to={ "/cities" }>back to list</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    cities: state.city.cities,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addCity, updateCity, deleteCity })(CityForm);
