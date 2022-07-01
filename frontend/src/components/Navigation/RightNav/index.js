import GenreCard from "../../GenreCard";
import { NavLink } from "react-router-dom";

function RightNav() {

    const genres = [
        'Classic Horror',
        'Weird Tales',
        'Dark Fantasy',
        'Sci-Fi Horror',
        'Psychological',
        'Supernatural'
    ]

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
                    <div
                        className='genre-card-wrapper'
                        style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                        {/* {genres.forEach(genre => {
                            <div style={{ color:'purple' }} key={genre}>{genre}</div>
                        })} */}

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
