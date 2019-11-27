import React from 'react';
import { connect } from 'react-redux';
import { getCities } from '../../../actions/cityActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class CityList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getCities: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getCities();
    }

    displayCities = () => {
        let City = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>{ props.details.zipCode }</td>
                    <td>{ props.details.isDeliverable === true ? 'OUI' : 'PAS ENCORE' }</td>
                    <td>
                        <Link to={ "/cities-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/cities-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.cities.map( city => <City details={city} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des villes</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Code postal</th>
                                <th>Livrable</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.cities !== 'undefined' && this.props.cities.length > 0) ? 
                                this.displayCities() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/cities-add-or-edit" }>Create new</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    cities: state.city.cities,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getCities })(CityList);
