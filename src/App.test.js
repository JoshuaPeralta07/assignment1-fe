import React from 'react';
import renderer from 'react-test-renderer';
import Home from "./components/Home";
import About from "./components/About";



test('renders correctly', () => {
const component = renderer.create(<Home />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});

test('renders about page correctly', () => {
const component = renderer.create(<About />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
