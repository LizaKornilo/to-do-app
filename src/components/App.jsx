import React, { useState } from 'react';
import { themes } from '../contexts/theme-context.js';
import { ThemeContext } from '../contexts/theme-context.js';

import { AddTaskPanel } from './AddTaskPanel';
import { ThemeCheckbox } from './ThemeCheckbox';
import { CardsBoard } from './CardsBoard';

export function App() {
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