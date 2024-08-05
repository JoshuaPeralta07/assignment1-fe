import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";




test('renders Home and image correctly', () => {
  const homeComponent = renderer.create(<Home />);
  const imgComponent = renderer.create(<img src={require('./Images/dp.jpg')} alt="dp" />);

  const homeTree = homeComponent.toJSON();
  const imgTree = imgComponent.toJSON();

  expect(homeTree).toMatchSnapshot();
  expect(imgTree).toMatchSnapshot();
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
