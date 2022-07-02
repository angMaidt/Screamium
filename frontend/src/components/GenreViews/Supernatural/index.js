import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../../store/story';
import StoryCard from '../../Story/StoryCard';

function SupernaturalView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    const genreStories = Object.values(stories).filter(story => story.genreId === 6)
    console.log('here i am')
    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            genreStories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))
        )
    )
}

export default SupernaturalView;
