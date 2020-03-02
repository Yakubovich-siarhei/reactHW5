import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

// import Error from "../error";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../context";
import "./app.css";
// import Row from "../row";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PeoplePage from "../pages/people-page";
import PersonPage from "../pages/person-page";
import PlanetsPage from "../pages/planet-page";
import StarshipsPage from "../pages/starships-page";
import StarshipPage from "../pages/starship-page";

export default class App extends Component {
  swapiservice = new SwapiService();

  // state = {
  //   selectPerson: null,
  //   selectPlanet: null,
  //   selectStarship: null
  // };

  // onSelectedItem = selectPerson => {
  //   this.setState({
  //     selectPerson
  //   });
  // };

  // onSelectedPlanet = selectPlanet => {
  //   this.setState({
  //     selectPlanet
  //   });
  // };

  // onSelectedStarship = selectStarship => {
  //   this.setState({
  //     selectStarship
  //   });
  // };

  render() {
    return (
      <SwapiServiceProvider value={this.swapiservice}>
        <div className="wripper">
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Route path="/" render={() => <h1>HELLO!</h1>} exact />
              <Route path="/people/" component={PeoplePage} exact />
              <Route path="/people/:id" component={PersonPage} />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships/" component={StarshipsPage} exact />
              <Route path="/starships/:id" component={StarshipPage} />
            </div>
          </Router>
        </div>
      </SwapiServiceProvider>
    );
  }
}
