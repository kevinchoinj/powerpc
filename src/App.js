import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Panelleft from './components/Panelleft';
import Panelright from './components/Panelright';
import Home from './components/Home';


import Menu from './components/Menu';
class App extends Component {

  constructor(props) {
 super(props);
 this.state = {
   transtime: ".4s ease-in-out",
 }
 		this._handleWindowResize = this._handleWindowResize.bind(this);
}

  componentDidMount () {
   window.addEventListener('resize', this._handleWindowResize);
   setTimeout(function() { this.setState({topcontleft: "0px", topcontright: "0px"}); }.bind(this), 100);


 }
 _handleWindowResize () {
      this.setState({
       transtime: "0s",
     });
     setTimeout(function() { this.setState({transtime: ".4s ease-in-out"}); }.bind(this), 100);
 }


  render() {
    return (
      <div className="App">

      <Menu/>




      <Route path={"/singles"} children={({ match }) => (
    		      <div>

            <Panelleft
                  offset={ Boolean(match) ? '0': '-100%'}
                  transtime={this.state.transtime}
                  />

    		      </div>
    		)}/>

            <Route path={"/soundcloud"} children={({ match }) => (
        <div>

          <Panelright
            offset={ Boolean(match) ? '0': '-100%'}
            transtime={this.state.transtime}
            />
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
