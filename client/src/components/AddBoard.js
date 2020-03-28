import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createBoard} from '../actions/boardActions';
import '../styles/Dashboard.css';
import '../styles/AddBoard.css';

class AddBoard extends Component {
    state = {inputValue: ''};

    onPlusClick = () => {
        if(this.state.inputValue.length < 3)
            return null;
        this.props.createBoard(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    onInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <div className="card">
                <div>
                    New board:
                </div>
                <input type="text" placeholder="Enter board name" value={this.state.inputValue} onChange={this.onInputChange}/>
                <div className="plus" onClick={this.onPlusClick}></div>
            </div>
        )
    }
}

export default connect(null, {createBoard})(AddBoard);