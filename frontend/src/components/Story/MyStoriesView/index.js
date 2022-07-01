import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../../store/story';
import StoryCard from '../StoryCard';

function MyStoriesView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    const user = useSelector(state => state.session.user);

    const myStories = Object.values(stories).filter(story => story.authorId === user.id)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            myStories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))
        )
    )
}

export default MyStoriesView;
