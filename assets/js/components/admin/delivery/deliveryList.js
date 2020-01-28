import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getOrders, closeOrder, setDelivererToOrder } from '../../../actions/orderActions';

class DeliveryList extends React.Component 
{
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
        closeOrder: PropTypes.func.isRequired,
        setDelivererToOrder: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.orders.length === 0) {
            this.props.getOrders();
        }
    }

    closeDelivery = (e) => {
        e.preventDefault();
        this.props.closeOrder(parseInt(e.target.dataset['id']));
    }

    affectToSupplier = (e) => {
        e.preventDefault();
        this.props.setDelivererToOrder(parseInt(e.target.dataset['id']), parseInt(this.props.user.id));
    }

    displayItems = (items) => {
        let ItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        return items.map( item =>  <ItemOrder details={item} /> );
    }

    displayOrdersToDeliver = () => {
        let Order = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                <div className="card">
                    <h4 className="card-header">{ props.details.paymentId.substring(4) } - { orderDateTime }</h4>
                    <div className="card-body">
                        <h6 className="card-title">{ props.details.deliveryAddress }</h6>
                        <p className="card-text">{ this.displayItems(props.details.items) }</p>
                        { (props.details.delivery !== null && typeof props.details.delivery !== 'undefined') ? 
                            (props.details.delivery.deliverer.id !== this.props.user.id ? "Pris en charge par " + props.details.delivery.deliverer.username : 
                                <span>
                                    <a role="button" className="btn btn-light" href={ '/app/order/' +  props.details.id + '/deliverynote'} target="_blank">Editer le BL</a>
                                       { "   "}
                                    <a role="button" className="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.closeDelivery } >Terminer</a>
                                </span> ) : 
                                <span>
                                    <a role="button" className="btn btn-success" href="#" data-id={ props.details.id } onClick={ this.affectToSupplier } >Prendre</a> 
                                </span> 
                        }
                    </div>
              </div>
            );
        }
        let ordersToDeliver = this.props.orders.filter(order => order.status === "ON DELIVERY");
        return ordersToDeliver.map( order => <Order details={order} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_DELIVERER") !== undefined ) {
            return (
                <div className="container" id="content-wrap">
                    <h1>Commandes à livrer</h1>
                    {
                        this.props.isWaiting === false ?
                            (typeof this.props.orders !== 'undefined' && this.props.orders.filter(order => order.status === "ON DELIVERY").length > 0) ? 
                            this.displayOrdersToDeliver() : <p>Aucune commande en attente</p> : 
                            <div className="spinner-container">
                                <div class="spinner-border text-danger text-center" role="status"> 
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
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
    token: state.auth.token,
    isWaiting: state.order.isLoading
  });

export default connect(mapStateToProps, { getOrders, closeOrder, setDelivererToOrder })(DeliveryList);
