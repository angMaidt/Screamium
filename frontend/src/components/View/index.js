//pkg imports
import React from "react";
import { Route, Switch } from "react-router-dom";
//file imports
import SignupFormPage from "../SignupFormPage";
import AllStories from '../Story/AllStories';
import Story from '../Story/index';
import StoryForm from "../Story/StoryForm";
import EditStoryForm from "../Story/EditStoryForm";
import GenreCard from "../GenreCard";
import StoryCard from "../Story/StoryCard";

function View({ isLoaded }) {
    return (
        <div
            style={{
                height: '100%',
                width: '50vw'
            }}
            className='view-container'>
            <div className="view-wrapper">
            {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <AllStories />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
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
          <Route path='/genres/:genreId'>
            {/* <GenreCard /> */}
          </Route>
          <Route>uh-oh, looks like you got lost in the woods again...</Route>
        </Switch>
      )}
            </div>
        </div>
    )
}

export default View;
