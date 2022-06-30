import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../store/story';

export const defaultImage = 'https://cdn.thecollector.com/wp-content/uploads/2022/03/caravaggio-medusa-detail.jpg'

function StoryForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const [validationErrors, setValidationErrors] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)

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
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot Submit!')
        const story = {
            authorId: user.id,
            title,
            body,
            imageUrl: imageUrl ? imageUrl : defaultImage
        }
        await dispatch(createNewStory(story))
        history.push('/stories')
    }

    return (
        <div className='total-form-container'>
            <h2>Publish a spooky story</h2>
            {hasSubmitted && validationErrors.length > 0 && (
                <div className='errors-container'>
                    The following errors were found:
                    <ul className='errors'>
                        {validationErrors.map(error => (
                            <li className='error' key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className='form-container' id='create-story-container'>
                <form className='form'
                    id='create-story'
                    onSubmit={handleSubmit}>
                    <div id='new-story-title'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                    </div>
                    <div id='new-story-body'>
                        <label htmlFor='body'>Body</label>
                        <textarea
                            placeholder='It was a dark and stormy night...'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div id='new-story-image-url'>
                        <label htmlFor='image-url'>Image URL</label>
                        <input
                            type='text'
                            placeholder='For default image, leave field blank'
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        ></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StoryForm;
