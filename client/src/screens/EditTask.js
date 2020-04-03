import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBoard, editTask } from "../actions/boardActions";
import Modal from "../Modal";
import EditableText from "../components/EditableText";
import history from "../history";
import "../styles/EditTask.css";

class EditTask extends Component {
  state = { descriptionText: "", initialized: false };

  componentDidMount() {
    fetchBoard(this.props.match.params.id);
    if (this.props.task)
      this.setState({ descriptionText: this.props.task.description });
  }

  componentDidUpdate() {
    if (!this.state.initialized)
      this.setState({
        descriptionText: this.props.task.description,
        initialized: true
      });
  }

  onInputChange = e => {
    this.setState({ descriptionText: e.target.value });
  };

  renderTitle = () => {
    return <EditableText initialValue={this.props.task.title} />;
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
          Save
        </div>
      </div>
    );
  };

  render() {
    if (!this.props.task) return null;
    return (
      <Modal
        title={this.renderTitle()}
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
