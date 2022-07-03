import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Redirect, useLocation } from 'react-router-dom';
import './story.css';

import { destroyAStory, getAllStories } from '../../store/story';
import { getAllComments } from '../../store/comment';
import EditStoryForm from './EditStoryForm';
import CommentsView from '../Comments/CommentsView.js';

function Story() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    // console.log(storyId)

    const sessionUser = useSelector(state => state.session.user);
    const story = useSelector(state => state.story[storyId]);
    const comments = useSelector(state => state.comment)

    const [viewComments, setViewComments] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllStories())
            await dispatch(getAllComments(storyId))
        }
        fetchData().catch(console.error)
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
                <button id='edit-button' onClick={(e) => setShowEditForm(true)}>
                    <i class="fa-solid fa-pen"></i>
                </button>
            )
            cancelEditButton = (
                <button onClick={(e) => setShowEditForm(false)}
                >Cancel Edit</button>
            )
            deleteButton = (
                <button id='delete-button' onClick={(e) => { handleDelete(e)}}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            )
        }
    }

    const storyComments = Object.values(comments).filter(comment => {
        return comment.storyId === Number(storyId)
    })

    return (
        story ?
            <div className='story-view'>
                <div className='story-main-area'>
                    <div className='story-title-container'>
                        <div className='title-linebreak'></div>
                        <div className='title-linebreak'></div>
                        <h2 className='story-title big'>{story.title}</h2>
                        <p className='by'>By</p>
                        {story.User && <p className='story-author'>{story.User.username}</p>}
                        <div className='title-linebreak'></div>
                        <div className='title-linebreak'></div>
                    </div>
                    <p className='story-body story'>{story.body}</p>
                    <div className='story-action-buttons'>
                        {editButton}
                        {deleteButton}
                    {comments &&
                            <button
                            id='show-comments'
                            onClick={() => setViewComments(!viewComments)}>
                                <i class="fa-solid fa-comment"></i>
                            </button>
                    }
                    </div>
                    {editForm}
                    {showEditForm && cancelEditButton}
                </div>
                {viewComments && <div className='site-blocker' onClick={() => setViewComments(!viewComments)}></div>}
                <div className='comment-side-panel'
                    style={viewComments ? {boxShadow: '-5px 1px 15px 0px rgba(187, 187, 187, 0.3)'} : {}}
                >
                    <CommentsView visible={viewComments} storyComments={storyComments} storyId={storyId}/>
                </div>
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
