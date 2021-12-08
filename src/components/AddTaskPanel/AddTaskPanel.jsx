import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import './addTaskPanel.css'
import { useParams } from "react-router-dom";

function AddTaskPanel({ addCard }) {
  const params = useParams();
  const currentListId = params.id;

  const theme = useContext(ThemeContext);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    if (!value) { }
    else {
      addCard(currentListId, value);
      setValue("");
    }
    event.preventDefault();
  }

  return (
    <form className='add-card' onSubmit={handleSubmit}>
      <input className='add-card__input-field input-field' value={value} onChange={handleChange} type='text' placeholder='enter new task...' style={{ backgroundColor: theme.inputColor, color: theme.textColor }} />
      <input className='add-card__btn circle-btn' type="submit" value="+" style={{ backgroundColor: theme.addBtnColor, color: theme.textColor }} />
    </form>
  );
}

export default AddTaskPanel;