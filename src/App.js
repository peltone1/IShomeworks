import React, { Component } from 'react';

import './App.css';

import Game from './Components/Game.js'
import Board from './Components/Board.js'
import Square from './Components/Square.js'


const App = () => (
  <div>
    <Square/>
    <Board/>
    <Game/>
  </div>
)


export default App
