import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom"; 
import { tokenConfig } from '../../helpers/security';
import { changePassword, deleteAccount, displayError } from '../../actions/authActions'

class Settings extends React.Component 
{
    state = {
        user: this.props.user || {},
        current: '',
        new: '',
        confirm: '',
        deletePwd: '',
        isWaiting: false,
        deleteHidden: true,
        isUpdate: true,
    };
    
    static propTypes = {
        user: PropTypes.object,
        changePassword: PropTypes.func.isRequired,
        deleteAccount: PropTypes.func.isRequired,
        displayError: PropTypes.func.isRequired,
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({isUpdate: true});
        if (this.state.new === this.state.confirm) {
            const passwords = {
                current: this.state.current,
                new: this.state.new,
            }
            this.initializeState();
            this.props.changePassword(this.props.user.id, passwords);
        } else {
            this.props.displayError('ECHEC... Le nouveau mot de passe et la confirmation sont différents.');
        }
    }

    handleDeleteInputVisibility = e => {
        this.setState({deleteHidden: !this.state.deleteHidden});
    }

    onDelete = e => {
        e.preventDefault();
        this.setState({isUpdate: false});
        this.props.deleteAccount(this.props.user.id, this.state.deletePwd);
    }

    initializeState = () => {
        this.setState({
            current: '',
            new: '',
            confirm: '',
        });
    };

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) ) {
            return (
                <div className="container mt-3">
                    <div className="col-md-8 order-md-1" id="adresses-panel">
                        <h1>Mon compte ClikEat</h1>
                        {/* Password edition panel */}

                        { this.props.eventMessage.includes("SUCCES") === false ? '' : 
                            <div class="alert alert-success" role="alert">
                                { this.props.eventMessage }
                            </div>
                        }
                        { this.props.eventMessage.includes("ECHEC") === false ? '' : 
                            <div class="alert alert-danger" role="alert">
                                { this.props.eventMessage }
                            </div>
                        }
                        <hr className="mb-4"/>
                        <div className="row">
                            <div className="col-md-6 mb-6">
                                <h4 className="mb-3">Changer de mot de passe</h4>
                            </div>
                        </div>
                        <form className="needs-validation" onSubmit={ this.onSubmit }>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="current">Actuel</label>
                                    <input type="password" className="form-control" id="current" name="current" value={ this.state.current } onChange={ this.onChange } required/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="new">Nouveau</label>
                                    <input type="password" className="form-control" id="new" name="new" value={ this.state.new } onChange={ this.onChange } required/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="confirm">Confirmer</label>
                                    <input type="password" className="form-control" id="confirm" name="confirm" value={ this.state.confirm } onChange={ this.onChange } required/>
                                </div>
                            </div>
                            <div className="row with-padding-top"></div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <button className="btn btn-dark btn-lg btn-block" type="submit">
                                        <span className="spinner-border spinner-border-sm" role="status" hidden={ !this.props.isWaiting }></span> 
                                        <span hidden={ this.props.isWaiting }>Confirmer</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Delete account panel */}
                        <hr className="mb-4"/>
                        <div className="row">
                            <div className="col-md-6 mb-6 button-title">
                                <a href="#" onClick={ this.handleDeleteInputVisibility }><h4 className="mb-3">Supprimer mon compte</h4></a>
                            </div>
                        </div>
                        <form className="needs-validation" onSubmit={ this.onDelete } hidden={this.state.deleteHidden}>
                            <div className="row with-padding-top">
                                <div className="col-md-6 mb-6">
                                    <label htmlFor="deletePwd">Mot de passe</label>
                                    <input type="password" className="form-control" id="deletePwd" name="deletePwd" value={ this.state.deletePwd } onChange={ this.onChange } required/>
                                </div>
                                <div className="col-md-6 mb-6 cityname-container">
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onDoubleClick={ this.onDelete }>
                                        <span className="spinner-border spinner-border-sm" role="status" hidden={ !this.props.isWaiting }></span> 
                                        <span hidden={ this.props.isWaiting }>Valider</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <hr className="mb-4"/>
                    </div>
                </div>
            );
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    token: state.auth.token,
    isWaiting: state.auth.isLoading,
    eventMessage: state.auth.eventMessage,
  });
  
  export default connect( mapStateToProps, { changePassword, deleteAccount, displayError })(Settings);