import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './Home';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './counter';
import LocalOption from './LocalOption';


ReactDOM.render(
  <React.StrictMode>
   {/*<Home />*/}
   <Counter />
   <LocalOption />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
