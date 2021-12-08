import React from 'react';
import './themeCheckbox.css'

export function ThemeCheckbox({ changeTheme }) {
  return (
    <div className="themeCheckbox" >
      <input className="check" type="checkbox" id="newchec" onChange={() => { changeTheme() }} />
      <label htmlFor="newchec"></label>
    </div>
  );
}