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
// const readComments = () => {
//     return {
//         type: '',
//         payload
//     }
// }

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
            // return state
        case EDIT_A_COMMENT:
            // return state
        case DELETE_A_COMMENT:
            // return state
        default:
            return state
    }
}

export default commentReducer;
