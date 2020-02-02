import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import userExtractor from '../../../helpers/userExtractor';
import { getOrders, transferToDelivery } from '../../../actions/orderActions';

class OrderList extends React.Component 
{
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
        transferToDelivery: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        // if (this.props.orders.length === 0) {
            this.props.getOrders();
        // }
    }

    transferToDelivery = (e) => {
        e.preventDefault();
        this.props.transferToDelivery(parseInt(e.target.dataset['id']));
    }

    displayAdminItems = (items) => {
        let AdminItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        return items.map( item =>  <AdminItemOrder details={item} /> );
    }

    displaySupplierItems = (items, supplierId) => {
        let SupplierItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        const itemList = items.filter( item => item.variant.product.supplier.id === supplierId);
        return itemList.map( item =>  <SupplierItemOrder details={item} /> );
    }

    displayAdminOrders = () => {
        let AdminOrder = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                <div className="card">
                    <h4 className="card-header">{ props.details.paymentId.substring(4) } - { orderDateTime }</h4>
                    <div className="card-body">
                        <p className="card-text">{ this.displayAdminItems(props.details.items) }</p>
                        <a role="button" className="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.transferToDelivery } >Terminer</a>
                    </div>
                </div>
            );
        }
        let ordersToPrepare = this.props.orders.filter(order => order.status === "ON PREPARATION");
        return ordersToPrepare.map( order => <AdminOrder details={order} /> );
    }

    displaySupplierOrders = () => {
        let currentSupplier = JSON.parse(this.props.user.supplier);
        let SupplierOrder = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                <div className="card">
                    <h4 className="card-header">{ props.details.paymentId.substring(4) } - { orderDateTime }</h4>
                    <div className="card-body">
                        <p className="card-text">{ this.displaySupplierItems(props.details.items, currentSupplier.id) }</p>
                        <a role="button" className="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.transferToDelivery } >Terminer</a>
                    </div>
                </div>
            );
        }
        let supplierOrdersToPrepare = this.props.orders.filter(order => {
            let supplierProducts = order.items.find(item => {
                return item.variant.product.supplier.id === currentSupplier.id
            });
            if (typeof supplierProducts !== 'undefined' && order.status === 'ON PREPARATION') {
                return order;
            }
        });
        return supplierOrdersToPrepare.map( order => <SupplierOrder details={order} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return (
                <div className="container" id="content-wrap">
                        <h1>Commandes à préparer</h1>
                        {
                            this.props.isWaiting === false ?
                                ( typeof this.props.orders !== 'undefined' && this.props.orders.length > 0 ?
                                    ( this.props.user.roles.find(role => role === "ROLE_ADMIN" ) ? 
                                        this.displayAdminOrders() : 
                                        this.displaySupplierOrders() ) :
                                    <p>Aucune commande en attente</p> ) :
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

export default connect(mapStateToProps, { getOrders, transferToDelivery })(OrderList);
