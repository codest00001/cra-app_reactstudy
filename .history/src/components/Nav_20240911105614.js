import {Link} from 'react-router-dom';

const Nav = () => {
    return(
<>
<div>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/todolists">TodoLists</Link>

</div>

</>

    )

}

export default Nav;