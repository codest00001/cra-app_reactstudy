
//함수시작
//여기에 js 사용가능.
//여기서 생성된 것을 아래 html에서 사용 가능
 //여기에 html만들어서 넣은 것. 
  //원래는 jsx라고 부르는데, 그냥 js라고 써도 jsx라고 간주하도록 프로그램됨
  //컴포넌트 기반.

  //임포트
  import React, { useState } from 'react';
  
//모듈
  function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
  //익스포트
  export default App;