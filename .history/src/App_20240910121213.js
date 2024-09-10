import React, { useState } from 'react'; 

function App() {
  const [list, setList] = useState([

    //데이터베이스 데이터를 만들어보기
{
  createdAt : new Date(),
  title : '제목1 입니다',
  content : '본문1 입니다'
},
{
  createdAt : new Date(),
  title : '제목2 입니다',
  content : '본문2 입니다'
}
  ])


  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const handleButtonClick = () => {
    // 타이틀과 콘텐트를 가지고 {}를 똑같이 만들어서 list 뒤에다 추가하기
    const obj ={
      createdAt: new Date(),
      title: title,
      content: content
  }

  setList((prev) => {
    return [...prev, obj]
  });


return (
  <div>
   <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" />
   <input value={content} onChange={(e) => {setContent(e.target.value)}} type="text" />
   <button onClick={handleButtonClick}>save</button>

   {
    list.map((item) => {
      return <div>{item.createdAt.toLocalString()} / {item.title} / {item.content}</div>

   })
  }

<div>2024-09-10..... / 제목1 / 본문1 </div>
</div>
);
}
export default App;