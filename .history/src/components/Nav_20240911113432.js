import {Link} from 'react-router-dom';

const Nav = () => {

    const marginRight = {marginRight:"10px"}
    return(

<>

{/* 속성은 순서 무관 적용됨. to와 style의 위치 상관없이 */}

<nav>
<Link to="/" style={marginRight}>Home</Link>
<Link to="/about" style={marginRight}>About</Link>
<Link to="/todolists" style={marginRight}>TodoLists</Link>
</nav>
</>
    )

}

export default Nav;