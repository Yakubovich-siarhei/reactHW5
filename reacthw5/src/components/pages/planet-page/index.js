import React, { Component } from "react";
import { PlanetList } from "../../sw-components/item-list";
import { PlanetDetails } from "../../sw-components/details";
import { withRouter } from "react-router-dom";
import Row from "../../row";

class PlanetsPage extends Component {
  // state = {
  //   selected: null
  // };

  onSelected = id => {
    this.setState({ selected: id });
  };

  render() {
    const { match, history } = this.props;
    const id = match.params.id;
    return (
      <Row
        left={
          <PlanetList
            onSelected={id => {
              this.onSelected(id);
              history.push(`/planets/${id}`);
            }}
          />
        }
        right={<PlanetDetails itemId={id} />}
      />
    );
  }
}

export default withRouter(PlanetsPage);
