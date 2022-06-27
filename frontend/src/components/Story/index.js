import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../store/story'

function Story() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    // console.log(typeof stories); =obj
    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    return (
        Object.values(stories).map(story => (
            <div key={story.id} className='story-container'>
                <h2 class='story-title'>{story.title}</h2>
                <p class='story-body'>{story.body}</p>
            </div>
        ))
    )
}

export default Story;
