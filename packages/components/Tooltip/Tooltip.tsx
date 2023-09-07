import React, { Component, Fragment } from 'react';
import  "./Tooltip.scss";


import GetContext from "../GetContext";

class Tooltip extends Component {

	render(){

		const { primaryColor, primaryTextColor } = this.props.context;

		const tooltipStyle = this.props.dark ? "tooltiptextDark" : "";

		// Manage the position.
		let position = "";
		if(this.props.position === "bottom"){
			position = "bottomTooltip";
		}


		return (
			<div className="tooltipWrapper">
			  { this.props.children }
				<div
					// style={{ transitionDelay: ".25s" }}
					className={ ` tooltip   ${ position }` }>
				  <span className={ `  tooltiptext   ${ tooltipStyle }` }>{ this.props.text }</span>
				</div>
			</div>
		)
	}
}


export default GetContext(Tooltip);
