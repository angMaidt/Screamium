import { Link, NavLink } from "react-router-dom";

function RightNav() {

    // const genres = [
    //     'Classic Horror',
    //     'Weird Tales',
    //     'Dark Fantasy',
    //     'Sci-Fi Horror',
    //     'Psychological',
    //     'Supernatural'
    // ]

    return (
        <div
            style={{
                backgroundColor: 'rgb(5, 4, 5)',
                height: '100vh',
                width: '25vw',
            }}
            className='right-nav-wrapper'>
                <div
                    style={{
                        position: 'fixed',
                        right: '0',
                        backgroundColor: 'rgb(5, 4, 5)',
                        height: '100vh',
                        width: '25vw',
                    }}
                    className="right-nav-container">
                    <div className='genre-card-wrapper'>
                        <div style={{ color: 'white'}}>
                            <Link to='/classic-horror'>
                                <h3>Classic Horror</h3>
                            </Link>
                        </div>
                        <div style={{ color: 'white'}}>
                            <Link to='/dark-fantasy'>
                                <h3>Dark Fantasy</h3>
                            </Link>
                        </div>
                        <div style={{ color: 'white'}}>
                            <Link to='/psychological'>
                                <h3>Psychological</h3>
                            </Link>
                        </div>
                        <div style={{ color: 'white'}}>
                            <Link to='/sci-fi'>
                                <h3>Sci-Fi Horror</h3>
                            </Link>
                        </div>
                        <div style={{ color: 'white'}}>
                            <Link to='/supernatural'>
                                <h3>Supernatural</h3>
                            </Link>
                        </div>
                        <div style={{ color: 'white'}}>
                            <Link to='/weird-tales'>
                                <h3>Weird Tales</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RightNav;
