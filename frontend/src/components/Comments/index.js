import CommentForm from '../CommentForm/commentForm';
import './comments.css';
//render an editcomment form

function Comments ({ visible, storyComments, storyId }) {

    if (!visible) return null;

    return (
        <div className='comment-panel-container'>
            {!storyComments ?
                <div className="empty-comments-container">
                    There are currently no responses for this story.
                    Be the first to respond.
                </div>
            :
            <div className='comment-wrapper'>
                <CommentForm />
                {storyComments.map(comment => (
                    <div className='comment-container' key={comment.id}>
                        {comment.User && <h5 className='comment-username'>{comment.User.username}</h5>}
                        {/* <p className='time-since-posted'></p> */}
                        <p className='comment-body'>{comment.body}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default Comments;
