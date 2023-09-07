import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./Drawer.scss";

// Function to generate unique IDs
function generateUniqueId() {
  return `drawer_${Math.random().toString(36).substr(2, 10)}`;
}

class DrawerPortal extends Component {
  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
  }

  state = {
    showDrawer: false,
    drawerId: generateUniqueId(),
    drawerOverlayId: generateUniqueId(),
    isClosing: false,
  }

  closeDrawer = async () => {
    const { showDrawer } = this.props;

    if (!this.state.isClosing) {
      // Check if the drawer is already closing
      await this.setState({ isClosing: true });
      // add animation depending if it's a right or left drawer
      setTimeout(async () => {
        await this.setState({
          showDrawer,
          isClosing: false,
        });
      }, 300);

      const selectedDrawer = document.querySelector(`#${this.state.drawerId}`);
      if (selectedDrawer) {
        if (this.props.position === "right") {
          selectedDrawer.className = "drawer drawerOutRight";
        } else {
          selectedDrawer.className = "drawer drawerOut";
        }
        document.querySelector(`#${this.state.drawerOverlayId}`).className = "drawerOverlay drawerOverlayOut";
      }
    }
  }

  componentDidMount() {
    const { showDrawer } = this.props;
    this.setState({ showDrawer });
  }

  componentDidUpdate(prevProps) {
    const { showDrawer } = this.props;
    // Add an animation to the drawer on close
    if (showDrawer !== prevProps.showDrawer) {
      const body = document.querySelector("body");
      if (!showDrawer) {
        body.setAttribute("style", "overflow: visible;");
        this.closeDrawer();
      } else {
        body.setAttribute("style", "overflow: hidden;");
        this.setState({ showDrawer });
      }
    }
  }

  render() {
    // Check whether if the drawer is at left (default) or at right
    const drawerPositionClass = this.props.position === "right" ? 'drawerWrapperRight' : 'drawerWrapper';
    const drawerClass = this.props.position === "right" ? "drawer drawerRight" : "drawer";

    return (
      this.state.showDrawer && (
        <div>
          <div
            className={drawerPositionClass}
          >
            <div
              id={this.state.drawerId}
              style={this.props.style}
              className={drawerClass}>
              {
                this.props.isClosable && (
                  <button
                    className="closeDrawer"
                    onClick={this.props.toggleDrawer}>
                    {/* <Icon
                      type="close"
                      size="24px"
                      className={ styles.closeDrawerIcon } /> */}
                  </button>
                )
              }

              <div>
                {this.props.children}
              </div>
            </div>

            <div
              id={this.state.drawerOverlayId}
              onClick={this.props.toggleDrawer}
              className="drawerOverlay"></div>
          </div>

          <div className="drawerBlockClick"></div>
        </div>
      )
    )
  }
}

DrawerPortal.defaultProps = {
  isClosable: true,
}

// Create a portal to hook the Drawer into
const Drawer = (props) => {
  // Check if the portal-root div exists
  let portalRoot = document.getElementById("portal-root");
  // if not, add it to the body
  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
  }
  // Create a portal to attach the drawer
  return ReactDOM.createPortal(
    <DrawerPortal {...props} />,
    document.getElementById("portal-root")
  )
}

export default Drawer;
