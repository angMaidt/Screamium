import { useState } from 'react';
import { useSelector } from 'react-redux';

import EditCommentForm from '../EditCommentForm'

function Comment ({ comment }) {
    const [showEditForm, setShowEditForm] = useState(false);

    const user = useSelector(state => state.session.user);

    const handleEditClick = async (e) => {
        console.log(e.currentTarget.id)
        setShowEditForm(true)
    }

    return (
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
                {showEditForm &&
                    <EditCommentForm comment={comment}/>
                }
            </div>
        </div>
    )
}

export default Comment;
