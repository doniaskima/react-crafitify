import React, { useState } from 'react';
import {
  defaultColor,
  defaultTextColor,
  primaryColor,
  primaryTextColor,
  successColor,
  successTextColor,
  dangerColor,
  dangerTextColor,
} from '../styles/index';
import ThemeContext from '../context/themeContext';

function ThemeProvider({ theme, children }) {
  const [state, setState] = useState({
    defaultColor: theme.defaultColor || defaultColor,
    defaultTextColor: theme.defaultTextColor || defaultTextColor,
    primaryColor: theme.primaryColor || primaryColor,
    primaryTextColor: theme.primaryTextColor || primaryTextColor,
    successColor: theme.successColor || successColor,
    successTextColor: theme.successTextColor || successTextColor,
    dangerColor: theme.dangerColor || dangerColor,
    dangerTextColor: theme.dangerTextColor || dangerTextColor,
  });

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
