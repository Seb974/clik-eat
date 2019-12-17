import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addSupplier, updateSupplier, deleteSupplier } from '../../../actions/supplierActions';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';
import update from 'react-addons-update';

class ProductForm extends React.Component 
{
    id = this.props.match.params.id;
    selectedProduct = this.props.products.find(product => (parseInt(product.id)) === parseInt(this.props.match.params.id));
    newVariant = { name: "", price: "" };

    state = {
        isNew: typeof this.id === 'undefined' ? true : false,
        newIndex: 100,
        selection: typeof this.id === 'undefined' ? {} : this.selectedProduct, 
        title: typeof this.id === 'undefined' ? 'Créer une nouvel utilisateur' : 'Modifier l\'utilisateur ' + this.selectedProduct.username,
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token),
        name: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.name === 'undefined' ? '' : this.selectedProduct.name),
        description: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.description === 'undefined' ? '' : this.selectedProduct.description),
        nutritionals: typeof this.id === 'undefined' ? [] : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals),
        supplier: typeof this.id === 'undefined' ? {} : (typeof this.selectedProduct.supplier === 'undefined' ? {} : this.selectedProduct.supplier),
        category: typeof this.id === 'undefined' ? {} : (typeof this.selectedProduct.category === 'undefined' ? {} : this.selectedProduct.category),
        tax: typeof this.id === 'undefined' ? {} : (typeof this.selectedProduct.tva === 'undefined' ? {} : this.selectedProduct.tva),
        allergens: typeof this.id === 'undefined' ? [] : (typeof this.selectedProduct.allergens === 'undefined' ? [] : this.selectedProduct.allergens),
        variants: typeof this.id === 'undefined' ? [this.newVariant] : (typeof this.selectedProduct.variants === 'undefined' ? [this.newVariant] : this.selectedProduct.variants),
        protein: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.protein),
        carbohydrates: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.carbohydrates),
        sugar: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.sugar),
        fat: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.fat),
        saturated: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.transAG),
        sodium: typeof this.id === 'undefined' ? '' : (typeof this.selectedProduct.nutritionals === 'undefined' ? [] : this.selectedProduct.nutritionals.salt),
    };

    static propTypes = {
        addSupplier: PropTypes.func.isRequired,
        updateSupplier: PropTypes.func.isRequired,
        deleteSupplier: PropTypes.func.isRequired
    };
    
    componentDidMount() {
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSelectChange = (items, e) => {
        let selectedItem = this.getSelectedItem(e.target.value, items);
        this.setState({ [e.target.name]: selectedItem});
    }

    onAllergensChange = e => {
        const options = e.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(this.getSelectedItem(options[i].value, this.props.allergens));
            }
        }
        this.setState( { allergens: value } );
    }

    onVariantChange = (e, i) => {
        const { name, value } = e.target;
        let variants = [...this.state.variants];
        variants[i] = {...variants[i], [name]: value};
        this.setState({ variants });
    }

    onVariantDelete = (e, i) => {
        let variants = [...this.state.variants];
        variants.splice(i, 1);
        this.setState({ variants });
    }

    onVariantAdd = () => {
        this.setState(prevState => ({ 
            variants: [...prevState.variants, this.newVariant]  //{ name: "", price: "" }]
        }))
      }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    getSelectedItem = (id, items) => {
        for (let i = 0; i < items.length; i++) {
            if (parseInt(items[i].id) === parseInt(id)) {
                return items[i];
            }
        }
        return false;
    }

    displaySuppliers = (suppliers) => {
        return (
        <select id="supplier" name="supplier" onChange={ (e) => this.onSelectChange(suppliers, e) }>
            {suppliers.map(supplier => {
                    if (this.state.supplier.id === supplier.id) {
                        return <option value={supplier.id} selected>{ supplier.name }</option>
                    } else {
                        return <option value={supplier.id}>{ supplier.name }</option>
                    }
                })
            }
        </select>
        );
    }

    displayCategories = (categories) => {
        return (
        <select id="category" name="category" onChange={ (e) => this.onSelectChange(categories, e) }>
            {categories.map(category => {
                    if (this.state.category.id === category.id) {
                        return <option value={category.id} selected>{ category.name }</option>
                    } else {
                        return <option value={category.id}>{ category.name }</option>
                    }
                })
            }
        </select>
        );
    }

    displayAllergens = (allergens) => {
        return (
        <select id="allergens" name="allergens" multiple="multiple" onChange={ this.onAllergensChange }>
            {allergens.map(allergen => {
                    if (this.state.allergens.filter(elt => elt.id === allergen.id).length > 0) {
                        return <option value={allergen.id} selected>{ allergen.name }</option>
                    } else {
                        return <option value={allergen.id}>{ allergen.name }</option>
                    }
                })
            }
        </select>
        );
    }

    displayTaxes = (taxes) => {
        return (
        <select id="taxes" name="taxes" onChange={ (e) => this.onSelectChange(taxes, e) }>
            {taxes.map(tax => {
                    if (this.state.tax.id === tax.id) {
                        return <option value={tax.id} selected>{ tax.name }</option>
                    } else {
                        return <option value={tax.id}>{ tax.name }</option>
                    }
                })
            }
        </select>
        );
    }

    displayVariants = (variants) => {
        return variants.map((variant, index) => {
            return (
                <div key={index}>
                    <hr/>
                    <label>{ "Variante N°" + (index + 1) }</label>
                    <div>
                        <label>Nom</label>
                        <input type="text" data-id={index} placeholder="name" name="name" value={variant.name ||''} onChange={(e) => this.onVariantChange(e, index) } />
                    </div>
                    <div>
                        <label>Prix</label>
                        <input type="text" data-id={index} placeholder="price" name="price" value={variant.price ||''} onChange={(e) => this.onVariantChange(e, index) } />
                    </div>
                    <a href="#" class="btn btn-danger" onClick={ (e) => this.onVariantDelete(e, index) }>Supprimer</a>
                </div>
            );
        });
    }

    render = () => {
        if( Object.entries(this.state.user).length !== 0 && this.state.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ) {

            return (
                <div className="container mt-3">
                    <h1>Create new Product</h1>
                    <form name="product" method="post" enctype="multipart/form-data">
                        <div id="product" className="container">

                            <div>
                                <label for="product_supplier" class="required">Fournisseur</label>
                                { this.displaySuppliers(this.props.suppliers) }
                            </div>

                            <div>
                                <label for="product_category" class="required">Category</label>
                                { this.displayCategories(this.props.categories) }
                            </div>

                            <div>
                                <label for="product_name" class="required">Name</label>
                                <input type="text" id="name" name="name" required="required" maxlength="150" value={ this.state.name } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_description">Description</label>
                                <textarea id="description" name="description" onChange={ this.onChange }>{ this.state.description }</textarea>
                            </div>

                            <div>
                                <label for="product_allergens">Allergens</label>
                                { this.displayAllergens(this.props.allergens) }
                            </div>

                            <div>
                                <label for="product_proteins">Proteins</label>
                                <input type="text" id="protein" name="protein" value={ this.state.protein } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_carbohydrates">Carbohydrates</label>
                                <input type="text" id="carbohydrates" name="carbohydrates" value={ this.state.carbohydrates } onChange={ this.onChange } />
                            </div>

                            <div>
                                <label for="product_sugar">Sugar</label>
                                <input type="text" id="sugar" name="sugar" value={ this.state.sugar } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_fat">Fat</label>
                                <input type="text" id="fat" name="fat" value={ this.state.fat } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_saturated">Saturated</label>
                                <input type="text" id="saturated" name="saturated" value={ this.state.saturated } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_sodium">Sodium</label>
                                <input type="text" id="sodium" name="sodium" value={ this.state.sodium } onChange={ this.onChange }/>
                            </div>

                            <div>
                                <label for="product_tva" class="required">Tva</label>
                                { this.displayTaxes(this.props.taxes) }
                            </div>

                            <div>
                                <label for="product_picture">Illustration</label>
                                <input type="file" id="product_picture" name="product[picture]"/>
                            </div>
                            <br/>
                            <div>
                                <label class="required">Variants</label>
                                <div id="product_variants">
                                    { this.displayVariants(this.state.variants) }
                                    {/* { typeof this.id === 'undefined' ? '' : (typeof this.state.variants === 'undefined' ? '' : this.displayVariants(this.state.variants) ) } */}
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <a href="#" id="add_variant" class="btn btn-default" onClick={ this.onVariantAdd } >Add a variant</a>
                        <button class="btn" onClick={ this.onSubmit }>Save</button>
                    </form>
                </div>
            )
        } else {
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
    products: state.productAdmin.products,
    suppliers: state.supplier.suppliers,
    categories: state.category.categories,
    allergens: state.allergen.allergens,
    taxes: state.tax.taxes
});

