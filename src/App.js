import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Soundcloud from './components/Soundcloud';
import Singles from './components/Singles';

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
    const wrapper={
      height:"100vh",
      width:"100vw",
      overflow:"hidden",
    }
    return (
      <div style={wrapper} className="App">

      <Menu/>


      <Home/>



        <Route path={"/soundcloud"} children={({ match }) => (


                  <Soundcloud opac={ Boolean(match) ? '1' : '0' }/>

          )}/>



      <Switch>
      </Switch>

      </div>
    );
  }
}

export default App;
