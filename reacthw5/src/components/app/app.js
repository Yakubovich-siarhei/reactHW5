import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
// import PlanetDetails from "../planet-details";
import Error from "../error";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../errorBoundry";

import "./app.css";
import Row from "../row";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>

      <span>{item[field]}</span>
    </li>
  );
};

export default class App extends Component {
  swapiservice = new SwapiService();

  state = {
    error: false,
    selectPerson: null,
    selectPlanet: null
  };

  // componentDidMount() {
  //   this.swapiservice.getAllPeople().then(data => {
  //     this.setState({ items: data });
  //   });
  //   // .catch(this.componentDidCatch());
  // }

  onSelectedItem = selectPerson => {
    this.setState({
      selectPerson
    });
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    const {
      getPersonImage,
      getPerson,
      getAllPeople
      // getAllPlanet,
      // getPlanet
    } = this.swapiservice;

    const peoplelist = (
      <ItemList onSelected={this.onSelectedItem} getData={getAllPeople}>
        {item => `${item.name}`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectPerson}
          getData={getPerson}
          getImage={getPersonImage}
        >
          <Record label="Name" field="name" />
          <Record label="Gender" field="gender" />
          <Record label="Birth Year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
      </ErrorBoundry>
    );

    // const planetlist = (
    //   <ItemList
    //     // onSelectedItems={this.onSelectedItems}
    //     getData={getAllPlanet}
    //   >
    //     {item => `${item.name}`}
    //   </ItemList>
    // );

    // const planetDetails = (
    //   <ErrorBoundry>
    //     <ItemDetails itemId={this.state.selectPlanet} getData={getPlanet} />
    //   </ErrorBoundry>
    // );

    if (this.state.error) {
      return <Error />;
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <Row left={peoplelist} right={personDetails} />
        {/* <Row left={planetlist} right={planetDetails} /> */}
      </div>
    );
  }
}
