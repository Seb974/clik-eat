import React from 'react';
import { connect } from 'react-redux';
import { getAllergens } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AllergenList extends React.Component 
{
    static propTypes = {
        getAllergens: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getAllergens();
    }

    displayAllergens = () => {
        let Allergen = (props) => {
            return (
                <tr>
                    <td>{ props.details.id }</td>
                    <td>{ props.details.name }</td>
                    <td>
                        <Link to={ "/allergens-show/" + props.details.id }>Show</Link> - 
                        <Link to={ "/allergens-add-or-edit/" + props.details.id }>Edit</Link>
                    </td>
                </tr>
            );
        }
        return this.props.allergens.map( allergen => <Allergen details={allergen} /> );
    }

    render() {
        return (
            <div id="content-wrap">
                <h1>Liste des allergènes</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (typeof this.props.allergens !== 'undefined' && this.props.allergens.length > 0) ? 
                            this.displayAllergens() : <tr> <td colspan="3">no records found</td> </tr>
                        }
                    </tbody>
                </table>
                <Link to={ "/allergens-add-or-edit" }>Create new</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allergens: state.allergen.allergens,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, { getAllergens })(AllergenList);
