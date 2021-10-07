import React  from "react";
import DropDown from '../common/DropDown';
 export class PokemonDropdown extends React.Component {
  componentDidMount() {
    this.setAbilities(this.props.Content.abilities[0].ability.name);
  }
  setAbilities(name) {
    this.props.getAbilities(name);
  }
  render() {
    return (
      <div className="component">
      <div className="dropdown">
      <h1>{this.props.Content.heading}</h1><br/>
      <label id="label1">Select Name </label>
          <DropDown handleOnChange={(name) => this.setAbilities(name)} dropdownList={this.props.Content.abilities} />
          <br/>
          <label id="label2">Select Abilities </label>
          <DropDown dropdownList={this.props.result} /><br/>
          {this.props.error && <h2>{this.props.Content.error}</h2>}
        </div>
        </div>
    )
  }
}
export default (PokemonDropdown);