import React from 'react';
import { connect } from 'react-redux';
import { getAllergen } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class AllergenDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getAllergen: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getAllergen(this.props.match.params.id, this.props.allergens);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedAllergen;
            return (
                <span>
                    <h1>Allergène</h1>

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
                    <Link to={ "/allergens" }>back to list</Link>

                    <Link to={ "/allergens-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    allergens: state.allergen.allergens,
    selectedAllergen: state.allergen.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getAllergen })(AllergenDetails);
