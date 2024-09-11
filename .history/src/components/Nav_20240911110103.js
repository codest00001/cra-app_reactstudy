import {Link} from 'react-router-dom';

const Nav = () => {

    const marginRight = {marginRight:"10px"}
    return(
<>
<div>
<Link to="/" style={marginRight}>Home</Link>
<Link to="/about" style={marginRight}>About</Link>
<Link to="/todolists" style={marginRight}>TodoLists</Link>

</div>

</>

    )

}

export default Nav;