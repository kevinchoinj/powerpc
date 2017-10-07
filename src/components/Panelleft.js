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
	left:this.props.offset,
	backgroundColor:"#141415",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	zIndex:"3",

}


	  return(
			<div style={panelstyle}>
			</div>


	  );
  }
}
