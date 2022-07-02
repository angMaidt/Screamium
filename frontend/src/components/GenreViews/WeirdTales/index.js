import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../../store/story';
import StoryCard from '../../Story/StoryCard';

function WeirdTalesView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    const weirdStories = Object.values(stories).filter(story => story.genreId === 3)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            weirdStories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))
        )
    )
}

export default WeirdTalesView;
