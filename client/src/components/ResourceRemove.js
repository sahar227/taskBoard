import React, { Component } from "react";
import "../styles/ResourceRemove.css";

/// NOTE: To use properly, parent element should have position:relative style
export default class ResourceRemove extends Component {
  render() {
    return (
      <div onClick={this.props.onRemove} className="delete-button">
        X
      </div>
    );
  }
}
