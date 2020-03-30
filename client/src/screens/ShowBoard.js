import React, { Component } from "react";

export default class ShowBoard extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div>Show board</div>
        <div>{this.props.match.params.id}</div>
      </div>
    );
  }
}
