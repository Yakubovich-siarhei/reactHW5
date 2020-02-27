import React, { Component } from "react";
import Spinner from "../components/spinner";
import { SwapiServiceConsumer } from "../components/context";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      getData().then(data => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

const withChildFunction = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

const withService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export { withData, withChildFunction, withService };
