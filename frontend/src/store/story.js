//ACTION TYPES
// const CREATE_STORY = 'story/createStory';

const READ_STORIES = 'story/readStories';

//todo: read a single story

//todo: edit a story

//todo: delete a story

//ACTION CREATORS
//Todo: Create a story

const readAllStories = (stories) => {
    return {
        type: READ_STORIES,
        stories
    }
};

//todo: read a single story

//todo: edit a story

//todo: delete a story

//THUNKS
//Todo: Create a story

//todo: read all stories
export const getAllStories = () => async dispatch => {
    const res = await fetch('/api/stories')

    if (res.ok) {
        const stories = await res.json()
        dispatch(readAllStories(stories))
        return res
    }
    //todo: if res not ok, render an error message
};

//todo: read a single story

//todo: edit a story

//todo: delete a story

//REDUCER
const storyReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case READ_STORIES:
            newState = {...state}
            action.stories.forEach(story => {
                return newState[story.id] = story;
            })
            return newState
        default:
            return state
    }
};

export default storyReducer;
