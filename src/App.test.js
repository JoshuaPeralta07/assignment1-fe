import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";



test('renders correctly', () => {
const component = renderer.create(<Home />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});

test('renders about page correctly', () => {
const component = renderer.create(
  <MemoryRouter>
    <About />
  </MemoryRouter>
);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
