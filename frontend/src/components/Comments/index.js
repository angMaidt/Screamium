import { useState } from 'react';

import { useSelector } from 'react-redux';

import CommentForm from '../CommentForm';
import EditCommentForm from '../EditCommentForm';
import './comments.css';
//render an editcomment form

function Comments ({ visible, storyComments }) {
    const user = useSelector(state => state.session.user);
    const [showEditForm, setShowEditForm] = useState(false);

    if (!visible) return null;

    const handleEditClick = async (e) => {
        console.log(e.currentTarget.id)
        setShowEditForm(true)
    }

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
                        <div className='comment-wrapper'>
                            <h5 className='comment-username'>{comment.User.username}</h5>
                            <p className='comment-body'>{comment.body}</p>
                            {user.id === comment.User.id &&
                                <div className='button-wrapper'>
                                    <button id={`edit-button-${comment.id}`} onClick={(e) => handleEditClick(e)}>Edit</button>
                                    <button>Delete</button>
                                </div>
                            }
                        </div>
                    </div>
                ))}

            </div>
            }
        </div>
    )
}

export default Comments;
