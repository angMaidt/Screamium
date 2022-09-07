import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Bookmark({ story, bookmarks }) {
    const sessionUser = useSelector(state => state.session.user);
    const [bookmark, setBookmark] = useState(false)
    const [owner, setOwner] = useState(false)
    // const [bookmarjk]
    console.log(bookmark)

    //get all bookmarks for this story
    //see if the sessionUser id is in any of the bookmarks
    //if it is, set bookmark true
    const storyBookmarks = bookmarks.filter(bookmark => bookmark.storyId === story.id)
    console.log(storyBookmarks)


    useEffect(() => {
        //check if owner of story
        if (sessionUser.id === story.authorId) {
            setOwner(true)
        }

        //if not owner, see if they've already liked it
        if (!owner) {
            for (let bookmark of storyBookmarks) {
                if (bookmark.userId === sessionUser.id) {
                    setBookmark(true)
                }
            }
        }
    }, [])

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
                id='bookmark'></i>
                :
                <i className='fa-regular fa-bookmark'
                id='bookmark'></i>
            }
        </div>
    )
}

export default Bookmark
