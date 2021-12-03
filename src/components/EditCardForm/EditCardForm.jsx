import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { getDateString } from "../../utils/dateFormatter";
import './editCardForm.css'

function EditCardForm({ setTrigger, card, updateOpenCard }) {
  const [newCard, setNewCard] = useState({ name: card.name, isDone: card.isDone });

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setNewCard({ ...newCard, [name]: value });
  }

  const handleSubmit = event => {
    updateOpenCard(newCard.name, newCard.isDone);
    setTrigger(false);
    event.preventDefault();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <form className="edit-card-form" onSubmit={handleSubmit}>
      <TextareaAutosize onKeyPress={handleKeyPress} className='form__card-name' value={newCard.name} name="name" onChange={handleInputChange} type='text' placeholder='enter task name...' required />
      <div className="form__is-done" >
        <input className="is-done" type="checkbox" id="ch" checked={newCard.isDone} name="isDone" onChange={handleInputChange} />
        <label htmlFor="ch">is completed</label>
      </div>
      <div className="form__timestamp">{getDateString(new Date(card.timestamp))} </div>
      <input className='form__submit-btn' type="submit" value="ok" />
    </form>
  );
}

export default EditCardForm;