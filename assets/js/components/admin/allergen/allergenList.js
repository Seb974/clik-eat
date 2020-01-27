import React from 'react';
import { connect } from 'react-redux';
import { getAllergens, deleteAllergen } from '../../../actions/allergenActions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class AllergenList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getAllergens: PropTypes.func.isRequired,
        deleteAllergen: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.allergens.length === 0) {
            this.props.getAllergens();
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteAllergen(id);
        this.props.history.push(`/allergens`);
    };

    displayAllergens = () => {
        let Allergen = (props) => {
            return (
                <tr>
                    <td>{ props.details.name }</td>
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/allergens-add-or-edit/" + props.details.id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/allergens" } onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.allergens.map( allergen => <Allergen details={allergen} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des allergènes</h1>
                    { 
                        this.props.isWaiting === false ?
                            <span>
                                <Link role="button" className="btn btn-success" to={ "/allergens-add-or-edit" }>Créer un allergène</Link>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            {/* <th>Id</th> */}
                                            <th>Nom</th>
                                            <th className="action-column">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (typeof this.props.allergens !== 'undefined' && this.props.allergens.length > 0) ? 
                                            this.displayAllergens() : <tr> <td colspan="3">AUcun allergène trouvé</td> </tr>
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
    allergens: state.allergen.allergens,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isWaiting: state.allergen.isLoading,
  });

export default connect(mapStateToProps, { getAllergens, deleteAllergen })(AllergenList);
