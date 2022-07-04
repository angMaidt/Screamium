import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../store/story';
import './StoryForm.css'

function StoryForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [genreId, setGenreId] = useState('')
    const [validationErrors, setValidationErrors] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)

    //validators
    useEffect(() => {
        const errors = []
        if (!title.length) errors.push('Please provide a title for your story')
        if (title.length > 50) errors.push('Title must be less than 50 characters')
        if (!body) errors.push('Please provide a body for your story')
        if (!genreId) errors.push('Please choose a genre for your story')
        setValidationErrors(errors)
    }, [title, body, genreId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot Submit!')
        const story = {
            authorId: user.id,
            title,
            body,
            genreId
        }
        await dispatch(createNewStory(story))
        history.push('/')
    }

    return (
        user ?
        <div className='total-form-container'>
            <h2 id='publish-a-story'>Publish a spooky story.</h2>
            {hasSubmitted && validationErrors.length > 0 && (
                <div className='errors-container' style={{ fontFamily: 'arial' }}>
                    <h3>The following errors were found:</h3>
                    <ul className='errors' >
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
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                    </div>
                    <div id='new-story-body'>
                        <textarea
                            placeholder='It was a dark and stormy night...'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div id='new-story-genre-container'>
                        <h3 htmlFor='genre' id='genre'>Choose a Genre: </h3>
                            <div className='new-story-genre-wrapper'>
                                <input
                                    type='radio'
                                    id='classic-horror'
                                    name='genre'
                                    value='1'
                                    onChange={(e) => setGenreId(e.target.value)}
                                >
                                </input>
                                <label htmlFor='classic-horror'>Classic Horror</label>
                                <input
                                    type='radio'
                                    id='weird-tales'
                                    name='genre'
                                    value='2'
                                    onChange={(e) => setGenreId(e.target.value)}
                                ></input>
                                <label htmlFor='weird-tales'>Weird Tales</label>
                                <input
                                    type='radio'
                                    id='dark-fantasy'
                                    name='genre'
                                    value='3'
                                    onChange={(e) => setGenreId(e.target.value)}
                                ></input>
                                <label htmlFor='dark-fantasy'>Dark Fantasy</label>
                                <input
                                    type='radio'
                                    id='sci-fi'
                                    name='genre'
                                    value='4'
                                    onChange={(e) => setGenreId(e.target.value)}
                                ></input>
                                <label htmlFor='sci-fi'>Sci-Fi</label>
                                <input
                                    type='radio'
                                    id='psychological'
                                    name='genre'
                                    value='5'
                                    onChange={(e) => setGenreId(e.target.value)}
                                ></input>
                                <label htmlFor='psychological'>Psychological</label>
                                <input
                                    type='radio'
                                    id='supernatural'
                                    name='genre'
                                    value='6'
                                    onChange={(e) => setGenreId(e.target.value)}
                                ></input>
                                <label htmlFor='supernatural'>Supernatural</label>
                            </div>
                    </div>
                    <button id='submit-story'>Submit</button>
                </form>
            </div>
        </div>
        :
        <div className='login-to-publish'>
        <h2>Login To Publish a Story!</h2>
        </div>
    )
}

export default StoryForm;
