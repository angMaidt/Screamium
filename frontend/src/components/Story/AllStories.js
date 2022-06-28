import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllStories } from '../../store/story'
import Story from './index'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    // const handleStoryClick = (e) => {
    //     e.preventDefault()
    // }

    return (
        Object.values(stories).map(story => (
            <Link style={{textDecoration: 'none'}} key={story.id} to={`/stories/${story.id}`}>
                <div className='story-container' key={story.id}>
                    <h2>{story.title}</h2>
                    <p>{story.body}</p>
                </div>
            </Link>
            // <div onClick={(e) => handleStoryClick(e)}>
            //     <Story story={story}/>
            // </div>
        ))
    )
}

export default AllStories;
