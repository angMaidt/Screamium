import { csrfFetch } from "./csrf";

//ACTION TYPES
//create a story
const CREATE_STORY = 'story/createStory';

//read all stories
const READ_STORIES = 'story/readStories';

//edit a story
const EDIT_STORY = 'story/editStory';

//delete a story
const DESTROY_STORY = 'story/deleteStory';

//ACTION CREATORS
//Create a story
const createStory = (story) => {
    return {
        type: CREATE_STORY,
        story
    }
}

//read all stories
const readAllStories = (stories) => {
    return {
        type: READ_STORIES,
        stories
    }
};

//edit a story
const editStory = (editedStory) => {
    return {
        type: EDIT_STORY,
        editedStory
    }
}

//delete a story
const deleteStory = (storyId) => {
    return {
        type: DESTROY_STORY,
        storyId
    }
}

//THUNKS
//Create a story
export const createNewStory = (newStory) => async dispatch => {

    const res = await csrfFetch('/api/stories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStory)
    })

    if (res.ok) {
        const newStory = await res.json()
        dispatch(createStory(newStory))
        return newStory
    }
    //todo: if res not okay, render error message
}

//read all stories
export const getAllStories = () => async dispatch => {
    const res = await fetch('/api/stories')

    if (res.ok) {
        const stories = await res.json()
        console.log(stories)
        dispatch(readAllStories(stories))
        return res
    }
    //todo: if res not ok, render an error message
};

//edit a story
export const editAStory = (story) => async dispatch => {
    // console.log(story.id)

    const res = await csrfFetch(`/api/stories/${story.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: story.title, body: story.body })
    })

    if (res.ok) {
        const editedStory = res.json()
        // console.log(editedStory)
        dispatch(editStory(editedStory))
        return res
    }
    //todo: if res not ok, render an error message
}

//delete a story
export const destroyAStory = (storyId) => async dispatch => {
    const res = await fetch(`/api/stories/${storyId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(deleteStory(storyId))
    }
    //todo: if res not okay, render err message
}

//REDUCER
const storyReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case READ_STORIES:
            // console.log(action.stories)
            newState = {...state}
            action.stories.forEach(story => {
                return newState[story.id] = story;
            })
            return newState
        case CREATE_STORY:
            // console.log(action.story.id)
            if (!state[action.story.id]) {
                newState = {
                    ...state,
                    [action.story.id]: action.story
                }
            }
            return newState
        case EDIT_STORY:
            newState =  {
                ...state,
                [action.editedStory.id]: action.editedStory
            }
            // console.log(newState)
            return newState
        case DESTROY_STORY:
            newState = { ...state }
            // console.log(newState)
            delete newState[action.storyId]
            return newState
        default:
            return state
    }
};

export default storyReducer;
