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
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleButtonClick = () => {
    // 타이틀과 콘텐트를 가지고 {}를 똑같이 만들어서 list 뒤에다 추가하기
    const obj = {
      createdAt: new Date(),
      title: title,
      content: content
    };

    setList((prev) => {
      return [obj, ...prev];
    });

    setTitle(''); // 입력 필드 초기화
    setContent(''); // 입력 필드 초기화
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="제목 입력" />
      <input value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="내용 입력" />
      <button onClick={handleButtonClick}>save</button>

      {
        list.map((item, index) => {
          return (
            <div >
              {item.createdAt.toLocaleString()} / {item.title} / {item.content}
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
