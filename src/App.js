import React, {  Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import "bulma/css/bulma.css";
import "./App.css";
import MovieHome from './views/MovieHome'

function App() {
  const routes = (
    <Switch>
      <Route path="/home" render={props => <MovieHome {...props} />} />
      <Route path="/" exact component={MovieHome} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <div>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </div>
    </div>
  );
}

export default App;
