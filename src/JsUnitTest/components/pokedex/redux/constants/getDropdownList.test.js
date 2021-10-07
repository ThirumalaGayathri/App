import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getAbilities from "../../../../../components/pokedex/redux/constants/getDropdownList";
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
const applyMiddleware = [thunk];
const mockStore = configureMockStore(applyMiddleware);
const mock = new MockAdapter(axios);
const store = mockStore();
describe("getAbilities actions", () => {
  it("dispatches getAbilities after a successfull API requests", () => {
    let response = { data: [{ name: "blaze"}, { name: "solar-power"}]}
    mock
      .onGet()
      .reply(200, response);
     return store.dispatch(getAbilities("charmeleon")).then(() => {
      let actionsDispatched = store.getActions()
      expect(actionsDispatched.length > 0).toBe(true)
      expect(actionsDispatched.length).toEqual(1)
      expect(actionsDispatched[0].type).toEqual("SET_DROPDOWN_VALUES")
    });
  });
  it("dispatches getAbilities after a successfull API requests with empty data", () => {
    mock
      .onGet()
      .reply(200, null);
     return store.dispatch(getAbilities("charmeleon")).then(() => {
      let actionsDispatched = store.getActions()
      expect(actionsDispatched.length > 0).toBe(true)
     expect(actionsDispatched[0].type).toEqual("SET_DROPDOWN_VALUES")
    });
  });
  it("dispatches SET_DROPDOWN_VALUES_ERROR after a FAILED API requests", () => {
    mock
    .onGet()
    .reply(400, "error");
    return store.dispatch(getAbilities()).catch(() => {
    let actionsDispatched = store.getActions()
    expect(actionsDispatched[0].type).toEqual("SET_DROPDOWN_VALUES_ERROR")
    });
    });
    });





  