export const changeDisplayStatusMovieUpload = () => {
    return {
        type: 'changeDisplayStatusMovieUpload'
    };
};

export const changeDisplayStatusAddEditForm = () => {
    return {
        type: 'changeDisplayStatusAddEditForm'
    };
};

export const addMovieForUpload = (file) => {
    return {
        type: 'addMovieForUpload',
        file
    };
};

export const sendFileToServer = (event) => {
    return {
        type: 'sendFileToServer',
        event
    };
};

export const saveNewMovie = () => {
    return {
        type: 'saveNewMovie'
    };
};

export const clearAllFieldsAddEditForm = () => {
    return {
        type: 'clearAllFieldsAddEditForm'
    };
};

export const changeFieldsAddEditForm = (data) => {
    return {
        type: 'changeFieldsAddEditForm',
        data
    };
};