import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../record/record";
import { withService } from "../../hocs";

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender"></Record>
      <Record field="eyeColor" label="Eye color"></Record>
    </ItemDetails>
  );
};

const PersonDetails = withService(personDetails);

const planetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="name" label="Name"></Record>
    </ItemDetails>
  );
};

const PlanetDetails = withService(planetDetails);

const starshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model"></Record>
    </ItemDetails>
  );
};

const StarshipDetails = withService(starshipDetails);

export { PersonDetails, PlanetDetails, StarshipDetails };
