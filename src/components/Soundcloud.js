import React from "react";

export default class Soundcloud extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}




  render(){
const soundcloudcontainer={
	position:"absolute",
	top:"18vh",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
		right:this.props.offset,
		width:"50%",

}



	  return(
			<div style={soundcloudcontainer}>
  <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/127342241&amp;color=%239600bb&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
			</div>


	  );
  }
}