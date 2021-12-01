import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import Popup from './Popup/Popup';

export function Card({ card, index, markCard, renameCard, deleteCard }) {
  const theme = useContext(ThemeContext);

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const updateCard = (nameValue, isDone) => {
    renameCard(index, nameValue);
    markCard(index, isDone);
  }

  return (
    <>
      <div className='card' onClick={() => { setPopupIsOpen(true) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
        <div className='card__text' style={{ color: theme.textColor }}>{card.name}</div>
        <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
        <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
        <div className="card_timestamp" style={{ color: theme.textColor }}> {(card.timestamp)}</div>
      </div>

      <Popup trigger={popupIsOpen} setTrigger={setPopupIsOpen} card={card} updateCard={updateCard}>
        <h3>My popup</h3>
      </Popup>
    </>
  );
}