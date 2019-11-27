import React from 'react';
import { connect } from 'react-redux';
import { getAllergens } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class AllergenList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getAllergens: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getAllergens();
    }

    displayAllergens = () => {
        let Allergen = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>
                        <Link to={ "/allergens-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/allergens-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.allergens.map( allergen => <Allergen details={allergen} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des allergènes</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.allergens !== 'undefined' && this.props.allergens.length > 0) ? 
                                this.displayAllergens() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/allergens-add-or-edit" }>Create new</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    allergens: state.allergen.allergens,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getAllergens })(AllergenList);
