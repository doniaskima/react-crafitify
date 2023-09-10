import React from 'react';
import  "./Statistic.scss";
 
const Statistic = (props) => {

	const { title, value, prevValue, currency, valueClassName } = props;

	const prcntChange = Math.round(((value - prevValue) / prevValue * 100) * 100) / 100;

	const positiveChange = prcntChange >= 0;

	let iconType = "arrowTop";
	let iconBgColor = "#23d160";
	if(!positiveChange){
		iconType = "arrowDown";
		iconBgColor = "#ff2b2b";
	}

	return(
		<div className="statWrapper">
			<div>
				<div className="title">{ title }</div>
			</div>

			<div className="statBottomWrapper">

				<div className="mainVal">
					<div className={ `value ${ valueClassName }` }>{ numberWithCommas(value) }</div>
					<div className='currency'>{ currency }</div>
				</div>

				<div className='otherVal'>
					<div
						className='prcntChangeDiv'>
						<div
							style={{ backgroundColor: iconBgColor }}
							className='arrow'>
							{/* <Icon
								type={ iconType }
								color="#fff"
								size="30px" /> */}
						</div>
						<div className="prcntChange">
							<span>{ positiveChange && "+" }{ prcntChange }%</span>
						</div>
					</div>
					<div className='prevVal'>Previously: { numberWithCommas(prevValue) }</div>
				</div>

			</div>
		</div>
	)
}

Statistic.defaultProps = {
	title: "",
	value: undefined,
	prevValue: undefined,
	currency: undefined,
	valueClassName: "",
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default Statistic;
