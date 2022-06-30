import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editAComment } from '../../store/comment';

function EditCommentForm ({ comment, setShowEditForm }) {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const [body, setBody] = useState(comment.body);

    const user = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const editedComment = {
            userId: user.id,
            storyId,
            body
        }
        await dispatch(editAComment(editedComment))
        setShowEditForm(false)
    }

    return (
         <div className='comment-form-container' style={{border:'solid 1px red'}}>
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
                        onClick={() => setShowEditForm(false)}
                        type='button'
                    >Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentForm