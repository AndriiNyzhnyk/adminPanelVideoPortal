import React from 'react'

const ImageUploadForm = ({onChangeHandler, sendFile}) => {
    return (
        <form className="fileUpload" > {/* action="" method="POST"  enctype="multipart/form-data" */}
            <h1>Upload Image Here</h1>
            <input type="file" name="image" defaultValue="" onChange={onChangeHandler}/><br/><br/>
            <input type="button" onClick={ sendFile } value="Send"/>
        </form>
    );
};

export default ImageUploadForm;