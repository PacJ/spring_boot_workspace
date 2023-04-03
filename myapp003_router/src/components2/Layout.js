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
                        {/* <Link to='/about'>About</Link> */}
                        <NavLink to='/about?name=홍길동&loc=서울' style={activeStyle}>About</NavLink>
                    </li>
                    <li>
                        {/* <Link to='/dashboard'>Dashboard</Link> */}
                        <NavLink to='/dashboard' style={activeStyle}>Dashboard</NavLink>
                    </li>
                    <li>
                        {/* <Link to='/product'>Product</Link> */}
                        <NavLink to='/product' style={activeStyle}>Product</NavLink>
                    </li>
                    <li>
                        {/* <Link to='/nothing-here'>Nothing Here</Link> */}
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