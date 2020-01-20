import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../../actions/orderActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class OrderList extends React.Component 
{
    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        getOrders: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getOrders();
    }

    displayItems = (items) => {
        const itemList = items.map( item => {
            return item.variant.product.name + " - " + item.variant.name + " : " + item.quantity + " U"
        });
        return itemList.join("\n");
    }

    displayOrders = () => {
        let Order = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.paymentDateTime }</td>
                    <td>{ this.displayItems(props.details.items) }</td>
                    <td>{ props.details.status }</td>
                    <td>
                        <Link to={ "/orders-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/orders-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.orders.map( order => <Order details={order} /> );
    }

    render() {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des commandes à préparer</h1>
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
                                (typeof this.props.orders !== 'undefined' && this.props.orders.length > 0) ? 
                                this.displayOrders() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                    <Link to={ "/orders-add-or-edit" }>Create new</Link>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    orders: state.order.orders,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getOrders })(OrderList);
