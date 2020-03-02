import React, { Component } from "react";
import { StarshipDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class StarshipPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return <Row left={<StarshipDetails itemId={Number(id)} />} />;
  }
}

export default withRouter(StarshipPage);
