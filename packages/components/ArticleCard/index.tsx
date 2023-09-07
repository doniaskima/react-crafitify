import React from "react";
import "./ArticleCard.scss";
import GetContext from "../GetContext";

const ArticleCard = (props) => {

	const { primaryColor } = props.context;

	const titleClassName = props.titleClassName ? props.titleClassName  : "";

	return (
		<div
			style={ props.style }
			className={ `articleWrapper ${ props.className ? props.className : "" }` } >
			<div
				style={{ backgroundImage: `url( ${ props.img })` }}
				className='articleImg'>
			</div>

			<div className='articleText'>
				<div className="articleTitleAndCat">
					<h6
						style={{ color: primaryColor }}
						className='category'>
						{ props.category }
					</h6>

					<h4
						style={{ textDecorationColor : primaryColor }}
						className={ ` title ${ titleClassName }` }
					>
						{ props.title }
					</h4>
				</div>

				<div className="author">
					{ props.author }
					{
						props.author && props.time && (
							<span className="authorAndTimeSeparator">•</span>
						)
					}
					{ props.time }
				</div>
			</div>
		</div>
	)
}

export default GetContext(ArticleCard);
