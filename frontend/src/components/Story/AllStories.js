import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../store/story'
import Story from './index'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    // console.log(typeof stories); =obj
    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    return (
        Object.values(stories).map(story => (
            <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                <div className='story-container'>
                    <h2>{story.title}</h2>
                    <p>{story.body}</p>
                </div>
            </Link>
        ))
    )
}

export default AllStories;
