import React from 'react';
import ReactDOM from 'react-dom';
import './TopLoader.scss';
import GetContext from '../GetContext';

interface TopLoaderProps {
  loading: boolean;
  context: {
    primaryColor: string;
  };
  style?: React.CSSProperties;
}

const TopLoader: React.FC<TopLoaderProps> = (props) => {
  const loaderClass = props.loading ? 'isLoading' : 'noLoader';
  const primaryColor = props.context.primaryColor;

  const loaderStyle: React.CSSProperties = {
    backgroundColor: primaryColor,
    ...props.style,
  };

  return (
    <div className="loaderDiv">
      <div style={loaderStyle} className={`innerLoader ${loaderClass}`}></div>
    </div>
  );
};

interface TopLoaderPortalProps {
  style?: React.CSSProperties;
}

const TopLoaderPortal: React.FC<TopLoaderPortalProps> = (props) => {
  let portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
  }
  return ReactDOM.createPortal(<TopLoader {...props} />, document.getElementById('portal-root'));
};

TopLoaderPortal.defaultProps = {
  style: {},
};

export default GetContext(TopLoaderPortal);
