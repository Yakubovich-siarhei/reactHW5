import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import Error from "../error";

import "./app.css";

export default class App extends Component {
  state = {
    selectedItem: null,
    error: false
  };

  onSelectedItems = id => {
    this.setState({
      selectedItem: id
    });
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }

    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <PlanetDetails />
            <ItemList onSelectedItems={this.onSelectedItems} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
