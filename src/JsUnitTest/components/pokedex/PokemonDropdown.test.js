import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { PokemonDropdown } from "../../../components/pokedex/PokemonDropdown";
Enzyme.configure({ adapter: new Adapter() });
describe("Select Buttons for displaying Pokemon and abilities",()=>{
    let props = {
        Content : {
        abilities:[ {
            "ability":
            {
            "name": "charmeleon",
          }
          }
        ]},
        setAbilities:fn=>fn,
        getAbilities:fn=>fn,
        error:true,
    }
    it( "render the Labels",()=>{
        const wrapper = shallow(<PokemonDropdown {...props} />);
        expect(wrapper.find('.component .dropdown #label1').text()).toBe('Select Name ')
    })
    it( "render the Dropdown ",()=>{
        const wrapper = shallow(<PokemonDropdown {...props} />);
        const element = wrapper.find('DropDown');
        expect(element.length).toBe(2);  
    })
    it( "check h2 element",()=>{
        const wrapper = shallow(<PokemonDropdown {...props} />); 
        expect(wrapper.find('h2').exists()).toBe(true);
    })
})










    
       