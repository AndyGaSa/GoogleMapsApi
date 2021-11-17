/* eslint-disable react/function-component-definition */
import React from 'react';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <h1 data-testid="Title">Google Maps API</h1>
      <h3>by Andy Garcia</h3>
      <Map />
    </div>
  );
}

export default App;
