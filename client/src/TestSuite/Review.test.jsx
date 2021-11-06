import React from 'react';
import {
  render,
  screen,
  mount,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom'
import { unmountComponentAtNode } from "react-dom"


//Stars
import Stars from '../components/Review/Stars.jsx'

test('renders recommendation percentage', () => {
  render(<Stars />);
  const recommend = screen.getByText(/recommend/i);
  expect(recommend).toHaveTextContent('%')
  //screen.debug();
});

//AddReviewButton

//Characteristics

//Modal

//MoreReviewButton

//Review

//ReviewCard

//SortReview

//UserReviews
import UserReviews from '../components/Review/UserReviews.jsx'
test('UserReviews should contain ReviewCard ', () => {
  const detailsPanel = mount(
    <ReviewCard />);
  expect(detailsPanel.contains('Review Card')).toBeTruthy();
});