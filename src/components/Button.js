import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button className='root-button'>{props.buttonText}</button>
  )
}