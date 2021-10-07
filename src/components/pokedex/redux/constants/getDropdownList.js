import axios from "axios";
import action_Types from  '../actions/actionTypes';
const getAbilities = (name) => async (dispatch) => {
    await axios
        .get(" https://pokeapi.co/api/v2/pokemon/" + name )
        .then((res) => {
            dispatch(getData(res.data));
        })
        .catch((error) => {
            dispatch(getError(error));
        });
    };
    const getData = (result) => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES,
        payload: result.abilities,
    };
};
    const getError = () => {
    return {
        type: action_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: true,
    };
};
export default getAbilities;