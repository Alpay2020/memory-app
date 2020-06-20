import React from 'react';
import './App.css';
import Start from "./components/Start";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import Score from "./components/Score";

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/game">
                    <Game />
                </Route>
                <Route path="/score">
                    <Score />
                </Route>
                <Route path="/">

                    <Start />
                </Route>


            </Switch>
        </Router>
    </>
  );
}

export default App;
