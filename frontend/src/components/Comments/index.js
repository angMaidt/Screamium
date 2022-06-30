import './comments.css';

function Comments ({ visible, comments }) {

    if (!visible) return null;

    return (
        <div className='comment-panel-container'>
            {!comments ?
                <div className="empty-comments-container">
                    There are currently no responses for this story.
                    Be the first to respond.
                </div>
            :
                Object.values(comments).map(comment => (
                    <div className='comment-container' key={comment.id}>
                        <h5 className='comment-username'>{comment.User.username}</h5>
                        {/* <p className='time-since-posted'></p> */}
                        <p className='comment-body'>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments;
