import React, { Component } from 'react';
import { Button, Card, Drawer } from 'react-craftify-core';
 
 

class Drawers extends Component {
	state = {
		showDrawer: false,
		showRightDrawer: false,
	}

	toggleDrawer = () => {
		this.setState(prevState => ({
			showDrawer: !prevState.showDrawer
		}))
	}

	toggleRightDrawer = () => {
		this.setState(prevState => ({
			showRightDrawer: !prevState.showRightDrawer
		}));
	}


	render(){
		const { showDrawer, showRightDrawer } = this.state;
		return (
	 
				<Card>
					<div className="componentBlock">
						<h3 className="componentTitle">Drawers</h3>
						<p className="componentDescr">Display dataset inside table.</p>

					  <Button
							onClick={ this.toggleDrawer }
							type="primary">Show Drawer</Button>

						<Button
							style={{ marginLeft: ".5rem" }}
							onClick={ this.toggleRightDrawer }
							type="primary">Show Right Drawer</Button>


						<Drawer
							showDrawer={ showDrawer }
							toggleDrawer={ this.toggleDrawer }
						>
							<div>Drawer</div>
							<p>This is a drawer</p>
							{
								[0,1,2,3,4,5,6,7,8,9,10, 0,1,2,3,4,5,6,7,8,9,10].map((x, i) => (
									<p key={ i }>This is a drawer</p>
								))
							}
						</Drawer>

						<Drawer
							showDrawer={ showRightDrawer }
							toggleDrawer={ this.toggleRightDrawer }
							position="right"
						>
							<div>Drawer</div>
							<p>This is a right position drawer</p>
						</Drawer>
					</div>
				</Card>
		 
		)
	}
}

export default Drawers;
