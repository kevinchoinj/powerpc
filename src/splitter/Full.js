import React from 'react';

import Left from './Left';
import Right from './Right';


import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

export default class Full extends React.Component {
	constructor(props) {
 super(props);
 this.state = {
	 leftmargbot: "0px",
	 rightmargbot:"0px",
	 transtime: ".4s ease-in-out",
 }
 		this.hoverleft = this.hoverleft.bind(this)
		this.hoverright= this.hoverright.bind(this)
		this.stopleft = this.stopleft.bind(this)
		this.stopright=this.stopright.bind(this)

		this._handleWindowResize = this._handleWindowResize.bind(this);
}

hoverleft(){
	this.setState({
		rightmargbot:"-50px"

	});
}
stopleft(){
	this.setState({
		rightmargbot: "0px"

	});
}

hoverright(){
	this.setState({
		leftmargbot:"-50px"
	});
}
stopright(){
	this.setState({
		leftmargbot:"0px"
	});
}

/*no animation time while window is resizing, then .1 seconds after resize trigger, animation time returns to normal*/
 componentDidMount () {
	window.addEventListener('resize', this._handleWindowResize);
	setTimeout(function() { this.setState({topcontleft: "0px", topcontright: "0px"}); }.bind(this), 100);


}
_handleWindowResize () {
		 this.setState({
 			transtime: "0s",
 		});
 		setTimeout(function() { this.setState({transtime: ".4s ease-in-out"}); }.bind(this), 100);
}


	render(){
		const full={
			height:"calc(100% - 160px)",
			width: "calc(100% - 160px)",
			left:"80px",
			top:"50px",
			position:"absolute",
		}
		const tablet={
			height:"calc(100% - 70px)",
			width: "calc(100% - 70px)",
			left:"35px",
			top:"35px",
			position:"absolute",
		}
		const inner={
			display:this.state.displayeither,
		}


		return(
			<div>
			<DesktopBreakpoint>
			<div style={full}>
				<div style={inner}>
					<Left
						margbot={this.state.rightmargbot}
						hoverleft={this.hoverleft}
						stopleft={this.stopleft}
						transtime={this.state.transtime}

						topOffset={this.props.topOffset}
						fromleft="-80px"
					/>
					<Right
						margbot={this.state.leftmargbot}
						hoverright={this.hoverright}
						stopright={this.stopright}
						transtime={this.state.transtime}

						rightOffset={this.props.rightOffset}
						fromright="-80px"
					/>
				</div>
			</div>
			</DesktopBreakpoint>

			<TabletBreakpoint>
			<div style={tablet}>
				<div style={inner}>
					<Left
						margbot={this.state.rightmargbot}
						hoverleft={this.hoverleft}
						stopleft={this.stopleft}
						transtime={this.state.transtime}
						fromleft="-35px"

						topOffset={this.props.topOffset}
					/>
					<Right
						margbot={this.state.leftmargbot}
						hoverright={this.hoverright}
						stopright={this.stopright}
						transtime={this.state.transtime}
						fromright="-35px"

						rightOffset={this.props.rightOffset}
					/>
				</div>
			</div>
			</TabletBreakpoint>

			<PhoneBreakpoint>
			<div style={tablet}>
				<div style={inner}>
					<Left
						margbot={this.state.rightmargbot}
						hoverleft={this.hoverleft}
						stopleft={this.stopleft}
						transtime={this.state.transtime}
						fromleft="-35px"

						topOffset={this.props.topOffset}
					/>
					<Right
						margbot={this.state.leftmargbot}
						hoverright={this.hoverright}
						stopright={this.stopright}
						transtime={this.state.transtime}
						fromright="-35px"

						rightOffset={this.props.rightOffset}
					/>
				</div>
			</div>
			</PhoneBreakpoint>
			</div>

		);





	}
}
