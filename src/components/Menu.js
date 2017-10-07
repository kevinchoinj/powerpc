import React from "react";
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

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
	position:"fixed",
	width:"100vw",
	height:"75px",
	top:"0px",
	backgroundColor:"#fff",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	zIndex:"4",

}

const option={
	textAlign:"center",
}


	  return(
			<div style={panelstyle}>
			<Row>
				<Col md={4} style={option}>
				<Link to='Singles'>Singles</Link>
				</Col>
				<Col md={4} style={option}>
				<Link to='/'>Home</Link>
				</Col>
				<Col md={4} style={option}>
				<Link to='/soundcloud'>Soundcloud</Link>
				</Col>
			</Row>
			</div>


	  );
  }
}
