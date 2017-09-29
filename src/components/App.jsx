import React from 'react';
import apiKey from '../../.env';
import Portfolio from './Portfolio';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Images from './Images';
import Background from './../images/background.jpg';

function App(props) {
  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    position: "fixed",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    fontFamily: "'Josefin Sans', sans-serif"
  }
  return (
    <div style={backgroundStyle} className="container">
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
