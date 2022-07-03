import { Link } from 'react-router-dom';
import './StoryCard.css'

function StoryCard({ story }) {

    const genreNameParser = (genreId) => {
        let genreName

        if (genreId === 1) {
            genreName = 'Classic Horror'
        } else if (genreId === 2) {
            genreName = 'Weird Tales'
        } else if (genreId === 3) {
            genreName = 'Dark Fantasy'
        } else if (genreId === 4) {
            genreName = 'Sci-Fi Horror'
        } else if (genreId === 5) {
            genreName = 'Psychological'
        } else if (genreId === 6) {
            genreName = 'Supernatural'
        }
        return genreName;
    }

    const genre = genreNameParser(story?.genreId)

    return (
        <div className="story-card-container">
                <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                    <div className='story-container'
                    key={story.id}
                    style={{borderBottom: '1px solid black'}}>
                        {genre &&
                            <div
                                className='story-image-container'>
                                    {genre}
                            </div>
                        }
                        <div className='story-all-text-container'>
                            <h2 className='story-title'>{story.title}</h2>
                            {story.User && <h3 className='story-username'>by {story.User.username}</h3>}
                            <div className='story-body-container'>
                                <p className='story-body'>{story.body}</p>
                            </div>
                            <div className='story-footer-elements-container'>
                                <p className='story-comments'>{story.Comments && story.Comments.length} comments</p>
                                <div className='time-to-read-container'>
                                    {story.body && story.body.length <= 100 && <p className='time-to-read'> 1 min read</p>}
                                    {story.body && story.body.length >= 101 && story.body.length <= 999 && <p className='time-to-read'> 3 min read</p>}
                                    {story.body && story.body.length >= 1000 && story.body.length <= 2000 && <p className='time-to-read'> 5 min read</p>}
                                    {story.body && story.body.length >= 2001 && <p className='time-to-read'> 10+ min read</p>}
                                </div>
                                <div className='genre-container'>{genre}</div>
                            </div>
                        </div>
                    </div>
                </Link>
        </div>
    )
}

export default StoryCard;
