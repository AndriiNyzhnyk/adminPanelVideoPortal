import React, {Fragment} from 'react'

import MovieUpload from '../containers/movieUpload'
import MovieEditForm from "../containers/addEditMoviesForm";

const NavBar = ({movieUpload, addEditMovieForm, changeDisplayStatusUploadMovie, changeDisplayStatusAddEditForm}) => {
    const textButtonFileUpload = movieUpload.show ? movieUpload.textWhenOpen : movieUpload.textWhenClose;
    const textButtonEditForm = addEditMovieForm.show ? addEditMovieForm.textWhenOpen : addEditMovieForm.textWhenClose;


    return (
        <Fragment>
            <p>nav bar</p>

            <form action="">
                <input type="button" value={textButtonFileUpload} onClick={changeDisplayStatusUploadMovie}/>
                <input type="button" value={textButtonEditForm} onClick={changeDisplayStatusAddEditForm}/>
            </form>
            {console.log(movieUpload, addEditMovieForm)}

            { movieUpload.show ? <MovieUpload/> : null }
            { addEditMovieForm.show ? <MovieEditForm/> : null}

        </Fragment>
    );
};

export default NavBar;