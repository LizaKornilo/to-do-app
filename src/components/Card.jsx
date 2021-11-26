import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export function Card({ card, index, markCard, deleteCard }) {
  const theme = useContext(ThemeContext);
  return (
    <div className='card' onClick={() => { markCard(index) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
      <div className='card__text' style={{ color: theme.textColor }}>{card.text}</div>
      <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
      <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
    </div>
  );
}