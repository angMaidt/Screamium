import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getAllStories } from '../../../store/story';
import StoryCard from '../StoryCard';

function MyStoriesView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    const user = useSelector(state => state.session.user);

    let myStories;
    if (user) myStories = Object.values(stories).filter(story => story.authorId === user.id)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        user ?
        (stories &&
            myStories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))
        )
        :
        <Redirect to='/'></Redirect>
    )
}

export default MyStoriesView;
