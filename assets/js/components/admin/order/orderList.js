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
        this.props.getOrders();
    }

    transferToDelivery = (e) => {
        e.preventDefault();
        this.props.transferToDelivery(parseInt(e.target.dataset['id']));
    }

    displayAdminItems = (items) => {
        const itemList = items.map( item => {
            return item.variant.product.name + " - " + item.variant.name + " : " + item.quantity + " U"
        });
        return itemList.join("\n");
    }

    displaySupplierItems = (items, supplierId) => {
        const itemList = items.map( item => {
            if (item.variant.product.supplier.id === supplierId) {
                return item.variant.product.name + " - " + item.variant.name + " : " + item.quantity + " U"
            }
        });
        return itemList.join(" -- ");
    }

    displayAdminOrders = () => {
        let AdminOrder = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                <tr>
                    <td>{ props.details.paymentId.substring(4) }</td>
                    <td>{ orderDateTime }</td>
                    <td>{ this.displayAdminItems(props.details.items) }</td>
                    <td><a href="#" data-id={ props.details.id } onClick={ this.transferToDelivery } >Terminer</a></td>
                </tr>
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
                <tr>
                    <td>{ props.details.paymentId.substring(4) }</td>
                    <td>{ orderDateTime }</td>
                    <td>{ this.displaySupplierItems(props.details.items, currentSupplier.id) }</td>
                    <td><a href="#" data-id={ props.details.id } onClick={ this.transferToDelivery } >Terminer</a></td>
                </tr>
            );
        }
        // let ordersToPrepare = this.props.orders.filter(order => order.status === "ON PREPARATION");
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

    displayAdminView = () => {
        return (
            <div id="content-wrap">
                <h1>Commandes à préparer</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Heure</th>
                            <th>Commande</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (typeof this.props.orders !== 'undefined' && this.props.orders.length > 0) ? 
                            this.displayAdminOrders() : <tr> <td colspan="3">no records found</td> </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    displaySupplierView = () => {
        return (
            <div id="content-wrap">
                <h1>Commandes à préparer</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Heure</th>
                            <th>Commande</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (typeof this.props.orders !== 'undefined' && this.props.orders.length > 0) ? 
                            this.displaySupplierOrders() : <tr> <td colspan="3">no records found</td> </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return this.props.user.roles.find(role => role === "ROLE_ADMIN") ? this.displayAdminView() : this.displaySupplierView();
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

export default connect(mapStateToProps, { getOrders, transferToDelivery })(OrderList);
