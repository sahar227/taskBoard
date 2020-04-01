import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions/boardActions";
import ResourceRemove from "./ResourceRemove";
import "../styles/Task.css";

class Task extends Component {
  onRemove = () => {
    this.props.removeTask(this.props.task._id);
  };
  render() {
    return (
      <div className="task">
        {this.props.task.title}
        <ResourceRemove onRemove={this.onRemove} />
      </div>
    );
  }
}

export default connect(null, { removeTask })(Task);
