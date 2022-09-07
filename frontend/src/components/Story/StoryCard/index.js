import { Link } from 'react-router-dom';
import './StoryCard.css'

export const genreNameParser = (genreId) => {
    let genreName, genreColor

    if (genreId === 1) {
        genreColor= 'var(--classic)'
        genreName = 'Classic Horror'
    } else if (genreId === 2) {
        genreColor= 'var(--weird)'
        genreName = 'Weird Tales'
    } else if (genreId === 3) {
        genreColor = 'var(--fantasy)'
        genreName = 'Dark Fantasy'
    } else if (genreId === 4) {
        genreColor = 'var(--sci-fi)'
        genreName = 'Sci-Fi Horror'
    } else if (genreId === 5) {
        genreColor = 'var(--psychological)'
        genreName = 'Psychological'
    } else if (genreId === 6) {
        genreColor = 'var(--supernatural)'
        genreName = 'Supernatural'
    }
    return [ genreName, genreColor ];
}

function StoryCard({ story }) {
    const genre = genreNameParser(story?.genreId)
    const [genreName, genreColor] = genre

    return (
        <div className="story-card-container">
            <Link style={{textDecoration: 'none', color: 'black'}} key={story.id} to={`/stories/${story.id}`}>
                <div className='story-container'
                key={story.id}
                style={{borderBottom: '1px solid black'}}>
                    <div className='story-all-text-container'>
                        {/* <div className='card-top'> */}
                            <h2 className='story-title'>{story.title}</h2>
                            {story.User && <p className='story-username'>by {story.User.username}</p>}
                        {/* </div> */}
                        <div className='story-body-container'>
                            <p className='story-body preview'>{story.body}</p>
                        </div>
                        <div className='story-footer-elements-container'>
                            <p className='story-comments'>{story.Comments && story.Comments.length} comments</p>
                            <div className='time-to-read-container'>
                                {story.body && story.body.length <= 100 && <p className='time-to-read'> 1 min read</p>}
                                {story.body && story.body.length >= 101 && story.body.length <= 999 && <p className='time-to-read'> 3 min read</p>}
                                {story.body && story.body.length >= 1000 && story.body.length <= 2000 && <p className='time-to-read'> 5 min read</p>}
                                {story.body && story.body.length >= 2001 && <p className='time-to-read'> 10+ min read</p>}
                            </div>
                            <div className='genre-container' style={{ backgroundColor: genreColor }} >
                                <p>{genreName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default StoryCard;
