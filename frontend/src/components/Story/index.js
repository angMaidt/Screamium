import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './story.css';

import { destroyAStory, getAllStories } from '../../store/story';
import { getAllComments } from '../../store/comment';
import EditStoryForm from './EditStoryForm';
import CommentsView from '../Comments/CommentsView.js';
import Bookmark from './Bookmark';

function Story() {
    const dispatch = useDispatch();
    const { storyId } = useParams();

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

    let editButton, deleteButton, cancelEditButton, bookmarkButton
    if (story && sessionUser) {
        if (sessionUser.id === story.authorId) {
            editButton = (
                <button id='edit-button' onClick={(e) => setShowEditForm(true)}>
                    <i
                    className="fa-solid fa-pen"
                    title='Edit this Story'></i>
                </button>
            )
            cancelEditButton = (
                <button onClick={(e) => setShowEditForm(false)}
                >Cancel Edit</button>
            )
            deleteButton = (
                <button id='delete-button' onClick={(e) => { handleDelete(e)}}>
                    <i
                        className="fa-solid fa-trash"
                        title='Delete this Story'></i>
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
                        <Bookmark story={story} singleStory={true}/>
                        {editButton}
                        {deleteButton}
                    {comments &&
                            <button
                                id='show-comments'
                                onClick={() => setViewComments(!viewComments)}>
                                <i
                                    className="fa-solid fa-comment"
                                    title='View Comments'></i>
                            </button>
                    }
                    </div>
                    {editForm}
                    {showEditForm && cancelEditButton}
                </div>
                {viewComments && <div className='site-blocker' onClick={() => setViewComments(!viewComments)}></div>}
                <div className='comment-side-panel'>
                    <CommentsView visible={viewComments} storyComments={storyComments} storyId={storyId}/>
                </div>
            </div>
        :
            <div id='no-longer-exists'>
                <h3 id='publish-a-story'>Uh-oh, looks like this story no longer exists! Go back to</h3>
                    <Link style={{textDecoration: 'none', color:'red'}} to='/' id='stories-link'>
                        <button id='publish-a-story'>Stories</button>
                    </Link>
            </div>
    )
}

export default Story;
