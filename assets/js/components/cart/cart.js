import React from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component 
{

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
      };
    
    componentDidMount() {
        this.props.getItems();
      }
    
    onDeleteClick = item => {
        this.props.deleteItem(item);
      };
    displayItems = () => {
      let CartItem = (props) => {
        return (
          <li key={"cartitem-item-" + props.details.product.id} className="d-flex flex-row ml-auto">
              <a href="#" className="d-flex flex-row ml-auto">
                  x{ props.details.quantity } { props.details.parent.name } { props.details.product.name } | { Math.round(parseFloat(props.details.product.price) * parseInt(props.details.quantity) * 100) / 100 }€
              </a>
              <button className="btn btn-link" onClick={() => this.onDeleteClick(props.details)}><i className="fa fa-trash"></i></button> 
          </li>
        );
      }
      return this.props.item.items.map(item => {
          return <CartItem key={"cartitem-" + item.product.id} details={item} />
      });
    }

    render() {
        return (
            <span>
                <h5 className="dropdown-header mb-0">
                    <i className="fas fa-shopping-cart"></i>
                    Panier
                </h5>

                <div className="dropdown-block">

                    <ul className="dropdown-list">
                        { this.displayItems() }
                    </ul>

                    <div className="d-flex border-bottom mb-2 px-3 py-2">Total:
                        <span className="ml-auto font-weight-bold text-success">{ this.props.item.totalToPayTTC }€</span>
                    </div>

                    <div className="d-flex px-3" >
                        <Link to={ "/cart" } className="btn btn-outline btn-sm" hidden={ this.props.item.totalToPayTTC <= 0 ? true : false }>Editer quantité</Link>
                        <Link to={ "/checkout" } className="btn btn-success btn-sm ml-auto" hidden={ this.props.item.totalToPayTTC <= 0 ? true : false }>Payer</Link>

                    </div>
                </div>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { getItems, deleteItem }
  )(Cart);