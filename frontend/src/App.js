//pkg imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
//file imports
import * as sessionActions from "./store/session";
import NavBar from "./components/Navigation/NavBar";
import SignupFormPage from "./components/SignupFormPage";
import AllStories from './components/Story/AllStories.js';
import Story from './components/Story'
import StoryForm from "./components/Story/StoryForm.js";
import EditStoryForm from "./components/Story/EditStoryForm";
import Dashboard from "./components/Dashboard/index.js";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      <Dashboard isLoaded={isLoaded}/>
    </>
  );
}

export default App;
