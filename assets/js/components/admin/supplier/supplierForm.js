import 'flatpickr/dist/themes/material_green.css'

import React from 'react';
import { connect } from 'react-redux';
import { addSupplier, updateSupplier, deleteSupplier } from '../../../actions/supplierActions';
import { getUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';
import TimePicker from 'react-time-picker';
import Flatpickr from 'react-flatpickr'

class SupplierForm extends React.Component 
{
    id = this.props.match.params.id;
    selectedSupplier = this.props.suppliers.find(supplier => (parseInt(supplier.id)) === parseInt(this.props.match.params.id));

    state = {
        isNew: true,
        name: '',
        address: typeof this.id === 'undefined' ? '' : (typeof this.selectedSupplier!== 'undefined' ? this.selectedSupplier.address : ''),
        gps: typeof this.id === 'undefined' ? '-21.329519,55.471617' : (typeof this.gps !== 'undefined' ? this.selectedSupplier.gps : '-21.329519,55.471617'),
        users: typeof this.id === 'undefined' ? [] : (typeof this.selectedSupplier!== 'undefined' ? this.selectedSupplier.users : []),
        preparationPeriod: typeof this.id === 'undefined' ? '' : (typeof this.selectedSupplier!== 'undefined' ? this.selectedSupplier.preparationPeriod : ''),
        timeString: '00:00',
        selection: {}, 
        title: 'Créer un nouveau fournisseur',
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token),
        origin: new Date(2020, 0, 1, 0, 0, 0),
        time: new Date(2020, 0, 1, 0, 0, 0),

    };

    static propTypes = {
        addSupplier: PropTypes.func.isRequired,
        updateSupplier: PropTypes.func.isRequired,
        deleteSupplier: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.initMap();
        const id = this.props.match.params.id;
        if (typeof id !== 'undefined') {
            for (let i = 0; i < this.props.suppliers.length; i++) {
                if (parseInt(this.props.suppliers[i].id) === parseInt(id)) {
                    const preparationTime = new Date(this.state.preparationPeriod);
                    const selectedSupplier = this.props.suppliers[i];
                    this.setState({
                        isNew: false,
                        name: typeof selectedSupplier.name === 'undefined' ? '' : selectedSupplier.name,
                        address: typeof selectedSupplier.address === 'undefined' ? '' : selectedSupplier.address,
                        users: typeof selectedSupplier.users === 'undefined' ? [] : selectedSupplier.users,
                        selection: selectedSupplier,
                        title: 'Modifier le fournisseur ' + typeof selectedSupplier.name === 'undefined' ? '' : selectedSupplier.name,
                        timeString: new Date(this.state.preparationPeriod).toLocaleTimeString(),
                        time: new Date(2020, 0, 1, 0, preparationTime.getMinutes(), 0),
                    });
                    break;
                }
            }
        }
    }
    
    initMap = () => {
        let markers = [];
        let [lat, long] = this.state.gps.split(',');
        let placesAutocomplete = places( {
            appId     : process.env.ALGOLIA_APPID,
            apiKey    : process.env.ALGOLIA_APIKEY,
            container : document.getElementById('input-supplier-map'),
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
        if (this.state.gps !== '-21.329519,55.471617') {
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
                address: e.suggestion.value,
                gps: e.suggestion.latlng.lat + ',' + e.suggestion.latlng.lng,
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

    onTimeChange = time => {
        const period = new Date(2020, 0, 1, 0, time[0].getMinutes());
        this.setState({ 
            time: period,
            preparationPeriod: this.dateDiff(period)
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

    onUsersChange = e => {
        const options = e.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(this.getSelectedUser(options[i].value));
            }
        }
        this.setState( { users: value } );
    }

    getSelectedUser = id => {
        for (let i = 0; i < this.props.users.length; i++) {
            if (parseInt(this.props.users[i].id) === parseInt(id)) {
                return this.props.users[i];
            }
        }
        return false;
    }

    handleSubmit = e => {
        e.preventDefault();
        const supplier = this.state.selection;
        supplier.name = this.state.name;
        supplier.address = this.state.address;
        supplier.users = this.state.users;
        supplier.gps = this.state.gps;
        supplier.preparationPeriod = this.state.preparationPeriod;
        if (typeof this.props.match.params.id !== 'undefined') {
            this.props.updateSupplier(supplier);
        } else {
            this.props.addSupplier(supplier);
        }
        this.props.history.push(`/suppliers`);
    }

    displayUsers = (users) => {
        return (
        <select id="supplier_users" className="form-control" name="users" multiple="multiple" onChange={ this.onUsersChange }>
            {
                users.map(user => {
                    if (this.state.users.filter(elt => elt.id === user.id).length > 0) {
                        return <option value={user.id} selected>{ user.email }</option>
                    } else {
                        return <option value={user.id}>{ user.email }</option>
                    }
                })
            }
        </select>
        );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div id="productform-container" className="container">
                    <h1>{ this.state.title }</h1>
                    <form onSubmit={ this.handleSubmit } method="post" enctype="multipart/form-data">
                        <div id="product" className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="name">Nom du fournisseur</label>
                                    <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom du fournisseur" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="users">Utilisateurs associés</label>
                                    { typeof this.props.users === 'undefined' ? '' : this.displayUsers(this.props.users) }
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <div className="col-md-12">
                                    <label htmlFor="users">Temps de préparation</label>
                                    <Flatpickr data-enable-time
                                        value={this.state.time}
                                        onChange={this.onTimeChange}
                                        className="form-control"
                                        // onChange={date => { this.setState({time: date}); }} 
                                        options={  {enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    time_24hr: true, 
                                                    minTime: "00:05",
                                                    maxTime: "00:59",
                                                    minuteIncrement: 1
                                                    }
                                                }
                                    />
                                    {/* <TimePicker className="form-control" onChange={this.onTimeChange} value={this.state.timeString} /> */}
                                </div>
                            </div>

                            {/* Delivery address panel */}
                            <hr className="mb-4"/>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h4 className="mb-3">Adresse</h4>
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
                                    <input type="text" id="input-supplier-map" className="form-control" name="address" value={ this.state.address } onChange={ this.onChange }/>
                                    <div className="invalid-feedback">
                                        Merci de saisir une adresse de livraison.
                                    </div>
                                </div>
                            </div>
                            <div className="row with-padding-top">
                                <input type="hidden" name="gps" className="form-control" id="gps" value={ this.state.gps } placeholder="" onChange={ this.onChange } />
                            </div>
                            <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                        </div>
                    </form>
                    <Link to={ "/suppliers" }>Retourner à la liste</Link>
                </div>
            );
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    users: state.user.users,
    suppliers: state.supplier.suppliers,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addSupplier, updateSupplier, deleteSupplier, getUser })(SupplierForm);