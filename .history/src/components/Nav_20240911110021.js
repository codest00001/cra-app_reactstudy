import {Link} from 'react-router-dom';

const Nav = () => {

    const marginRight = {marginRight:"10px"}
    return(
<>
<div>
<Link href="/" style={marginRight}>Home</Link>
<Link href="/about" style={marginRight}>About</Link>
<Link href="/todolists" style={marginRight}>TodoLists</Link>

</div>

</>

    )

}

export default Nav;