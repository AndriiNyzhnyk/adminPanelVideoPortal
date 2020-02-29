const myState = Object.create(null);

myState.movieUpload = {
    show: false,
    textWhenOpen: 'Close Upload movie form',
    textWhenClose: 'Open Upload movie form',
    selectedFile: null
};

myState.imageUpload = {
    show: false,
    textWhenOpen: 'Close Upload image form',
    textWhenClose: 'Open Upload image form',
    selectedFile: null
};

myState.addEditMovieForm = {
    show: false,
    textWhenOpen: 'Close form',
    textWhenClose: 'Open form',
    values: {
        nameUa: '',
        nameEn: '',
        sourceImg: '',
        sourceVideo: '',
        qualityVideo: 144, // default value 144p
        translation: '',
        motto: '',
        year: 2000 , // default value 2000
        country: '',
        genre: '',
        producer: '',
        duration: '',
        age: 12, // default value 12
        firstRun: ''
    }
};

function reducer(state = myState, action) {
    switch (action.type) {
        case 'changeDisplayStatusMovieUpload': {
            const movieUpload = {...state.movieUpload};
            movieUpload.show = !movieUpload.show;

            return {...state, movieUpload};
        }

        case 'changeDisplayStatusImageUpload': {
            const imageUpload = {...state.imageUpload};
            imageUpload.show = !imageUpload.show;

            return {...state, imageUpload};
        }

        case 'changeDisplayStatusAddEditForm': {
            const addEditMovieForm = {...state.addEditMovieForm};
            addEditMovieForm.show = !addEditMovieForm.show;

            return {...state, addEditMovieForm};
        }

        case 'addMovieForUpload': {
            const { file } = action;
            const prevState = {...state.fileUpload};
            prevState.selectedFile = file;

            console.log('prevState', prevState);

            return {...state, fileUpload: prevState};
        }

        case 'sendMovieToServer': {
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

        case 'addImageForUpload': {
            const {file} = action;
            const prevState = {...state.imageUpload};
            prevState.selectedFile = file;

            console.log('prevState', prevState);

            return {...state, fileUpload: prevState};
        }

        case 'sendImageToServer': {
            const data = new FormData();
            data.append('file', state.imageUpload.selectedFile);
            console.log(data);

            fetch('/upload/image', {
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

            fetch('/new-movie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(state.addEditMovieForm.values)
            }).then((data) => {
                console.log(data);
                return state;
            }).catch(console.error);

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