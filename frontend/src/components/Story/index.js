import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link, Redirect } from 'react-router-dom';
import './story.css';

import { destroyAStory, getAllStories } from '../../store/story';
import EditStoryForm from './EditStoryForm';

function Story() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const story = useSelector(state => state.story[storyId]);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    useEffect(() => {
        if(showEditForm) setShowEditForm(false)
    },[])

    const handleDelete = async (e) => {
        e.preventDefault()

        window.alert('are you sure you want to delete?')
        await dispatch(destroyAStory(storyId))
    }

    let editForm;
    if (showEditForm) {
        editForm = (
            <div>
                <EditStoryForm setShowEditForm={setShowEditForm}/>
            </div>
        )
    }

    let editButton, deleteButton, cancelEditButton
    if (story && sessionUser) {
        if (sessionUser.id === story.authorId) {
            editButton = (
                <button onClick={(e) => setShowEditForm(true)}
                >Edit</button>
            )
            cancelEditButton = (
                <button onClick={(e) => setShowEditForm(false)}
                >Cancel Edit</button>
            )
            deleteButton = (
                <button id='delete-button' onClick={(e) => {
                    handleDelete(e)
                }}>Delete</button>
            )
        }
    }

    return (
        story ?
            <div className='story-container individual'>
                {story.User && <h3 className='story-author'>{story.User.username}</h3>}
                <h2 className='story-title'>{story.title}</h2>
                {story.imageUrl &&
                    <div className='story-image-container'
                    style={{backgroundImage: `url(${story.imageUrl})`}}>
                    </div>
                }
                <p className='story-body'>{story.body}</p>
                {editButton}
                {showEditForm && cancelEditButton}
                {deleteButton}
                {editForm}
            </div>
        :
            <div>
                "Uh-oh, looks like this story doesn't exist! Go back to
                    <Link to='/stories' id='stories-link'>
                        Stories
                    </Link>
            </div>
    )
}

export default Story;
