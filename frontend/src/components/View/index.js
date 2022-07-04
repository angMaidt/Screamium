//pkg imports
import React from "react";
import { Route, Switch } from "react-router-dom";
//file imports
import SignupFormPage from "../SignupFormPage";
import AllStories from '../Story/AllStories';
import Story from '../Story/index';
import StoryForm from "../Story/StoryForm";
import EditStoryForm from "../Story/EditStoryForm";
// import GenreCard from "../GenreCard";
import StoryCard from "../Story/StoryCard";
import MyStoriesView from "../Story/MyStoriesView";
import ClassicHorrorView from '../GenreViews/ClassicHorror';
import DarkFantasyView from '../GenreViews/DarkFantasy';
import PsychologicalView from '../GenreViews/Psychological';
import SciFiHorrorView from "../GenreViews/SciFiHorror";
import SupernaturalView from "../GenreViews/Supernatural";
import WeirdTalesView from "../GenreViews/WeirdTales";
import './view.css';

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
            <EditStoryForm />
          </Route>
          <Route path='/my-stories'>
            <MyStoriesView />
          </Route>
          <Route path='/classic-horror'>
            <ClassicHorrorView />
          </Route>
          <Route path='/dark-fantasy'>
            <DarkFantasyView />
          </Route>
          <Route path='/psychological'>
            <PsychologicalView />
          </Route>
          <Route path='/sci-fi'>
            <SciFiHorrorView />
          </Route>
          <Route path='/supernatural'>
            <SupernaturalView />
          </Route>
          <Route path='/weird-tales'>
            <WeirdTalesView />
          </Route>
          <Route>
            <div id='missing-container'>
              <img src='/images/404-image.jpg'/>
              <h2 id='lost'>Uh-oh, looks like you got lost in the woods again...</h2>
              <h2 id='publish-a-story'>404</h2>
            </div>
          </Route>
        </Switch>
      )}
            </div>
        </div>
    )
}

export default View;
