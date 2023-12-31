import React from 'react';
import { Col, Container, Row } from 'react-craftify-core';
 

const FormatLayouts = (props) => {
	return (
		<div>
			<div style={{ position: "relative" }}>
				<Container>
					<Row>
						{
							[1,1,1,1,1,1,1,1,1,1,1,1].map((col, i) => (
								<Col key={ i } grid={ `${ col }` }>
									<div className="displayBgCol"></div>
								</Col>
							))
						}
					</Row>
				</Container>

				<div className="rowOverlay">
					<Container>
						<Row>
							{
								props.gridArray.map((col, i) => (
									<Col key={ i } grid={ `${ col }` }>
										<div className="displayCol">col-{ col }</div>
									</Col>
								))
							}
						</Row>
					</Container>
				</div>
			</div>
		</div>
	)
}

export default FormatLayouts;
