import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
//.js는 생략가능. 이렇게 불러와야 쓸 수 있음.
//아래에서 <APP />으로 사용
//app.js에서는 export해줘야함. 여기서는 임포트. 불러올 대상은 export마지막에 할 것.
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
