import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../store/story'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    return (
        Object.values(stories).map(story => (
            <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                <div className='story-container' key={story.id}>
                    <h2>{story.title}</h2>
                    <h3>{story.User.username}</h3>
                    <p>{story.body}</p>
                    <p>{Object.keys(story.Comments).length} comments</p>
                </div>
            </Link>
            // <div onClick={(e) => handleStoryClick(e)}>
            //     <Story story={story}/>
            // </div>
        ))
    )
}

export default AllStories;
