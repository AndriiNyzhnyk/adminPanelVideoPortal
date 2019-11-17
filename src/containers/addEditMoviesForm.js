import { connect } from 'react-redux'
import AddEditMovie from '../components/addEditMoviesForm'

const mapStateToProps = () => {
    return {};
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => {
//             dispatch(increment());
//         }
//     };
// };

export default connect(mapStateToProps)(AddEditMovie);