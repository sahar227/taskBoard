import React, { Component } from "react";
import "../styles/List.css";
import ResourceRemove from "./ResourceRemove";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="title">
          {this.props.list.title}
          <ResourceRemove />
        </div>
        <div className="body">{this.props.list.title}</div>
      </div>
    );
  }
}
