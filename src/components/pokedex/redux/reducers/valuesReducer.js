import action_Types from '../actions/actionTypes';
const INITIAL_STATE = {
  result: [],
  error: null,
}
const valuesReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case action_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        result: payload,
        error: null,
      };
    case action_Types.SET_DROPDOWN_VALUES_ERROR:
      return {
        ...state,
       error : payload,
      };
    default:
      return state;
  }
};
export default valuesReducer;