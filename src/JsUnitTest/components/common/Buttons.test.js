import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Buttons from '../../../components/common/Buttons';
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe('Buttons', () =>{
    it('On click it should call mock call back', () => {
        const onButtonClick = sinon.spy();
        const button = shallow((<Buttons onClick={onButtonClick}/>));
        button.find('button').simulate('click');
        expect(onButtonClick.calledOnce).toBe(true)
    });
});