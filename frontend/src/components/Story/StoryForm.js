import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../store/story';

function StoryForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    // console.log(user.id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const story = {
            authorId: user.id,
            title,
            body,
            imageUrl
        }
        await dispatch(createNewStory(story))
        history.push('/stories')
    }

    return (
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
                        placeholder='example.jpg'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    ></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default StoryForm;
