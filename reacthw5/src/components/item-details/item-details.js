import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-service";
// import Error from "../error";
// import Spinner from "../spinner";

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
      return;
    }

    this.swapiservice.getPerson(itemId).then(item => {
      this.setState({ item });
    });
  }

  // renderCard({ id, name, gender, birthYear, eyeColor }) {
  //   if (this.state.data.id) {
  //     return (
  //       <div className="person-details card">
  //         <img
  //           className="person-image"
  //           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
  //           alt="starwars"
  //         />
  //         <div className="card-body">
  //           <h4>{name}</h4>
  //           <ul className="list-group list-group-flush">
  //             <li className="list-group-item">
  //               <span className="term">Gender</span>
  //               <span>{gender}</span>
  //             </li>
  //             <li className="list-group-item">
  //               <span className="term">Birth Year</span>
  //               <span>{birthYear}</span>
  //             </li>
  //             <li className="list-group-item">
  //               <span className="term">Eye Color</span>
  //               <span>{eyeColor}</span>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return null;
  // }

  render() {
    const { item } = this.state;
    const { getImage } = this.props;

    if (!item) {
      return <span>null</span>;
    }
    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={getImage(item)} alt="starwars" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
            {/* <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
