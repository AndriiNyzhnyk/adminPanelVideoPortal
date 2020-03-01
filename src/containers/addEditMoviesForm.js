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
            let data = {
                name: e.target.name,
                value: null
            };

            data.value = (e.target.type === 'number' || e.target.nodeName === 'SELECT') ?
                Number.parseInt(e.target.value, 10) :
                e.target.value;

            dispatch(changeFieldsAddEditForm(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMovie);