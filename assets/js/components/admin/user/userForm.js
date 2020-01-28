import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class UserForm extends React.Component 
{
    id = this.props.match.params.id;
    selectedUser = this.props.users.find(user => (parseInt(user.id)) === parseInt(this.props.match.params.id));
    phone = typeof this.id === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'phone_number'));
    d_address = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_line_1')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_line_1'));
    d_address2 = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_line_2')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_line_2'));
    d_zipCode = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_city')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_city'));
    b_address = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_line_1')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_line_1'));
    b_address2 = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_line_2')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_line_2'));
    b_zipCode = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_city')) === 'undefined' ? '' : this.selectedUser.metadata.find(metadata => (metadata.type === 'billing_city'));
    d_gps = typeof this.id === 'undefined' ? '' : typeof this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_gps')) === 'undefined' ? '-21.329519,55.471617' : this.selectedUser.metadata.find(metadata => (metadata.type === 'delivery_gps'));
    password = {};
    confirmPassword = {};

    constructor(props) {
        super(props);
        this.password = React.createRef();
        this.confirmPassword = React.createRef();
    }
    
    state = {
        isNew: typeof this.id === 'undefined' ? true : false,
        selection: typeof this.id === 'undefined' ? {} : this.selectedUser, 
        title: typeof this.id === 'undefined' ? 'Créer une nouvel utilisateur' : 'Modifier l\'utilisateur ' + this.selectedUser.username,
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token),
        username: typeof this.id === 'undefined' ? '' : this.selectedUser.username,
        password: typeof this.id === 'undefined' ? '' : (typeof this.selectedUser.password === 'undefined' ? '' : this.selectedUser.password),
        email: typeof this.id === 'undefined' ? '' : this.selectedUser.email,
        isBanned: typeof this.id === 'undefined' ? false : this.selectedUser.isBanned,
        roles: typeof this.id === 'undefined' ? ['ROLE_USER'] : this.selectedUser.roles,
        phone: typeof this.id === 'undefined' ? '' : (typeof this.phone !== 'object' ? this.phone : this.phone.field),
        d_address: typeof this.id === 'undefined' ? '' : (typeof this.d_address !== 'object' ? this.d_address : this.d_address.field),
        d_address2: typeof this.id === 'undefined' ? '' : (typeof this.d_address2 !== 'object' ? this.d_address2 : this.d_address2.field),
        d_zipCode: typeof this.id === 'undefined' ? '' : (typeof this.d_zipCode !== 'object' ? this.d_zipCode : this.d_zipCode.field),
        b_address:  typeof this.id === 'undefined' ? '' : (typeof this.b_address !== 'object' ? this.b_address : this.b_address.field),
        b_address2: typeof this.id === 'undefined' ? '' : (typeof this.b_address2 !== 'object' ? this.b_address2 : this.b_address2.field),
        b_zipCode: typeof this.id === 'undefined' ? '' : (typeof this.b_zipCode !== 'object' ? this.b_zipCode : this.b_zipCode.field),
        d_gps: typeof this.id === 'undefined' ? '-21.329519,55.471617' : (typeof this.d_gps !== 'object' ? this.d_gps : this.d_gps.field),
        identicalBillingAddress: true,
        d_city: '',
        b_city: '',
        cities: typeof this.props.cities === 'undefined' ? [] : this.props.cities
    };

    static propTypes = {
        addUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.initMap();
        if (typeof this.id !== 'undefined') {
            if ( this.selectedUser.metadata.length > 0 ) {
                const delivery_city = this.selectedUser.metadata.find(meta => meta.type === 'delivery_city');
                const billing_city = this.selectedUser.metadata.find(meta => meta.type === 'billing_city');
                const d_city = (typeof delivery_city !== 'undefined') ? this.state.cities.find(city => parseInt(city.zipCode) === parseInt(delivery_city.field)) : '';
                const b_city = (typeof billing_city !== 'undefined') ? '' : ((billing_city.field === delivery_city.field) ? d_city : ((typeof billing_city !== 'undefined') ? this.state.cities.find(city => parseInt(city.zipCode) === parseInt(billing_city.field)) : ''));
                this.setState({
                    d_city: d_city,
                    b_city: b_city,
                });
            }
        }
        if (this.state.b_address === this.state.d_address && this.state.b_address2 === this.state.d_address2 && this.state.b_zipCode === this.state.d_zipCode )
            this.setState( { identicalBillingAddress: true } );
        else 
            this.setState( { identicalBillingAddress: false } );
        
        const roleInput = document.getElementById('role');
        this.state.roles.find(role => role === 'ROLE_ADMIN') !== undefined ? roleInput.value = 'ROLE_ADMIN' :
            (this.state.roles.find(role => role === 'ROLE_SUPPLIER') !== undefined ? roleInput.value = 'ROLE_SUPPLIER' :
            (this.state.roles.find(role => role === 'ROLE_DELIVERER') !== undefined ? roleInput.value = 'ROLE_DELIVERER' : 'ROLE_USER'));
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

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onZipCodeChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        const errorMsg = "Code postal invalide.";
        const notDeliverableMsg = "Nous ne livrons malheureusement pas encore votre ville...";
        let cityId = e.target.id === 'b_zip' ? 'b_city' : 'd_city';
        let cityInput = document.getElementById(cityId);
        if ( (e.target.value.length > 0 && e.target.value.length < 5) || e.target.value.length <= 0 || e.target.value.length > 5 ) {
            cityInput.textContent = e.target.value.length !== 0 ? errorMsg : '';
            return ;
        }
        const selectedCity = this.state.cities.find(city => parseInt(city.zipCode) === parseInt(e.target.value));
        this.setState({ [e.target.id]: selectedCity });
        if (typeof selectedCity === 'undefined') {
            cityInput.textContent = errorMsg;
        }
        else {
            if (cityId === 'd_city' && this.state.identicalBillingAddress === true) {
                this.setState({b_city: selectedCity.name })
            }
            cityInput.textContent = ((cityId === 'd_city' && selectedCity.isDeliverable === false) ? notDeliverableMsg : selectedCity.name);
        }
    };

    handleBannedStatus = (e) => {
        this.setState({ isBanned: !this.state.isBanned });
    };

    handleBillingAddress = (e) => {
        this.setState({ identicalBillingAddress: !this.state.identicalBillingAddress });
    };

    handleRoleSelection = (e) => {
        this.setState({roles: [e.target.value]});
    }

    onSubmit = e => {
        e.preventDefault();
        if (typeof this.id !== 'undefined') {
            this.props.updateUser({
                ...this.state,
                b_address: this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address,
                b_address2: this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2,
                b_zipCode: this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode,
                b_city: this.state.identicalBillingAddress === false ? this.state.b_city : this.state.d_city,
            });
            this.props.history.push(`/users`);
        } else {
            if (this.password.current.value === this.confirmPassword.current.value) {
                this.props.addUser({
                    ...this.state,
                    b_address: this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address,
                    b_address2: this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2,
                    b_zipCode: this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode,
                    b_city: this.state.identicalBillingAddress === false ? this.state.b_city : this.state.d_city,
                    password: this.password.current.value,
                });
                this.props.history.push(`/users`);
            } else {
                alert("Les mots de passes saisis ne correspondent pas");
            }
        }
    };

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteUser(this.id);
        this.props.history.push(`/users`);
    };

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div className="container mt-3">
                        {/* Addresses panel */}
                        <div className="col-md-10 order-md-1" id="adresses-panel">
                        <h1>{ (typeof this.id !== 'undefined' && this.id !== null) ? 'Modifier l\'utilisateur "' + this.state.username + '"': (this.state.username !== '' ? 'Créer l\'utilisateur "' + this.state.username +'"' : 'Créer un utilisateur') }</h1>
                            <form className="needs-validation" onSubmit={ this.onSubmit }>
                                <div className="row with-padding-top">
                                    {/* User info */}
                                    <div className="col-md-4 mb-3 user-infos">
                                        <label htmlFor="firstName">Nom</label>
                                        <input type="text" className="form-control" id="firstName" name="username" value={ this.state.username } onChange={ this.onChange }/>     {/* style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;" /> */}
                                        <div className="invalid-feedback">
                                            Un prénom est nécessaire pour la livraison.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 user-infos">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" value={ this.state.email } onChange={ this.onChange }/>
                                        <div className="invalid-feedback">
                                            Merci de renseigner un N° de téléphone, afin d'être informé des étapes de votre commande.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 user-infos">
                                        <label htmlFor="phone">Tel</label>
                                        <input type="text" className="form-control" id="phone" name="phone" value={ this.state.phone } onChange={ this.onChange }/>
                                        <div className="invalid-feedback">
                                            Merci de renseigner un N° de téléphone, afin d'être informé des étapes de votre commande.
                                        </div>
                                    </div>
                                </div>
                                { 
                                    typeof this.id !== 'undefined' ? "" : 
                                    (<div className="row with-padding-top">
                                        <div className="col-md-6">
                                            <label htmlFor="password">Mot de passe</label>
                                            <input type="password" className="form-control" ref={ this.password } id="password" name="password" required/>
                                            <div className="invalid-feedback">
                                                Un mot de passe est obligatoire.
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="confirm-password">Confirmation du mot de passe</label>
                                            <input type="password" className="form-control" ref={ this.confirmPassword } id="confirm-password" name="confirm-password" required/>
                                            <div className="invalid-feedback">
                                                Vous devez confirmer le mot de passe saisi.
                                            </div>
                                        </div>
                                    </div>)
                                }
                                <div className="row with-padding-top">
                                    <div className="col-md-6">
                                        <label htmlFor="role">Rôle</label>
                                        <select className="form-control form-control-lg" id="role" name="role" onChange={ this.handleRoleSelection } >
                                            <option value="ROLE_ADMIN">Administrateur</option>
                                            <option value="ROLE_SUPPLIER">Fournisseur</option>
                                            <option value="ROLE_DELIVERER">Livreur</option>
                                            <option selected value="ROLE_USER">Utilisateur</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="role">Bannir ce compte</label>
                                        <label className="custom-control custom-checkbox custom-checkbox-primary">
                                            <input id="bannedCheckbox" type="checkbox" className="custom-control-input" checked={this.state.isBanned} onChange={ this.handleBannedStatus } />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description">{ this.state.isBanned === true ? 'Compte banni' : 'Compte actif' }</span>
                                        </label>
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
                                        <label htmlFor="address">Adresse</label>
                                        <input type="text" className="form-control" id="input-map" name="d_address" value={ this.state.d_address } onChange={ this.onChange }/>
                                        <div className="invalid-feedback">
                                            Merci de saisir une adresse de livraison.
                                        </div>
                                    </div>
                                </div>
                                <div className="row with-padding-top">
                                    <div className="col-md-4 mb-3 user-infos">
                                        <label htmlFor="complément">Complement d'adresse</label>
                                        <input type="textarea" className="form-control" id="complément" name="d_address2" value={ this.state.d_address2 } onChange={ this.onChange } placeholder="Appt, Immeuble, Digicode, etc" />
                                    </div>
                                    <div className="col-md-4 mb-3 user-infos">
                                        <label htmlFor="zip">Code postal</label>
                                        <input type="text" className="form-control" id="d_zip" name="d_zipCode" value={ this.state.d_zipCode } onChange={ this.onZipCodeChange }/>
                                        <div className="invalid-feedback" id="d_zip_error">
                                            Code Postal nécessaire.
                                        </div>
                                    </div>
                                    { typeof this.state.d_city === 'undefined' ? '' : 
                                        <div className="col-md-4 mb-3 user-infos cityname-container">
                                            <span id="d_city">{ this.state.b_city.name }</span>
                                        </div>
                                    }
                                </div>
                                <div className="row">
                                    <input type="hidden" name="d_gps" className="form-control" id="gps" value={ this.state.d_gps } placeholder="" onChange={ this.onChange } />
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
                                                <input type="text" className="form-control" id="address" name="b_address" value={ this.state.identicalBillingAddress === false ? this.state.b_address : this.state.d_address } onChange={ this.onChange }/>
                                                <div className="invalid-feedback">
                                                    Merci de saisir une adresse de livraison.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row with-padding-top">
                                            <div className="col-md-4 mb-3 user-infos">
                                                <label htmlFor="complément">Complement d'adresse</label>
                                                <input type="textarea" className="form-control" id="complément" name="b_address2" value={ this.state.identicalBillingAddress === false ? this.state.b_address2 : this.state.d_address2 } onChange={ this.onChange } placeholder="Appt, Immeuble, etc" />
                                            </div>
                                            <div className="col-md-4 mb-3 user-infos">
                                                <label htmlFor="zip">Code postal</label>
                                                <input type="text" className="form-control" id="b_zip" name="b_zipCode" value={ this.state.identicalBillingAddress === false ? this.state.b_zipCode : this.state.d_zipCode } onChange={ this.onZipCodeChange }/>
                                                <div className="invalid-feedback" id="b_zip_error">
                                                    Code Postal nécessaire.
                                                </div>
                                            </div>
                                            { typeof this.state.b_city === 'undefined' ? '' : 
                                                <div className="col-md-4 mb-3 user-infos cityname-container">
                                                    <span id="b_city">{ this.state.b_city.name }</span>
                                                </div>
                                            }
                                        </div>
                                    </span>) }
                                <button className="btn btn-primary btn-lg btn-block" type="submit">{ typeof this.id === 'undefined' ? "Enregistrer" : "Mettre à jour" }</button>
                                {/* {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/users" } onClick={ this.handleDelete }>Delete</Link>}
                                  <Link to={ "/users" }>back to list</Link> */}
                            </form>
                            <Link role="button" className="btn btn-light btn-sm product-button with-padding-top" to={ "/users" }>Retourner à la liste</Link>
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
    users: state.user.users,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    cities: state.city.cities,
    user: state.auth.user,
});

export default connect(mapStateToProps, { addUser, updateUser, deleteUser })(UserForm);
