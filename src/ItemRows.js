import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardMedia, CardContent} from '@material-ui/core';
import { Grid } from '@material-ui/core'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import history from './index'




const rowStyle = {
  color: "white", 
  backgroundColor: "#262626", 



}





const itemRows = (props) => {

  return (
<TableContainer component={Paper}>
    <Table>
      <TableHead >
        <TableRow >
          <TableCell style={rowStyle} >First Name</TableCell>
          <TableCell align="left" style={rowStyle}>Calories</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.message.map((props) => (
          <TableRow key={props.id} onClick={() => history.push('/${id}')}>
            <TableCell component="th" scope="row" style={rowStyle}>
              {props.first_name}
            </TableCell>
            <TableCell align="left" style={rowStyle}>{props.last_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> 



)
};

export default itemRows;





