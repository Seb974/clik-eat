import React from 'react';
import { connect } from 'react-redux';
import { getTaxes } from '../../../actions/taxActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class TaxList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getTaxes: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getTaxes();
    }

    displayTaxes = () => {
        let Tax = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>{ props.details.taux }</td>
                    <td>
                        <Link to={ "/taxes-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/taxes-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.taxes.map( tax => <Tax details={tax} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Types de TVA</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Taux</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.taxes !== 'undefined' && this.props.taxes.length > 0) ? 
                                this.displayTaxes() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/taxes-add-or-edit" }>Create new</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getTaxes })(TaxList);
