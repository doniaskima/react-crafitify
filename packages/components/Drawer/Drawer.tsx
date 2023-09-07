import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Drawer.scss';
import { AiOutlineClose } from 'react-icons/ai';

function generateUniqueId() {
  return `drawer_${Math.random().toString(36).substr(2, 10)}`;
}

function DrawerPortal(props) {
  const [showDrawer, setShowDrawer] = useState(false);
  const isClosing = useState(false);

  const closeDrawer = useCallback(async () => {
    const { showDrawer } = props;

    if (!isClosing.current) {
      isClosing.current = true;
      setTimeout(async () => {
        await setShowDrawer(showDrawer);
        isClosing.current = false;
      }, 300);
    }
  }, [props]);

  useEffect(() => {
    const { showDrawer } = props;
    setShowDrawer(showDrawer);
  }, [props]);

  useEffect(() => {
    const { showDrawer } = props;
    const body = document.querySelector('body');
    if (body) {
      if (!showDrawer) {
        body.setAttribute('style', 'overflow: visible;');
        closeDrawer();
      } else {
        body.setAttribute('style', 'overflow: hidden;');
        setShowDrawer(showDrawer);
      }
    }
  }, [props, closeDrawer]);

  const drawerPositionClass =
    props.position === 'right' ? 'drawerWrapperRight' : 'drawerWrapper';

  return showDrawer ? (
    <div>
      <div className={drawerPositionClass}>
        <div
          style={props.style}
          className={`drawer ${showDrawer ? 'drawerAnimationIn' : 'drawerAnimationOut'}`}
        >
          {props.isClosable && (
            <button className="closeDrawer" onClick={props.toggleDrawer}>
              <AiOutlineClose className="closeDrawerIcon" />
            </button>
          )}

          <div>{props.children}</div>
        </div>

        <div
          onClick={props.toggleDrawer}
          className={`drawerOverlay ${showDrawer ? 'drawerOverlayAnimIn' : 'drawerOverlayOut'}`}
        ></div>
      </div>

      <div className="drawerBlockClick"></div>
    </div>
  ) : null;
}

DrawerPortal.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

DrawerPortal.defaultProps = {
  isClosable: true,
};

function Drawer(props) {
  let portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
  }

  return ReactDOM.createPortal(
    <DrawerPortal {...props} />,
    document.getElementById('portal-root')
  );
}

export default Drawer;
