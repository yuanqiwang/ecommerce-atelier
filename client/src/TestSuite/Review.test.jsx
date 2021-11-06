import React from 'react';
import {
  render,
  screen,
  mount,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom"
import '@testing-library/jest-dom'

import Stars from '../components/Review/Stars.jsx'
import AddReviewButton from '../components/Review/AddReviewButton.jsx'
import MoreReviewButton from '../components/Review/MoreReviewButton.jsx'




//Stars
test('renders recommendation percentage', () => {
  render(<Stars />);
  const recommend = screen.getByText(/recommend/i);
  expect(recommend).toHaveTextContent('%')
});

//AddReviewButton
test('should open modal on click', () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = render(<AddReviewButton onClick={mockOnClick()}/>);
  const clickIndicator = getByTestId('ClickIndicator')
  fireEvent.click(clickIndicator)
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})

//MoreReviewButton
test('should open modal on click', () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = render(<MoreReviewButton onClick={mockOnClick()}/>);
  const clickIndicator = getByTestId('ClickIndicator')
  fireEvent.click(clickIndicator)
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})
