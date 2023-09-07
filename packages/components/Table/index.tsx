import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';
import styled from 'styled-components';
import { primaryColor } from '../styles';
import ThemeContext from '../context/themeContext';

function Table(props) {
  const context = useContext(ThemeContext);

  let hoverColor = primaryColor;

  if (context) {
    hoverColor = context.primaryColor;
  }

  const CustomTR = styled.tr`
    :hover {
      background-color: ${hoverColor}0c;
    }
  `;

  return (
    <div
      style={props.style}
      className={`${props.bordered} tableWrapper tableScroll ${props.className}`}
    >
      <table className="table">
        <thead>
          <tr>
            {props.columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.rows.map((row, i) => (
            <CustomTR key={i}>
              {props.columns.map((column, j) => (
                <td key={j}>{row[column]}</td>
              ))}
            </CustomTR>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  bordered: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

Table.defaultProps = {
  bordered: false,
  style: {},
  className: '',
};

export default Table;
