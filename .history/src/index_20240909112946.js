import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//index.html의 root를 가져옴.
//app.js로 가서 실행

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //app.js로 가서 실행
  <React.StrictMode>    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
