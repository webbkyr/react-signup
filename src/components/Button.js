import React from 'react';
import './Button.css';

export default function Button(props) {
  console.log(props)
  return (
    <button onClick={() => props.onClick()} className='root-button'>{props.buttonText}</button>
  )
}