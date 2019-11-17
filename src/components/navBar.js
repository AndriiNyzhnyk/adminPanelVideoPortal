import React, {Fragment} from 'react'

import Upload from '../containers/uploadFiles'
import MovieEditForm from "../containers/addEditMoviesForm";

const NavBar = ({fileUpload, addEditMovieForm, changeDisplayStatusFileUpload, changeDisplayStatusAddEditForm}) => {
    const textButtonFileUpload = fileUpload.show ? fileUpload.textWhenOpen : fileUpload.textWhenClose;
    const textButtonEditForm = addEditMovieForm.show ? addEditMovieForm.textWhenOpen : addEditMovieForm.textWhenClose;


    return (
        <Fragment>
            <p>nav bar</p>

            <form action="">
                <input type="button" value={textButtonFileUpload} onClick={changeDisplayStatusFileUpload}/>
                <input type="button" value={textButtonEditForm} onClick={changeDisplayStatusAddEditForm}/>
            </form>
            {console.log(fileUpload, addEditMovieForm)}

            { fileUpload.show ? <Upload/> : null }
            { addEditMovieForm.show ? <MovieEditForm/> : null}

        </Fragment>
    );
};

export default NavBar;