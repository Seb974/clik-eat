import React from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem, updateItem, decreaseItemQuantity } from '../../actions/itemActions';
import { getProduct } from '../../actions/productActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartList extends React.Component 
{
    input = [];

    constructor(props) {
        super(props);
        this.props.item.items.forEach(item => {
            this.input[item.product.id] = React.createRef();
        });
    }


    state = {
      quantities: '',
    };

    static propTypes = {
        getProduct: PropTypes.func.isRequired,
        getItems: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        updateItem: PropTypes.func.isRequired,
        decreaseItemQuantity: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
      };
    
    componentDidMount() {
        this.props.getItems();
        console.log(this.props.item.items);
      }
    
    onDeleteClick = item => {
        this.props.deleteItem(item);
    };

    handleUpdateQty = (event) => {
        event.preventDefault();
        let selectedItem = parseInt(event.target.dataset.item);
        let itemUpdated = this.props.item.items.find(item => item.product.id === selectedItem);
        let qty = parseInt(this.input[selectedItem].current.value) - itemUpdated.quantity;
        if (qty > 0) {
            let newItem = { product: itemUpdated.parent, variant: itemUpdated.product, quantity: Math.abs(qty) };
            this.props.addItem(newItem);
        }
        if (qty < 0) {
            let newItem = { product: itemUpdated.parent, variant: itemUpdated.product, quantity: Math.abs(qty) };
            this.props.decreaseItemQuantity(newItem);
        }
    }

    displayItems = () => {
      let CartItem = (props) => {
          return (
              <span>
                  <hr/>
                  <ul className="d-flex flex-row-reverse">
                   <li key={"cartitem-item-" + props.details.product.id} className={"cartitem-item"}>
                   { props.variantInState.stock.quantity > 5 ? "" : 
                              props.variantInState.stock.quantity === 0 ?
                              (<p className="badge badge-cart-void">
                                  { "Stock épuisé !"}
                              </p>) :
                              (<p className="badge badge-cart">
                                  { "Plus que " + props.variantInState.stock.quantity + " en stock !"}
                              </p>)
                    }
                    <span>{ props.details.parent.name + " - " + props.details.product.name + "  "} </span>
                      <input type="number" ref={ this.input[props.details.product.id] } defaultValue={props.details.quantity} min="1" max={props.details.product.stock.quantity} step="1" data-item={ props.details.product.id } onChange={ this.handleUpdateQty }/>
                      {/* <a role="button" href="#" className="btn btn-success btn-sm stocklist-variant-validation" data-item={ props.details.product.id } onClick={ this.handleUpdateQty }>Valider</a> */}
                      <button className="btn btn-link" onClick={() => this.onDeleteClick(props.details)}><i className="fa fa-trash"></i></button> 
                      </li>
                  </ul>
              </span>
          );
      }
      return this.props.item.items.map(item => {
          let productState = this.props.product.products.find(product => product.id === item.parent.id);
          let variantState = productState.variants.find(variant => variant.id === item.product.id);
          return (
            <span key={"cartitem-span-" + item.product.id} >
                <CartItem key={"cartitem-" + item.product.id} details={item} variantInState={variantState}/>
                <hr/> 
            </span>
          );
      });
    };

    render() {
        return (
            <section className="p-t-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="post">
                            <div className="post-header">
                                <h2 className="post-title"><i className="fas fa-shopping-cart"></i> Mon panier</h2>
                                {/* 
                                UTILISABLE POUR DISPLAY UN TEMPS APPROXIMATIF DE LIVRAISON
                                <div className="post-meta">
                                    <span>
                                        <i className="fas fa-utensils"></i>
                                        { product.category ? product.category.name : "" }
                                    </span>
                                    <p>{ this.displayAllergens(product) }</p>
                                </div> */}
                            </div>
                            <div className="post-thumbnail">
                                { this.displayItems() }
                            </div> 
                            
                            <div>
                                {/* <button className="btn btn-success btn-sm ml-auto" >Payer</button> */}
                                <Link to={ "/checkout" } className="btn btn-success btn-sm ml-auto" hidden={ this.props.item.totalToPayTTC <= 0 ? true : false }>Payer</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="d-flex border-bottom">Total HT:
                                <span className="ml-auto">{ Math.round(this.props.item.totalTax * 100)/100 }€</span>
                            </div>
                            <div className="d-flex border-bottom">TVA:
                                <span className="ml-auto">{ Math.round(this.props.item.totalToPayHT * 100)/100 }€</span>
                            </div>
                            <div className="d-flex border-bottom">Total TTC:
                                <span className="ml-auto font-weight-bold text-success">{ Math.round(this.props.item.totalToPayTTC *100)/100 }€</span>
                            </div>
                            {/* { this.displayNutritionals(product) } */}

                            {/* {% if is_granted('ROLE_ADMIN') %}
                            <ul class="d-flex flex-row">
                                <button class="btn btn-secondary btn-sm">
                                    <a href="{{ path('product_edit', {'id': product.id}) }}">edit</a>
                                </button>
                                {{ include('product/_delete_form.html.twig') }}
                            </ul>
                            {% endif %} */}

                        </div>
                    </div>
                </div>
            </div>
            </section>




        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { getItems, addItem, deleteItem, updateItem, getProduct, decreaseItemQuantity }
  )(CartList);