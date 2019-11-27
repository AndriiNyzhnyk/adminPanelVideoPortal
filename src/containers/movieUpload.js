import { connect } from 'react-redux';
import movieUpload from '../components/movieUpload';
import {addMovieForUpload, sendFileToServer} from '../actions';

const mapStateToProps = (state) => {
    return {
        welcome: 'Hello world and React'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeHandler: (e) => {
            // dispatch(increment());
            console.log('change', e.target.files[0]);

            dispatch(addMovieForUpload(e.target.files[0]));
        },


        sendFile: (e) => {
            console.log('sendFileToServer', e);
            dispatch(sendFileToServer(e));
        }
    };
};

const Upload = connect(mapStateToProps, mapDispatchToProps)(movieUpload);

export default Upload;