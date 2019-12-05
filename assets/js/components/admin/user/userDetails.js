import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class UserDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getUser: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getUser(this.props.match.params.id, this.props.taxes);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedUser;
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

export default connect(mapStateToProps, { getUser })(UserDetails);
