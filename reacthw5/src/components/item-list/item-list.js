import React, { Component } from "react";

import "./item-list.css";
import Error from "../error";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {
  swapi = new SwapiService();

  state = {
    items: [],
    error: false,
    loading: false
  };

  componentDidMount() {
    this.swapi
      .getAllPeople()
      .then(data => {
        this.setState({ items: data });
      })
      .catch(this.componentDidCatch());
  }

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    const { items, error, loading } = this.state;
    const { onSelectedItems } = this.props;
    const errors = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const contentInDiv = (
      <ul className="item-list list-group">
        {items.map(item => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onSelectedItems(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
    const content = !errors & !loading ? errors : contentInDiv;

    return (
      <div>
        {/* {errors} */}
        {spinner}
        {content}
      </div>
    );
  }
}
