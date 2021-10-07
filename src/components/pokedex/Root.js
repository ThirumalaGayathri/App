import React, { Component } from 'react';
import PokemonDropdown from './PokemonDropdown';
import Data from '../mock/AppMock';
import '../styles/App.css';
class Root extends Component {
  render() {
    return (
      <div className="app_div"><center>
            <PokemonDropdown Content={this.props.Content}/></center>
      </div>
    );
  }
}
Root.defaultProps = { Content: Data }
export default Root;