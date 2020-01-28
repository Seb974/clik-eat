import React from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../../actions/categoryActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CategoryDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCategory: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getCategory(this.props.match.params.id, this.props.categories);
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedCategory;
            return (
                <span>
                    <h1>Catégories</h1>

                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{ typeof selection !== 'undefined' ? selection.id : '' }</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{ typeof selection !== 'undefined' ? selection.name : '' }</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={ "/categories" }>back to list</Link>

                    <Link to={ "/categories-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories,
    selectedCategory: state.category.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getCategory })(CategoryDetails);
