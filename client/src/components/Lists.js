import React, { Component } from "react";
import List from "./List";
import ResourceInput from "../components/ResourceInput";
import { connect } from "react-redux";
import { createList } from "../actions/boardActions";
import "../styles/Lists.css";

class Lists extends Component {
  onSubmit = value => {
    this.props.createList(this.props.boardInfo.board._id, value);
  };
  getTasksForList = listId => {
    const { tasks } = this.props.boardInfo;
    return tasks.filter(task => task.listId === listId);
  };
  renderLists = () => {
    return this.props.boardInfo.lists.map(list => (
      <List key={list._id} list={list} tasks={this.getTasksForList(list._id)} />
    ));
  };
  render() {
    if (!this.props.boardInfo) return <div>Loading</div>;
    return (
      <div className="lists">
        {this.renderLists()}
        <ResourceInput
          title="New list:"
          placeholder="Enter list name"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { createList })(Lists);
