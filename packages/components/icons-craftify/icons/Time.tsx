import React from 'react';

export const Time = (props) => {

	return (
		<svg
		width={ props.size }
		height={ props.size }
		viewBox="0 0 1240 1240"
		xmlns="http://www.w3.org/2000/svg" >
			<g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path d="M620,271 C427.211058,271 271,427.211058 271,620 C271,812.788942 427.211058,969 620,969 C812.788942,969 969,812.788942 969,620 C969,427.211058 812.788942,271 620,271 Z M650,623.367816 C650,638.015517 638.009677,650 623.354839,650 L440.645161,650 C425.990323,650 414,638.015517 414,623.367816 C414,608.720115 425.990323,596.735632 440.645161,596.735632 L596.709677,596.735632 L596.709677,354.750109 C596.709677,340.102408 608.7,328.117925 623.354839,328.117925 C638.009677,328.117925 650,340.102408 650,354.750109 L650,623.367816 Z" id="Shape" fill={ props.color } fillRule="nonzero"></path>
			</g>
		</svg>
	)
}

export default Time;
