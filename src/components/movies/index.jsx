import React, { useState, useEffect } from 'react';
import { movies } from '../../services/apiService';

import MoviesTable from './MoviesTable';

export default function Movies() {
  const [items, setItems] = useState({ data: [], total: 0 });
  const [options, setOptions] = useState({});
  const [search, setSearch] = useState(null);
  console.log('>> options', options);
  useEffect(() => {
    console.log('>> options 2', options);
    movies.getAll({ ...options, search }).then(json => setItems(json));
  }, [options, search]);
  return (
    <main className="container">
      <h1>Movies</h1>
      <MoviesTable items={items} setOptions={setOptions} setSearch={setSearch} />
    </main>
  );
}
