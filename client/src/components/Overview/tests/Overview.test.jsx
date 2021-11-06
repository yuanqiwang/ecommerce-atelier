import React from 'react';
import ReactDOM from 'react-dom';
import Overview from '../Overview.jsx';
import {
  render,
  screen,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom';

// component should exist and render
it('Overview Component renders correctly', () => {
  render(<Overview />);

  const overviewComponent = screen.getByTestId('overview');
  expect(overviewComponent).toBeInTheDocument();
});

// sub-components should exists
it('All Sub-Components render correctly', () => {
  render(<Overview />);

  expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
  expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
  expect(screen.getByTestId('product-bullets')).toBeInTheDocument();
  expect(screen.getByTestId('product-headline')).toBeInTheDocument();
  expect(screen.getByTestId('product-info')).toBeInTheDocument();
  expect(screen.getByTestId('product-options')).toBeInTheDocument();
  expect(screen.getByTestId('select-size')).toBeInTheDocument();
  expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  expect(screen.getByTestId('styles')).toBeInTheDocument();
  expect(screen.getByTestId('style-selector')).toBeInTheDocument();
  expect(screen.getByTestId('thumbnails')).toBeInTheDocument();

});

// data and images should populate with the correct API data

// thumbnail clicks should change the hero image + to the correct full image

// style clicks should update all thumbnails + hero image

// checkout options should all be stored for cart retrieval on "add to bag" click

// favorite item should be stored on star button click
