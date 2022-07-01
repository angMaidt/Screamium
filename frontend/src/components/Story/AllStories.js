import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../store/story'
import { defaultImage } from './StoryForm';
import './AllStories.css'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    const comments = useSelector(state => state.comments)

    const [imageSrc, setImgSrc] = useState();

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
            //TODO: Need to refactor this page so it displays story components, pass comments down as props
            // await dispatch(getAllComments(storyId))
            // dispatch(resetAllComments())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            Object.values(stories).map(story => (
                <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                    <div className='story-container stories'
                    key={story.id}
                    style={{borderBottom: '1px solid black'}}>
                        {story.imageUrl &&
                            <div className='story-image-container'
                            style={{backgroundImage: `url(${story.imageUrl})`}}>
                            </div>
                        }
                        <div className='story-all-text-container'>
                            <h2 className='story-title'>{story.title}</h2>
                            {story.User && <h3 className='story-username'>by {story.User.username}</h3>}
                            <div className='story-body-container'>
                                <p className='story-body stories'>{story.body}</p>
                            </div>
                            <div className='story-footer-elements-container'>
                                <p className='story-comments'>{story.Comments && story.Comments.length} comments</p>
                                <div className='time-to-read-container'>
                                    {story.body && story.body.length <= 100 && <p className='time-to-read'> 1 min read</p>}
                                    {story.body && story.body.length >= 101 && story.body.length <= 999 && <p className='time-to-read'> 3 min read</p>}
                                    {story.body && story.body.length >= 1000 && story.body.length <= 2000 && <p className='time-to-read'> 5 min read</p>}
                                    {story.body && story.body.length >= 2001 && <p className='time-to-read'> 10+ min read</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        )
    )
}

export default AllStories;
