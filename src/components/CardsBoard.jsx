import React from 'react';
import { Card } from './Card';

export function CardsBoard({ cards, updateCard, deleteCard }) {
  return (
    <div className='container'>
      <div className='cards'>
        {cards.map((card, index) =>
          <Card key={card.id} card={card}
            index={index}
            updateCard={updateCard}
            deleteCard={deleteCard}/>
        )}
      </div>
    </div>
  );
}