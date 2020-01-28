import React from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem } from '../../actions/itemActions';
import { getProduct } from '../../actions/productActions';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component 
{
    static propTypes = {
        getProduct: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }

    handleClick = (product, variant) => {
        const newItem = { product: product, variant: variant, quantity: 1 };
        this.props.addItem(newItem);
    };

    displayAllergens = (product) => {
        let Allergen = (props) => {
            return (
                <span>
                    { props.details.name + " " }
                </span>
            );
        }
        if (product.allergens) {
            if (product.allergens.length > 0) {

                return (
                    product.allergens.map( (allergen) => { 
                        return product.allergens.indexOf(allergen) == 0 ? <span>Allergènes :  <Allergen details={allergen} /></span> 
                                                                        : <span><Allergen details={allergen} /></span>  
                    })
                );
            }
        }
        return <span>Ne contient pas de produits allergènes.</span>
    }

    displayVariants = (product) => {
        let Variant = (props) => {
            return (
                <ul className="d-flex flex-row-reverse">
                    <li key={"variant-item-" + props.details.id}>
                        <i className="fas fa-dolly"></i> 
                        {" "} {props.details.stock.quantity} {" "}

                        {/* {
                            props.details.stock.quantity > 5 ? "" : 
                                (<span className="badge badge-cart">
                                    { "Plus que " + props.details.stock.quantity + " en stock !"}
                                </span>)
                        } */}

                        {props.details.stock.quantity <= 0 ? <span>En rupture de stock !</span> : 
                            (<button className="btn btn-primary btn-sm" onClick={() => this.handleClick(product, props.details)} id={props.details.id}>
                                <i className="fas fa-shopping-cart"></i>
                                {props.details.name}  à {props.details.price}€
                            </button>)
                        }
                    </li>
                </ul>
            );
        }
        if (product.variants) {
            return product.variants.map(variant => {
                return (
                    <span key={"variant-span-" + variant.id} >
                        <hr/>
                        <Variant details={variant} product={product}/>
                    </span>
                )
            })
        } else {
            return "";
        }
    }

    displayNutritionals = (product) => {
        let Nutritionals = (props) => {
            return (
                <span>
                    <h4>Valeurs nutritionnelles (pour 100g)</h4>
                    <div className="widget">
                        <h5 className="widget-title">Energie (KJ) :
                            {" "}{ Math.round(props.details.kJ * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Energie (KCal) :
                            {" "}{ Math.round(props.details.kJ * 0.2388 * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Proteines :
                            {" "}{ Math.round(props.details.protein * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Carbohydrates :
                            {" "}{ Math.round(props.details.carbohydrates * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Sucre :
                            {" "}{ Math.round(props.details.sugar * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Matière grasse :
                            {" "}{ Math.round(props.details.fat * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">dont acides gras saturés :
                            {" "}{ Math.round(props.details.transAG * 100) / 100 }</h5>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">Sel :
                            {" "}{ Math.round(props.details.salt * 100) / 100 }</h5>
                    </div>
                </span>
            );
        }
        if (product.nutritionals) {
            return <Nutritionals details={product.nutritionals} />
        } else {
            return "";
        }
    }

    render() {
        const product = this.props.product.selected ;
        return (
            <section className="p-t-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post">
                                <div className="post-header">
                                    <div></div>
                                    <div>
                                        <h2 className="post-title">{ product.name }</h2>
                                        <div className="post-meta">
                                            <span>
                                                <i className="fas fa-utensils"></i>
                                                { product.category ? product.category.name : "" }
                                            </span>
                                            <p>{ this.displayAllergens(product) }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-thumbnail">
                                    { (!product.picture || product.picture === "" ) ? "" :
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <img className="embed-responsive-item" src={ product.picture.b64 } alt={ product.picture.b64 }/>
                                        </div>
                                    }
                                </div>
                                { this.displayVariants(product) }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                { this.displayNutritionals(product) }
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
    { getItems, deleteItem, getProduct, addItem }
  )(ProductDetails);