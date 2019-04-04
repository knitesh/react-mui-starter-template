import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SimpleTable from './components/SimpleTable';
import Products from './components/Products';
import CssBaseline from '@material-ui/core/CssBaseline';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <Navbar />
          <Route exact path="/" component={Products} />
          <Route exact path="/reports" component={SimpleTable} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
