import React from 'react';
import { Card } from './Card';

export function CardsBoard({ cards, markCard, renameCard, deleteCard }) {
  return (
    <div className='container'>
      <div className='cards'>
        {cards.map((card, index) =>
          <Card key={card.id} card={card}
            index={index}
            markCard={markCard}
            renameCard={renameCard}
            deleteCard={deleteCard}/>
        )}
      </div>
    </div>
  );
}