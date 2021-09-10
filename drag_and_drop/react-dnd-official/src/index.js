import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

ReactDOM.render(
  <React.StrictMode>
      <Board knightPosition = {[7, 4]} />
  </React.StrictMode>,
  document.getElementById('root')
);
