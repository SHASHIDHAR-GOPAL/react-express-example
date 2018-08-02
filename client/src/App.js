import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.css';
import Links from './components/links';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Links/>
        </div>
    );
  }
}

export default App;
