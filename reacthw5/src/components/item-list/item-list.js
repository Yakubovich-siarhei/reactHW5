import React, { Component } from "react";

import "./item-list.css";
// import Error from "../error";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {
  swapiservice = new SwapiService();

  state = {
    peoplelist: null
  };

  componentDidMount() {
    this.swapiservice.getAllPeople().then(peoplelist => {
      // this.props.getData().then(peoplelist => {          /*  не работает!!! */
      this.setState({ peoplelist });
    });
  }

  rederItems(arr) {
    return arr.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onSelected(item.id)}
        >
          {this.props.children(item)}
        </li>
      );
    });
  }

  render() {
    const { peoplelist } = this.state;

    if (!peoplelist) {
      return <Spinner />;
    }

    const items = this.rederItems(peoplelist);
    return <ul className="item-list list-group-item">{items}</ul>;
  }
}
