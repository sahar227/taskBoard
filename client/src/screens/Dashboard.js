import React, { Component } from "react";
import ResourceInput from "../components/ResourceInput";
import "../styles/Dashboard.css";
import { connect } from "react-redux";
import { fetchBoards, createBoard } from "../actions/boardActions";
import Card from "../components/Card";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  onSubmit = value => {
    if (value.length < 3) return null;
    this.props.createBoard(value);
  };

  renderBoards = () => {
    return this.props.boards.map(board => (
      <Card key={board._id} board={board} />
    ));
  };

  render() {
    return (
      <div className="dashboard">
        <h1>Your boards:</h1>
        {this.renderBoards()}
        <ResourceInput
          title="New board:"
          placeholder="Enter board name"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, { fetchBoards, createBoard })(
  Dashboard
);
