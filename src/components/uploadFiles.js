import React from 'react'

const UploadForm = ({onChangeHandler, sendFile}) => {
    return (
        <form className="fileUpload" method="POST"  enctype="multipart/form-data" > {/* action="" method="POST"  enctype="multipart/form-data" */}
            <h1>Upload File Here</h1>
            <input type="file" name="file" defaultValue="" onChange={onChangeHandler}/><br/><br/>
            <input type="submit" onSubmit={sendFile}/>
        </form>
    )
};

export default UploadForm;