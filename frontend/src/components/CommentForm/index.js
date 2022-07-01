import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createNewComment, editAComment, getAllComments } from '../../store/comment';

function CommentForm ({ comment, commentFormMode, setCommentFormMode }) {

    const [hasSubmitted, setHasSubmitted] = useState(false);const dispatch = useDispatch();
    const { storyId } = useParams();
    const [body, setBody] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);

    const user = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault()

        setHasSubmitted(true)

        const comment = {
            userId: user.id,
            storyId,
            body
        }
        await dispatch(createNewComment(comment))
        setShowCommentForm(false)
    }

    return (
        <div className='comment-form-container'>
            {user && showCommentForm &&
            <div className='comment-form-wrapper'>
                <div className='comment-form-username'>
                    <h4 htmlFor='username'>{user.username}</h4>
                </div>
                <form className='comment-form'
                    onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='What are your thoughts?'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    ></input>
                    <button
                        type='submit'
                        disabled={!body}
                    >Respond</button>
                    <button
                        onClick={() => setShowCommentForm(false)}
                        type='button'
                    >Cancel</button>
                </form>
            </div>
            }
            {user && !showCommentForm &&
                <div className='dummy-comment-form-container'
                    onSubmit={null}>
                    <form className='dummy-comment-form'>
                        <input
                        type='text'
                        placeholder='What are your thoughts?'
                        onClick={() => setShowCommentForm(true)}
                        ></input>
                    </form>
                </div>
            }
            {!user && !showCommentForm &&
                <div
                className='login-to-leave-comment'
                style={{ border: 'solid 1px black' }}
                >
                    Login to share your thoughts!
                </div>
            }
        </div>
    )
}

export default CommentForm;
