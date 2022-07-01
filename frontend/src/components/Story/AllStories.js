import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../store/story'
import StoryCard from './StoryCard';
import './AllStories.css'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())

        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            Object.values(stories).map(story => (
                <StoryCard key={story.id} story={story} />
            ))
        )
    )
}

export default AllStories;
