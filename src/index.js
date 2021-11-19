import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

const element = (
  <div className='app'>
    <div class='add-card'>
      <div class='add-card__inner'>
        <input type='text' class='add-card__input-field' placeholder='enter new task...' />
        <button class='add-card__btn'>+</button>
      </div>
    </div>

    <div class='cards-inner'>
      <ul class='cards'>
        <li class='card'>
          <div class='card__text'>Text of task #1</div>
          <div class='card__delete-btn'>+</div>
          <div class='card__status'>not completed</div>
        </li>
        <li class='card'>
          <div class='card__text'>Text of task #2</div>
          <div class='card__delete-btn'>+</div>
          <div class='card__status'>not completed</div>
        </li>
        <li class='card'>
          <div class='card__text'>Text of task #3</div>
          <div class='card__delete-btn'>+</div>
          <div class='card__status'>not completed</div>
        </li>
      </ul>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);