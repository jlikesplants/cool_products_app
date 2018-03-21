import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cool Products</h1>
        </header>
        <Table />
      </div>
    );
  }
}

export default App;
