import logo from './logo.svg';
import './App.css';

//함수시작
function App() {

//여기에 js 사용가능.
//여기서 생성된 것을 아래 html에서 사용 가능
return (
    //여기에 html만들어서 넣은 것. 
    //원래는 jsx라고 부르는데, 그냥 js라고 써도 jsx라고 간주하도록 프로그램됨
    //컴포넌트 기반.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
