import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';
declare function Table(props: any): React.JSX.Element;
declare namespace Table {
    var propTypes: {
        columns: PropTypes.Requireable<any[]>;
        rows: PropTypes.Requireable<any[]>;
        bordered: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        bordered: boolean;
        style: {};
        className: string;
    };
}
export default Table;
