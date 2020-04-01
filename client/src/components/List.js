import React, { Component } from "react";
import { connect } from "react-redux";
import { removeList } from "../actions/boardActions";
import ResourceRemove from "./ResourceRemove";
import ResourceInput from "./ResourceInput";
import "../styles/List.css";

class List extends Component {
  onRemove = () => {
    this.props.removeList(this.props.list._id);
  };
  render() {
    return (
      <div className="list">
        <div className="title">
          {this.props.list.title}
          <ResourceRemove onRemove={this.onRemove} />
        </div>
        <div className="body">
          {this.props.list.title}
          <ResourceInput placeholder="Create new task" className="task-input" />
        </div>
      </div>
    );
  }
}

export default connect(null, { removeList })(List);
