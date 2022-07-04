import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editAStory, getAllStories } from '../../store/story';
import { defaultImage } from './StoryForm'

function EditStoryForm({ setShowEditForm }) {
    const dispatch = useDispatch()

    const { storyId } = useParams()
    const story = useSelector(state => state.story[storyId])
    const [title, setTitle] = useState(story.title)
    const [body, setBody] = useState(story.body)
    const [validationErrors, setValidationErrors] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        dispatch(getAllStories())
    },[hasSubmitted])

    //validators
    useEffect(() => {
        const errors = []
        if (!title.length) errors.push('Please provide a title for your story')
        if (title.length > 50) errors.push('Title must be less than 50 characters')
        if (!body) errors.push('Please provide a body for your story')
        setValidationErrors(errors)
    }, [title, body])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validationErrors.length) return alert('Cannot Submit!')

        const editedStory = {
            id: storyId,
            title,
            body,
            genreId: story.genreId
        }
        await dispatch(editAStory(editedStory))
        setHasSubmitted(true)
        setShowEditForm(false)
    }

    return (
        !hasSubmitted ?
        <div className='edit-total-form-container'>
            <h3 id='edit-a-story'>Edit your spooky story.</h3>
            {validationErrors.length > 0 && (
            <div className='errors-container'>
                <h3>The following errors were found:</h3>
                <ul className='errors'>
                    {validationErrors.map(error => (
                        <li className='error' key={error}>{error}</li>
                    ))}
                </ul>
            </div>
            )}
            <div className='form-container' id='edit-story-form-container'>
                <form className='form'
                    id='edit-story'
                    onSubmit={(e) => handleSubmit(e)}>
                    <div id='new-story-title'>
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                    </div>
                    <div id='edit-story-body'>
                        <textarea
                            placeholder='It was a dark and stormy night...'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='edit-story-button-wrapper'>
                        <button>Submit</button>
                        <button id='cancel-edit' onClick={() => setShowEditForm(false)}>Cancel Edit</button>
                    </div>
                </form>
            </div>
        </div>
        :
        <div></div>
    )
}

export default EditStoryForm;
