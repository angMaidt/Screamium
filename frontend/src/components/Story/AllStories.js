import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import { getAllStories } from '../../store/story'
import { defaultImage } from './StoryForm';
import StoryCard from './StoryCard';
import './AllStories.css'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    const comments = useSelector(state => state.comments)

    const [imageSrc, setImgSrc] = useState();

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
            //TODO: Need to refactor this page so it displays story components, pass comments down as props
            // await dispatch(getAllComments(storyId))
            // dispatch(resetAllComments())
        }
        fetchData().catch(console.error)
    }, [dispatch])

    return (
        (stories &&
            Object.values(stories).map(story => (
                <StoryCard story={story} />
            ))
        )
    )
}

export default AllStories;
