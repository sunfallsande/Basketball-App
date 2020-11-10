import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardMedia, CardContent} from '@material-ui/core';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ItemRows from './ItemRows'
import Player from './Player'
import { Route, Switch} from "react-router";

function App() {


  const [listItems, setListItems] = React.useState([]);
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
    .then(response => response.json()) 
    .then(responseData => {
      console.log(responseData);
      setListItems(responseData.data);
    });
  }, [])

 



  return (
    <div className="App" >  

        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
          Learn React
  <Switch>
  <Route exact path="/" render = {() => <ItemRows message={listItems} /> } />
  <Route exact path="/:id" render={(props) => <Player {...props} />} />
  </Switch>



    </div>
  );
}

export default App;
