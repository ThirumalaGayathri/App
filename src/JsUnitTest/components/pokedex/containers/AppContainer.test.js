import {mapStateToProps, mapsDispatchToProps} from "../../../../components/pokedex/containers/AppContainer";
describe("App Container",() => {
    it(" map state to props", () => {
            const INITIAL_STATE = {
            event :{  
                  result : '1',
             error : null   
              }};     
            expect(mapStateToProps(INITIAL_STATE).result).toEqual('1');
            expect(mapStateToProps(INITIAL_STATE).error).toEqual(null);
        });
it(" mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapsDispatchToProps(dispatch).getAbilities();
    expect(dispatch.mock.calls[0][0]).toBeCalled;
  });
})









