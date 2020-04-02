import React, { Component } from "react";
import Modal from "../Modal";
import history from "../history";

export default class EditTask extends Component {
  render() {
    return (
      <Modal
        onDismiss={() => history.push(`/boards/${this.props.match.params.id}`)}
      />
    );
  }
}
