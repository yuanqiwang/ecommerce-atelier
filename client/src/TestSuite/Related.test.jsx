import React from 'react';
import {render, screen, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';
import Related from '../components/Related/Related.jsx';
import axios from 'axios';
afterEach(() => {
  cleanup()
})

test('should render Related component', () => {
  render(<Related relatedProductArr={[59980, 59712, 59912, 60374, 60042]}/>);
  const relatedElement = screen.getByTestId('related-render');
  expect(relatedElement).toBeInTheDocument();
})
