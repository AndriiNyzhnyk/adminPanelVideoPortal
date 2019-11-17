const myState = Object.create(null);

myState.fileUpload = {
    show: false,
    textWhenOpen: 'Close Upload form',
    textWhenClose: 'Open Upload form'
};

myState.addEditMovieForm = {
    show: false,
    textWhenOpen: 'Close form',
    textWhenClose: 'Open form'
};

function reducer(state = myState, action) {
    switch (action.type) {
        case 'changeDisplayStatusFileUpload':
            const fileUpload = {...state.fileUpload};
            fileUpload.show = !fileUpload.show;

            return {...state, fileUpload};


        case 'changeDisplayStatusAddEditForm':
            const addEditMovieForm = {...state.addEditMovieForm};
            addEditMovieForm.show = !addEditMovieForm.show;

            return {...state, addEditMovieForm};


        default:
            return state
    }
}

export default reducer;