export default connect(mapStateToProps, { addSupplier, updateSupplier, deleteSupplier })(ProductForm);

// "<div><label>__name__label__</label><div id=&quot;product_variants___name__&quot;><div><label for=&quot;variants[__name__]_name&quot;>Nom</label><input type=&quot;text&quot; id=&quot;variants[__name__]_name&quot; name=&quot;variants[__name__]_name&quot; required=&quot;required&quot; maxlength=&quot;60&quot; /></div><div><label for=&quot;variants[__name__]_price&quot;>Prix</label><input type=&quot;text&quot; id=&quot;variants[__name__]_price&quot; name=&quot;variants[__name__]_price&quot; required=&quot;required&quot;/></div></div></div>"
// data-prototype="<div ><label class=&quot;required&quot;>__name__label__</label><div id=&quot;product_variants___name__&quot;><div ><label for=&quot;product_variants___name___name&quot; class=&quot;required&quot;>Name</label><input type=&quot;text&quot; id=&quot;product_variants___name___name&quot; name=&quot;product[variants][__name__][name]&quot; required=&quot;required&quot; maxlength=&quot;60&quot; /></div><div ><label for=&quot;product_variants___name___price&quot; class=&quot;required&quot;>Price</label><input type=&quot;text&quot; id=&quot;product_variants___name___price&quot; name=&quot;product[variants][__name__][price]&quot; required=&quot;required&quot;/></div></div></div>">