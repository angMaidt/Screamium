import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../../store/story';
import StoryCard from '../../Story/StoryCard';

function ClassicHorrorView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    const genreStories = Object.values(stories).filter(story => story.genreId === 1)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            <div className='my-stories-container'>
                <div className='page-title-container'>
                    <h2 id='publish-a-story'>Classic Horror</h2>
                    <div className='title-linebreak'></div>
                    <div className='title-linebreak'></div>
                </div>
            {genreStories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))}
            </div>
        )
    )
}

export default ClassicHorrorView;
