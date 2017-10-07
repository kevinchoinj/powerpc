import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Panelleft from './components/Panelleft';
import Panelright from './components/Panelright';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path={"/singles"} children={({ match }) => (
    		      <div>

            <Panelleft
                  offset={ Boolean(match) ? '0': '-100%'}/>
    		      </div>
    		    )}/>

            <Route path={"/soundcloud"} children={({ match }) => (
        <div>

          <Panelright
            offset={ Boolean(match) ? '0': '-100%'}/>
        </div>
      )}/>

      <Switch>
      <Route path="/" component={Home}/>
      </Switch>

      </div>
    );
  }
}

export default App;
