import React from "react";
import {Link} from 'react-router-dom';
import albumimg from '../images/albums/2.jpg';

export default class Albumcoverright extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 opac:"0",
	 }

	}

componentDidMount(){
	    setTimeout(function() { this.setState({opac: "0px"}); }.bind(this), '450');
}



  render(){

const albumcover={
	position:"absolute",
	opacity:this.props.opac,
	right:"160px",
	top:"120px",
	width: "calc(50vw - 20vw)",

	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",

}


	  return(
			<img src={albumimg} style={albumcover}/>


	  );
  }
}
