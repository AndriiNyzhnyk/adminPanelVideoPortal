import React from 'react';

const startYear = 2000;
const endYear = new Date().getFullYear();

const years = [];
for(let i = startYear; i <= endYear; ++i) {
    years.push(i);
}

const AddEditMovie = ({values, saveData, clearFields, changeValueField}) => {

    return (
        <form name="filmForm" id="filmForm">
            <input type="hidden" name="id" defaultValue="0"/>
            <div className="form-group">
                <label htmlFor="nameUa">Name Film ua:</label>
                <input type="text"
                       className="form-control"
                       name="nameUa"
                       value={values['nameUa']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="nameEn">Name Film en:</label>
                <input type="text"
                       className="form-control"
                       name="nameEn"
                       value={values['nameEn']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="sourceImg">Source Img:</label>
                <input type="text"
                       className="form-control"
                       name="sourceImg"
                       value={values['sourceImg']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="sourceVideo">Source Video:</label>
                <input type="text"
                       className="form-control"
                       name="sourceVideo"
                       value={values['sourceVideo']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="qualityVideo">Quality Video:</label>
                <select
                    onChange={changeValueField}
                    name="qualityVideo"
                    className="form-control"
                    value={values['qualityVideo']}
                    required >
                    <option value="144">144p</option>
                    <option value="240">240p</option>
                    <option value="360">360p</option>
                    <option value="480">480p</option>
                    <option value="720">720p</option>
                    <option value="1080">1080p</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="translation">Translation:</label>
                <input type="text"
                       className="form-control"
                       name="translation"
                       value={values['translation']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="motto">Motto:</label>
                <input type="text"
                       className="form-control"
                       name="motto"
                       value={values['motto']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="year">Year:</label>
                <select
                    className="form-control"
                    name="year"
                    value={values['year']}
                    onChange={changeValueField}
                    required >
                    {
                        years.map((year) => {
                            return (<option value={year}>{year}</option>);
                        })
                    }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text"
                       className="form-control"
                       name="country"
                       value={values['country']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="genres">Genres:</label>
                <input type="text"
                       className="form-control"
                       name="genres"
                       value={values['genres']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="artists">Artists:</label>
                <input type="text"
                       className="form-control"
                       name="artists"
                       value={values['artists']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="producer">Producer:</label>
                <input type="text"
                       className="form-control"
                       name="producer"
                       value={values['producer']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="duration">Duration:</label>
                <input type="number"
                       className="form-control"
                       name="duration"
                       value={values['duration']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <select
                    onChange={changeValueField}
                    name="age"
                    className="form-control"
                    value={values['age']}
                    required >
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="21">21</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="firstRun">First run:</label>
                <input type="text"
                       className="form-control"
                       name="firstRun"
                       value={values['firstRun']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text"
                       className="form-control"
                       name="description"
                       value={values['description']}
                       onChange={changeValueField}
                       required
                       autoComplete="off"
                />
            </div>

            <div className="panel-body">
                <button type="button" className="resolve" onClick={saveData}>Save</button>
                <button type="button" className="reject" onClick={clearFields}>reject</button>
            </div>
        </form>
    );
};

export default AddEditMovie;