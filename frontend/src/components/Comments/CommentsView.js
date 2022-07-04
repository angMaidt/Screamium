import { useSelector } from 'react-redux';

import Comment from './Comment';
import CommentForm from '../CommentForm';
import './comments.css';

function CommentsView ({ visible, storyComments }) {
    // const user = useSelector(state => state.session.user);

    if (!visible) return null;

    return (
        <div className='comment-panel-container'>

            {!storyComments ?
                <div className="empty-comments-container">
                    There are currently no responses for this story.
                    Be the first to respond.
                </div>
            :
            <div className='all-comments-wrapper'>
                <CommentForm />
                {storyComments.map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                ))}

            </div>
            }
        </div>
    )
}

export default CommentsView;
