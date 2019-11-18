import React, { Suspense, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import MovieHome from "./views/MovieHome";
import MovieDetails from "./views/MovieDetails";
import About from "./views/About";
import Login from "./views/Login";
import MovieStats from "./views/MovieStats";
import NavBar from "./shared/NavBar";
import firebase from "firebase";
import { AuthContext } from "./context/context";

function App(props) {
  let user = firebase.auth().currentUser;

  const authContext = useContext(AuthContext);

  const { email } = user || {};

  const routes = (
    <Switch>
      <Route
        path="/home"
        exact
        render={props =>
          !authContext.email ? <Redirect to="/login" /> : <MovieHome />
        }
      />
      {/* <Route path="/home" exact component={MovieHome} /> */}
      <Route path="/movie/:movieId" exact component={MovieDetails} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
      <Route path="/moviestats" exact component={MovieStats} />

      <Route path="/" exact component={MovieHome} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <div>
        <NavBar id="navbar" email={email} />
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </div>
    </div>
  );
}

export default App;
