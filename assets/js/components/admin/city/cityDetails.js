import React from 'react';
import { connect } from 'react-redux';
import { getCity } from '../../../actions/cityActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CityDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCity: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getCity(this.props.match.params.id, this.props.cities);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedCity;
            return (
                <span>
                    <h1>Villes</h1>

                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{ typeof selection !== 'undefined' ? selection.id : '' }</td>
                            </tr>
                            <tr>
                                <th>Nom</th>
                                <td>{ typeof selection !== 'undefined' ? selection.name : '' }</td>
                            </tr>
                            <tr>
                                <th>Code postal</th>
                                <td>{ typeof selection !== 'undefined' ? selection.zipCode : '' }</td>
                            </tr>
                            <tr>
                                <th>Livrable</th>
                                <td>{ typeof selection !== 'undefined' ? (selection.isDeliverable === true ? 'OUI' : 'PAS ENCORE') : '' }</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={ "/cities" }>back to list</Link>

                    <Link to={ "/cities-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    cities: state.city.cities,
    selectedCity: state.city.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getCity })(CityDetails);
