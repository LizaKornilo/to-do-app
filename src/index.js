import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { ThemeContext, themes } from './theme-context';


function Card({ card, index, markCard, deleteCard }) {
  const theme = useContext(ThemeContext);
  return (
    <div className='card' onClick={() => { markCard(index) }} style={{ backgroundColor: card.isDone ? theme.cardBgGreen : theme.cardBgRed }}>
      <div className='card__text' style={{ color: theme.textColor }}>{card.text}</div>
      <div className='card__delete-btn' onClick={(evt) => { evt.stopPropagation(); deleteCard(index) }} style={{ backgroundColor: theme.delBtnColor, color: theme.delBtnTextColor }}>+</div>
      <div className='card__status' style={{ color: theme.textColor }}>{card.isDone ? 'completed' : 'not completed'}</div>
    </div>
  );
}

function CardsBoard({ cards, markCard, deleteCard }) {
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

function AddTaskPanel({ addCard }) {
  const theme = useContext(ThemeContext);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    if (!value) { }
    else {
      addCard(value);
      setValue("");
    }
    event.preventDefault();
  }

  return (
    <form className='add-card' onSubmit={handleSubmit}>
      <input className='add-card__input-field' value={value} onChange={handleChange} type='text' placeholder='enter new task...' style={{ backgroundColor: theme.inputColor, color: theme.textColor }} />
      <input className='add-card__btn' type="submit" value="+" style={{ backgroundColor: theme.addBtnColor, color: theme.textColor }} />
    </form>
  );
}

function ThemeCheckbox({ changeTheme }) {
  return (
    <div className="container">
      <div className="themeCheckbox" >
        <input className="check" type="checkbox" id="newchec" onChange={() => { changeTheme() }} />
        <label htmlFor="newchec"></label>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [cards, setCards] = useState([
    {
      text: "This is a simple todo",
      isDone: false
    }
  ]);

  const changeTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark);
  };

  const addCard = text => {
    setCards([...cards, { text: text, isDone: false }]);
  };

  const markCard = index => {
    setCards(cards.map((item, i) => {
      if (i === index) item.isDone = !item.isDone;
      return item;
    }))
  };

  const deleteCard = index => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <ThemeContext.Provider value={theme} >
      <div className='app' style={{ backgroundColor: theme.appBg }}>
        <ThemeCheckbox changeTheme={changeTheme} />
        <AddTaskPanel addCard={addCard} />
        <CardsBoard cards={cards} markCard={markCard} deleteCard={deleteCard} />
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);