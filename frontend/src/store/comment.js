import { csrfFetch } from "./csrf";

//ACTION TYPES
//get all comments
const GET_ALL_COMMENTS = 'comment/getAllComments'

//create a comment
const CREATE_A_COMMENT = 'comment/createAComment'

//edit a comment
const EDIT_A_COMMENT = 'comment/editAComment'

//delete a comment
const DELETE_A_COMMENT = 'comment/deleteAComment'

//ACTION CREATORS
//get all comments
const readComments = (comments) => {
    return {
        type: GET_ALL_COMMENTS,
        comments
    }
}

//create a comment
const createComment = (newComment) => {
    return {
        type: CREATE_A_COMMENT,
        newComment
    }
}

//edit a comment
// const readComments = () => {
//     return {
//         type: '',
//         payload
//     }
// }

//delete a comment
// const readComments = () => {
//     return {
//         type: '',
//         payload
//     }
// }
//THUNKS
//get all comments
export const getAllComments = (storyId) => async dispatch => {
    const res = await fetch(`/api/comments/${storyId}`)

    if (res.ok) {
        const comments = await res.json()
        dispatch(readComments(comments))
        return res
    }
    //todo: if res not ok, render an error message
};

//create a comment
export const createNewComment = (newComment) => async dispatch => {

    const res = await csrfFetch(`/api/comments/${newComment.storyId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })

    if (res.ok) {
        const newComment = await res.json()
        dispatch(createComment(newComment))
        return newComment
    }
    //todo: if res not okay, render error message
}

//edit a comment

//delete a comment

//REDUCER
const commentReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_COMMENTS:
            newState = { ...state }
            action.comments.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        case CREATE_A_COMMENT:
            if (!state[action.newComment.id]) {
                newState = {
                    ...state,
                    [action.newComment.id]: action.newComment
                }
            }
            return newState
        case EDIT_A_COMMENT:
            // return state
        case DELETE_A_COMMENT:
            // return state
        default:
            return state
    }
}

export default commentReducer;
