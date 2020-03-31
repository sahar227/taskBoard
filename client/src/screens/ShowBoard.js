import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBoard } from "../actions/boardActions";

class ShowBoard extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <div>Show board</div>
        <div>
          {this.props.selectedBoard !== null && this.props.selectedBoard.title}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBoard: state.selectedBoard
});
export default connect(mapStateToProps, { fetchBoard })(ShowBoard);
