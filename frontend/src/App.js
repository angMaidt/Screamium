//pkg imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
//file imports
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import Story from './components/Story';

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
          <Route path='/stories'>
            <Story />
          </Route>
          <Route>uh-oh, looks like you got lost in the woods again...</Route>
        </Switch>
      )}
    </>
  );
}

export default App;