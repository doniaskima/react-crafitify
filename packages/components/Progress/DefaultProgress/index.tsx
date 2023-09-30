import React from 'react';
import   "../Progress.scss";
import ThemeContext from '../../context/themeContext';


const DefaultProgress = props => {
	let { prcnt } = props;
	const { strokeColor } = props;

	const strokeStyle = props.square ? {} : { borderRadius: "5px" }

	return (
		<div>
			<div
				style={{ marginLeft: `calc(${ prcnt }% - 23px)` }}
				className="progressText">
				{ prcnt }<span className="progressChar">%</span>
		  </div>
			<div className="progressMainWrapper">
				<div
				  className="progressWrapper"
					style={{ width: "100%" }}>
					<div style={ strokeStyle } className="progressBG">
					</div>
					<div
					  style={{
							background: strokeColor,
							width: `${ prcnt }%`,
							...strokeStyle,
						}}
					  className={ `defaultProgress defaultProgressAnim` }>
					</div>
				</div>
			</div>
		</div>
	)
}

const DefaultProgressWrapper = (props) => {

	return (
		<ThemeContext.Consumer>
			{ context => {

				// Check if there is other color that override the default one
				let strokeColor = "#006eff";

				if(props.strokeColor){
					strokeColor = props.strokeColor;
				}
				else if(context && context.primaryColor){
					strokeColor = context.primaryColor;
				}

				return (
					<DefaultProgress { ...props } strokeColor={ strokeColor } />
				)
			}}
		</ThemeContext.Consumer>
	)
}



export default DefaultProgressWrapper;
