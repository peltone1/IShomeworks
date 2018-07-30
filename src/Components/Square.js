import React from 'react'
import Game from './Components/Game.js'
import Board from './Components/Board.js'
import Square from './Components/Square.js'

function Square (props) {
    
    return (
      <button 
      className="square" 
      onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }




export default Square