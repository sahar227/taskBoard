import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBoard, editTask } from "../actions/boardActions";
import Modal from "../Modal";
import history from "../history";
import "../styles/EditTask.css";

class EditTask extends Component {
  state = { descriptionText: null };

  componentDidMount() {
    fetchBoard(this.props.match.params.id);
    if (this.props.task)
      this.setState({ descriptionText: this.props.task.description });
  }

  componentDidUpdate() {
    if (!this.state.descriptionText && this.state.descriptionText !== "")
      this.setState({ descriptionText: this.props.task.description });
  }

  onInputChange = e => {
    this.setState({ descriptionText: e.target.value });
  };

  renderContent = () => {
    return (
      <div className="content-conatiner">
        <div>Description:</div>
        <textarea
          className="edit-task-description"
          value={this.state.descriptionText}
          onChange={this.onInputChange}
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  };

  onSubmit = e => {
    this.props.editTask(this.props.task._id, {
      description: this.state.descriptionText
    });
    e.stopPropagation();
  };

  renderActions = () => {
    return (
      <div className="actions-container">
        <div className="task-submit-button" onClick={this.onSubmit}>
          Submit
        </div>
      </div>
    );
  };

  render() {
    if (!this.props.task) return null;
    return (
      <Modal
        title={this.props.task.title}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push(`/boards/${this.props.match.params.id}`)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  task: state.selectedBoard?.tasks?.find(
    task => task._id === ownProps.match.params.taskId
  )
});

export default connect(mapStateToProps, { fetchBoard, editTask })(EditTask);
