import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import Popup from './Popup/Popup';
import { getDateString } from '../utils/dateFormatter.js';
import EditCardForm from './EditCardForm/EditCardForm';

export function Card({ card, index, updateCard, deleteCard }) {
  const theme = useContext(ThemeContext);

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const updateOpenCard = (nameValue, isDone) => {
    updateCard(index, nameValue, isDone);
  }

  return (
    <>
      <div className='card' onClick={() => { setPopupIsOpen(true) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
        <div className='card__text' style={{ color: theme.textColor }}>{card.name}</div>
        <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
        <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
        <div className="card_timestamp" style={{ color: theme.textColor }}> {(getDateString(new Date(card.timestamp)))}</div>
      </div>

      <Popup trigger={popupIsOpen} setTrigger={setPopupIsOpen} >
        <EditCardForm setTrigger={setPopupIsOpen} card={card} updateOpenCard={updateOpenCard} />
      </Popup>
    </>
  );
}