import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import MovieState from "./context/movieState";
import MovieHome from "./views/MovieHome";
import NavBar from "./shared/NavBar";

function App() {
  const routes = (
    <Switch>
      <Route path="/home" component={MovieHome} />
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
