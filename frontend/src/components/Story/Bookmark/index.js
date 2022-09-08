import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import csrfFetch from '../../../store/csrf';
import { getAllStories } from '../../../store/story';

function Bookmark({ story }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);

    let userId
    if (sessionUser) userId = sessionUser.id

    const [bookmark, setBookmark] = useState(false)
    const [allBookmarks, setAllBookmarks] = useState([])
    const [owner, setOwner] = useState(false)
    const [hover, setHover] = useState(false)

    const storyBookmarks = allBookmarks.filter(bookmark => bookmark.storyId === story.id)

    useEffect(() => {
        const fetchBookmarks = async() => {
            const res = await fetch('/api/stories/bookmarks')
            if (res.ok) {
                const data = await res.json()
                // console.log(data)
                setAllBookmarks(data)
            }
        }
        fetchBookmarks().catch(console.error)
    }, [])

    useEffect(() => {
        //check if owner of story
        if (userId === story.authorId) {
            setOwner(true)
        }

        //if not owner, see if they've already liked it
        if (!owner) {
            for (let bookmark of storyBookmarks) {
                if (bookmark.userId === userId) {
                    setBookmark(true)
                }
            }
        }
    }, [userId, allBookmarks])

    const handleBookmark = async (e) => {
        e.preventDefault()

        setBookmark(true)

        const payload = {
            userId
        }

        try {
            const res = await csrfFetch(`/api/stories/${story.id}/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            if (res.ok) {
                // const data = await res.json()
                // await dispatch(getAllStories())
                const bookmark_res = await fetch('/api/stories/bookmarks')
                const newBookmarks = await bookmark_res.json()
                setAllBookmarks(newBookmarks)
            }
        } catch (e) {
            alert('Bookmark Failed, Please Try Again')
        }
    }

    const handleUnbookmark = async (e) => {
        e.preventDefault()

        setBookmark(false)

        const payload = {
            userId
        }

        try {
            const res = await csrfFetch(`/api/stories/${story.id}/bookmark`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            if (res.ok) {
                // const data = await res.json()
                const bookmark_res = await fetch('/api/stories/bookmarks')
                const newBookmarks = await bookmark_res.json()
                setAllBookmarks(newBookmarks)
                // await dispatch(getAllStories())
                // await fetch('/api/stories/bookmarks')
            }
        } catch (e) {
            alert('De-bookmark Failed, Please Try Again')
        }
    }

    if (!sessionUser) {
        return (
            <div className='bookmarks'>
            {!sessionUser && (
                <div>
                    <p>Login to bookmark this story!</p>
                    <i className='fa-regular fa-bookmark'
                        id='bookmark'></i>
                </div>
            )}
            </div>
        )
    }

    return (
        <div className='bookmarks'>
            {bookmark ?
                <i className='fa-solid fa-bookmark'
                id='bookmark'
                title='De-bookmark this story!'
                onClick={handleUnbookmark}></i>
                :
                <i className={`${hover ? 'fa-solid' : 'fa-regular'} fa-bookmark`}
                id='bookmark'
                title='Bookmark this story!'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleBookmark}></i>
            }
        </div>
    )
}

export default Bookmark
