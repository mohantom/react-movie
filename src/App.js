import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import MovieState from "./context/movie/movieState";
import MovieHome from "./views/MovieHome";
import About from "./views/About";
import NavBar from "./shared/NavBar";
import firebase from "firebase";

function App() {
  let user = firebase.auth().currentUser;
  if (!user) {
    // return (<p>Please log in</p>);
  }

  const routes = (
    <Switch>
      <Route path="/home" exact component={MovieHome} />
      <Route path="/about" exact component={About} />

      <Route path="/" exact component={MovieHome} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <MovieState>
      <div className="App">
        <div>
          <NavBar id="navbar" user="'some user'" />
          <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </div>
      </div>
    </MovieState>
  );
}

export default App;
