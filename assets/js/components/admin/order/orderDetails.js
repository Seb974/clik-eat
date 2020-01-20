import React from 'react';
import { connect } from 'react-redux';
import { getOrder } from '../../../actions/orderActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class OrderDetails extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getOrder: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getOrder(this.props.match.params.id, this.props.orders);
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            const selection = this.props.selectedOrder;
            return (
                <span>
                    <h1>Commandes</h1>
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
                    <Link to={ "/orders" }>back to list</Link>

                    <Link to={ "/orders-add-or-edit/" + selection.id }>Edit</Link>
                </span>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    orders: state.order.orders,
    selectedOrder: state.order.selected,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { getOrder })(OrderDetails);
