import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../store/story';

function StoryForm() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    console.log(user.id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const story = {
            authorId: user.id,
            title,
            body
        }
        await dispatch(createNewStory(story))
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default StoryForm;
