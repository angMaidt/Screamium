function Comments ({ visible, comments }) {

    if (!visible) return null;

    console.log(comments)

    let commentContainer
    if (!Object.values(comments).length) {
        commentContainer = (
            //note, render comment form above this
            <div className="empty-comments-container">
                There are currently no responses for this story.
                Be the first to respond.
            </div>
        )
    } else {
        commentContainer = (
            Object.values(comments).map(comment => {
                return (
                    <div className='comment-container'>
                        <h5 className='comment-username'>{comment.User.username}</h5>
                        <p className='time-since-posted'></p>
                        <p className='comment-body'>{comment.body}</p>
                    </div>
                )
            })
        )
    }

    return (
        <div className='side-panel-container'>
            {commentContainer}
        </div>
    )
}

export default Comments;
