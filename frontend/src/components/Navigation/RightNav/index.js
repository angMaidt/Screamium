import { NavLink } from "react-router-dom";
import './RightNav.css';

function RightNav() {

    return (
        <div className="right-nav-container">
            <div className='genre-card-wrapper'>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/classic-horror'>
                    <div
                        className='genre-card'
                        style={{ backgroundColor: 'var(--classic)' }}>
                            <h3>Classic Horror</h3>
                    </div>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dark-fantasy'>
                    <div
                        className='genre-card'
                        style={{ backgroundColor: 'var(--fantasy)' }}>
                            <h3>Dark Fantasy</h3>
                    </div>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/psychological'>
                <div
                    className='genre-card'
                    style={{ backgroundColor: 'var(--psychological)' }}>
                        <h3>Psychological</h3>
                    </div>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/sci-fi'>
                <div
                    className='genre-card'
                    style={{ backgroundColor: 'var(--sci-fi)' }}>
                        <h3>Sci-Fi Horror</h3>
                    </div>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/supernatural'>
                <div
                    className='genre-card'
                    style={{ backgroundColor: 'var(--supernatural)' }}>
                        <h3>Supernatural</h3>
                    </div>
                </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/weird-tales'>
                <div
                    className='genre-card'
                    style={{ backgroundColor: 'var(--weird)' }}>
                        <h3>Weird Tales</h3>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default RightNav;
