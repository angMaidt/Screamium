import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

import { destroyAStory, getAllStories } from '../../store/story';

function Story() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { storyId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const story = useSelector(state => state.story[storyId])

    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    const handleDelete = async (e) => {
        e.preventDefault()

        window.alert('are you sure you want to delete?')
        await dispatch(destroyAStory(storyId))
        history.push('/stories')
    }

    let editButton, deleteButton
    if (sessionUser.id === story.authorId) {
        editButton = (
            <Link to={`/stories/${storyId}/edit`}>
                <button>Edit</button>
            </Link>
        )
        deleteButton = (
            <button id='delete-button' onClick={(e) => handleDelete(e)}>Delete</button>
        )
    }

    return (
        story ?
        <div key={story.id} className='story-container'>
            <h2 className='story-title'>{story.title}</h2>
            <p className='story-body'>{story.body}</p>
            {editButton}
            {deleteButton}
        </div>
        :
        <div>...Loading</div>
    )
}

export default Story;
