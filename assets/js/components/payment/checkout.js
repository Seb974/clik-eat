import 'flatpickr/dist/themes/material_green.css'
import React, { Component } from 'react';
import axios from 'axios';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { tokenConfig } from '../../helpers/security';
import Flatpickr from 'react-flatpickr'

class Checkout extends Component {

    now = new Date();

    constructor(props) {
        super(props);
        this.paymentButton = React.createRef();
    }

    state = {
        user: this.props.user || {},
        username: this.props.user === null ? '' : this.props.user.username || '',
        email: this.props.user === null ? '' : this.props.user.email || '',
        phone: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'phone_number')) === 'undefined' ? 
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'phone_number')).field || '',
        d_address: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'delivery_line_1')) === 'undefined' ?
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'delivery_line_1')).field || '',
        d_address2: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'delivery_line_2')) === 'undefined' ?
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'delivery_line_2')).field || '',
        d_zipCode: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'delivery_city')) === 'undefined' ? 
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'delivery_city')).field || '',
        b_address: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'billing_line_1')) === 'undefined' ?
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'billing_line_1')).field || '',
        b_address2: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'billing_line_2')) === 'undefined' ?
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'billing_line_2')).field || '',
        b_zipCode: this.props.user === null ? '' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'billing_city')) === 'undefined' ? 
                '' : this.props.user.metadata.find(metadata => (metadata.type === 'billing_city')).field || '',
        d_gps: this.props.user === null ? '-21.329519,55.471617' : typeof this.props.user.metadata.find(metadata => (metadata.type === 'delivery_gps')) === 'undefined' ?
                '-21.329519,55.471617' : this.props.user.metadata.find(metadata => (metadata.type === 'delivery_gps')).field || '-21.329519,55.471617',
        identicalBillingAddress: true,
        d_city: '',
        b_city: '',
        cities: [],
        totalCost: this.props.item === null ? '' : this.props.item.totalToPayTTC,
        initialTotalCost: 0,
        paymentLink: '#',
        isWaiting: false,
        preparationTime: Math.max(...this.props.item.items.map( item => {
                        let period = new Date(item.parent.supplier.preparationPeriod);
                        return period.getMinutes();
                    }), 0),
        deliveryTime: 0,
        origin: new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), 0, 0, 0),
        time: new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), 0, 0, 0),
        showHours: true,
        earlier: true,
        tomorrow: false,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
    };

    componentDidMount = () => {
        this.initMap();
        if (this.state.b_address === this.state.d_address && this.state.b_address2 === this.state.d_address2 && this.state.b_zipCode === this.state.d_zipCode )
            this.setState( { identicalBillingAddress: true } );
        else 
            this.setState( { identicalBillingAddress: false } );

        if (this.state.email !== '') {
            this.onInformationsReady();
        }
        axios.get('/api/cities', tokenConfig())
             .then((res) => {
                this.setState({ cities : res.data['hydra:member'] });
                if (this.props.user !== null) {
                    if (this.props.user.metadata.length > 0) {
                        let now = new Date();
                        let user_d_city = this.props.user.metadata.find(meta => meta.type === 'delivery_city');
                        let user_b_city = this.props.user.metadata.find(meta => meta.type === 'billing_city');
                        let d_city = (typeof user_d_city !== 'undefined') ? res.data['hydra:member'].find(city => city.zipCode === parseInt(user_d_city.field)) : '';
                        let b_city = (user_b_city === user_d_city) ? d_city : ((typeof user_b_city !== 'undefined') ? res.data['hydra:member'].find(city => city.zipCode === parseInt(user_b_city.field)) : '');
                        this.setState({
                            d_city: d_city,
                            b_city: b_city,
                            deliveryTime: (d_city === '' || typeof d_city.deliveryPeriod === 'undefined' || d_city.deliveryPeriod === null) ? 
                                          0 : (new Date(d_city.deliveryPeriod)).getMinutes(),
                            showHours: (d_city === '' || typeof d_city.deliveryPeriod === 'undefined' || d_city.deliveryPeriod === null) ? false : true,
                            time: (d_city === '' || typeof d_city.deliveryPeriod === 'undefined' || d_city.deliveryPeriod === null) ? 
                                  this.state.time : this.defineTime(this.state.preparationTime, (new Date(d_city.deliveryPeriod)).getMinutes()),
                        });
                    }
                }
             });
    }

    initMap = () => {
        let markers = [];
        let [lat, long] = this.state.d_gps.split(',');
        let placesAutocomplete = places( {
            appId     : process.env.ALGOLIA_APPID,
            apiKey    : process.env.ALGOLIA_APIKEY,
            container : document.querySelector( '#input-map' ),
        } ).configure( {
            countries         : ['fr'],
            useDeviceLocation : false
        } );

        let map = L.map( 'map-example-container', {
            scrollWheelZoom : true,
            zoomControl     : true
        } );

        let osmLayer = new L.TileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom     : 8,
            maxZoom     : 19,
            attribution : 'Map © <a href="https://openstreetmap.org">OpenStreetMap</a>'
        } );

        let userAddress = new L.LatLng( lat, long);
        map.setView( userAddress, 1 );
        map.addLayer( osmLayer );
        let marker = L.marker( userAddress, {opacity: .4} );
        marker.addTo( map );
        markers.push( marker );
        if (this.state.d_gps !== '-21.329519,55.471617') {
            findBestZoom();
        }

        placesAutocomplete.on( 'suggestions'  , handleOnSuggestions.bind(this));
        placesAutocomplete.on( 'cursorchanged', handleOnCursorchanged.bind(this));
        placesAutocomplete.on( 'change'       , handleOnChange.bind(this));
        placesAutocomplete.on( 'clear'        , handleOnClear.bind(this));

        function handleOnSuggestions( e ) {
            markers.forEach( removeMarker );
            markers = [];
            if ( e.suggestions.length === 0 ) {
                map.setView( new L.LatLng( 0, 0 ), 1 );
                return;
            }
            e.suggestions.forEach( addMarker );
            findBestZoom();
        }
    
        function handleOnChange( e ) {
            markers.forEach( function ( marker, markerIndex ) {
                if ( markerIndex === e.suggestionIndex ) {
                    markers = [marker];
                    marker.setOpacity( 1 );
                    findBestZoom();
                } else {
                    removeMarker( marker );
                }
            } );
            this.setState({
                d_address: e.suggestion.value,
                d_gps: e.suggestion.latlng.lat + ',' + e.suggestion.latlng.lng,
            });
        }
    
        function handleOnClear() {
            map.setView( new L.LatLng( 0, 0 ), 1 );
            markers.forEach( removeMarker );
        }
    
        function handleOnCursorchanged( e ) {
            markers.forEach( function ( marker, markerIndex ) {
                if ( markerIndex === e.suggestionIndex ) {
                    marker.setOpacity( 1 );
                    marker.setZIndexOffset( 1000 );
                } else {
                    marker.setZIndexOffset( 0 );
                    marker.setOpacity( 0.5 );
                }
            } );
        }
    
        function addMarker( suggestion ) {
            let marker = L.marker( suggestion.latlng, {
                opacity: .4
            } );
            marker.addTo( map );
            markers.push( marker );
        }
    
        function removeMarker( marker ) {
            map.removeLayer( marker );
        }
    
        function findBestZoom() {
            let featureGroup = L.featureGroup( markers );
            map.fitBounds( featureGroup.getBounds().pad( 0.5 ), {
                animate: false
            } );
        }
    }

    componentDidUpdate = () => {
        if (this.props.item.totalToPayTTC !== this.state.totalCost) {
            this.setState({ 
                totalCost: this.props.item.totalToPayTTC,
            });
            let newPreparationTime = Math.max(...this.props.item.items.map( item => {
                let period = new Date(item.parent.supplier.preparationPeriod);
                return period.getMinutes();
            }), 0);
            this.setState({ 
                preparationTime: newPreparationTime,
                tomorrow: false,
                time: this.defineTime(newPreparationTime, this.state.deliveryTime),
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleUpdateEmail = e => {
        e.preventDefault();
        if (e.target.name === 'email' && e.target.value !== '') {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(e.target.value).toLowerCase()))
                this.onInformationsReady();
        }
    }

    onZipCodeChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value,
            tomorrow: false,
        });
        const errorMsg = "Code postal invalide.";
        const notDeliverableMsg = "Nous ne livrons malheureusement pas encore votre ville...";
        let cityId = e.target.id === 'b_zip' ? 'b_city' : 'd_city';
        let cityInput = document.getElementById(cityId);
        if ( (e.target.value.length > 0 && e.target.value.length < 5) || e.target.value.length <= 0 || e.target.value.length > 5 ) {
            cityInput.textContent = e.target.value.length !== 0 ? errorMsg : '';
            this.setState({showHours:false});
            return ;
        }
        const selectedCity = this.state.cities.find(city => city.zipCode === parseInt(e.target.value));
        cityInput.textContent = (typeof selectedCity === 'undefined') ? errorMsg : ((cityId === 'd_city' && selectedCity.isDeliverable === false) ? notDeliverableMsg : selectedCity.name);
        this.setState({
            showHours: true,
            deliveryTime: (typeof selectedCity === 'undefined' || typeof selectedCity.deliveryPeriod === 'undefined' || selectedCity.deliveryPeriod === null) ? 
                           this.state.deliveryTime : (new Date(selectedCity.deliveryPeriod)).getMinutes(),
            time: (typeof selectedCity === 'undefined' || typeof selectedCity.deliveryPeriod === 'undefined' || selectedCity.deliveryPeriod === null) ? 
                  this.state.time : this.defineTime(this.state.preparationTime, (new Date(selectedCity.deliveryPeriod)).getMinutes()),
        });
    };

    onTimeChange = time => {
        const period = new Date(this.state.origin.getFullYear(), this.state.origin.getMonth(), this.state.origin.getDate(), time[0].getHours(), time[0].getMinutes());
        this.setState({ 
            time: period,
            deliveryPeriod: this.dateDiff(period)
        });
    }

    dateDiff = (selectedPeriod) => {
        let diff = {};
        let tmp = selectedPeriod - this.state.origin;

            tmp = Math.floor(tmp/1000);
            diff.sec = tmp % 60;
         
            tmp = Math.floor((tmp-diff.sec)/60);
            diff.min = tmp % 60;
         
            tmp = Math.floor((tmp-diff.min)/60);
            diff.hour = tmp % 24;
             
            tmp = Math.floor((tmp-diff.hour)/24); 
            diff.day = tmp;

        return new Date(1970, 0, 1, diff.hour, diff.min, 0);
    };

    defineTime = (preparationTime, deliveryTime) => {
        const totalPeriod = preparationTime + deliveryTime;
        let delivery_time = new Date();
        delivery_time.setMinutes(delivery_time.getMinutes() + totalPeriod);
        if ( delivery_time.getHours() < 18) {
            delivery_time.setHours(18);
            delivery_time.setMinutes(totalPeriod);
        }
        if (delivery_time.getDate() !== this.state.origin.getDate()) {
            this.setState({tomorrow: true});
        }
        return delivery_time;
    }

    handleBillingAddress = e => {
        this.setState({
            identicalBillingAddress: !this.state.identicalBillingAddress,
          });
    };

    handleDeliveryTime = e => {
        this.setState({
            earlier: !this.state.earlier,
            time: this.defineTime(this.state.preparationTime, this.state.deliveryTime),
          });
    };

    onMetadataSubmit = e => {
        e.preventDefault();
        let userDetails = { 
            ...this.state,
            b_address: this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address,
            b_address2: this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2,
            b_zipCode: this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode,
            b_city: this.state.identicalBillingAddress === false ? this.state.b_city : this.state.d_city,
            cities: [],
        };
    }

    // onInformationsReady = async () => {
        onInformationsReady = () => {
        const user = this.getUserInformations();
        const itemEntity = this.getItemsInformations();
        const body = JSON.stringify( { dataUser: user, dataItems: itemEntity } );
        axios.post('/pay', body, tokenConfig())
             .then((res) => {
                const url = JSON.parse(res.data);
                this.setState({paymentLink: url});
             });
    }

    checkTotalToPay = (e) => {
        e.preventDefault();
        if (this.state.totalCost !== this.state.initialTotalCost) {
            const user = this.getUserInformations();
            const itemEntity = this.getItemsInformations();
            if (typeof user.d_city !== 'undefined' && user.d_city.isDeliverable === true) {
                this.setState({isWaiting: true});
                const body = JSON.stringify( { dataUser: user, dataItems: itemEntity } );
                axios.post('/pay', body, tokenConfig())
                 .then((res) => {
                    const url = JSON.parse(res.data);
                    this.setState({
                        paymentLink: url,
                        initialTotalCost: this.state.totalCost,
                    });
                    window.open(url, "_self");
                 });
            } else {
                this.state.username === '' || this.state.email === '' || this.state.phone === '' || this.state.d_address === '' || this.state.d_zipCode === '' ?
                    alert("Des informations nécessaires à la livraison de votre commande sont manquantes.") : 
                    alert("Nous regrettons de ne pouvoir honorer votre commande, nous ne livrons malheureusement pas (encore...) votre ville.");
            }
        }
    }

    getUserInformations = () => {
        let user = {
            id: this.props.user === null ? -1 :  parseInt(this.props.user.id),
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            deliveryTime: this.state.time,
            d_address: this.state.d_address,
            d_address2: this.state.d_address2,
            d_zipCode: this.state.d_zipCode,
            d_gps: this.state.d_gps,
            d_city: this.state.cities.find(city => parseInt(city.zipCode) === parseInt(this.state.d_zipCode)),
            b_address: this.state.identicalBillingAddress === true || this.state.b_address === '' ? this.state.d_address : this.state.b_address,
            b_address2: this.state.identicalBillingAddress === true || this.state.b_address2 === '' ? this.state.d_address2 : this.state.b_address2,
            b_zipCode: this.state.identicalBillingAddress === true || this.state.b_zipCode === '' ? this.state.d_zipCode : this.state.b_zipCode,
            b_city: this.state.identicalBillingAddress === true || this.state.b_zipCode === '' ? this.state.d_city : this.state.cities.find(city => parseInt(city.zipCode) === parseInt(this.state.b_zipCode)),
        }
        return user;
    }

    getItemsInformations = () => {
        const itemEntity = {
            ...this.props.item,
            totalTax: Math.round(this.props.item.totalTax * 100) / 100,
            totalToPayHT: Math.round(this.props.item.totalToPayHT * 100) / 100,
            totalToPayTTC: Math.round(this.props.item.totalToPayTTC * 100) / 100,
        }
        return itemEntity;
    }

    displayItems = () => {
        let CartItem = (props) => {
          return (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">
                        <strong>{ props.details.parent.name + " "}
                        { props.details.product.name }</strong>
                        {"    x" + props.details.quantity }
                    </h6>
                    <small className="text-muted">{ props.details.product.category ? props.details.product.category.name : "" }</small>
                </div>
                <span className="text-muted">{ props.details.product.price }€</span>
            </li>
          );
        }
        return this.props.item.items.map(item => {
            return <CartItem key={"cartitem-" + item.product.id} details={item} />
        });
    }

    getNumberOfArticles = items => {
        return items.reduce((cumul, current) => {
            return current.quantity == null ? cumul : cumul + current.quantity;
        }, 0);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="container mt-3">
                <div className="row">
                    {/* Right Panel Block */}
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Votre panier</span>
                            <span className="badge badge-secondary badge-pill">
                                { this.getNumberOfArticles(this.props.item.items) === 0 ? "panier vide" : 
                                    (this.getNumberOfArticles(this.props.item.items) === 1 ? 
                                        this.getNumberOfArticles(this.props.item.items) + " article" :
                                        this.getNumberOfArticles(this.props.item.items) + " articles"
                                    )
                                }
                            </span>
                        </h4>
                        <ul className="list-group mb-3">

                            { this.displayItems() }

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (HT)</span>
                                <strong>{ Math.round(item.totalTax * 100) / 100 }€</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>TVA</span>
                                <strong>{ Math.round(item.totalToPayHT * 100) / 100 }€</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (TTC)</span>
                                <strong>{ Math.round(item.totalToPayTTC * 100) / 100 }€</strong>
                            </li>
                           <Link to={ this.state.paymentLink } ref={ this.paymentButton } className="btn btn-primary btn-lg btn-block" hidden={ this.props.item.totalToPayTTC <= 0 ? true : false}  onClick={ this.checkTotalToPay } >
                                <span className="spinner-border spinner-border-sm" role="status" hidden={ !this.state.isWaiting }></span> 
                                <span hidden={ this.state.isWaiting }>PAYER</span>
                            </Link>
                        </ul>
                    </div>

                    {/* Addresses panel */}
                    <div className="col-md-8 order-md-1" id="adresses-panel">
                        <form className="needs-validation" onSubmit={ this.onMetadataSubmit }>
                            {/* User info */}
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h4 className="mb-3">Contact</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3 user-infos">
                                    <label htmlFor="firstName">Nom</label>
                                    <input type="text" className="form-control" id="firstName" name="username" value={ this.state.username } onChange={ this.onChange } required/>     {/* style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;" /> */}
                                    <div className="invalid-feedback">
                                        Un prénom est nécessaire pour la livraison.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 user-infos">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={ this.state.email } onChange={ this.onChange } onBlur={ this.handleUpdateEmail } required/>
                                    <div className="invalid-feedback">
                                        Merci de renseigner un email afin d'être informé de étapes de votre commande.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 user-infos">
                                    <label htmlFor="phone">Tel</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={ this.state.phone } onChange={ this.onChange } required/>
                                    <div className="invalid-feedback">
                                        Merci de renseigner un tel afin d'être informé de étapes de votre commande.
                                    </div>
                                </div>
                            </div>
                            {/* Delivery time panel */}
                            <hr className="mb-4"/>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <h4 className="mb-3">Heure de livraison</h4>
                                </div>
                                { this.state.showHours === false ? <span></span> : 
                                    <div className="col-md-4 mb-4">
                                        <label className="custom-control custom-checkbox custom-checkbox-primary">
                                            <input id="deliverytime-checkbox" type="checkbox" className="custom-control-input" checked={this.state.earlier} onChange={ this.handleDeliveryTime } />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">
                                                { this.state.earlier === true ? 
                                                    (this.state.time !== this.state.origin && this.state.time.getHours() !== 0 && this.props.item.items.length > 0 ? 
                                                        "Livraison au plus tôt ("+ 
                                                        ( this.state.tomorrow === true ? 
                                                            'Demain ' + this.state.time.getDate() +'/'+ ( this.state.time.getMonth() + 1 < 10 ? ("0" + (this.state.time.getMonth() + 1)) : 
                                                            (this.state.time.getMonth() + 1)) +'/'+ this.state.time.getFullYear() + ' à '
                                                        :
                                                            ''
                                                        ) 
                                                        + this.state.time.getHours() + ":" + (this.state.time.getMinutes() < 10 ? ("0" + this.state.time.getMinutes()) : this.state.time.getMinutes())
                                                        +")" : "Livraison au plus tôt") : 
                                                        "Livraison à partir de ..."
                                                }
                                            </span>
                                        </label>
                                    </div>
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    { this.state.showHours === false ? 
                                        "Veuillez renseigner votre adresse pour le calcul du temps de livraison."
                                        :
                                        this.state.earlier === true ? "" :
                                            <span>
                                                <label htmlFor="time">Heure de livraison souhaitée</label>
                                                <Flatpickr data-enable-time
                                                    value={ this.state.time }
                                                    onChange={ this.onTimeChange }
                                                    className="form-control"
                                                    options={  {enableTime: true,
                                                                noCalendar: true,
                                                                dateFormat: "H:i",
                                                                time_24hr: true, 
                                                                minDate: "today",
                                                                minTime: this.state.time,
                                                                maxTime: "23:59",
                                                                minuteIncrement: 1,
                                                                hourIncrement:1
                                                                }
                                                            }
                                                />
                                            </span>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    {this.state.tomorrow === true ? 
                                        <span>
                                            L'heure de livraison prévue ne nous permet pas d'honorer votre commande aujourd'hui. 
                                            Celle-ci a été programmée pour demain, { this.state.time.getDate() +'/'+ ( this.state.time.getMonth() + 1 < 10 ? ("0" + (this.state.time.getMonth() + 1)) : (this.state.time.getMonth() + 1)) +'/'+ this.state.time.getFullYear() }
                                        </span>
                                        :
                                        <span></span>
                                    }
                                </div>
                            </div>
                                
                            {/* Delivery address panel */}
                            <hr className="mb-4"/>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h4 className="mb-3">Adresse de livraison</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="map-example-container">
                                        {/* <Map/> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="input-map">Adresse</label>
                                    <input type="text" className="form-control" id="input-map" name="d_address" value={ this.state.d_address } onChange={ this.onChange } required />
                                    <div className="invalid-feedback">
                                        Merci de saisir une adresse de livraison.
                                    </div>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-4 mb-3 user-infos with-phone-padding-top">
                                    <label htmlFor="complément">Complement d'adresse</label>
                                    <input type="textarea" className="form-control" id="complément" name="d_address2" value={ this.state.d_address2 } placeholder="Appt, Immeuble, Digicode, etc" onChange={ this.onChange } />
                                </div>
                                <div className="col-md-4 mb-3 user-infos">
                                    <label htmlFor="zip">Code postal</label>
                                    <input type="text" className="form-control" id="d_zip" name="d_zipCode"  value={ this.state.d_zipCode } onChange={ this.onZipCodeChange } required/>
                                    <div className="invalid-feedback">
                                        Code Postal nécessaire.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 user-infos cityname-container">
                                    <span id="d_city">{ this.state.d_city.name }</span>
                                </div>
                            </div>
                            <div className="row">
                                <input type="hidden" className="form-control" id="gps" name="d_gps" value={ this.state.d_gps } placeholder="" onChange={ this.onChange } />
                            </div>

                            {/* Billing address */}
                            <hr className="mb-4"/>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h4 className="mb-3">Adresse de facturation</h4>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="custom-control custom-checkbox custom-checkbox-primary">
                                        <input id="billingAddress-checkbox" type="checkbox" className="custom-control-input" checked={this.state.identicalBillingAddress} onChange={ this.handleBillingAddress } />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description">Identique à adresse de livraison</span>
                                    </label>
                                </div>
                            </div>
                            { this.state.identicalBillingAddress === true ? <p></p> : 
                                (<span>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label htmlFor="address">Adresse</label>
                                            <input type="text" className="form-control" id="address" name="b_address" value={ this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address } onChange={ this.onChange } />
                                            <div className="invalid-feedback">
                                                Merci de saisir une adresse de livraison.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row with-padding-top">
                                        <div className="col-md-4 mb-3 user-infos with-phone-padding-top">
                                            <label htmlFor="complément">Complement d'adresse</label>
                                            <input type="textarea" className="form-control" id="complément" name="b_address2" value={ this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2 } onChange={ this.onChange } placeholder="Appt, Immeuble, etc" />
                                        </div>
                                        <div className="col-md-4 mb-3 user-infos">
                                            <label htmlFor="zip">Code postal</label>
                                            <input type="text" className="form-control" id="b_zip" name="b_zipCode" value={ this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode } onChange={ this.onZipCodeChange } />
                                            <div className="invalid-feedback">
                                                Code Postal nécessaire.
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3 user-infos cityname-container">
                                            <span id="b_city">{ this.state.b_city.name }</span>
                                        </div>
                                    </div>
                                </span>) }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    item: state.item,
    user: state.auth.user,
  });
  
export default connect( mapStateToProps )(Checkout);
