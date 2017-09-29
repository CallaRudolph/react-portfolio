import React from 'react';
import apiKey from '../../.env';
import Entry from './Entry';

function App(props) {
  console.log(apiKey);
  return (
    <div className="container">
      <h2>Calla Rudolph's Portfolio</h2>
      <Entry/>
    </div>
  );
}

export default App;
