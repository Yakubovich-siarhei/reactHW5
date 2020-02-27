import React, { Component } from "react";

import "./item-list.css";

class ItemList extends Component {
  rederItems(arr) {
    return arr.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onSelected(item.id)}
        >
          {this.props.children(item)}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;

    const items = this.rederItems(data);
    return <ul className="item-list list-group-item">{items}</ul>;
  }
}

export default ItemList;
