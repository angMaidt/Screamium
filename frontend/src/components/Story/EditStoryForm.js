import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editAStory, getAllStories } from '../../store/story';

function EditStoryForm() {
    const dispatch = useDispatch()
    const history = useHistory()

    const { storyId } = useParams()
    const story = useSelector(state => state.story[storyId])
    const [title, setTitle] = useState(story.title)
    const [body, setBody] = useState(story.body)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        dispatch(getAllStories())
    },[hasSubmitted])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editedStory = {
            id: storyId,
            title,
            body
        }
        await dispatch(editAStory(editedStory))
        setHasSubmitted(true)
        // history.push(`/stories`)
    }

    return (
        !hasSubmitted ?
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
                <button>Submit</button>
            </form>
        </div>
        :
        <div></div>
    )
}

export default EditStoryForm;
