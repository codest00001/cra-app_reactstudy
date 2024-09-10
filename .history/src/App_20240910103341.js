import React, { useState } from 'react'; 

function App() {

return (
  <div>
    <input type="text" />
  <button>Save</button>
  </div>
);
}
  export default App;





// import React, { useState } from 'react'; 

// function App() {
// const [input, setInput] = useState('초기값');

// const handleInputChange = (event) => {
// setInput(event.target.value)
// }

// const handleButtonClick = () => {
//   setInput('')
// }

// console.log('render!letterchanged')
// return (
//   //<>비어있는 꺾쇠의 이유 : 불필요한 엘리멘트가 끼어들지 않게 하도록.
//   //<div>가 있는 자체가 css다룰 때 하나의 영역이 되어버리므로.
//   //<div>를 쓰지 않기 위해 비어있는 <>꺽쇠 형태도 되도록 한 것임. 리액트에만 존재. 프래그먼트라고 부름.
//   //그리고 div는 리턴 안에 하나만 존재해야한다.
//   <> 
//   <input onChange ={handleInputChange}
//   type="text" />
//   <button onClick = {handleButtonClick}
//   >clear</button>
//   <div>{input}</div>
//   </>  
// );
// }
//   export default App;




// import React, { useState } from 'react'; 

// function App() {
// const [input, setInput] = useState('초기값');

// const handleInputChange = (event) => {
// //input의 값이 변하면 이 함수가 항상 실행됨
// // console.log(event.target.value)
// setInput(event.target.value)
// }

// const handleButtonClick = () => {
//   console.log('button clicked')
// }

// //리턴하고 괄호안에 html 리턴해주는데, 중괄호안에 함수명만 던져줌.
// //그 on 이벤트가 발생했을 때, onchange라든가 onclick을 실행했을 때 그 함수를 실행하라고 해줘야 하는 것.
// //이벤트 안에는 함수명만 넣어.
// //{handleInputChange()} 중괄호 안에 ()넣어버리면 함수를 실행해서 넣는 격이 되므로, 함수 이름만 넣을 것.

// //그 외에 <div>안에 넣을 때는 변수명만 넣는 게 아니라 함수를 넣어야 하는 것이고.

// //함수나 오브젝트는 하나를 바꾸면 다 바뀐다.

// console.log('render!z')
// return (
//   <>
//   <input onChange ={handleInputChange}
//   type="text" />
//   <button onClick = {handleButtonClick}
//   >clear</button>
//   <div>{input}</div>
//   </>  
// );
// }

//   export default App;



// //인풋에 넣는 것을 바뀌는 족족 아래 레이블에 띄우게 하기
// //이경우는 문자니까 useState
// //다른 플랫폼에서는 인풋창에 그냥 입력만 받고 세이브를 누르면 그 때서야 최종 인풋창에 있는 것을 꺼내오는 것임

// import React, { useState } from 'react'; 

// function App() {
// const [input, setInput] = useState('');
// const handleInputChange = () => {
// //input의 값이 변하면 이 함수가 항상 실행됨
// console.log('input pressed')
// }

// return (
//   <>
//   <input onChange ={handleInputChange}
//   type="text" />
//   <button >Save</button>
//   </>
// );
// }

//   export default App;




// // import React, { useState } from 'react'; 

// // function App() {
// //   const [count, setCount] = useState(0);

// //   const handleButtonClick = () => {
// //   setCount(count + 1)
// // }

// // return (
// //   <div>
// //     <p>You clicked {count} times</p>
// //     <button onClick={handleButtonClick}>
// //       Click me
// //     </button>
// //   </div>
// // );
// // }

// //   export default App;

// // 리액트가 제공하는 HOOK중에 하나임 : useState : 호출되면 변수 2개를 어레이형태로 뱉어냄. 
// // 앞의 것은 변수, 하나는 변수함수. 항상 뒤의 set함수를 통해서 변수를 변경가능함.
// // [aaa, bbb]라고 써도되지만 뒤의 것을 set으로 적고 만드는 게 일반적.
// // 첫번째 변수를 직접 정하면 안됨. 일반변수 방식 count = count + 1 이런식으로 안씀.
// // 첫번째 변수가 바뀌면 app 함수 다 다시실행함. 리랜더링.
// // 그러나 값은 그대로 두고 변화. 값이 0으로 내려가지 않음.
// // 바뀐 값이 화면에 다시 그려지게 하기 위함이다. useState 쓰는 이유다.
//  //클릭누를때마다 숫자가 0으로 초기화 되지 않으면서도 숫자증가된것이 화면에 반영된다. 

//  //클릭누르면 그 아래 다시 실행하고 +1 올림.


// //   import React, { useState } from 'react'; 

// // function App() {
// //   const [count, setCount] = useState(0);

// //   const handleButtonClick = () => {
// //   setCount(count + 1)
// // }

// // return (
// //   <div>
// //     <p>You clicked {count} times</p>
// //     <button onClick={handleButtonClick}>
// //       Click me
// //     </button>
// //   </div>
// // );
// // }

// //   export default App;


// // //함수시작
// // //여기에 js 사용가능.
// // //여기서 생성된 것을 아래 html에서 사용 가능
// //  //여기에 html만들어서 넣은 것. 
// //   //원래는 jsx라고 부르는데, 그냥 js라고 써도 jsx라고 간주하도록 프로그램됨
// //   //컴포넌트 기반.

// //   //임포트 // 여기에서는 React의 이름을 자유롭게 바꿔도 됨. React123이라고 써도됨.
// //   //지워도 됨. 디폴트 하나니까.
// //   // import React, { useState, useEffect } from 'react'; 
// //   //{ useState, useEffect } 여기에 정해진 이름은 정확히 써야함.
// //   import React, { useState } from 'react'; 

  
  
// // //모듈
// //   function App() {

// //     //setCount함수를 호출해서 count를 바꾸는 함수 [a, setA] 식으로 이름은
// //     //자기가 정하는 것. 적어도 됨.
// //     const [count, setCount] = useState(0);

// //     //화살표함수에 익숙해지기 =>
// //     // 방법1  function() {
// //     //     setCount(count+1)
// //     //   }

// //     // 방법2  () => {
// //     //     setCount(count+1)
// //     //   }

// //     //   <button onClick{function() {setCount(count + 1)}}> </button>
// // //--------------------------------------------------------------
// //     //여기서 onclick은 콜백함수. 지금당장 실행아니고 클릭되면 실행.
// //     //그래서 함수로 넣어주는 것임. function()이걸 빼면 바로 실행되어버림.

// // //----------------------------

// // // 위에서 const handlebuttonClick = () =>{
// // //   setCount(count + 1)}
// // // }선언하고
// // // 이 부분을 리턴에    <button onClick={handlebuttonClick}></button>넣기도함. 가독성 높아짐

// // const handleButtonClick = () => {
// //   setCount(count + 1)
// // }

// // return (
// //   <div>
// //     <p>You clicked {count} times</p>
// //     <button onClick={handleButtonClick}>
// //       Click me
// //     </button>
// //   </div>
// // );
// // }
// //   export default App;

// //     //   return (
// //   //     <div>
// //   //       <p>You clicked {count} times</p>
// //   //       <button onClick={() => setCount(count + 1)}>
// //   //         Click me
// //   //       </button>
// //   //     </div>
// //   //   );
// //   // }
  
// //   //익스포트. 하나의 파일에서는 디폴트 한 번만 가능.
// //   //디폴트 여러개 하려면 익스포트하려면 export {useState}