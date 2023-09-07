import React from 'react';
import  "./Avatar.scss";

const Avatar = (props) => {
	const avatarStyle = {
		backgroundImage: `url( ${ props.src })`,
		height: props.size,
		width: props.size,
		minHeight: props.size,
		minWidth: props.size,
	};

	let fontSize;

	let slicedInitials = "";
	if(props.initials){
		slicedInitials = props.initials.slice(0,5);
		const initLength = slicedInitials.length;

		const majicNumber1 = initLength - .2;
		const majicNumber2 = .2 + (initLength/5);
		fontSize = `calc(${ props.size } / ${ majicNumber1 } * ${ majicNumber2 })`;
	}


	return (
		<div
		  className={ `avatarDiv  ${ props.className }` }
		  style={{ ...avatarStyle, ...props.style }}>
			{
				!props.src && (
					<span
					  style={{ fontSize, ...props.initialsStyle }}
					  className="initials">
						{ slicedInitials }
					</span>
				)
			}
		</div>
	)
}

Avatar.defaultProps = {
	src: "",
  size: "40px",
	style: {},
	className: "",
	initials: "",
}

export default Avatar;
