import React, { Component } from "react";
import { connect } from "react-redux";
import history from '../history'
import { fetchBoard, editBoard } from "../actions/boardActions";
import Lists from "../components/Lists";
import EditableText from "../components/EditableText";

class ShowBoard extends Component {
  componentWillMount() {
    this.props.fetchBoard(this.props.match.params.id);
  }
  render() {
    const { selectedBoard, editBoard } = this.props;
    const boardTitle = selectedBoard?.board?.title ?? "";
    return (
      <div className="show-board">
        <p className="back"  onClick={() => history.push("/boards")}>back to dashboard</p>
        <h1 className="board-title">
          <EditableText
            onSubmit={value =>
              editBoard(selectedBoard.board._id, { title: value })
            }
            initialValue={boardTitle}
          />
        </h1>
        <Lists boardInfo={selectedBoard} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBoard: state.selectedBoard
});
export default connect(mapStateToProps, { fetchBoard, editBoard })(ShowBoard);
