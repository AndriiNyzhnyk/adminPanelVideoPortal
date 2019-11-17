export const changeDisplayStatusFileUpload = () => {
    return {
        type: 'changeDisplayStatusFileUpload'
    }
};

export const changeDisplayStatusAddEditForm = () => {
    return {
        type: 'changeDisplayStatusAddEditForm'
    }
};

export const addFileForUpload = (file) => {
    return {
        type: 'addFileForUpload',
        file
    }
};

export const sendFileToServer = (event) => {
    return {
        type: 'sendFileToServer',
        event
    }
};