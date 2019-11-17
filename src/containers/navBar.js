import { connect } from 'react-redux'
import {changeDisplayStatusFileUpload, changeDisplayStatusAddEditForm} from '../actions'
import NavBar from '../components/navBar'

const mapStateToProps = ({fileUpload, addEditMovieForm}) => {
    return {
        fileUpload,
        addEditMovieForm
    };
};

const mapDispatchToProps = (dispatch) => {

    console.log(dispatch);
    return {
        changeDisplayStatusFileUpload: () => {
            console.log('changeDisplayStatusFileUpload');
            dispatch(changeDisplayStatusFileUpload());
        },

        changeDisplayStatusAddEditForm: () => {
            console.log('changeDisplayStatusAddEditForm');
            dispatch(changeDisplayStatusAddEditForm());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);