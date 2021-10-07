import Enzyme, { shallow } from "enzyme";
import DropDown from '../../../components/common/DropDown';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe("passing props", () => {
  let props = {
    Data: {
      heading: "Pokedex",
      label2: "Select Abilities",
      label1: "Select Name", 
    },
    handleDropdownChange: (fn) => fn,
    handleOnChange: (fn) => fn,
    dropdownList: [{ name: "pokemon values" }],
  };
  it("should call handleonChange method", () => {
    const wrapper = shallow(<DropDown {...props} dropdownList={[]}/>);
    const para = wrapper.find('select').at(0);
    para.simulate('change',{target:{value:"Pokemon"}});
    expect(wrapper.find("handleDropdownChange")).toBeCalled;
  });
});








