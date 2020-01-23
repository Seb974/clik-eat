import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateVariant } from '../../../actions/itemActions';
import PropTypes from 'prop-types';
import userExtractor from '../../../helpers/userExtractor';

class StockList extends React.Component 
{
    input = [];

    constructor(props) {
        super(props);
        this.props.products.forEach(product => {
            product.variants.forEach(variant => {
                this.input[variant.id] = React.createRef();
            });
        });
    }

    state = {
        user: (typeof this.props.token === 'undefined') ? {} : userExtractor(this.props.token)
    };

    static propTypes = {
        updateVariant: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.products.map( product => {
            return product.variants.map(variant => {
                this.setState({[variant.id]: parseInt(variant.stock.quantity)})
                return variant;
            });
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: parseInt(e.target.current.value)});
    }

    onSubmitNewQty = (e) => {
        e.preventDefault();
        let selectedId = parseInt(e.target.dataset.variant);
        let selectedProduct = this.props.products.filter( product => product.id === parseInt(e.target.dataset.product));
        let selectedVariant = selectedProduct[0].variants.filter( variant => variant.id === selectedId);
        let item = {
            product: selectedProduct[0],
            variant: selectedVariant[0],
            quantity: parseInt(this.input[selectedId].current.value),
        };
        this.props.updateVariant(item);
    }

    displayVariants = (product) => {
        // let Variant = (props) => {
        //     return (
        //             <tr>
        //                 <td>{ props.details.id }</td>
        //                 <td>{ props.product.name }</td>
        //                 <td>{ props.details.name }</td>
        //                 {/* <td><input type="number" name={ props.details.id } value={ this.state[props.details.id] || '' } onChange={ this.onChange } /></td> */}
        //                 <td><input type="number" ref={ this.input[props.details.id] } defaultValue={ props.details.stock.quantity || '' } /></td>
        //                 <td>
        //                     <a href="#" data-variant={ props.details.id } data-product={ props.product.id } onClick={ this.onSubmitNewQty }>Enregistrer</a>
        //                 </td>
        //             </tr>
        //       );
        //     }
        // return product.variants.map(variant => {
        //     return <Variant details={variant} product={product} />;
        // });

        let Variant = (props) => {
            return (
                     <li key={"variant-item-" + props.details.id} className="d-flex flex-row-reverse variant-list">
                        {/* {props.details.stock.quantity <= 0 ? <span class="react-stock">Rupture de stock !</span> :  */}
                        {props.details.name}
                            (<span>
                                <span class="stock-info">
                                    <i className="fas fa-dolly"></i> 
                                    {/* {" "} {props.details.stock.quantity} {" "} */}
                                    <input type="number" ref={ this.input[props.details.id] } defaultValue={ props.details.stock.quantity || '' } />
                                </span>
                                <a role="button" className="btn btn-primary btn-sm"  data-variant={ props.details.id } data-product={ props.product.id } onClick={ this.onSubmitNewQty }>
                                    {/* <i className="fas fa-shopping-cart"></i>
                                    {props.details.name}  à {props.details.price}€ */}
                                    Enregistrer
                                </a>
                            </span>)
                        {/* } */}
                    </li>
              );
            }
        return product.variants.map(variant => {
            return (
                <span key={"variant-span-" + variant.id}>
                    <hr/>
                    <Variant details={variant} product={product}/>
                </span>
            )
        });
    }

    displayProducts = () => {
        let currentSupplier = JSON.parse(this.props.user.supplier);
        let Product = (props) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4 react-product">
                  <div className="card card-lg home-card">
                      <div className="card-text">
                          <ul>
                              <li key={"product-item-" + props.details.id}>
                                  <Link to={ "/show/" + props.details.id }>{ props.details.name }</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="card-block">
                          <ul className="d-flex flex-column">
                              { this.displayVariants(props.details) }
                          </ul>
                      </div>
                  </div>
              </div>
            );
        }
        let productList = this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ? 
                          this.props.products : 
                          this.props.products.filter(product => parseInt(product.supplier.id) === parseInt(currentSupplier.id));
        return productList.map( product => <Product key={"product-" + product.id} details={product} /> );
        
        //   return productsToDisplay.map(product => {
        //       return <Product key={"product-" + product.id} details={product} />
        //   });


        // let productList = this.props.user.roles.find(role => role === "ROLE_ADMIN") !== undefined ? 
        //                   this.props.products : 
        //                   this.props.products.filter(product => parseInt(product.supplier.id) === parseInt(currentSupplier.id));
        // return productList.map( product => this.displayVariants(product) );
    }

    render() {
        if( (this.props.user !== null && this.props.user !== undefined) && this.props.user.roles.find(role => role === "ROLE_ADMIN" || role === "ROLE_SUPPLIER") !== undefined ) {
            return (
                <div id="content-wrap">
                    <h1>Liste des stocks</h1>
                    {/* <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Variante</th>
                                <th>Quantité</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody> */}
                    {
                        (typeof this.props.products !== 'undefined' && this.props.products.length > 0) ? 
                            this.displayProducts() :
                            <p>Aucun produit référencé</p>
                    }
                        {/* </tbody>
                    </table> */}
                    {/* <Link to={ "/products-add-or-edit" }>Create new</Link> */}
                </div>
            );
        }
        else {
            return <Redirect to='/'/>
        }
    } 
}

const mapStateToProps = state => ({
    products: state.product.products,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    user: state.auth.user,
    suppliers: state.supplier.suppliers,
    category: state.category.getCategories,
    allergen: state.allergen.allergens,
    tax: state.tax.taxes
  });

export default connect(mapStateToProps, { updateVariant })(StockList);
// export default connect(mapStateToProps, { getProducts, deleteProduct, getSuppliers, getCategories, getAllergens, getTaxes })(StockList);
