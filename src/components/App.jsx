import React, { useState, useEffect } from 'react';
import { themes } from '../contexts/theme-context.js';
import { ThemeContext } from '../contexts/theme-context.js';
import { AddTaskPanel } from './AddTaskPanel';
import { ThemeCheckbox } from './ThemeCheckbox';
import { CardsBoard } from './CardsBoard';
import ToDoItem from '../models/ToDoItem.js';

const firstItem = new ToDoItem(false, "This is a simple todo")

export function App() {


  const [theme, setTheme] = useState(themes.light);
  const [cards, setCards] = useState(
    (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [firstItem]
  );

  const changeTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark);
  };

  const addCard = name => {
    setCards([...cards, new ToDoItem(false, name)]);
  };

  const deleteCard = index => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const updateCard = (index, newCard) => {
    setCards(cards.map((item, i) => {
      if (i === index) { return newCard; }
      return item;
    }))
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(cards));
  }, [cards]);

  return (
    <ThemeContext.Provider value={theme} >
      <div className='app' style={{ backgroundColor: theme.appBg }}>
        <ThemeCheckbox changeTheme={changeTheme} />
        <AddTaskPanel addCard={addCard} />
        <CardsBoard cards={cards} updateCard={updateCard} deleteCard={deleteCard} />
      </div>
    </ThemeContext.Provider>
  );
}