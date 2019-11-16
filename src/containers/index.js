import React, {Fragment} from 'react'
import Upload from './uploadFiles'
import AddEditMovie from "./addEditMoviesForm";


const Main = () => (
    <Fragment>
        <Upload/>
        <AddEditMovie/>
    </Fragment>
);

export default Main;