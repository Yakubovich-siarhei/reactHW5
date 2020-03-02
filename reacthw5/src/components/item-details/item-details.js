import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
// import Error from "../error";
import Spinner from "../spinner";
import PropTypes from "prop-types";

export default class PersonDetails extends Component {
  swapiservice = new SwapiService();

  state = {
    item: null,
    error: false,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;

    if (!itemId) {
      return <Spinner />;
    }

    this.swapiservice.getPerson(itemId).then(item => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;
    const { getImageUrl } = this.props;

    if (!item) {
      return <span>null</span>;
    }
    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={getImageUrl(item)} alt="starwars" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

PersonDetails.defaultProps = {
  itemId: 3
};

PersonDetails.propTypes = {
  itemId: PropTypes.number
};
