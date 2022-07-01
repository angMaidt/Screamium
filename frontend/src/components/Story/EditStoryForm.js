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
    const [imageUrl, setImageUrl] = useState(story.imageUrl)
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
        if (!imageUrl.match(/\.(jpg|jpeg|png|gif|svg)$/) && imageUrl.length) errors.push('URL must end with .jpg, .jpeg, .png, .gif, or .svg. To use a default image, leave field blank')
        setValidationErrors(errors)
    }, [title, body, imageUrl])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validationErrors.length) return alert('Cannot Submit!')

        const editedStory = {
            id: storyId,
            title,
            body,
            imageUrl: imageUrl ? imageUrl : defaultImage
        }
        console.log(editedStory)
        await dispatch(editAStory(editedStory))
        setHasSubmitted(true)
        setShowEditForm(false)
    }

    return (
        !hasSubmitted ?
        <div className='edit-total-form-container'>
            <h3>Edit your story</h3>
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
            <div className='form-container' id='edit-story-form-container'>
                <form className='form'
                    id='edit-story'
                    onSubmit={(e) => handleSubmit(e)}>
                    <div id='edit-story-title'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                    </div>
                    <div id='edit-story-body'>
                        <label htmlFor='body'>Body</label>
                        <textarea
                            placeholder='It was a dark and stormy night...'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div id='edit-story-image-url'>
                        <label htmlFor='image'>Image URL</label>
                        <input
                            type='text'
                            placeholder='For default image, leave field blank'
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                        ></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        :
        <div></div>
    )
}

export default EditStoryForm;
