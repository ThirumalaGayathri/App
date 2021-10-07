import { connect } from 'react-redux';
import getAbilities from '../redux/constants/getDropdownList';
import PokemonDropdown from '../PokemonDropdown';
export const mapStateToProps = (state) => {
    return {
      result: state.event.result,
      error: state.event.error,
    };
  };
export const mapsDispatchToProps = (dispatch) => ({
  getAbilities: (name) => dispatch(getAbilities(name))
});
const Container = connect(mapStateToProps, mapsDispatchToProps)(PokemonDropdown);
export default Container;
