import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
declare function MenuItem(props: any): React.JSX.Element;
declare namespace MenuItem {
    var propTypes: {
        isSelected: PropTypes.Validator<boolean>;
        uniqueKey: PropTypes.Validator<string>;
        changeState: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default MenuItem;
