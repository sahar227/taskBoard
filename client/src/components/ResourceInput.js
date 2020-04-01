import React, { Component } from "react";
import "../styles/Dashboard.css";
import "../styles/ResourceInput.css";

class ResourceInput extends Component {
  state = { inputValue: "" };

  onSubmit = e => {
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  onInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className={this.props.className}>
        <div>{this.props.title}</div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <div className="plus" onClick={this.onSubmit}></div>
      </div>
    );
  }
}

ResourceInput.defaultProps = {
  title: "",
  placeholder: "",
  className: "card"
};

export default ResourceInput;
