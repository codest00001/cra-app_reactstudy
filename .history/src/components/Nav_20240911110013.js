import {Link} from 'react-router-dom';

const Nav = () => {

    const marginRight = {marginRight:"10px"}
    return(
<>
<div>
<Link href="/" style={marginRight}>Home</Link>
<Link href="/about">About</Link>
<Link href="/todolists">TodoLists</Link>

</div>

</>

    )

}

export default Nav;