import React from 'react';
import { connect } from 'react-redux';
import { addTax, updateTax, deleteTax } from '../../../actions/taxActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class TaxForm extends React.Component 
{
    id = this.props.match.params.id;

    state = {
        isNew: true,
        name: '',
        taux: 0,
        selection: {}, 
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        addTax: PropTypes.func.isRequired,
        updateTax: PropTypes.func.isRequired,
        deleteTax: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        if (typeof this.id !== 'undefined') {
            for (let i = 0; i < this.props.taxes.length; i++) {
                if (parseInt(this.props.taxes[i].id) === parseInt(this.id)) {
                    const selectedTax = this.props.taxes[i];
                    this.setState({
                        isNew: false,
                        name: selectedTax.name,
                        taux: selectedTax.taux,
                        selection: selectedTax,
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
        const tax = this.state.selection;
        tax.name = this.state.name;
        tax.taux = typeof this.state.taux === "string" ? parseFloat(this.state.taux.replace(',','.')) : this.state.taux;
        if (typeof this.id !== 'undefined') {
            this.props.updateTax(tax);
        } else {
            this.props.addTax(tax);
        }
        this.props.history.push(`/taxes`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteTax(this.id);
        this.props.history.push(`/taxes`);
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="productform-container" className="container">
                    <div className="col-md-10 order-md-1" id="adresses-panel">
                        <h1>{ (typeof this.id !== 'undefined' && this.id !== null) ? 'Modifier la taxe "' + this.state.name + '"': (this.state.name !== '' ? 'Créer la taxe "' + this.state.name +'"' : 'Créer une taxe') }</h1>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="name">Nom de la taxe</label>
                                    <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la taxe" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="taux">Taux</label>
                                    <input type="text" name="taux" id="inputTaux" className="form-control" placeholder="Taux" required value={ this.state.taux } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                        </form>
                        <Link role="button" className="btn btn-light btn-sm product-button with-padding-top" to={ "/taxes" }>Retourner à la liste</Link>
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
    taxes: state.tax.taxes,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addTax, updateTax, deleteTax })(TaxForm);
