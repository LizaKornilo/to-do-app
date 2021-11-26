import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export function AddTaskPanel({ addCard }) {
  const theme = useContext(ThemeContext);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    if (!value) { }
    else {
      addCard(value);
      setValue("");
    }
    event.preventDefault();
  }

  return (
    <form className='add-card' onSubmit={handleSubmit}>
      <input className='add-card__input-field' value={value} onChange={handleChange} type='text' placeholder='enter new task...' style={{ backgroundColor: theme.inputColor, color: theme.textColor }} />
      <input className='add-card__btn' type="submit" value="+" style={{ backgroundColor: theme.addBtnColor, color: theme.textColor }} />
    </form>
  );
}