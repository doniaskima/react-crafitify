import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MunuItem';
import './Menu.css';
declare function Menu(props: any): React.JSX.Element;
declare namespace Menu {
    var propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        selectedItem: PropTypes.Requireable<string>;
    };
    var Item: typeof MenuItem;
}
export default Menu;
