import React from 'react';
import { connect } from 'react-redux';
import { addTax, updateTax, deleteTax } from '../../../actions/taxActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class TaxForm extends React.Component 
{
    state = {
        isNew: true,
        name: '',
        taux: 0,
        selection: {}, 
        title: 'Créer une nouvelle taxe',
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        addTax: PropTypes.func.isRequired,
        updateTax: PropTypes.func.isRequired,
        deleteTax: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const id = this.props.match.params.id;
        if (typeof id !== 'undefined') {
            for (let i = 0; i < this.props.taxes.length; i++) {
                if (parseInt(this.props.taxes[i].id) === parseInt(id)) {
                    const selectedTax = this.props.taxes[i];
                    this.setState({
                        isNew: false,
                        name: selectedTax.name,
                        taux: selectedTax.taux,
                        selection: selectedTax,
                        title: 'Modifier la taxe ' + selectedTax.name,
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
        if (typeof this.props.match.params.id !== 'undefined') {
            this.props.updateTax(tax);
        } else {
            this.props.addTax(tax);
        }
        this.props.history.push(`/taxes`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteTax(this.props.match.params.id);
        this.props.history.push(`/taxes`);
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
                                            <label className="sr-only">Nom de la taxe</label>
                                            <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la taxe" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                        </div>
                                        <div className="form-group input-icon-left m-b-10">
                                            <i className="fa fa-user"></i>
                                            <label className="sr-only">Taux</label>
                                            <input type="text" name="taux" id="inputTaux" className="form-control" placeholder="Taux" required value={ this.state.taux } onChange={ this.onChange }/>
                                        </div>
                                        <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/taxes" } onClick={ this.handleDelete }>Delete</Link>}
                    <Link to={ "/taxes" }>back to list</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addTax, updateTax, deleteTax })(TaxForm);
