import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import userExtractor from '../../../helpers/userExtractor';
import { getOrders, closeOrder } from '../../../actions/orderActions';

class DeliveryList extends React.Component 
{
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
        closeOrder: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.props.getOrders();
    }

    closeDelivery = (e) => {
        e.preventDefault();
        this.props.closeOrder(parseInt(e.target.dataset['id']));
    }

    affectToSupplier = (e) => {
        e.preventDefault();
        // this.props.closeOrder(parseInt(e.target.dataset['id']));
    }

    displayItems = (items) => {
        const itemList = items.map( item => {
            return item.variant.product.name + " - " + item.variant.name + " : " + item.quantity + " U"
        });
        return itemList.join("\n");
    }

    displayOrdersToDeliver = () => {
        let Order = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                <tr>
                    <td>{ props.details.paymentId.substring(4) }</td>
                    <td>{ orderDateTime }</td>
                    <td>{ this.displayItems(props.details.items) }</td>
                    <td>{ props.details.deliveryAddress }</td>
                    <td><a href="#" data-id={ props.details.id } onClick={ this.affectToSupplier } >Prendre</a> - <a href="#" data-id={ props.details.id } onClick={ this.closeDelivery } >Terminer</a></td>
                </tr>
            );
        }
        let ordersToDeliver = this.props.orders.filter(order => order.status === "ON DELIVERY");
        return ordersToDeliver.map( order => <Order details={order} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_DELIVERER") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Commandes à préparer</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id.</th>
                                <th>Heure</th>
                                <th>Commande</th>
                                <th>Adresse</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (typeof this.props.orders !== 'undefined' && this.props.orders.filter(order => order.status === "ON DELIVERY").length > 0) ? 
                                this.displayOrdersToDeliver() : <tr> <td colspan="3">no records found</td> </tr>
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    user: state.auth.user,
    orders: state.order.orders,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  });

export default connect(mapStateToProps, { getOrders, closeOrder })(DeliveryList);
