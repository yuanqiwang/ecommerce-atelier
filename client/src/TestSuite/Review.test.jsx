import React from 'react';
import {
  render,
  screen,
  act,
  mount,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom"
import '@testing-library/jest-dom'
import Review from '../components/Review/Review.jsx'
import Stars from '../components/Review/ReviewChildren/Stars.jsx'
import AddReviewButton from '../components/Review/ReviewChildren/AddReviewButton.jsx'
import MoreReviewButton from '../components/Review/ReviewChildren/MoreReviewButton.jsx'




//Stars

test('renders recommendation percentage', () => {
  render(<Stars />);
  const recommend = screen.getByText(/%/i)
  expect(recommend).toBeInTheDocument()
});

//AddReviewButton
test('should open modal on click', () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = render(<AddReviewButton productId={59980} reviews={''} onClick={mockOnClick()}/>);
  //screen.debug()
  const clickIndicator = getByTestId('ClickIndicator')
  fireEvent.click(clickIndicator)
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})


/*
test('should render Related component', () => {
  render(<Review productId={59980} productInfo={['test']} stars={[5, 2, 3, 4]} ratings={[1]} reviews={[1]}/>);
  const qaElement = screen.getByTestId('related-render');
  expect(qaElement).toBeInTheDocument();
})
*/

