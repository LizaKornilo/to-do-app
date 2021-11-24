import React from "react";

export const themes = {
  light: {
    appBg: '#DDDDDD',
    textColor: '#FFFFFF',
    inputColor: '#AAAAAA',
    addBtnColor: '#40D1FF',
    cardBgGreen: '#59BA50',
    cardBgRed: '#BA5050',
    delBtnColor: 'rgba(196, 196, 196, 0.5)',
    delBtnTextColor: '#FFFFFF',
  },
  dark: {
    appBg: '#333333',
    textColor: '#DDDDDD',
    inputColor: '#555555',
    addBtnColor: '#265766',
    cardBgGreen: '#2D4A2A',
    cardBgRed: '#552828',
    delBtnColor: 'rgba(37, 37, 37, 0.5)',
    delBtnTextColor: 'rgba(221, 221, 221, 0.5)',
  },
};

export const ThemeContext = React.createContext();