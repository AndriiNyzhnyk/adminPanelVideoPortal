import { connect } from 'react-redux'
import UploadFiles from '../components/uploadFiles'

const mapStateToProps = (state) => {
    return {
        welcome: 'Hello world and React'
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => {
//             dispatch(increment());
//         }
//     };
// };

const Upload = connect(mapStateToProps)(UploadFiles);

export default Upload;