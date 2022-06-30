import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewComment, editAComment, getAllComments } from '../../store/comment';

function CommentForm ({ storyId }) {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const user = useSelector(state => state.session.user);

    // useEffect(() => {
    //     dispatch(getAllComments(storyId))
    // }, [hasSubmitted])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setHasSubmitted(true)

        const comment = {
            userId: user.id,
            storyId,
            body
        }
        console.log(comment)
        await dispatch(createNewComment(comment))
    }

    return (
        <div className='comment-form-container' style={{border:'solid 1px red'}}>
            <form className='comment-form'
            onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='What are your thoughts?'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></input>
                <button type='submit'>Respond</button>
                <button>Cancel</button>
            </form>

        </div>
    )
}

export default CommentForm;
