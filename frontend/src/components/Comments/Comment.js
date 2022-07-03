import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { destroyAComment } from '../../store/comment';

import EditCommentForm from '../EditCommentForm'

function Comment ({ comment }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);

    const [showEditForm, setShowEditForm] = useState(false);

    // let commentId;
    const handleEditClick = async (e) => {
        e.preventDefault();
        // commentId = e.currentTarget.id
        setShowEditForm(true)
    }
    const handleDeleteClick = async (e) => {
        e.preventDefault()

        await dispatch(destroyAComment(comment.id))
    }

    return (
        <div className='comment-container' key={comment.id} style={{ borderBottom: '1px solid black' }}>
            <div className='comment-wrapper'>
                <h5
                    className='comment-username'
                    style={{ fontFamily: 'Arial', fontSize: '15px', fontStyle: 'italic' }}
                        >{comment.User.username}</h5>
                <p className='comment-body'>{comment.body}</p>
            </div>
            {user && user.id === comment.User.id &&
                <div className='button-wrapper'>
                    <button onClick={(e) => handleEditClick(e)}>
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onClick={(e) => handleDeleteClick(e)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            }
            {showEditForm &&
                <EditCommentForm comment={comment} setShowEditForm={setShowEditForm}/>
            }
        </div>
    )
}

export default Comment;
