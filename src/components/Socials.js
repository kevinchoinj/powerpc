import React from "react";
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import Socialicon from './Socialicon';

import fbicon from '../images/facebook.png';
import inicon from '../images/instagram.png';
import scicon from '../images/soundcloud.png';
import twicon from '../images/twitter.png';

export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}


myFunction(){

}



  render(){

const socials={
	position:"absolute",
	bottom:"25px",
	left:"0",
	right:"0",
	marginLeft:"auto",
	marginRight:"auto",
	width:"180px",

}



	  return(
			<div style={socials}>
				<a href="https://www.facebook.com/powerpcme">
				<Socialicon iconprop={fbicon}/>
				</a>
				<a href="https://www.instagram.com/powerpcme/">
				<Socialicon iconprop={inicon}/>
				</a>
				<a href="https://twitter.com/PowerPCME">
				<Socialicon iconprop={scicon}/>
				</a>
				<a href="https://soundcloud.com/PowerPCME">
				<Socialicon iconprop={twicon}/>
				</a>
			</div>


	  );
  }
}
