import React from 'react';
import renderer from 'react-test-renderer';
import Home from "./components/Home";




test('renders Home and image correctly', () => {
  const homeComponent = renderer.create(<Home />);
  const imgComponent = renderer.create(<img src={require('./Images/dp.jpg')} alt="dp" />);

  const homeTree = homeComponent.toJSON();
  const imgTree = imgComponent.toJSON();

  expect(homeTree).toMatchSnapshot();
  expect(imgTree).toMatchSnapshot();
});