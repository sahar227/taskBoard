import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBoard } from "../actions/boardActions";
import Lists from "../components/Lists";

class ShowBoard extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.id);
  }
  render() {
    return (
      <div className="show-board">
        <h1 className="board-title">
          {this.props?.selectedBoard?.board?.title ?? ""}
        </h1>
        <Lists boardInfo={this.props.selectedBoard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBoard: state.selectedBoard
});
export default connect(mapStateToProps, { fetchBoard })(ShowBoard);
