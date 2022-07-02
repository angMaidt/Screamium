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
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                    left: '0',
                    backgroundColor: 'rgb(5, 4, 5)',
                    height: '100vh',
                    width: '25vw',
                }}
                className='left-nav-container'>
                    <NavLink to='/'>Stories</NavLink>
                    <NavLink to='/my-stories'>My Stories</NavLink>
                    <NavLink to='/stories/new'>Publish Story</NavLink>
            </div>
        </div>
    )
}

export default LeftNav;
