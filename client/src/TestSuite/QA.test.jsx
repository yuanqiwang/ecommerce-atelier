import React from 'react';
import {render, screen, cleanUp, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';
import QA from '../components/QA/QA.jsx';


test('should render QA component', () => {
  render(<QA/>);
  const qaElement = screen.getByTestId('QA-render');
  expect(qaElement).toBeInTheDocument();

})