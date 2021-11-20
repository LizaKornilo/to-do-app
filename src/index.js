import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

function Card({ card, index, markCard, deleteCard }) {
  return (
    <div className='card' style={{ backgroundColor: card.isDone ? "#59BA50" : "#ba5050" }}>
      <div className='card__text' onClick={() => { markCard(index) }}>{card.text}</div>
      <div className='card__delete-btn' onClick={() => { deleteCard(index) }}>+</div>
      <div className='card__status'>{card.isDone ? 'completed' : 'not completed'}</div>
    </div>
  );
}

function CardsBoard({ cards, markCard, deleteCard }) {
  return (
    <div className='cards-inner'>
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

function AddTaskPanel({ addCard }) {
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    if (!value) return;
    addCard(value);
    setValue("");
    event.preventDefault();
  }

  return (
    <form className='add-card' onSubmit={handleSubmit}>
      <input className='add-card__input-field' value={value} onChange={handleChange} type='text' placeholder='enter new task...' />
      <input className='add-card__btn' type="submit" value="+" />
    </form>
  );
}

function App() {
  const [cards, setCards] = useState([
    {
      text: "This is a simple todo",
      isDone: false
    }
  ]);

  const addCard = text => {
    const newCards = [...cards, { text: text, isDone: false }];
    setCards(newCards);
  };

  const markCard = index => {
    const newCards = [...cards];
    newCards[index].isDone = !newCards[index].isDone;
    setCards(newCards);
  };

  const deleteCard = index => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div className='app'>
      <AddTaskPanel addCard={addCard} />
      <CardsBoard cards={cards} markCard={markCard} deleteCard={deleteCard} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);