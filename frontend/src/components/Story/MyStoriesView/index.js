import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getAllStories } from '../../../store/story';
import StoryCard from '../StoryCard';
import './MyStoriesView.css';

function MyStoriesView() {
    const dispatch = useDispatch();
    const stories = useSelector(state => state.story)
    const user = useSelector(state => state.session.user);

    let userId
    if (user) userId = user.id

    //spread all bookmarks.story into my stories into

    const [bookmarks, setBookmarks] = useState([])
    console.log(bookmarks)

    let myStories
    if (user) myStories = Object.values(stories).filter(story => story.authorId === user.id)

    let bookmarkedStories = []
    for (let bookmark of bookmarks) {
        bookmarkedStories.push(bookmark.Story)
    }

    //stories the user has written and stories they have liked
    myStories = [...myStories, ...bookmarkedStories]

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getAllStories())
        }
        fetchData().catch(console.error)

    }, [dispatch])

    useEffect(() => {
        const fetchBookmarks = async() => {
            const res = await fetch(`/api/stories/${user.id}/bookmarked`)
            if (res.ok) {
                const data = await res.json()
                setBookmarks(data)
            }
        }
        fetchBookmarks().catch(console.error)
    }, [])

    return (
        user ?
        <div className='my-stories-container'>
            <div className='page-title-container'>
                <h2 id='publish-a-story'>My Stories</h2>
                <div className='title-linebreak'></div>
                <div className='title-linebreak'></div>
            </div>
            {stories &&
                myStories.map(story => (
                    <StoryCard key={story.id} story={story} />
                ))
            }
        </div>
            :
            <Redirect to='/'></Redirect>
    )
}

export default MyStoriesView;
