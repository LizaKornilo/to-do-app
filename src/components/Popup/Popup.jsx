import React, { useState } from "react";
import "./popup.css";
import TextareaAutosize from 'react-textarea-autosize';

function Popup({ trigger, setTrigger, card, updateCard }) {
  const [name, setName] = useState(card.name);
  const [isDone, setIsDone] = useState(card.isDone);

  const cardNameChange = event => {
    setName(event.target.value);
  }

  const isDoneChange = event => {
    setIsDone(event.target.checked);
  }

  const handleSubmit = event => {
    updateCard(name, isDone)
    setTrigger(false)

    event.preventDefault();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup__close-btn" onClick={() => setTrigger(false)}>
          +
        </button>

        <form className="popup-form" onSubmit={handleSubmit}>
          <TextareaAutosize onKeyPress={handleKeyPress} className='popup__card-name' value={name} onChange={cardNameChange} type='text' placeholder='enter task name...' required />
          <div className="popup__is-done" >
            <input className="is-done" type="checkbox" id="ch" checked={isDone} onChange={isDoneChange} />
            <label htmlFor="ch">is completed</label>
          </div>
          <div className="popup__timestamp">{card.timestamp} </div>
          <input className='popup__submit-btn' type="submit" value="ok" />
        </form>

      </div>
    </div>
  ) : "";
}

export default Popup;