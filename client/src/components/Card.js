import React, { Component } from "react";
import history from "../history";
import { connect } from "react-redux";
import { removeBoard } from "../actions/boardActions";
import "../styles/Card.css";

class Card extends Component {
  onRemoveBoard = e => {
    const { board, removeBoard } = this.props;
    removeBoard(board._id);
    e.stopPropagation();
  };
  render() {
    const { _id, title } = this.props.board;
    return (
      <div
        onClick={() => history.push(`/boards/${_id}`)}
        className="card clickable"
      >
        <div to={`/boards/${_id}`}>{title}</div>
        <div onClick={this.onRemoveBoard} className="delete-button">
          X
        </div>
      </div>
    );
  }
}

export default connect(null, { removeBoard })(Card);
