const myState = Object.create(null);
myState.welcome = 'HI';
myState.showFileUploadForm = true;
myState.showAddEditMovieForm = true;

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