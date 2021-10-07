import React, { Component } from 'react';
import Data from '../mock/AppMock';
class Buttons extends Component {
  render() {
    return <button id={this.props.name} onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
Buttons.defaultProps = { Content: Data };
export default Buttons;