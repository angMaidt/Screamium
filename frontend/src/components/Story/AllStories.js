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
        (stories &&
            Object.values(stories).map(story => (
                <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                    <div className='story-container'
                        key={story.id}
                        style={{borderBottom: '1px solid black'}}>
                        <h2 className='story-title'>{story.title}</h2>
                        {story.User && <h3>by {story.User.username}</h3>}
                        <p>{story.body}</p>
                        <p>{Object.keys(story.Comments).length} comments</p>
                    </div>
                </Link>
            ))
        )
    )
}

export default AllStories;
