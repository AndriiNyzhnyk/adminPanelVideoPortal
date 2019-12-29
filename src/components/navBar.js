import React, {Fragment} from 'react'

import MovieUpload from '../containers/movieUpload'
import MovieEditForm from "../containers/addEditMoviesForm";
import ImageUpload from "../containers/imageUpload";

const NavBar = ({
                    movieUpload,
                    imageUpload,
                    addEditMovieForm,
                    changeDisplayStatusMovieUpload,
                    changeDisplayStatusImageUpload,
                    changeDisplayStatusAddEditForm
                }) => {
    const textButtonMovieUpload = movieUpload.show ? movieUpload.textWhenOpen : movieUpload.textWhenClose;
    const textButtonImageUpload = imageUpload.show ? imageUpload.textWhenOpen : imageUpload.textWhenClose;
    const textButtonEditForm = addEditMovieForm.show ? addEditMovieForm.textWhenOpen : addEditMovieForm.textWhenClose;



    return (
        <Fragment>
            <p>nav bar</p>

            <form action="">
                <input type="button" value={textButtonMovieUpload} onClick={changeDisplayStatusMovieUpload}/>
                <input type="button" value={textButtonImageUpload} onClick={changeDisplayStatusImageUpload}/>
                <input type="button" value={textButtonEditForm} onClick={changeDisplayStatusAddEditForm}/>
            </form>
            {console.log(movieUpload, addEditMovieForm)}

            { movieUpload.show ? <MovieUpload/> : null }
            { imageUpload.show ? <ImageUpload/> : null }
            { addEditMovieForm.show ? <MovieEditForm/> : null}

        </Fragment>
    );
};

export default NavBar;