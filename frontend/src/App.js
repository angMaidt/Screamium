//pkg imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
//file imports
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import AllStories from './components/Story/AllStories.js';
import Story from './components/Story'
import StoryForm from "./components/Story/StoryForm.js";
import EditStoryForm from "./components/Story/EditStoryForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'></Route>
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
      )}
    </>
  );
}

export default App;
