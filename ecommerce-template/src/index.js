import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';
import { transitions, positions, Provider as AlertProvider  } from 'react-alert'
import AlertMUITemplate from "react-alert-template-mui";


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 4000,
  transition: transitions.FADE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertMUITemplate} {...options}>
     <App />
  </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
