import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getOrders,  } from '../../actions/orderActions';

class ClientOrders extends React.Component 
{
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        if (this.props.orders.length === 0) {
            this.props.getOrders();
        }
    }

    transferToDelivery = (e) => {
        e.preventDefault();
    }

    displayCurrentOrderItems = (items) => {
        let CurrentItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        return (
            <span>
                <h6>Récapitulatif de la commande</h6>
                <ul>{ items.map( item => <CurrentItemOrder details={item} /> ) }</ul>
            </span>
        );
    }

    displayArchivedOrderItems = (items) => {
        let ArchivedItemOrder = (props) => {
            return <li>{props.details.variant.product.name + " - " + props.details.variant.name + " : " + props.details.quantity + " U"}</li>
        }
        return (
            <span>
                <h6>Récapitulatif de la commande</h6>
                <ul>{ items.map( item => <ArchivedItemOrder details={item} /> ) }</ul>
            </span>
        );
    }

    displayCurrentOrders = () => {
        let CurrentOrder = (props) => {
            const now = new Date();
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const orderDateTime = (dateTime.getDate() === now.getDate() && dateTime.getMonth() === now.getMonth() && dateTime.getFullYear() === now.getFullYear()) ?
                                  ("Prévu à " + dateTime.getHours() + ":" + dateTime.getMinutes()) : "Prévu le " + dateTime.toLocaleDateString(undefined, options);
            
            return (
                <div className="card">
                    <h4 className="card-header order-title">{ props.details.paymentId.substring(4) } - { orderDateTime }</h4>
                    <div className="card-body">
                        <p className="card-text">
                            <div className="row order-details-content">
                                <h6>Etat d'avancement</h6>
                                <div className="row progress order-progress-bar" style={{height: 15 +'px'}}>
                                    <div 
                                        role="progressbar"
                                        className={ props.details.status === "DELIVERED" ? "progress-bar bg-success" : "progress-bar bg-warning progress-bar-striped progress-bar-animated" }
                                        style={ props.details.status === "ON PREPARATION" ? {width: 25 + '%'} : props.details.status === "ON DELIVERY" ? {width: 75 + '%'} : {width: 100 + '%'}}
                                        aria-valuenow={ props.details.status === "ON PREPARATION" ? "25" : props.details.status === "ON DELIVERY" ? "75" : "100"}
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                            { props.details.status === "ON PREPARATION" ? "En préparation" : props.details.status === "ON DELIVERY" ? "En livraison" : "Livré" }
                                    </div>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                { this.displayCurrentOrderItems(props.details.items) }
                            </div>
                        </p>
                        <a role="button" className="btn btn-light" href={ '/app/order/' +  props.details.id + '/deliverynote'} target="_blank">Editer le BL</a>
                    </div>
                </div>
            );
        }
        let archivedOrders = this.props.orders.filter(order => order.user.id === this.props.user.id && order.status !== "DELIVERED");
        return archivedOrders.map( order => <CurrentOrder details={order} /> );
    }

    displayArchivedOrders = () => {
        let ArchivedOrder = (props) => {
            const dateTime = new Date(props.details.paymentDateTime);
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const orderDateTime = dateTime.toLocaleDateString(undefined, options);
            return (
                <div className="card">
                    <h4 className="card-header order-title">{ props.details.paymentId.substring(4) } - { orderDateTime }</h4>
                    <div className="card-body">
                        <p className="card-text">
                            <div className="row order-details-content">
                                <h6>Etat d'avancement</h6>
                                <div className="row progress order-progress-bar" style={{height: 15 +'px'}}>
                                    <div 
                                        role="progressbar"
                                        className={ props.details.status === "DELIVERED" ? "progress-bar bg-success" : "progress-bar bg-warning progress-bar-striped progress-bar-animated" }
                                        style={ props.details.status === "ON PREPARATION" ? {width: 25 + '%'} : props.details.status === "ON DELIVERY" ? {width: 75 + '%'} : {width: 100 + '%'}}
                                        aria-valuenow={ props.details.status === "ON PREPARATION" ? "25" : props.details.status === "ON DELIVERY" ? "75" : "100"}
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                            { props.details.status === "ON PREPARATION" ? "En préparation" : props.details.status === "ON DELIVERY" ? "En livraison" : "Livré" }
                                    </div>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                { this.displayArchivedOrderItems(props.details.items) }
                            </div>
                        </p>
                        <a role="button" className="btn btn-light" href={ '/app/order/' +  props.details.id + '/deliverynote'} target="_blank">Editer le BL</a>
                    </div>
                </div>
            );
        }
        let archivedOrders = this.props.orders.filter(order => order.user.id === this.props.user.id && order.status === "DELIVERED");
        return archivedOrders.map( order => <ArchivedOrder details={order} /> );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) ) {
            return (
                <div className="container" id="content-wrap">
                    <h1>Mes commandes</h1>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h3 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                En cours
                                </button>
                            </h3>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                {/* Liste des commandes en cours */}
                                { this.props.isWaiting === false ?
                                    ( typeof this.props.orders !== 'undefined' && this.props.orders.length > 0 ?
                                        this.displayCurrentOrders() :
                                        <p>Vous n'avez aucune commande en cours.</p> ) :
                                        <div className="spinner-container">
                                            <div class="spinner-border text-danger text-center" role="status"> 
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                }
                            </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                            <h3 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Archives
                                </button>
                            </h3>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                {/* Liste des anciennes commandes */}
                                { this.props.isWaiting === false ?
                                    ( typeof this.props.orders !== 'undefined' && this.props.orders.length > 0 ?
                                        this.displayArchivedOrders() :
                                        <p>Vous n'avez effectué aucune commande</p> ) :
                                        <div className="spinner-container">
                                            <div class="spinner-border text-danger text-center" role="status"> 
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                }
                            </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, { getOrders })(ClientOrders);
