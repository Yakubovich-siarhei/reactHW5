import React, { Component } from "react";

import "./item-list.css";
// import Error from "../error";
// import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {
  constructor() {
    super();
  }
  state = {
    planets: []
  };

  componentWillMount() {
    const api = `https://swapi.co/api/planets/`;
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ planets: data.results }))
      .catch(error => alert("error", error));
  }

  render() {
    const { planets } = this.state;
    return (
      <div>
        {planets.map(planet => (
          <ul className="item-list list-group" key={planet.name}>
            <li className="list-group-item">{planet.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}
// async getAllPlanet() {
//   const res = await this.getResource(`/planets/`);
//   return res.results.map();
// }

//   swapiService = new SwapiService();

//   state = {
//     res: [],
//     error: false
//   };

//   constructor() {
//     super();
//     this.allPlanetList();
//   }

//   onPlanetLoaded = res => {
//     this.setState({
//       res
//     });
//     console.log(this.state.res);
//   };

//   allPlanetList() {
//     // const id = 13;
//     this.swapiService
//       .getAllPlanet()
//       .then(this.onPlanetLoaded)
//       .catch(this.onError);
//   }

//   onError = e => {
//     this.setState({
//       e,
//       error: true
//     });
//     alert("er");
//   };

//   render() {
//     const { res, error } = this.state;
//     const errors = error ? <Error /> : null;
//     const content = !error ? <PlanetView res={res} /> : null;

//     return (
//       <div className="i">
//         {errors}
//         {content}

//         <h3>TITLE</h3>
//         <ul className="item-list list-group">
//           <li className="list-group-item">Luke Skywalker</li>
//         </ul>
//       </div>
//     );
//   }
// }

// const PlanetView = ({ res }) => {
//   const { name } = res;
//   return (
//     <React.Fragment>
//       <div>
//         <h4>{name}</h4>
//       </div>
//     </React.Fragment>
//   );
// };
