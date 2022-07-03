import { NavLink } from "react-router-dom";
import './RightNav.css';

function RightNav() {

    return (
        // <div className='right-nav-wrapper'>
                <div className="right-nav-container">
                    <div className='genre-card-wrapper'>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/classic-horror'>
                            <div
                            className='genre-card'
                            style={{ backgroundColor: '#0347AD' }}>
                                <h3>Classic Horror</h3>
                            </div>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dark-fantasy'>
                            <div
                            className='genre-card'
                            style={{ backgroundColor: '#032A85' }}>
                                <h3>Dark Fantasy</h3>
                            </div>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/psychological'>
                        <div
                            className='genre-card'
                            style={{ backgroundColor: '#071E7A' }}>
                                <h3>Psychological</h3>
                            </div>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/sci-fi'>
                        <div
                            className='genre-card'
                            style={{ backgroundColor: '#030E6E' }}>
                                <h3>Sci-Fi Horror</h3>
                            </div>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/supernatural'>
                        <div
                            className='genre-card'
                            style={{ backgroundColor: '#100152' }}>
                                <h3>Supernatural</h3>
                            </div>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/weird-tales'>
                        <div
                            className='genre-card'
                            style={{ backgroundColor: '#11001f' }}>
                                <h3>Weird Tales</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            // </div>
    )
}

export default RightNav;
