import React, { Component } from 'react';
import Cars from './components/Cars';
import TrafficSignal from './components/TrafficSignal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    );
  }
}

export default App;
