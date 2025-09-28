import React, {createContext, useContext} from 'react';

const Theme = {
  Text: '#333333',
  White: '#FFFFFF',
  Black: '#000',
  Background: '#f1f1f1',
  Primary: '#0E5EEA',
  Secondary: '#3C67B1',
  ServiceBackground: '#EFF5FF',
  NetworkLogger: '#EDEDED',
  ShadowBlack: 'rgba(0,0,0,0.20)',
  Transparent: 'transparent',
  IconBackground: '#232B3F',
  IconBorder: '#396AC1',
  Grey: '#CCCCCC',
  Gradient: ['#4B72AE', '#7896C4'],
  ButtonGradient: ['#0444B4', '#0E5EEA'],
  LinkColor: '#0E5EEA',
  Success: '#E4FAF0',
};

const ThemeContext = createContext(Theme);

export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
