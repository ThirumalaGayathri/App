import  {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Root from '../../../components/pokedex/Root';
import Enzyme from'enzyme';
Enzyme.configure({adapter: new Adapter()});
describe('Root', ()=> {
    let props ={
        Data : 
{
    heading: "Pokedex",
   abilities:[
    {
      "ability":
      {     
        name: "charmeleon"    
      }
    },
    {
      "ability": 
      {
        name: "bulbasaur"
      }
    },
    {    
      "ability": 
      {     
        name: "squirtle"        
      }
    },
    {     
      "ability": 
      { 
        name: "weedle"
      }
    }]
}
    }
  it('renders  components', () => {
    const wrapper = shallow(<Root {...props}/>);
    expect(wrapper.find(".app_div").exists()).toBe(true);
});
});