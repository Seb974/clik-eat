import React from 'react';
import { connect } from 'react-redux';
import { addAllergen, updateAllergen, deleteAllergen } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class AllergenForm extends React.Component 
{
    id = this.props.match.params.id;

    state = {
        isNew: true,
        name: '',
        selection: {}, 
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        addAllergen: PropTypes.func.isRequired,
        updateAllergen: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        if (typeof this.id !== 'undefined') {
            for (let i = 0; i < this.props.allergens.length; i++) {
                if (parseInt(this.props.allergens[i].id) === parseInt(this.id)) {
                    const selectedAllergen = this.props.allergens[i];
                    this.setState({
                        isNew: false,
                        name: selectedAllergen.name,
                        selection: selectedAllergen,
                    });
                    break;
                }
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const allergen = this.state.selection;
        allergen.name = this.state.name;
        if (typeof this.id !== 'undefined') {
            this.props.updateAllergen(allergen);
        } else {
            this.props.addAllergen(allergen);
        }
        this.props.history.push(`/allergens`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteAllergen(this.id);
        this.props.history.push(`/allergens`);
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="productform-container" className="container">
                    <div className="col-md-10 order-md-1" id="adresses-panel">
                        <h1>{ (typeof this.id !== 'undefined' && this.id !== null) ? 'Modifier l\'allergène "' + this.state.name + '"': (this.state.name !== '' ? 'Créer l\'allergène "' + this.state.name +'"' : 'Créer un allergène') }</h1>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="name">Nom de l'allergène</label>
                                    <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de l'allergène" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                        </form>
                        <Link role="button" className="btn btn-light btn-sm product-button with-padding-top" to={ "/allergens" }>Retourner à la liste</Link>
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
    allergens: state.allergen.allergens,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addAllergen, updateAllergen, deleteAllergen })(AllergenForm);
