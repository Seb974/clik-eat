import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import userExtractor from '../../../helpers/userExtractor';
import { getOrders, closeOrder, setDelivererToOrder } from '../../../actions/orderActions';

class DeliveryList extends React.Component 
{
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
        closeOrder: PropTypes.func.isRequired,
        setDelivererToOrder: PropTypes.func.isRequired,
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
        this.props.setDelivererToOrder(parseInt(e.target.dataset['id']), parseInt(this.props.user.id));
    }

    editBL = (e) => {
        e.preventDefault();
        alert("BL");
    }

    displayItems = (items) => {
        let ItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        return items.map( item =>  <ItemOrder details={item} /> );
        // const itemList = items.map( item => {
        //     return item.variant.product.name + " - " + item.variant.name + " : " + item.quantity + " U"
        // });
    }

    displayOrdersToDeliver = () => {
        let Order = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  (dateTime.getHours() + ":" + dateTime.getMinutes()) : dateTime.toLocaleDateString(undefined, options);
            return (
                // <tr>
                //     <td>{ props.details.paymentId.substring(4) }</td>
                //     <td>{ orderDateTime }</td>
                //     <td>{ this.displayItems(props.details.items) }</td>
                //     <td>{ props.details.deliveryAddress }</td>
                //     <td>
                //         { (props.details.delivery !== null && typeof props.details.delivery !== 'undefined') ? 
                //             (props.details.delivery.deliverer.id !== this.props.user.id ? props.details.delivery.deliverer.username : 
                //                 <span>
                //                     <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.editBL } >BL</a> 
                //                     - 
                //                     <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.closeDelivery } >Terminer</a>
                //                 </span> ) : 
                //                 <span>
                //                     <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.affectToSupplier } >Prendre</a> 
                //                 </span> 
                //         }
                //     </td>
                // </tr>
                <div class="card">
                    <h5 class="card-header">{ props.details.paymentId.substring(4) } - { orderDateTime }</h5>
                    <div class="card-body">
                        <h5 class="card-title">{ props.details.deliveryAddress }</h5>
                        <p class="card-text">{ this.displayItems(props.details.items) }</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        { (props.details.delivery !== null && typeof props.details.delivery !== 'undefined') ? 
                            (props.details.delivery.deliverer.id !== this.props.user.id ? props.details.delivery.deliverer.username : 
                                <span>
                                    <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.editBL } >BL</a> 
                                    - 
                                    <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.closeDelivery } >Terminer</a>
                                </span> ) : 
                                <span>
                                    <a role="button" class="btn btn-primary" href="#" data-id={ props.details.id } onClick={ this.affectToSupplier } >Prendre</a> 
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
                    <h1>Commandes à préparer</h1>
                    {
                        (typeof this.props.orders !== 'undefined' && this.props.orders.filter(order => order.status === "ON DELIVERY").length > 0) ? 
                        this.displayOrdersToDeliver() : <p>no records found</p>
                    }
                    {/* <table class="table">
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
                    </table> */}
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

export default connect(mapStateToProps, { getOrders, closeOrder, setDelivererToOrder })(DeliveryList);
