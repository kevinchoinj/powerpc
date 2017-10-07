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
	top:"50px",
	height:"calc(100vh - 50px)",
	right:this.props.offset,
		backgroundColor:"#000",
	WebkitTransition: this.props.transtime,
	MozTransition: this.props.transtime,
	OTransition: this.props.transtime,
	transition:this.props.transtime,
	zIndex:"3",

}


	  return(
			<div style={panelstyle}>
			</div>


	  );
  }
}
