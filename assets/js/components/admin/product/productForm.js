import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class ProductForm extends React.Component 
{
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

    render = () => {
        <span>
            <h1>Create new Product</h1>
            <form name="product" method="post" enctype="multipart/form-data">
                <div id="product">

                    <div>
                        <label for="product_supplier" class="required">Supplier</label>
                        <select id="product_supplier" name="product[supplier]">
                            <option value="1">Osaka</option>
                            <option value="2">La Maison du Whisky</option>
                            <option value="3">BurgerMary</option>
                        </select>
                    </div>

                    <div>
                        <label for="product_category" class="required">Category</label>
                        <select id="product_category" name="product[category]">
                            <option value="1">burger</option>
                            <option value="2">boisson</option>
                            <option value="3">produits laitiers</option>
                            <option value="4">légumes</option>
                            <option value="5">fruits</option>
                            <option value="6">plats cuisinés</option>
                        </select>
                    </div>

                    <div>
                        <label for="product_name" class="required">Name</label>
                        <input type="text" id="product_name" name="product[name]" required="required" maxlength="150" />
                    </div>

                    <div>
                        <label for="product_description">Description</label>
                        <textarea id="product_description" name="product[description]"></textarea>
                    </div>

                    <div>
                        <label for="product_allergens">Allergens</label>
                        <select id="product_allergens" name="product[allergens][]" multiple="multiple">
                            <option value="1">anhydride sulfureux et sulfites</option>
                            <option value="2">arachides</option>
                            <option value="3">crustacés</option>
                            <option value="4">gluten</option>
                            <option value="5">oeufs</option>
                            <option value="6">poissons</option>
                            <option value="7">soja</option>
                            <option value="8">lait</option>
                            <option value="9">fruits à coques</option>
                            <option value="10">céleri</option>
                            <option value="11">moutarde</option>
                            <option value="12">graines de sésame</option>
                            <option value="13">lupin</option>
                            <option value="14">mollusques</option>
                        </select>
                    </div>

                    <div>
                        <label for="product_proteins">Proteins</label>
                        <input type="text" id="product_proteins" name="product[proteins]"/>
                    </div>

                    <div>
                        <label for="product_carbohydrates">Carbohydrates</label>
                        <input type="text" id="product_carbohydrates" name="product[carbohydrates]" />
                    </div>

                    <div>
                        <label for="product_sugar">Sugar</label>
                        <input type="text" id="product_sugar" name="product[sugar]"/>
                    </div>

                    <div>
                        <label for="product_fat">Fat</label>
                        <input type="text" id="product_fat" name="product[fat]"/>
                    </div>

                    <div>
                        <label for="product_saturated">Saturated</label>
                        <input type="text" id="product_saturated" name="product[saturated]"/>
                    </div>

                    <div>
                        <label for="product_sodium">Sodium</label>
                        <input type="text" id="product_sodium" name="product[sodium]"/>
                    </div>

                    <div>
                        <label for="product_tva" class="required">Tva</label>
                        <select id="product_tva" name="product[tva]">
                            <option value="1">2.1</option>
                            <option value="2">8.5</option>
                        </select>
                    </div>

                    <div>
                        <label for="product_picture">Illustration</label>
                        <input type="file" id="product_picture" name="product[picture]"/>
                    </div>

                    <div>
                        <label class="required">Variants</label>
                        <div id="product_variants" data-prototype="<div ><label class=&quot;required&quot;>__name__label__</label><div id=&quot;product_variants___name__&quot;><div ><label for=&quot;product_variants___name___name&quot; class=&quot;required&quot;>Name</label><input type=&quot;text&quot; id=&quot;product_variants___name___name&quot; name=&quot;product[variants][__name__][name]&quot; required=&quot;required&quot; maxlength=&quot;60&quot; /></div><div ><label for=&quot;product_variants___name___price&quot; class=&quot;required&quot;>Price</label><input type=&quot;text&quot; id=&quot;product_variants___name___price&quot; name=&quot;product[variants][__name__][price]&quot; required=&quot;required&quot;/></div></div></div>"></div>
                        <div>
                            <label class="required">Variant N°1</label>
                            <div id="product_variants_0">
                                <div>
                                    <label for="product_variants_0_name" class="required">Name</label>
                                    <input type="text" id="product_variants_0_name" name="product[variants][0][name]" required="required" maxlength="60"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="product_variants_0_price" class="required">Price</label>
                        <input type="text" id="product_variants_0_price" name="product[variants][0][price]" required="required"/>
                    </div>
                </div>
                <a href="#" class="btn btn-danger">Supprimer</a>
                <input type="hidden" id="product__token" name="product[_token]" value="8Bc8PRm8WyrO7AH69sVEuaIWv8u3VYCTro8tvEPwP9I" />
                <a href="#" id="add_variant" class="btn btn-default">Add a variant</a>
                <button class="btn">Save</button>
            </form>
        </span>
    }

}

const mapStateToProps = state => ({
    users: state.user.users,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    cities: state.city.cities,
    user: state.auth.user,
});

export default connect(mapStateToProps, { addUser, updateUser, deleteUser })(ProductForm);