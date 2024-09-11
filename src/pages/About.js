import {Link} from 'react-router-dom'

const About = () => {
    return (
        <>
        현재는 어바웃페이지입니다. <br/>
        <Link to="/">홈으로가려면 누르시오</Link>
        <br/>
        <Link to="/todolists">투두리스츠</Link>

        </>
    )
}

export default About;