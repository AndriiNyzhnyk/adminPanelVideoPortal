import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';
import { makeStyles } from '@material-ui/core/styles';
import { Input, InputAdornment, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  input: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '3px 10px',
    borderRadius: 4,
    flex: 1,
  },
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  adornment: {
    pointerEvents: 'none',
  },
}));

let searchTerm = '';

export default function MoviesTableToolbar({ setSearch }) {
  const classes = useStyles();

  const setSearchValue = (value) => {
    if (searchTerm !== value.trim()) {
      setSearch(searchTerm = value.trim());
    }
  };
  const debouncedSearch = debounce(setSearchValue, 500);
  const handleInputChange = useCallback(({ target }) => {
    debouncedSearch(target.value);
    // eslint-disable-next-line
  }, []);

  return (
    <Toolbar className={classes.toolbar}>
      <Input
        placeholder="Search..."
        className={classes.input}
        inputProps={{
          'aria-label': 'search',
        }}
        onChange={handleInputChange}
        disableUnderline
        startAdornment={
          <InputAdornment position="start" className={classes.adornment}>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Toolbar>
  );
}
