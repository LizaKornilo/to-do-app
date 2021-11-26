import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export function Card({ card, index, markCard, deleteCard }) {
  const theme = useContext(ThemeContext);

  const getDateString = (date) => {
    return `${date.toLocaleDateString().slice(0, 5)}\u00A0\u00A0${date.toLocaleTimeString().slice(0,5)}`;
  };

  return (
    <div className='card' onClick={() => { markCard(index) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
      <div className='card__text' style={{ color: theme.textColor }}>{card.text}</div>
      <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
      <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
      <div className="card_timestamp" style={{ color: theme.textColor }}> {getDateString(new Date(card.timestamp))}</div>
    </div>
  );
}