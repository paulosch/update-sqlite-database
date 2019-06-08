import React, { Component } from 'react';
import sqlite from 'sqlite-sync'; 

import updateaValues from './updateValues.json';
import './App.css';

class App extends Component {

  constructor(){
    super();
    sqlite.connect('gps.2.0.sqlite');
  }
  componentDidMount(){
    const rows = sqlite.run("SELECT * FROM tbl_anunciante");
    conosole.log(rows);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>testes</h1>
        </header>
      </div>
    );
  }
}

export default App;
