import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createNewComment, editAComment, getAllComments } from '../../store/comment';

function CommentForm () {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const [body, setBody] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(true)

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
    }

    return (
        <div className='comment-form-container' style={{border:'solid 1px red'}}>
            {showCommentForm &&
            <div className='comment-form-wrapper'>
                <div>
                    <h4 htmlFor='user-name'>{user.username}</h4>
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
                    >Cancel</button>
                </form>
            </div>
            }
            {!showCommentForm &&
                <div className='dummy-comment-form-container'>
                    <form className='dummy-comment-form'>
                        <input
                        type='text'
                        placeholder='What are your thoughts?'
                        onClick={() => setShowCommentForm(true)}
                        ></input>
                    </form>
                </div>
            }
        </div>
    )
}

export default CommentForm;
