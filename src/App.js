import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import { store } from "./index";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Shop from "./Components/Shop";
import AboutUs from "./Components/AboutUs";
import { setGameData } from "./store";
import gameDetail from "./Components/gameDetail";

const mapDispatchToProps = {
  setGameData
};

function App(props) {
  useEffect(() => {
    connect();
  });
  function connect() {
    var unirest = require("unirest");

    var req = unirest(
      "GET",
      "https://rawg-video-games-database.p.rapidapi.com/games"
    );

    req.headers({
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "ccd575af83msh102185561056e00p16523ejsnadb1a1f94846"
    });

    return req.end(function(res) {
      if (res.error) throw new Error(res.error);
      props.setGameData(res.body.results);
    });
  }
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={AboutUs} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={gameDetail} />
      </Switch>
    </Router>
  );
}

export default connect(null, mapDispatchToProps)(App);
