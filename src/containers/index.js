import React, {Fragment} from 'react'

import NavBar from './navBar';
import Movies from '../components/movies';


const Main = () => (
    <Fragment>
        <NavBar/>
        <Movies />
    </Fragment>
);

export default Main;