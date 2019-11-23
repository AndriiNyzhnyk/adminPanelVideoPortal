import { connect } from 'react-redux'
import AddEditMovie from '../components/addEditMoviesForm'
import {saveNewMovie, clearAllFieldsAddEditForm, changeFieldsAddEditForm} from '../actions'

const mapStateToProps = (state) => {
    return {
        values: state.addEditMovieForm.values
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        saveData: () => {
            dispatch(saveNewMovie());
        },

        clearFields: () => {
            dispatch(clearAllFieldsAddEditForm());
        },

        changeValueField: (e) => {
            console.log(e.target);
            console.log(e.target.name);
            console.log(e.target.value);

            const data = {
                name: e.target.name,
                value: e.target.value
            };


            dispatch(changeFieldsAddEditForm(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMovie);