import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/common/Input';
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe("Input", () => {
  it("should render my component", () => {
     const wrapper = shallow(<Input />);
     expect(wrapper.find('input').exists()).toBe(true);  
});
});