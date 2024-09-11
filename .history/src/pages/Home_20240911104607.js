// const Home = () => {

//     //a 태그를 쓰는 경우 즉 about 갈 때 깜빡거림. 풀페이지를 로드한다는 것임. 타이틀도 한 번 리셋이 되는 것임.
//     //페이지 내에서 이동할 때는 link 사용하기. 라우터에서 이동할 때는 link 사용해야 리액트 기능 제대로 쓰는 것임.
//     return (
//         <>
//         I'm Home component <br/>
//         <a href="/about">go to about</a>
//         </>
//     )
// }

// export default Home;


import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        현재는 홈페이지입니다. <br/>
        <Link to="/about">어바웃으로 가시려면 누르시오.</Link>
        </>
    )
}

export default Home;