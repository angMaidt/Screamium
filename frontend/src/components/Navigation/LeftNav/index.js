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
                        <img className='icon' id='home-icon' src='/images/icons/home.png'/>
                    </NavLink>
                    {user &&
                    <NavLink to='/my-stories'>
                        <img  className='icon' id='my-story-icon' src='/images/icons/page-icon.png'/>
                    </NavLink>}
                </div>
                <div className="nav-publish">
                    <div className='nav-linebreak'></div>
                    <NavLink to='/stories/new'>
                        <img className='icon' id='publish-icon' src='/images/icons/write-icon.png'/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
