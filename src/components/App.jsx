import React from 'react';
import apiKey from '../../.env';
import Portfolio from './Portfolio';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Images from './Images';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Portfolio}/>
        <Route path="/images" component={Images}/>
        <Images/>
      </Switch>
    </div>
  );
}

export default App;
