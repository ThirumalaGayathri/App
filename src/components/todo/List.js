import { map } from 'jquery';
import React, { Component } from 'react';
import Modal from './Modal';
import Data from '../mock/AppMock';
import Buttons from '../common/Buttons';
class List extends Component {
  constructor(props) {
    super(props);
    this.editItem = this.editItem.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.state = {
      data: props.data,
      requiredItem: 0,
      tasks: [],
      key: 0,
    };
  }
  editItem(item) {
    this.setState({
      requiredItem: item,
      key: item.key,
    });
  }
  saveDetails(item) {
    const newdata = [];
    const data = this.state.data;
    map(this.state.data, (obj) => {
      if (this.state.key == obj.key) {
        newdata.push(item);
      } else {
        newdata.push(obj);
      }
    });
    this.setState({ data: newdata });
  }
  deleteItem(item) {
    const newdata = [];
    const data = this.state.data;
    map(this.state.data, (obj) => {
      if (item.key != obj.key) {
        newdata.push(obj);
      }
    });
    this.setState({ data: newdata });
  }
  render() {
    const tasks = this.state.data.map((item, index) => {
      return (
         <tr key={index}>
          <td>{item.name}</td>
          <td>
            <div data-toggle="modal" data-target="#exampleModal">
            <Buttons id="edit" name={this.props.Content.editButtonText} onClick={() => this.editItem(item)}/>
            </div><br/>
            <Buttons id="delete" name={this.props.Content.deleteButtonText} onClick={() => this.deleteItem(item)}/>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <br />
        <table className="table ">
          <tbody>{tasks}</tbody>
        </table>
        <Modal
          title={this.state.requiredItem.name}
          key={this.state.requiredItem.key}
          saveDetails={this.saveDetails}
        />
      </div>
    );
  }
}
List.defaultProps = { Content: Data };
export default List;