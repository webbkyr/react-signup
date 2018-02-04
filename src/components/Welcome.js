import React, { Component } from 'react';
import Button from './Button';
import './Welcome.css';


class Welcome extends Component {
  constructor(props) {
    super(props)
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignUp() {
    console.log('signup!');
  }

  handleLogin() {
    console.log('login!')
  }
  render() {
    return (
      <div className="App">
        <h1 className='welcome-headline'>Test Your Knowledge</h1>
        <h2 className='welcome-secondary'>Make custom flashcards</h2>
        <Button onClick={() => this.handleSignUp()} buttonText='Sign up'/>
        <Button onClick={() => this.handleLogin()} buttonText='Login' />
      </div>
    );
  }
}

export default Welcome;
