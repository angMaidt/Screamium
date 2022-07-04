import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './LeftNav.css';

function LeftNav() {
    const user = useSelector(state => state.session.user);

    return (
        <div className="left-nav-wrapper">
            <div className='left-nav-container'>
                <div className="home-and-story-container">
                    <NavLink to='/'>
                        <i className="fa-solid fa-house-chimney"></i>
                    </NavLink>
                    {user &&
                    <NavLink to='/my-stories'>
                        <i className="fa-solid fa-bookmark"></i>
                    </NavLink>}
                </div>
                <div className="nav-publish">
                    <div className='nav-linebreak'></div>
                    <NavLink to='/stories/new'>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <a>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
