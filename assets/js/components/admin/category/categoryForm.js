import React from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../../../actions/categoryActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
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
                                            <label className="sr-only">Nom de la catégorie</label>
                                            <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom de la catégorie" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                        </div>
                                        <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/categories" } onClick={ this.handleDelete }>Delete</Link>}
                    <Link to={ "/categories" }>back to list</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addCategory, updateCategory, deleteCategory })(CategoryForm);
