import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editAComment } from '../../store/comment';

function EditCommentForm ({ comment, setShowEditForm }) {
    const { storyId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [body, setBody] = useState(comment.body);
    const [validationErrors, setValidationErrors] = useState([]);

    //validators
    useEffect(() => {
        let errors = [];
        if (body.length > 500) errors.push('Comment must be less than 500 characters')
        setValidationErrors(errors);
    }, [body])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const editedComment = {
            id: comment.id,
            userId: user.id,
            storyId,
            body
        }
        await dispatch(editAComment(editedComment))
        setShowEditForm(false)
    }

    return (
         <div className='comment-form-container'>
            <div className='comment-form-wrapper'>
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
                        onClick={() => setShowEditForm(false)}
                        type='button'
                    >Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default EditCommentForm
