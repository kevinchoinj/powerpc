import React from "react";
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';


export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 opac:".5"
	 }
	 this.hovericon = this.hovericon.bind(this)
	 this.leaveicon = this.leaveicon.bind(this)
	}


hovericon(){
	this.setState({
		opac:"1"
	})
}
leaveicon(){
	this.setState({
		opac:".5"
	})
}


  render(){

const socialicon={
	height:"25px",
	width:"25px",
	marginLeft:"10px",
	marginRight:"10px",
	opacity:this.state.opac,

}



	  return(
			<img src={this.props.iconprop} style={socialicon} onMouseEnter={this.hovericon} onMouseLeave={this.leaveicon}/>



	  );
  }
}
