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
                        <i
                            className="fa-solid fa-house-chimney"
                            title='Home'></i>
                    </NavLink>
                    {user &&
                    <NavLink to='/my-stories'>
                        <i
                            className="fa-solid fa-bookmark"
                            title='My Stories'></i>
                    </NavLink>}
                </div>
                <div className="nav-publish">
                    <div className='nav-linebreak'></div>
                    <NavLink to='/stories/new'>
                        <i
                            className="fa-solid fa-pen-to-square"
                            title='Publish a new Story'></i>
                    </NavLink>
                    <a href='https://github.com/angMaidt'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
