import React from 'react';
import ReactDOM from 'react-dom';
import MyAccordion from './components/MyAccordion';
import Items from "../src/FAQ"


ReactDOM.render(
  <React.StrictMode>
    <MyAccordion items={Items}/>
  </React.StrictMode>,
  document.getElementById('root')
);
