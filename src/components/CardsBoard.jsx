import React from 'react';
import { Card } from './Card';

export function CardsBoard({ cards, markCard, deleteCard }) {
  return (
    <div className='container'>
      <div className='cards'>
        {cards.map((card, index) =>
          <Card card={card}
            index={index}
            markCard={markCard}
            deleteCard={deleteCard} />
        )}
      </div>
    </div>
  );
}