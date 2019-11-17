import React, {Fragment} from 'react'

import Upload from '../containers/uploadFiles'
import MovieEditForm from "../containers/addEditMoviesForm";

const NavBar = ({fileUpload, addEditMovieForm}) => {


    return (
        <Fragment>
            <p>nav bar</p>
            {console.log(fileUpload, addEditMovieForm)}

            { fileUpload.show ? <Upload/> : null }
            { addEditMovieForm.show ? <MovieEditForm/> : null}

        </Fragment>
    );
};

export default NavBar;