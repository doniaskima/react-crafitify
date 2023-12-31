import React from 'react';
import  "../Progress.scss";
import ThemeContext from '../../context/themeContext';


const RadialProgress = props => {

	const viewBoxSize = 36;
	const diameter = viewBoxSize * .8;
	const radius = diameter / 2;
	const xStart = viewBoxSize / 2;
	const yStart = (viewBoxSize - diameter) / 2;
	const textStyle = {
	  fill: "#555",
	  fontFamily: "sans-serif",
	  fontSize: "0.6em",
	  textAnchor: "middle",
	};

	const prcntCharStyle = {
		fill: "#333",
	  fontFamily: "sans-serif",
	  fontSize: "0.3em",
	  opacity: .5,
	}

	let { prcnt } = props;
	if(prcnt < 0){
		prcnt = 0;
	} else if(prcnt > 100){
		prcnt = 100;
	}
	prcnt = prcnt + "";
	const { strokeColor } = props;

	let xAxis = 20.6;
	if(prcnt.length === 2){
		xAxis = 22.8;
	}
	else if(prcnt.length === 3){
		xAxis = 25.2;
	}

	return (
		<div style={{ height: props.size, width: props.size }}>
			<svg viewBox={`0 0 ${ viewBoxSize } ${ viewBoxSize }`}>
				<path
					d="M18 2.0845
						a 15.9155 15.9155 0 0 1 0 31.831
						a 15.9155 15.9155 0 0 1 0 -31.831"
					fill="none"
					stroke="#eee"
					strokeWidth="2.5"
				/>

				{
					prcnt && prcnt > 0 && (
						<path
							className="progressAnim"
							fill="none"
							stroke={ strokeColor }
							strokeWidth="2.5"
							strokeLinecap={ props.square ? "square" : "round" }
							strokeDasharray={ `${ prcnt }, 100` }
							d="M18 2.0845
								a 15.9155 15.9155 0 0 1 0 31.831
								a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
					)
				}

				<g className="radialText">
					<text
						style={ textStyle }
						x="17"
						y="21">{ prcnt || 0 }
					</text>

					<text
						style={ prcntCharStyle }
						x={ xAxis }
						y="17.7" >%</text>
				</g>

			</svg>
		</div>
	)
}

const RadialProgressWrapper = (props) => {

	return (
		<ThemeContext.Consumer>
			{ context => {
				let strokeColor = "#006eff";

				if(props.strokeColor){
					strokeColor = props.strokeColor;
				}
				else if(context && context.primaryColor){
					strokeColor = context.primaryColor;
				}

				return (
					<RadialProgress { ...props } strokeColor={ strokeColor } />
				)
			}}
		</ThemeContext.Consumer>
	)
}



export default RadialProgressWrapper;
