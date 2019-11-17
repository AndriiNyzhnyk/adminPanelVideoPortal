import { connect } from 'react-redux'
import NavBar from '../components/navBar'

const mapStateToProps = ({fileUpload, addEditMovieForm}) => {
    return {
        fileUpload,
        addEditMovieForm
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => {
//             dispatch(increment());
//         }
//     };
// };

export default connect(mapStateToProps)(NavBar);