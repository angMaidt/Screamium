import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { createNewStory, getAStory } from '../../store/story'

function Story() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const story = useSelector(state => state.story[storyId])
    // console.log({story})
    // useEffect(() => {
    //     dispatch(getAStory(storyId))
    // }, [storyId])
    let editButton
    if (sessionUser.id === story.authorId) {
        editButton = (
            <Link to={`/stories/${storyId}/edit`}>
                <button>Edit</button>
            </Link>
        )
    }

    return (
        story ?
        <div key={story.id} className='story-container'>
            <h2 className='story-title'>{story.title}</h2>
            <p className='story-body'>{story.body}</p>
            {editButton}
        </div>
        :
        <div>...Loading</div>
    )
}

export default Story;
