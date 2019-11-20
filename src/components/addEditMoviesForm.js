import React from 'react'

const AddEditMovie = () => {

    return (
        <form name="filmForm" id="filmForm">
            <input type="hidden" name="id" defaultValue="0"/>
            <div className="form-group">
                <label htmlFor="nameUa">Name Film ua:</label>
                <input type="text" className="form-control" name="nameUa" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="nameEn">Name Film en:</label>
                <input type="text" className="form-control" name="nameEn" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="sourseImg">Sourse Img:</label>
                <input type="text" className="form-control" name="sourseImg" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="sourseVideo">Sourse Video:</label>
                <input type="text" className="form-control" name="sourseVideo" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="qualityVideo">Quality Video:</label>
                <input type="text" className="form-control" name="qualityVideo" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="translation">Translation:</label>
                <input type="text" className="form-control" name="translation" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="motto">Motto:</label>
                <input type="text" className="form-control" name="motto" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="year">Year:</label>
                <input type="number" className="form-control" name="year" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" className="form-control" name="country" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="genre">Genre:</label>
                <input type="text" className="form-control" name="genre" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" className="form-control" name="category" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="producer">Producer:</label>
                <input type="text" className="form-control" name="producer" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="duration">Duration:</label>
                <input type="number" className="form-control" name="duration" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" className="form-control" name="age" required autoComplete="off"/>
            </div>

            <div className="form-group">
                <label htmlFor="firstRun">First run:</label>
                <input type="text" className="form-control" name="firstRun" required autoComplete="off"/>
            </div>

            {/*<div className="panel-body">*/}
            {/*    <button type="submit" className="resolve">Зберегти</button>*/}
            {/*    <a href="#" id="reset" className="reject">Очистити</a>*/}
            {/*</div>*/}
        </form>
    );
};

export default AddEditMovie;