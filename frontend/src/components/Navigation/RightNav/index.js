import GenreCard from "../../GenreCard";
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
                            {/* <Link to=''> */}
                                <h3>Classic Horror</h3>
                            {/* </Link> */}
                        </div>
                        <div style={{ color: 'white'}}>
                            <h3>Weird Tales</h3>
                        </div>
                        <div style={{ color: 'white'}}>
                            <h3>Dark Fantasy</h3>
                        </div>
                        <div style={{ color: 'white'}}>
                            <h3>Sci-Fi Horror</h3>
                        </div>
                        <div style={{ color: 'white'}}>
                            <h3>Psychological</h3>
                        </div>
                        <div style={{ color: 'white'}}>
                            <h3>Supernatural</h3>
                        </div>
                    </div>
                    {/* <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div> */}
                </div>
            </div>
    )
}

export default RightNav;
