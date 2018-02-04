import React, { Component } from 'react';
import Button from './Button';
import './Welcome.css';


class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='welcome-headline'>Test Your Knowledge</h1>
        <h2 className='welcome-secondary'>Make custom flashcards</h2>
        <Button buttonText='Sign up'/>
        <Button buttonText='Login' />
      </div>
    );
  }
}

export default Welcome;
