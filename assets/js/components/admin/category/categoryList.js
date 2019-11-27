import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../../actions/categoryActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CategoryList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCategories: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getCategories();
    }

    displayCategories = () => {
        let Category = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>
                        <Link to={ "/categories-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/categories-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.categories.map( category => <Category details={category} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des catégories</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.categories !== 'undefined' && this.props.categories.length > 0) ? 
                                this.displayCategories() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/categories-add-or-edit" }>Create new</Link>
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
    token: state.auth.token
  });

export default connect(mapStateToProps, { getCategories })(CategoryList);
