import React from 'react';

export function ThemeCheckbox({ changeTheme }) {
  return (
    <div className="container">
      <div className="themeCheckbox" >
        <input className="check" type="checkbox" id="newchec" onChange={() => { changeTheme() }} />
        <label htmlFor="newchec"></label>
      </div>
    </div>
  );
}