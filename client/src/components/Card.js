import React, { Component } from "react";
import { connect } from "react-redux";
import { removeBoard } from "../actions/boardActions";
import "../styles/Card.css";

class Card extends Component {
  render() {
    const { board, removeBoard } = this.props;
    return (
      <div className="card">
        <a key={board._id}>{board.title}</a>
        <div onClick={() => removeBoard(board._id)} className="delete-button">
          X
        </div>
      </div>
    );
  }
}

export default connect(null, { removeBoard })(Card);
