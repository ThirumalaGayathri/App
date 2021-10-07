import action_Types from "../../../../../components/pokedex/redux/actions/actionTypes";
import valuesReducer from "../../../../../components/pokedex/redux/reducers/valuesReducer";
const initialState = {
  result: '',
  error: null,
};
describe("testing reducer", () => {
  it("handles success", () => {
    expect(
      valuesReducer(initialState, {
        type: action_Types.SET_DROPDOWN_VALUES,
        payload: "1",
      })
    ).toEqual({
      ...initialState,
      result: "1",
    });
});
    it("handle error", () => {
      expect(
        valuesReducer(initialState, {
          type: action_Types.SET_DROPDOWN_VALUES_ERROR,
          payload:""
        })
      ).toEqual({
        ...initialState,
        error:""
      });
    });
  });