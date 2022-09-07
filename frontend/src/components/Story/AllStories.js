import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllStories } from '../../store/story'

import StoryCard from './StoryCard';
import './header.css'

function AllStories() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)

    // const [bookmarks, setBookmarks] = useState([])
    // console.log(bookmarks)

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())

        }
        fetchData().catch(console.error)

        // const fetchBookmarks = async() => {
        //     const res = await fetch('/api/stories/bookmarks')
        //     if (res.ok) {
        //         const data = await res.json()
        //         // console.log(data)
        //         setBookmarks(data)
        //     }
        // }
        // fetchBookmarks().catch(console.error)

    }, [dispatch])



    return (
        <>
            <div id='header-container'>
                <div>
                    <img id='header-img' src='/images/header.jpg' />
                    <h1 id='header-text'>Welcome.</h1>
                </div>
            </div>
            {stories &&
                Object.values(stories).map(story => (
                    <div key={story.id} className='story-card-container'>
                        <StoryCard story={story} />
                    </div>
                ))
            }
        </>
    )
}

export default AllStories;
