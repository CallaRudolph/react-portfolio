import React from 'react';
import apiKey from '../../.env';
import Portfolio from './Portfolio';

function App(props) {
  return (
    <div className="container">
      <h2>GitHub Portfolio</h2>
      <Portfolio/>
    </div>
  );
}

export default App;
