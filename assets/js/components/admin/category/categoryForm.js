import React from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../../../actions/categoryActions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CategoryForm extends React.Component 
{
    state = {
        isNew: true,
        name: '',
        selection: {}, 
        title: 'Créer une nouvelle catégorie',
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        addCategory: PropTypes.func.isRequired,
        updateCategory: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const id = this.props.match.params.id;
        if (typeof id !== 'undefined') {
            for (let i = 0; i < this.props.categories.length; i++) {
                if (parseInt(this.props.categories[i].id) === parseInt(id)) {
                    const selectedCategory = this.props.categories[i];
                    this.setState({
                        isNew: false,
                        name: selectedCategory.name,
                        selection: selectedCategory,
                        title: 'Modifier la catégorie ' + selectedCategory.name,
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
        const category = this.state.selection;
        category.name = this.state.name;
        if (typeof this.props.match.params.id !== 'undefined') {
            this.props.updateCategory(category);
        } else {
            this.props.addCategory(category);
        }
        this.props.history.push(`/categories`);
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteCategory(this.props.match.params.id);
        this.props.history.push(`/categories`);
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="productform-container" className="container">
                    <div className="col-md-10 order-md-1" id="adresses-panel">
                        <h1>{ (typeof this.id !== 'undefined' && this.id !== null) ? 'Modifier la catégorie "' + this.state.name + '"': (this.state.name !== '' ? 'Créer la catégorie "' + this.state.name +'"' : 'Créer une catégorie') }</h1>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="name">Nom de la catégorie</label>
                                    <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la catégorie" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary m-t-10 btn-block with-padding-top">ENREGISTRER</button>
                        </form>
                        <Link  role="button" className="btn btn-light btn-sm product-button with-padding-top" to={ "/categories" }>Retourner à la liste</Link>
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
    categories: state.category.categories,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addCategory, updateCategory, deleteCategory })(CategoryForm);
