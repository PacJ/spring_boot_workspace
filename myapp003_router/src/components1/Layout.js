import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = ({isActive}) => {
    return {
        color: isActive ? 'green' : '',
        fontSize: isActive ? '2rem' : '',
    };
};

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' style={activeStyle}>Home</NavLink>
                    </li>
                    <li>
                        {/* <a>요소는 전체를 렌더링하므로 <Link> 또는 <NavLink>를 사용한다. */}
                        {/* <a href='/about'>About</a> //Link는 a href와 같다. a태그는 html 전체를 렌더링. */}
                        <NavLink to='/about' style={activeStyle}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard' style={activeStyle}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nothing-here' style={activeStyle}>Nothing Here</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};

export default Layout;