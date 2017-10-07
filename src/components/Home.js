import React from "react";
import {Link, Route} from 'react-router-dom';

import Albumcoverleft from './Albumcoverleft';
import Albumcoverright from './Albumcoverright';

import Socials from './Socials';
import Full from '../splitter/Full';
export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}


myFunction(){

}



  render(){

const panelstyle={
	position:"absolute",
	width:"100vw",
	top:"50px",
	height:"calc(100vh - 50px)",
	backgroundColor:"#f5f5f5",
	zIndex:"2",

}


	  return(
			<div style={panelstyle}>

			<Route exact path={"/"} children={({ match }) => (
		<div>



			<Full
				topOffset={ Boolean(match) ? '0' : '-100vh' }
				rightOffset={ Boolean(match) ? '0': '-100vw'}
			/>



		</div>
	)}/>

			<Socials/>
			</div>


	  );
  }
}
