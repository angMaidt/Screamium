import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from "../ProfileButton";

function LeftNav() {
    const user = useSelector(state => state.session.user);

    return (
        <div
            className="left-nav-wrapper"
            style={{
                backgroundColor: 'rgb(5, 4, 5)',
                height: '100vh',
                width: '25vw',
            }}>
            <div
                style={{
                    position: 'fixed',
                    left: '0',
                    backgroundColor: 'rgb(5, 4, 5)',
                    height: '100vh',
                    width: '25vw',
                }}
                className='left-nav-container'>
                    <NavLink to='/' style={{textDecoration: 'none'}}>Stories</NavLink>
                    <div style={{ color: 'white'}}>My Stories</div>
                    <NavLink to='/stories/new' style={{textDecoration: 'none'}}>Publish Story</NavLink>
            </div>
        </div>
    )
}

export default LeftNav;
