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

  setInputActive = () => {
    this.setState({ isInputActive: true, text: this.state.savedText });
  };

  onTextChange = e => {
    this.setState({ text: e.target.value });
  };

  focusTextInput = () => {
    this.inputRef.current.focus();
  };

  onSubmit = e => {
    e.preventDefault();
    const { text, savedText } = this.state;
    this.setState({ savedText: text, isInputActive: false });
    if (text !== savedText) this.props.onSubmit(text);
  };

  render() {
    const { isInputActive, text, savedText } = this.state;
    return (
      <div>
        <div
          onClick={this.setInputActive}
          className={`${this.props.className} ${
            isInputActive ? "not-active" : ""
          } text-view`}
        >
          {savedText}
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            onBlur={this.onSubmit}
            className={`${this.props.className} ${
              !isInputActive ? "not-active" : ""
            } text-input`}
            type="text"
            value={text}
            onChange={this.onTextChange}
          />
        </form>
      </div>
    );
  }
}

EditableText.defaultProps = {
  className: "",
  initialValue: "",
  onSubmit: value => console.log(value)
};
