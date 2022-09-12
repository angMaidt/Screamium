import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../../store/story';
import StoryCard from '../../Story/StoryCard';

function PsychologicalView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    const [unbookmark, setUnbookmarked] = useState(false)

    const genreStories = Object.values(stories).filter(story => story.genreId === 5)

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
                    <h2 id='publish-a-story'>Psychological</h2>
                    <div className='title-linebreak'></div>
                    <div className='title-linebreak'></div>
                </div>
            {genreStories.map(story => (
                <StoryCard key={story.id} story={story} setUnbookmarked={setUnbookmarked} />
            ))}
            </div>
        )
    )
}

export default PsychologicalView;
