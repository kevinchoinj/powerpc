import React from "react";
import {Link} from 'react-router-dom';

import Socials from './Socials';

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
	backgroundColor:"#ddd",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	zIndex:"2",

}


	  return(
			<div style={panelstyle}>
			<Socials/>
			</div>


	  );
  }
}
