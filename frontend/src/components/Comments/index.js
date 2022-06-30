function Comments ({ visible, comments }) {

    if (!visible) return null;

    let commentContainer
    if (comments.length < 0) {
        commentContainer = (
            //note, render comment form above this
            <div className="empty-comments-container">
                There are currently no responses for this story.
                Be the first to respond.
            </div>
        )
    }

    return (
        <div className='side-panel-container'>
            {commentContainer}
        </div>
    )
}

export default Comments;
