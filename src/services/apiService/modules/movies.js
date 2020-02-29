import * as movie from '../models/movie';
import makeRequest from '../makeRequest';

export const get = id => makeRequest({
  url: `users/${id}`,
}).then(json => movie.parse(json.data));

export const getAll = ({ start = 0, limit = 10, search, sort } = {}) => makeRequest({
  url: '',
  params: { search, start, limit, sort },
}).then(json => ({
  data: json.data.map(movie.parse),
  total: json.total,
}));
