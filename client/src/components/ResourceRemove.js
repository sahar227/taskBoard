import React, { Component } from "react";
import "../styles/ResourceRemove.css";

/// NOTE: To use properly, parent element should have position:relative style
export default class ResourceRemove extends Component {
  onRemove = e => {
    this.props.onRemove(e);
    e.stopPropagation();
  };
  render() {
    return (
      <div onClick={this.onRemove} className="delete-button">
        X
      </div>
    );
  }
}
