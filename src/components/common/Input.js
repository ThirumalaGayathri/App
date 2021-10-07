import React, { Component } from 'react';
import Data from '../mock/AppMock';
class Input extends Component {
  render() {
    return (
      <div className="input_div">
      <input
        onChange={this.props.handleChange}
        type="text"
        placeholder={this.props.Content.enter}
        required
        value={this.props.content}
        id={this.props.id}
      /></div>
    );
  }
}
Input.defaultProps = { Content: Data };
export default Input;