import React from 'react';
import { connect } from 'react-redux';
import { getAllergen } from '../../../actions/allergenActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AllergenDetails extends React.Component 
{
    static propTypes = {
        getAllergen: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.props.getAllergen(this.props.match.params.id, this.props.allergens);
    }

    render() {
        const selection = this.props.selectedAllergen;

        return (
            <span>
                <h1>Allergène</h1>

                <table class="table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{ typeof selection !== 'undefined' ? selection.id : '' }</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{ typeof selection !== 'undefined' ? selection.name : '' }</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={ "/allergens" }>back to list</Link>

                <Link to={ "/allergens-add-or-edit/" + selection.id }>Edit</Link>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    allergens: state.allergen.allergens,
    selectedAllergen: state.allergen.selected,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getAllergen })(AllergenDetails);
