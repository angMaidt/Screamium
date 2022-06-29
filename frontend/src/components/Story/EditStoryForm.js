import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editAStory, getAllStories } from '../../store/story';

function EditStoryForm({ setShowEditForm }) {
    const dispatch = useDispatch()

    const { storyId } = useParams()
    const story = useSelector(state => state.story[storyId])
    const [title, setTitle] = useState(story.title)
    const [body, setBody] = useState(story.body)
    const [imageUrl, setImageUrl] = useState(story.imageUrl)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        dispatch(getAllStories())
    },[hasSubmitted])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editedStory = {
            id: storyId,
            title,
            body,
            imageUrl
        }
        await dispatch(editAStory(editedStory))
        setHasSubmitted(true)
        setShowEditForm(false)
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
                <div id='edit-story-image-url'>
                    <label htmlFor='image'>Image URL</label>
                    <input
                        type='text'
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    ></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
        :
        <div></div>
    )
}

export default EditStoryForm;
