import React from "react";
import {Link} from 'react-router-dom';

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
	height:"100vh",
	backgroundColor:"#ddd",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	zIndex:"2",

}


	  return(
			<div style={panelstyle}>
				<Link to='/singles'>Singles</Link><br/>
				<Link to='/soundcloud'>Soundcloud</Link>
			</div>


	  );
  }
}
