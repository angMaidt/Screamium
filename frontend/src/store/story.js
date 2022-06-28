import { csrfFetch } from "./csrf";

//ACTION TYPES
const CREATE_STORY = 'story/createStory';

const READ_STORIES = 'story/readStories';

//read a single story
const READ_A_STORY = 'story/readAStory';

//edit a story
const EDIT_STORY = 'story/editStory';

//todo: delete a story

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

//read a single story
const readAStory = (story) => {
    return {
        type: READ_A_STORY,
        story
    }
}

//edit a story
const editStory = (editedStory) => {
    return {
        type: EDIT_STORY,
        editedStory
    }
}

//todo: delete a story

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

//read a single story
// export const getAStory = (storyId) => async dispatch => {
//     console.log(storyId)
//     const res = await fetch(`/stories/${storyId}`)
//     if (res.ok) {
//         const story = await res.json()
//         console.log(story)
//         dispatch(createStory(story))
//         return res
//     }
//     //todo: if res not ok, render an error message

// }

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

//todo: delete a story

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
            console.log(newState)
            return newState
        default:
            return state
    }
};

export default storyReducer;
