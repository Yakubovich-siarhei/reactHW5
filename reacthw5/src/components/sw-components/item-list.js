import React from "react";
import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanet, getAllStarships } = new SwapiService();

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanet
);

const StarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
