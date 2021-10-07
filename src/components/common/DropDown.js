import React, { Component } from "react";
import Data from '../mock/AppMock';
class DropDown extends Component {
    handleDropdownChange(e) {
        this.props.handleOnChange(e.target.value)
    }
    render() {
        const dropdownList = this.props.dropdownList
        return (
            <div> 
                <select onChange={(e) => this.handleDropdownChange(e)} >
                    {
                             dropdownList.map(x => {
                            return <option>{x.ability.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
DropDown.defaultProps = { Content: Data}
export default DropDown;