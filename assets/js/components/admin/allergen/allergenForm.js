import React from 'react';
import { connect } from 'react-redux';
import { addAllergen, updateAllergen, deleteAllergen } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

class AllergenForm extends React.Component 
{
    state = {
        isNew: true,
        name: '',
        selection: {}, 
        title: 'Créer un nouvel allergène'
    };

    static propTypes = {
        addAllergen: PropTypes.func.isRequired,
        updateAllergen: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const id = this.props.match.params.id;
        if (typeof id !== 'undefined') {
            for (let i = 0; i < this.props.allergens.length; i++) {
                if (parseInt(this.props.allergens[i].id) === parseInt(id)) {
                    const selectedAllergen = this.props.allergens[i];
                    this.setState({
                        isNew: false,
                        name: selectedAllergen.name,
                        selection: selectedAllergen,
                        title: 'Modifier l\'allergène ' + selectedAllergen.name,
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
        if (typeof this.props.match.params.id !== 'undefined') {
            this.props.updateAllergen(allergen);
        } else {
            this.props.addAllergen(allergen);
        }
        this.props.history.push(`/allergens`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteAllergen(this.props.match.params.id);
        this.props.history.push(`/allergens`);
    }

    render() {
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
                                        <label className="sr-only">Nom de l'allergène</label>
                                        <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de l'allergène" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                    </div>
                                    <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/allergens" } onClick={ this.handleDelete }>Delete</Link>}
                <Link to={ "/allergens" }>back to list</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allergens: state.allergen.allergens,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addAllergen, updateAllergen, deleteAllergen })(AllergenForm);
