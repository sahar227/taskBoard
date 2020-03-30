import React, { Component } from "react";
import AddBoard from "../components/AddBoard";
import "../styles/Dashboard.css";
import { connect } from "react-redux";
import { fetchBoards } from "../actions/boardActions";
import Card from "../components/Card";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  renderBoards = () => {
    return this.props.boards.map(board => (
      <Card key={board._id} board={board} />
    ));
  };

  render() {
    return (
      <div className="dashboard">
        {this.renderBoards()}
        <AddBoard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
