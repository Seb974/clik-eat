import React from 'react';
import { connect } from 'react-redux';
import { addSupplier, updateSupplier, deleteSupplier } from '../../../actions/supplierActions';
import { getUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';
import TimePicker from 'react-time-picker';

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
                    const selectedSupplier = this.props.suppliers[i];
                    this.setState({
                        isNew: false,
                        name: typeof selectedSupplier.name === 'undefined' ? '' : selectedSupplier.name,
                        address: typeof selectedSupplier.address === 'undefined' ? '' : selectedSupplier.address,
                        users: typeof selectedSupplier.users === 'undefined' ? [] : selectedSupplier.users,
                        selection: selectedSupplier,
                        title: 'Modifier le fournisseur ' + typeof selectedSupplier.name === 'undefined' ? '' : selectedSupplier.name,
                        timeString: new Date(this.state.preparationPeriod).toLocaleTimeString(),
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
        var timeString = time + ':00';
        const datetime = new Date('1970-01-01T' + timeString + 'Z');
        this.setState({ 
            timeString: time,
            preparationPeriod: datetime
        });
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

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteSupplier(this.props.match.params.id);
        this.props.history.push(`/suppliers`);
    }

    displayUsers = (users) => {
        return (
        <select id="supplier_users" name="users" multiple="multiple" onChange={ this.onUsersChange }>
            {users.map(user => {
                    // if (this.selectedSupplier.users.filter(elt => elt.id === user.id).length > 0) {
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
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {
            return (
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 col-sm-8 col-md-4 mx-auto"> */}
                            <div className="card m-b-0">
                                <div className="card-header">
                                    <h4 class="card-title"><i class="fa fa-user-plus"></i>{ this.state.title }</h4>
                                </div>
                                <div className="card-block">
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className="form-group input-icon-left m-b-10">
                                            <i className="fa fa-user"></i>
                                            <label className="sr-only">Nom du fournisseur</label>
                                            <input type="text" name="name" id="inputName" className="form-control" placeholder="Nom du fournisseur" required autoFocus value={ this.state.name } onChange={ this.onChange }/>
                                        </div>

                                        <div className="form-group input-icon-left m-b-10">
                                            <label className="sr-only">Utilisateurs associés</label>
                                            { typeof this.props.users === 'undefined' ? '' : this.displayUsers(this.props.users) }
                                        </div>

                                        <div className="form-group input-icon-left m-b-10">
                                            <label className="sr-only">Temps de préparation</label>
                                            <TimePicker onChange={this.onTimeChange} value={this.state.timeString} />
                                        </div>

                                        {/* Delivery address panel */}
                                        <hr className="mb-4"/>
                                        <div className="row">
                                        <div className="form-group input-icon-left m-b-10">
                                                <h4 className="mb-3">Adresse</h4>
                                            </div>
            
                                            <div className="row">
                                                    <div className="col-md-12">
                                                        <div id="map-example-container">
                                                            {/* <Map/> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label htmlFor="address">Adresse</label>
                                                        <input type="text" className="form-control" id="input-map" name="address" value={ this.state.address } onChange={ this.onChange }/>
                                                        <div className="invalid-feedback">
                                                            Merci de saisir une adresse.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 mt-3">
                                                        <small>
                                                            <input type="hidden" name="gps" className="form-control" id="gps" value={ this.state.gps } placeholder="" onChange={ this.onChange } />
                                                        </small>
                                                    </div>
            
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary m-t-10 btn-block">ENREGISTRER</button>
                                    </form>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    {(typeof this.props.match.params.id === 'undefined') ? '' : <Link to={ "/suppliers" } onClick={ this.handleDelete }>Delete</Link>}
                    <Link to={ "/suppliers" }>back to list</Link>
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
    suppliers: state.supplier.suppliers,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
});

export default connect(mapStateToProps, { addSupplier, updateSupplier, deleteSupplier, getUser })(SupplierForm);
