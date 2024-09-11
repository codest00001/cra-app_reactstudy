import {Link} from 'react-router-dom'

const About = () => {
    return (
        <>
        I'm About component <br/>
        <Link to="/">go to home</Link>
        <Link to="/todolist">go to todolist</Link>
        </>
    )
}

export default About;