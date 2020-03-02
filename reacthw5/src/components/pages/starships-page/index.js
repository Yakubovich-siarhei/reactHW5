import React, { Component } from "react";
import { StarshipList } from "../../sw-components/item-list";
import Row from "../../row";
import { withRouter } from "react-router-dom";

class StarshipsPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <Row
        left={
          <StarshipList
            onSelected={id => {
              history.push(`/starships/${id}`);
            }}
          />
        }
      />
    );
  }
}

export default withRouter(StarshipsPage);
