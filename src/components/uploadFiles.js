import React from 'react'

const UploadForm = ({onChangeHandler}) => {
    return (
        <form className="fileUpload" action="/upload/movie" method="post" encType="multipart/form-data">
            <h1>Upload File Here</h1>
            <input type="file" name="file" defaultValue="" onChange={onChangeHandler}/><br/><br/>
            <input type="submit" />
        </form>
    )
};

export default UploadForm;