import React from 'react';
import { connect } from 'react-redux';
import { getTax } from '../../../actions/taxActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class TaxDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getTax: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getTax(this.props.match.params.id, this.props.taxes);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedTax;
            return (
                <span>
                    <h1>TVA</h1>

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
                    <Link to={ "/taxes" }>back to list</Link>

                    <Link to={ "/taxes-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
    selectedTax: state.tax.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getTax })(TaxDetails);
