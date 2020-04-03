import React, { Component } from "react";
import "../styles/EditableText.css";

export default class EditableText extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = { savedText: "", text: "", isInputActive: false };

  componentDidMount() {
    this.setState({
      savedText: this.props.initialValue,
      text: this.props.initialValue
    });
  }

  componentDidUpdate() {
    if (this.state.isInputActive) this.focusTextInput();
  }

  switchActive = () => {
    const { isInputActive } = this.state;
    this.setState({ isInputActive: !isInputActive });
  };

  onTextChange = e => {
    this.setState({ text: e.target.value });
  };

  focusTextInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    const { isInputActive, text, savedText } = this.state;
    return (
      <div>
        <div
          onClick={this.switchActive}
          className={`${this.props.className} ${
            isInputActive ? "not-active" : ""
          } text-view`}
        >
          {savedText}
        </div>
        <input
          ref={this.inputRef}
          onBlur={this.switchActive}
          className={`${this.props.className} ${
            !isInputActive ? "not-active" : ""
          } text-input`}
          type="text"
          value={text}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
}

EditableText.defaultProps = {
  className: "",
  initialValue: ""
};
