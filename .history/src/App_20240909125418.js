
//함수시작
//여기에 js 사용가능.
//여기서 생성된 것을 아래 html에서 사용 가능
 //여기에 html만들어서 넣은 것. 
  //원래는 jsx라고 부르는데, 그냥 js라고 써도 jsx라고 간주하도록 프로그램됨
  //컴포넌트 기반.

  //임포트 // 여기에서는 React의 이름을 자유롭게 바꿔도 됨. React123이라고 써도됨.
  //지워도 됨. 디폴트 하나니까.
  // import React, { useState, useEffect } from 'react'; 
  //{ useState, useEffect } 여기에 정해진 이름은 정확히 써야함.
  import React, { useState } from 'react'; 
  
//모듈
  function App() {

    //
    const [count, setCount] = useState(0);

    //화살표함수에 익숙해지기 =>
    // 방법1  function() {
    //     setCount(count+1)
    //   }

    // 방법2  () => {
    //     setCount(count+1)
    //   }

    //   <button onClick{function() {setCount(count + 1)}}> </button>
//--------------------------------------------------------------
    //여기서 onclick은 콜백함수. 지금당장 실행아니고 클릭되면 실행.
    //그래서 함수로 넣어주는 것임. function()이걸 빼면 바로 실행되어버림.

//----------------------------

// 위에서 const handlebuttonClick = () =>{
//   setCount(count + 1)}
// }선언하고
// 이 부분을 리턴에    <button onClick={handlebuttonClick}></button>넣기도함. 가독성 높아짐

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
  //익스포트. 하나의 파일에서는 디폴트 한 번만 가능.
  //디폴트 여러개 하려면 익스포트하려면 export {useState}
  export default App;