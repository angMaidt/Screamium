import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createNewStory, getAStory } from '../../store/story'

function Story() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const story = useSelector(state => state.story[storyId])
    // console.log({story})
    // useEffect(() => {
    //     dispatch(getAStory(storyId))
    // }, [storyId])

    return (
        story ?
        <div key={story.id} className='story-container'>
            <h2 className='story-title'>{story.title}</h2>
            <p className='story-body'>{story.body}</p>
        </div>
        :
        <div>...Loading</div>
    )
}

export default Story;
