import React, { useState, useEffect } from 'react'; 



function Timer(){
  return(
    <>
    <div>Timer</div>
    </>
  )
}


function App() {
  const [show, setShow] = useState(false);

// 이 안에서는 if else while switch 같은 구문사용 불가능
  return (
    <>
    <div>hello world!</div>
    <button>show</button>
    {show && <Timer />}
    </>
  );
}

export default App;




// import React, { useState, useEffect } from 'react'; 

// function App() {
// const [count1, setCount1] = useState(0)
// const [count2, setCount2] = useState(0)

// useEffect(()=>{
//   console.log('매번')
// })

// useEffect(()=>{
//   console.log('최초만')
// },[])

// useEffect(()=>{
//   console.log('count1만')
// },[count1])

// useEffect(()=>{
//   console.log('count2만')
// },[count2])

// useEffect(()=>{
//   console.log('둘다')
// },[count1,count2])

// console.log('render')

//   return (
//     <div>
//      <button onClick={() => {setCount1(count1 +1)}}>count1!</button>{count1}
//      <br/>
//      <button onClick={() => {setCount2(count2 +1)}}>count2!</button>{count2}

//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'; 

// function App() {
//   const [list, setList] = useState([
//     //list바뀔때마다 화면 리랜더링된다.장점이자 단점
//     //데이터베이스 데이터를 만들어보기
//     {
//       createdAt : new Date(),
//       title : '제목1 입니다',
//       content : '본문1 입니다'
//     },
//     {
//       createdAt : new Date(),
//       title : '제목2 입니다',
//       content : '본문2 입니다'
//     }
//   ]);

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleButtonClick = () => {
//     // 타이틀과 콘텐트를 가지고 {}를 똑같이 만들어서 list 뒤에다 추가하기
//     const obj = {
//       createdAt: new Date(),
//       title: title,
//       content: content
//     };

//     setList((prev) => {
//       return [obj, ...prev];
//     });

//     setTitle(''); // 입력 필드 초기화
//     setContent(''); // 입력 필드 초기화
//   };

//   return (
//     <div>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"  />
//       <input value={content} onChange={(e) => setContent(e.target.value)} type="text"  />
//       <button onClick={handleButtonClick}>save</button>

//       {
//         list.map((item, index) => {
//           return (
//             <div >
//               {item.createdAt.toLocaleString()} / {item.title} / {item.content}
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }

// export default App;
