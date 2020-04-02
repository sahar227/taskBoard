import React, { Component } from "react";
import { connect } from "react-redux";
import { removeList, createTask } from "../actions/boardActions";
import ResourceRemove from "./ResourceRemove";
import ResourceInput from "./ResourceInput";
import Task from "./Task";
import "../styles/List.css";

class List extends Component {
  onRemove = () => {
    this.props.removeList(this.props.list._id);
  };

  onAddTask = value => {
    this.props.createTask(this.props.boardId, this.props.list._id, value);
  };

  renderTasks = () => {
    return this.props.tasks.map(task => (
      <Task key={task._id} task={task} boardId={this.props.boardId} />
    ));
  };

  render() {
    return (
      <div className="list">
        <div className="title">
          {this.props.list.title}
          <ResourceRemove onRemove={this.onRemove} />
        </div>
        <div className="body">
          {this.renderTasks()}
          <ResourceInput
            onSubmit={this.onAddTask}
            placeholder="Create new task"
            className="task-input"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boardId: state.selectedBoard.board._id
});

export default connect(mapStateToProps, { removeList, createTask })(List);
