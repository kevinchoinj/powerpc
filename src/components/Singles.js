import React from "react";
import {Row, Col} from 'react-bootstrap';

import img1 from '../images/singles/1.png';
import img2 from '../images/singles/2.jpg';
import img3 from '../images/singles/3.jpg';

export default class Singles extends React.Component{




  render(){

const singlescontainer={
	top:"18vh",
	height:"100vh",
	width:"100vw",
	position:"absolute",
	right:this.props.offset,
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}

const singleimage={
	width:"100%",
	border:"1px solid #000"
}


	  return(
			<div style={singlescontainer}>
			<Col md={10} mdOffset={1}>
				<Row>

				<Col md={3}>
				<img src={img1} style={singleimage}/>
				</Col>
				<Col md={3} mdOffset={1}>
				<img src={img2} style={singleimage}/>
				</Col>
				<Col md={3} mdOffset={1}>
				<img src={img3} style={singleimage}/></Col>

				</Row>
				</Col>
			</div>


	  );
  }
}
