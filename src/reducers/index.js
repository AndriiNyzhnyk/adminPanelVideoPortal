const myState = Object.create(null);

myState.fileUpload = {
    show: false,
    textWhenOpen: 'Close Upload form',
    textWhenClose: 'Open Upload form',
    selectedFile: null
};

myState.addEditMovieForm = {
    show: false,
    textWhenOpen: 'Close form',
    textWhenClose: 'Open form',
    values: {
        nameUa: 'Test test',
        nameEn: '',
        sourceImg: '',
        sourceVideo: '',
        qualityVideo: '',
        translation: '',
        motto: '',
        year: '',
        country: '',
        genre: '',
        category: '',
        producer: '',
        duration: '',
        age: '',
        firstRun: ''
    }
};

function reducer(state = myState, action) {
    switch (action.type) {
        case 'changeDisplayStatusFileUpload': {
            const fileUpload = {...state.fileUpload};
            fileUpload.show = !fileUpload.show;

            return {...state, fileUpload};
        }

        case 'changeDisplayStatusAddEditForm': {
            const addEditMovieForm = {...state.addEditMovieForm};
            addEditMovieForm.show = !addEditMovieForm.show;

            return {...state, addEditMovieForm};
        }

        case 'addFileForUpload': {
            const {file} = action;
            const prevState = {...state.fileUpload};
            prevState.selectedFile = file;

            console.log('prevState', prevState);

            return {...state, fileUpload: prevState};
        }

        case 'sendFileToServer': {
            const data = new FormData();
            data.append('file', state.fileUpload.selectedFile);
            console.log(data);

            fetch('/upload/movie', {
                method: 'POST',
                body: data
            }).then((data) => {
                console.log(data);
                return state;
            }).catch(console.error);

            return state;
            // break;
        }


        case 'saveNewMovie': {
            console.log('save reducer');
            return state;
        }

        case 'clearAllFieldsAddEditForm': {
            console.log('clear reducer');
            return state;
        }

        case 'changeFieldsAddEditForm': {
            console.log('edit field');
            const {name, value} = action.data;
            const res = Object.create(null);
            res[`${name}`] = value;

            const newValues = Object.assign({}, state.addEditMovieForm.values, res);
            const addEditMovieForm = Object.assign({}, state.addEditMovieForm);
            addEditMovieForm.values = newValues;


            return {...state, addEditMovieForm};
        }

        default: {
            return state
        }

    }
}

export default reducer;