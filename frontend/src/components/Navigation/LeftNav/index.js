import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from "../ProfileButton";

function LeftNav() {
    const user = useSelector(state => state.session.user);

    return (
        <div
            style={{
                backgroundColor: 'rgb(5, 4, 5)',
                height: '100vh',
                width: '25vw',
            }}
            className='left-nav'>
            <div className='left-nav-container' style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink to='/' style={{textDecoration: 'none'}}>Stories</NavLink>
                <div style={{ color: 'white'}}>My Stories</div>
                <NavLink to='/stories/new' style={{textDecoration: 'none'}}>Publish Story</NavLink>
            </div>
        </div>
    )
}

export default LeftNav;
