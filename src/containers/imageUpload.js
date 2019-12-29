import { connect } from 'react-redux';
import ImageUpload from '../components/imageUpload';
import { addImageForUpload, sendImageToServer } from '../actions';

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

            dispatch(addImageForUpload(e.target.files[0]));
        },


        sendFile: (e) => {
            console.log('sendFileToServer', e);
            dispatch(sendImageToServer(e));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);

