import React, { Component } from "react";
import { PersonDetails } from "../../sw-components/details";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class PersonPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return <Row left={<PersonDetails itemId={Number(id)} />} />;
  }
}

export default withRouter(PersonPage);
