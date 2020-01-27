import React from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../../../actions/categoryActions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CategoryList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCategories: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.categories.length === 0) {
            this.props.getCategories();
        }
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteCategory(id);
        this.props.history.push(`/categories`);
    };

    displayCategories = () => {
        let Category = (props) => {
            return (
                <tr>
                    <td>{ props.details.name }</td>
                    <td className="action-column">
                        <Link role="button" className="btn btn-warning btn-sm product-button" to={ "/categories-add-or-edit/" + props.details.id }>Editer</Link>
                        <Link role="button" className="btn btn-danger btn-sm product-button" to={ "/categories"} onClick={(e) => this.handleDelete(id, e)}>Supprimer</Link>
                    </td>
                </tr>
            );
        }
        return this.props.categories.map( category => <Category details={category} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des catégories</h1>
                    { 
                        this.props.isWaiting === false ?
                            <span>
                                <Link role="button" className="btn btn-success" to={ "/categories-add-or-edit" }>Créer une catégorie</Link>
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
                                            (typeof this.props.categories !== 'undefined' && this.props.categories.length > 0) ? 
                                            this.displayCategories() : <tr> <td colspan="3">Aucune catégorie trouvée</td> </tr>
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
    categories: state.category.categories,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isWaiting: state.category.isLoading,
  });

export default connect(mapStateToProps, { getCategories, deleteCategory })(CategoryList);
