import React, { useState, useEffect } from 'react';
import { themes } from '../contexts/theme-context.js';
import { ThemeContext } from '../contexts/theme-context.js';
import { AddTaskPanel } from './AddTaskPanel';
import { ThemeCheckbox } from './ThemeCheckbox';
import { CardsBoard } from './CardsBoard';
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [theme, setTheme] = useState(themes.light);
  const [cards, setCards] = useState(
    (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [
      {
        id: uuidv4(),
        name: "This is a simple todo",
        isDone: false,
        timestamp: new Date(),
      }
    ]
  );

  const changeTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark);
  };

  const addCard = name => {
    setCards([...cards, { id: uuidv4(), name: name, isDone: false, timestamp: new Date() }]);
  };

  const markCard = (index, isCompleted) => {
    setCards(cards.map((item, i) => {
      if (i === index) item.isDone = isCompleted;
      return item;
    }))
  };

  const deleteCard = index => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const renameCard = (index, newName) => {
    setCards(cards.map((item, i) => {
      if (i === index) item.name = newName;
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
        <CardsBoard cards={cards} markCard={markCard} renameCard={renameCard} deleteCard={deleteCard} />
      </div>
    </ThemeContext.Provider>
  );
}