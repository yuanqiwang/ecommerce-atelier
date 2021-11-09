import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';
import QA from '../components/QA/QA.jsx';
import SearchQuestions from '../components/QA/qa_components/SearchQuestions.jsx';
import questions from './questions.js'


afterEach(cleanup);

test('should render QA component', () => {
  render(<QA/>);
  const qaElement = screen.getByTestId('QA-render');
  expect(qaElement).toBeInTheDocument();
})

it("should render search bar", () => {
  const {queryByTestId, queryByPlaceholderText} = render(<SearchQuestions />)
  expect(queryByPlaceholderText('Have a question? Search for answers…').toBeTruthy)
})

describe("Search should take input value", () => {
  it('updates on change', () => {
    const {queryByPlaceholderText} = render(<SearchQuestions />)
    const searchInput = queryByPlaceholderText('Have a question? Search for answers…');
    fireEvent.change(searchInput, {target: {value: "test"}})
    expect(searchInput.value).toBe("test")
  })
  //it should return xxx
})

test('should match snapshot',  () => {
  const tree = renderer.create(
    <QA
      questions={questions}
      productId={'60205'}
      productInfo={{'name': 'test name'}}
    />).toJSON()
  expect(tree).toMatchSnapshot();
})

// test('should open ask a question modal on click', () => {
//   const mockOnClick = jest.fn()
//   const { getByTestId } = render(<AddReviewButton onClick={mockOnClick()}/>);
//   const clickIndicator = getByTestId('ClickIndicator')
//   fireEvent.click(clickIndicator)
//   expect(mockOnClick).toHaveBeenCalledTimes(1)
// })
//it should have the 4 subcomponents? or does the QA one settles it

//Search{questions, productId, productInfo}

//Questions:

//when it has no questions, one of the button should not be there
