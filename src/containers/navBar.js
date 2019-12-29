import { connect } from 'react-redux'
import { changeDisplayStatusMovieUpload, changeDisplayStatusImageUpload, changeDisplayStatusAddEditForm } from '../actions'
import NavBar from '../components/navBar'

const mapStateToProps = ({ movieUpload, imageUpload, addEditMovieForm }) => {
    return {
        movieUpload,
        imageUpload,
        addEditMovieForm
    };
};

const mapDispatchToProps = (dispatch) => {

    console.log(dispatch);
    return {
        changeDisplayStatusMovieUpload: () => {
            console.log('changeDisplayStatusMovieUpload');
            dispatch(changeDisplayStatusMovieUpload());
        },

        changeDisplayStatusImageUpload: () => {
            console.log('changeDisplayStatusImageUpload');
            dispatch(changeDisplayStatusImageUpload());
        },

        changeDisplayStatusAddEditForm: () => {
            console.log('changeDisplayStatusAddEditForm');
            dispatch(changeDisplayStatusAddEditForm());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);