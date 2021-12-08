import React from 'react';
import { Card } from '../Card/Card';
import './cardsBoard.css'
import { useParams } from "react-router-dom";

export function CardsBoard({ cards, updateCard, deleteCard }) {
  const params = useParams();
  const currentListCards = cards.filter(card => {
    return card.listUid === params.id;
  });

  return (
    currentListCards.length ? (
      <div className='cards'>
        {currentListCards.map((card) =>
          <Card key={card.uid} card={card}
            updateCard={updateCard}
            deleteCard={deleteCard} />)}
      </div>)
      : "There are no tasks in this list"
  );
}