const myState = Object.create(null);

myState.fileUpload = {
    show: true,
    textWhenOpen: 'Close Upload form',
    textWhenClose: 'Open Upload form'
};

myState.addEditMovieForm = {
    show: true,
    textWhenOpen: 'Close form',
    textWhenClose: 'Open form'
};

function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':
            console.log('test');

            return state;


        default:
            return state
    }
}

export default reducer;