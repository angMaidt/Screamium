//pkg imports
import React from "react";
import { Route, Switch } from "react-router-dom";
//file imports
import SignupFormPage from "../SignupFormPage";
import AllStories from '../Story/AllStories';
import Story from '../Story/index';
import StoryForm from "../Story/StoryForm";
import EditStoryForm from "../Story/EditStoryForm";

function View({ isLoaded }) {
    return (
        <div
            style={{
                backgroundColor: 'blue',
                height: '100%',
                width: '30%',}}
            className='view-container'>
                {isLoaded && (
                <div className="view-wrapper">
                    <Switch>
                    <Route exact path='/'>
                        {/* TODO render splashpage */}
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route exact path='/stories'>
                        <AllStories />
                    </Route>
                    <Route path='/stories/new'>
                        <StoryForm />
                    </Route>
                    <Route exact path='/stories/:storyId'>
                        <Story />
                    </Route>
                    <Route path='/stories/:storyId/edit'>
                        <EditStoryForm/>
                    </Route>
                    <Route>uh-oh, looks like you got lost in the woods again...</Route>
                    </Switch>
                </div>
                )}
        </div>
    )
}

export default View;
