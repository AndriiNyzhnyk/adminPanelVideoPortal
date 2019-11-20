import React from 'react'

const UploadForm = ({onChangeHandler, sendFile}) => {
    return (
        <form className="fileUpload" > {/* action="" method="POST"  enctype="multipart/form-data" */}
            <h1>Upload File Here</h1>
            <input type="file" name="file" defaultValue="" onChange={onChangeHandler}/><br/><br/>
            <input type="button" onClick={sendFile}/>
        </form>
    )
};

export default UploadForm;