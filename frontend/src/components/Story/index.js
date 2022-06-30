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
    const location = useLocation();
    const { storyId } = useParams();
    // console.log(storyId)

    const sessionUser = useSelector(state => state.session.user);
    const story = useSelector(state => state.story[storyId]);
    const comments = useSelector(state => state.comment)

    const [viewComments, setViewComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllStories())
            await dispatch(getAllComments(storyId))
        }
        fetchData().catch(console.error)
    }, [dispatch])


    useEffect(() => {
        if(showCommentForm) setShowCommentForm(false)
    },[])

    const handleDelete = async (e) => {
        e.preventDefault()

        window.alert('are you sure you want to delete?')
        await dispatch(destroyAStory(storyId))
    }

    let editForm;
    if (showCommentForm) {
        editForm = (
            <div>
                <EditStoryForm setShowCommentForm={setShowCommentForm}/>
            </div>
        )
    }

    let editButton, deleteButton, cancelEditButton
    if (story && sessionUser) {
        if (sessionUser.id === story.authorId) {
            editButton = (
                <button onClick={(e) => setShowCommentForm(true)}
                >Edit</button>
            )
            cancelEditButton = (
                <button onClick={(e) => setShowCommentForm(false)}
                >Cancel Edit</button>
            )
            deleteButton = (
                <button id='delete-button' onClick={(e) => {
                    handleDelete(e)
                }}>Delete</button>
            )
        }
    }

    const storyComments = Object.values(comments).filter(comment => {
        return comment.storyId === Number(storyId)
    })
    // console.log(storyComments)

    return (
        story ?
            <div className='story-view'>
                <div className='story-main-area'>
                    {story.User && <h3 className='story-author'>{story.User.username}</h3>}
                    <h2 className='story-title'>{story.title}</h2>
                    {story.imageUrl &&
                        <div className='story-image-container'
                        style={{backgroundImage: `url(${story.imageUrl})`}}>
                        </div>
                    }
                    <p className='story-body'>{story.body}</p>
                    {editButton}
                    {showCommentForm && cancelEditButton}
                    {deleteButton}
                    {editForm}
                    {comments &&
                            <button
                            id='show-comments'
                            onClick={() => setViewComments(!viewComments)}>
                            {storyComments.length} Comments
                            </button>
                    }
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
