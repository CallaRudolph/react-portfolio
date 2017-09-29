import React from 'react';
import apiKey from '../../.env';
import Portfolio from './Portfolio';

function App(props) {
  console.log(apiKey);
  return (
    <div className="container">
      <h2>Calla Rudolph's Portfolio</h2>
      <Portfolio/>
    </div>
  );
}

export default App;
