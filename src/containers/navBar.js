import { connect } from 'react-redux'
import {changeDisplayStatusMovieUpload, changeDisplayStatusAddEditForm} from '../actions'
import NavBar from '../components/navBar'

const mapStateToProps = ({movieUpload, addEditMovieForm}) => {
    return {
        movieUpload,
        addEditMovieForm
    };
};

const mapDispatchToProps = (dispatch) => {

    console.log(dispatch);
    return {
        changeDisplayStatusUploadMovie: () => {
            console.log('changeDisplayStatusMovieUpload');
            dispatch(changeDisplayStatusMovieUpload());
        },

        changeDisplayStatusAddEditForm: () => {
            console.log('changeDisplayStatusAddEditForm');
            dispatch(changeDisplayStatusAddEditForm());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);