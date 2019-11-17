import { connect } from 'react-redux';
import UploadFiles from '../components/uploadFiles';
import {addFileForUpload} from '../actions';

const mapStateToProps = (state) => {
    return {
        welcome: 'Hello world and React'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeHandler: (e) => {
            // dispatch(increment());
            console.log('change');
            console.log(e.target.files[0])

            dispatch(addFileForUpload(e.target.files[0]));


        }
    };
};

const Upload = connect(mapStateToProps, mapDispatchToProps)(UploadFiles);

export default Upload;