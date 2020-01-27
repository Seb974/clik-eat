import React from 'react';
import { connect } from 'react-redux';
import { getTaxes, deleteTax } from '../../../actions/taxActions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class TaxList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getTaxes: PropTypes.func.isRequired,
        deleteTax: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.taxes.length === 0) {
            this.props.getTaxes();
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteTax(id);
        this.props.history.push(`/taxes`);
    };

    displayTaxes = () => {
        let Tax = (props) => {
            return (
                <tr>
                    <td>{ props.details.name }</td>
                    <td>{ props.details.taux }</td>
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/taxes-add-or-edit/" + props.details.id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/taxes" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.taxes.map( tax => <Tax details={tax} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des Taxes</h1>
                    { 
                        this.props.isWaiting === false ?
                            <span>
                                <Link role="button" className="btn btn-success" to={ "/taxes-add-or-edit" }>Créer une taxe</Link>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Taux</th>
                                            <th className="action-column">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (typeof this.props.taxes !== 'undefined' && this.props.taxes.length > 0) ? 
                                            this.displayTaxes() : <tr> <td colspan="3">Aucune taxe trouvée</td> </tr>
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
    taxes: state.tax.taxes,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isWaiting: state.tax.isLoading,
  });

export default connect(mapStateToProps, { getTaxes, deleteTax })(TaxList);
