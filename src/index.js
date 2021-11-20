import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card__text'>{this.props.text}</div>
        <div className='card__delete-btn'>+</div>
        <div className='card__status'>not completed</div>
      </div>
    );
  }
}
class CardsBoard extends React.Component {
  render() {
    return (
      <div className='cards-inner'>
        <div className='cards'>
          <Card text="Text of task #1" />
          <Card text="Text of task #2" />
          <Card text="Text of task #3" />
        </div>
      </div>
    );
  }
}

class AddTaskPanel extends React.Component {
  render() {
    return (
      <div className='add-card'>
        <div className='add-card__inner'>
          <input className='add-card__input-field' type='text' placeholder='enter new task...' />
          <button className='add-card__btn'>+</button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <AddTaskPanel />
        <CardsBoard />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);