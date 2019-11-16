import React, {Fragment} from 'react'

import Upload from '../containers/uploadFiles'
import MovieEditForm from "../containers/addEditMoviesForm";

const NavBar = ({state}) => {
    const {showFileUploadForm, showAddEditMovieForm} = state;




    return (
        <Fragment>
            <p>nav bar</p>
            {console.log(state)}
            { showFileUploadForm ? <Upload/> : null }
            { showAddEditMovieForm ? <MovieEditForm/> : null}

        </Fragment>
    );
};

export default NavBar;