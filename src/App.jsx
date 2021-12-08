import React, { useState, useEffect } from 'react';
import { ThemeCheckbox } from './components/ThemeCheckbox/ThemeCheckbox';
import { ListsBoard } from './components/ListsBoard/ListsBoard.jsx';
import { AddListPanel } from './components/AddListPanel/AddListPanel.jsx';
import AddTaskPanel from './components/AddTaskPanel/AddTaskPanel.jsx';
import { CardsBoard } from './components/CardsBoard/CardsBoard';
import ToDoItem from './models/ToDoItem.js';
import { themes, ThemeContext } from './contexts/theme-context.js';
import ListItem from './models/ListItem';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const firstItem = new ToDoItem(false, "This is a simple todo");
// const defaultData = [
//   new ListItem("First list", [
//     new ToDoItem(true, "List 1 Task 1"),
//     new ToDoItem(false, "List 1 Task 2"),
//   ]),
//   new ListItem("Second list", [new ToDoItem(false, "List 2 Task 1")]),
// ];

const list1 = new ListItem("First list");
const list2 = new ListItem("Second list");
const task1 = new ToDoItem(list1.uid, true, "task 1");
const task2 = new ToDoItem(list1.uid, false, "task 2");
const task3 = new ToDoItem(list2.uid, false, "task 3");
const defaultLists = [list1, list2];
const defaultTasks = [task1, task2, task3];

export function App() {
  const [theme, setTheme] = useState(themes.light);
  const [cards, setCards] = useState(
    (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : defaultTasks
  );
  const [lists, setLists] = useState((localStorage.getItem('lists')) ? JSON.parse(localStorage.getItem('lists')) : defaultLists);

  const changeTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark);
  };

  const addCard = (listId, name) => {
    setCards([...cards, new ToDoItem(listId, false, name)]);
  };

  const deleteCard = card => {
    const index = cards.indexOf(card);
    const newCards = [...cards];
    if (index > -1) newCards.splice(index, 1);
    setCards(newCards);
  };

  const updateCard = (card, newCard) => {
    const index = cards.indexOf(card);
    if (index > -1) {
      setCards(cards.map((item, i) => {
        if (i === index) { return newCard; }
        return item;
      }))
    }
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
    localStorage.setItem('todos', JSON.stringify(cards));
  }, [lists, cards]);

  const addList = name => {
    setLists([...lists, new ListItem(name)]);
  }

  const deleteList = (list) => {
    const index = lists.indexOf(list);
    const newLists = [...lists];
    if (index > -1) newLists.splice(index, 1);
    setLists(newLists);

    let newCards = [...cards];
    newCards = newCards.filter((card) => { return card.listUid !== list.uid});
    setCards(newCards);
  }

  return (
    <Router>
      <ThemeContext.Provider value={theme} >
        <div className='app' style={{ backgroundColor: theme.appBg }}>
          <div className="container">
            <ThemeCheckbox changeTheme={changeTheme} />
            <div className="content-inner">
              <div>
                <ListsBoard lists={lists} deleteList={deleteList} />
                <AddListPanel addList={addList} />
              </div>
              <Routes>
                <Route path=":id" element={
                  <div className="tasks-area">
                    <AddTaskPanel addCard={addCard} />
                    <CardsBoard cards={cards} updateCard={updateCard} deleteCard={deleteCard} />
                  </div>} />
              </Routes>
            </div>
          </div>

        </div>
      </ThemeContext.Provider >
    </Router>
  );
}