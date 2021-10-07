import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../App';
import { Route } from 'react-router-dom';
import Header from '../../components/todo/Header';
import Container from '../../components/pokedex/containers/AppContainer';
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
let pathMap = {};
describe('routes using array of routers', () => {
beforeAll(() => {
const component = shallow(<Routes/>);
pathMap = component.find(Route).reduce((pathMap, route) => {
const routeProps = route.props();
pathMap[routeProps.path] = routeProps.component;
return pathMap;
 }, {});
console.log(pathMap)
 })
it('should show Root component for /news router', () => {
expect(pathMap['/Root']).toBe(Container);
 })
it('should show Header component for /news router', () => {
expect(pathMap['/Header']).toBe(Header);
 })
})