import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components/item-list";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components/details";
import Error from "../error";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../context";

import "./app.css";
import Row from "../row";

export default class App extends Component {
  swapiservice = new SwapiService();

  state = {
    selectPerson: null,
    selectPlanet: null,
    selectStarship: null
  };

  onSelectedItem = selectPerson => {
    this.setState({
      selectPerson
    });
  };

  onSelectedPlanet = selectPlanet => {
    this.setState({
      selectPlanet
    });
  };

  onSelectedStarship = selectStarship => {
    this.setState({
      selectStarship
    });
  };

  render() {
    const { selectPerson, selectPlanet, selectStarship } = this.state;

    const peoplelist = <PersonList onSelected={this.onSelectedItem} />;
    const personDetails = <PersonDetails itemId={selectPerson} />;

    const planetList = <PlanetList onSelected={this.onSelectedPlanet} />;
    const planetDetails = <PlanetDetails itemId={selectPlanet} />;

    const starshipList = <StarshipList onSelected={this.onSelectedStarship} />;
    const starshipDetails = <StarshipDetails itemId={selectStarship} />;

    if (this.state.error) {
      return <Error />;
    }

    return (
      <SwapiServiceProvider value={this.swapiservice}>
        <div>
          <Header />
          <RandomPlanet />
          <Row left={peoplelist} right={personDetails} />
          <Row left={planetList} right={planetDetails} />
          <Row left={starshipList} right={starshipDetails} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
