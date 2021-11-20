import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

function Card({ card }) {
  return (
    <div className='card' style={{ backgroundColor: card.isDone ? "#59BA50" : "#ba5050" }}>
      <div className='card__text'>{card.text}</div>
      <div className='card__delete-btn'>+</div>
      <div className='card__status'>{card.isDone ? 'completed' : 'not completed'}</div>
    </div>
  );
}

function CardsBoard({ cards }) {
  return (
    <div className='cards-inner'>
      <div className='cards'>
        {cards.map(card => <Card card={card} />)}
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
    <div className='add-card'>
      <div className='add-card__inner'>
        <form onSubmit={handleSubmit}>
          <input className='add-card__input-field' value={value} onChange={handleChange} type='text' placeholder='enter new task...' />
          <input className='add-card__btn' type="submit" value="+" />
        </form>
      </div>
    </div>
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

  return (
    <div className='app'>
      <AddTaskPanel addCard={addCard} />
      <CardsBoard cards={cards} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);