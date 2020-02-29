import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import MoviesTableToolbar from './MoviesTableToolbar';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

/* eslint-disable no-unused-vars */
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'thumbnail', numeric: false, disablePadding: false, label: 'Cover' },
  { id: 'nameEn', numeric: false, disablePadding: false, label: 'NameEN' },
  { id: 'nameUa', numeric: false, disablePadding: false, label: 'NameUA' },
  { id: 'producer', numeric: true, disablePadding: false, label: 'Producer' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
  { id: 'artist', numeric: false, disablePadding: false, label: 'Artist' },
  { id: 'views', numeric: false, disablePadding: false, label: 'Views' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  cover: {
    height: 100,
    maxWidth: 100,
    '& img': {
      height: 100,
      maxWidth: 100,
      verticalAlign: 'bottom',
    },
  },
}));

export default function MoviesTable({ items, setOptions, setSearch }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    const newOrder = isDesc ? 'asc' : 'desc';
    setOrder(newOrder);
    setOrderBy(property);
    setOptions({ start: 0, limit: rowsPerPage, sort: `${property}:${newOrder}` });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setOptions({ start: newPage * rowsPerPage, limit: rowsPerPage, sort: `${orderBy}:${order}` });
  };

  const handleChangeRowsPerPage = (event) => {
    const rowsCount = parseInt(event.target.value, 10);
    setRowsPerPage(rowsCount);
    setPage(0);
    setOptions({ start: 0, limit: rowsCount, sort: `${orderBy}:${order}` });
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, items.total - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MoviesTableToolbar setSearch={setSearch} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {items.data // stableSort(items.data, getSorting(order, orderBy))
                .map(row => (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                  >
                    <TableCell scope="row" padding="none">
                      <div className={classes.cover}>
                        <img src={`movie/static/images/${row.sourceImg}`} alt="cover" />
                      </div>
                    </TableCell>
                    <TableCell scope="row">{row.nameEn}</TableCell>
                    <TableCell scope="row">{row.nameUa}</TableCell>
                    <TableCell>{row.producer}</TableCell>
                    <TableCell>{row.year}</TableCell>

                    <TableCell>{row.artist}</TableCell>
                    <TableCell>{row.views}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: (100) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={items.total}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
