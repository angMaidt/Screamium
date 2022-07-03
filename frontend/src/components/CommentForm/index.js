import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createNewComment } from '../../store/comment';

import './CommentForm.css';

function CommentForm () {
    const { storyId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [body, setBody] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    //validators
    useEffect(() => {
        let errors = [];
        if (body.length > 500) errors.push('Comment must be less than 500 characters')
        setValidationErrors(errors);
    }, [body])


    const handleSubmit = async (e) => {
        e.preventDefault()

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
                {validationErrors.length > 0 && (
                    <div className='errors-container'>
                        The following errors were found:
                        <ul className='errors'>
                            {validationErrors.map(error => (
                                <li className='error' key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
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
                        disabled={!body || validationErrors.length > 0}
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
                        <div id='dummy-comment-input'>
                            <input
                            type='text'
                            placeholder='What are your thoughts?'
                            onClick={() => setShowCommentForm(true)}
                            ></input>
                        </div>
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
