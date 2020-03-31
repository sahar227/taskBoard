import React, { Component } from "react";
import List from "./List";
import "../styles/Lists.css";

export default class Lists extends Component {
  renderLists = () => {
    return this.props.boardInfo.lists.map(list => (
      <List key={list._id} list={list} />
    ));
  };
  render() {
    if (!this.props.boardInfo) return <div>Loading</div>;
    return (
      <div className="lists">
        {this.renderLists()}
        <div>Add list</div>
      </div>
    );
  }
}
