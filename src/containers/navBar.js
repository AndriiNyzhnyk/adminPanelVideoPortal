import { connect } from 'react-redux'
import NavBar from '../components/navBar'

const mapStateToProps = (state) => {
    return {
        state
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