import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import Popup from './Popup/Popup';


export function Card({ card, markCard, index, deleteCard}) {
  const theme = useContext(ThemeContext);

  const getDateString = (date) => {
    return `${date.getDate()}. ${date.getMonth()+1}\u00A0\u00A0${date.getHours()}:${date.getMinutes()}`;
  };

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  return (
    <>
      <div className='card' onClick={() => { setPopupIsOpen(true) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
        <div className='card__text' style={{ color: theme.textColor }}>{card.text}</div>
        <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
        <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
        <div className="card_timestamp" style={{ color: theme.textColor }}> {getDateString(new Date(card.timestamp))}</div>
      </div>

      <Popup trigger={popupIsOpen} setTrigger={setPopupIsOpen}>
        <h3>My popup</h3>
      </Popup>
    </>
  );
}