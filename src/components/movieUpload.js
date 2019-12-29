import React from 'react'

const UploadForm = ({onChangeHandler, sendFile}) => {
    return (
        <form className="fileUpload" > {/* action="" method="POST"  enctype="multipart/form-data" */}
            <h1>Upload Movie Here</h1>
            <input type="file" name="file" defaultValue="" onChange={onChangeHandler}/><br/><br/>
            <input type="button" onClick={ sendFile } value="Send"/>
        </form>
    )
};

export default UploadForm;