import React from 'react';
import {
  render,
  screen,
  act,
  mount,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom"
import '@testing-library/jest-dom'
import Review from '../components/Review/Review.jsx'
import Breakdown from '../components/Review/ReviewChildren/Breakdown.jsx'
import AddReviewButton from '../components/Review/ReviewChildren/AddReviewButton.jsx'
import MoreReviewButton from '../components/Review/ReviewChildren/MoreReviewButton.jsx'
import reviewTest from './reviewTest.js'


afterEach(() => cleanUp);

describe("Basic Component Structure", () => {
  it('should test default render behavior of Review', () => {
    const {getByTestId} = render(<Review/>);
    const reviewElement = getByTestId('Review-render');
    expect(reviewElement).toBeInTheDocument();
  })


})

//Stars
test('renders Breakdown correctly', () => {
  const { container } = render(<Breakdown recommend={true} ratings={''} />);
  expect(container.firstChild).toMatchSnapshot()
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

describe("Testing More Review button", () => {
  const mockOnClick = jest.fn()
  it('should show show More Reviews button if there are more reviews to see', () => {
    const { getByTestId } = render(<MoreReviewButton addCountCallBack={''} nReviews={10} reviewCount={5} />)
    const btn = getByTestId("child-button")
    expect(btn).toBeTruthy()
  })
})



