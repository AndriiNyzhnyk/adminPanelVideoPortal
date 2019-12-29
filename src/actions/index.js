export const changeDisplayStatusMovieUpload = () => {
    return {
        type: 'changeDisplayStatusMovieUpload'
    };
};

export const changeDisplayStatusImageUpload = () => {
    return {
        type: 'changeDisplayStatusImageUpload'
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

export const addImageForUpload = (file) => {
    return {
        type: 'addImageForUpload',
        file
    };
};

export const sendImageToServer = (event) => {
    return {
        type: 'sendImageToServer',
        event
    };
};

export const sendMovieToServer = (event) => {
    return {
        type: 'sendMovieToServer',
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