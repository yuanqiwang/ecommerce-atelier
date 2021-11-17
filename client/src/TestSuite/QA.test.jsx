
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';

import QA from '../components/QA/QA.jsx';
import SearchQuestions from '../components/QA/qa_components/SearchQuestions.jsx';
import QuestionsList from '../components/QA/qa_components/QuestionsList.jsx';
import Question from '../components/QA/qa_components/Question.jsx';
import questions from './questions.js'


afterEach(cleanup);

describe('QA Component', () => {
  it('should render QA component', () => {
    const {getByTestId} = render(<QA/>);
    const qaElement = getByTestId('QA-render');
    expect(qaElement).toBeInTheDocument();
  })
})



describe("Search function", () => {

  it("should render the search bar", () => {//{questions, productId, productInfo}
    const {queryByPlaceholderText} = render(<SearchQuestions />)
    const searchInput = queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...');
    expect(searchInput).toBeTruthy;
  })

  it('should change when type in the search bar', () => {
    const {debug, queryByPlaceholderText} = render(<SearchQuestions />)
    const searchInput = queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...');
    fireEvent.change(searchInput, {target: {value: "test"}})
    // debug();
    expect(searchInput.value).toBe("test")
  })

  // it('should updates list when input character length is >= 3', () => {
  //   const {queryByPlaceholderText} = render(<SearchQuestions />)
  //   const searchInput = queryByPlaceholderText('Have a question? Search for answers…');
  //   fireEvent.change(searchInput, {target: {value: "test"}})
  //   expect(searchInput.value).toBe("test")
  // })
})


describe("Question List", () => {

  // it("should render a list of questions", () => {
  //   const {debug, getByText} = render(<QuestionsList questions={questions} productId={'59553'} productInfo={{name: 'Camo Onesie'}}/>)
  //   const questionsElement = getByText(/ser/)
  //   expect(questionsElement.toBeTruthy)
  // })

  // it("should render two questions on initial render", () => {
  //   const {debug, getByText} = render(<QuestionsList questions={questions} productId={'59553'} productInfo={{name: 'Camo Onesie'}}/>)
  //   const questionsElement = getByText(/ser/)
  //   expect(questionsElement.toBeTruthy)
  // })

  // it("should render 'more  for each question", () => {
  //   const { queryByPlaceholderText} = render(<SearchQuestions />)
  //   expect(queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...').toBeTruthy)
  // })

})

describe("Each Question", () => {

  beforeEach(() => {
    render(<Question question={questions[0]} productName={'product1'}/>)
  })

  let text = questions[0].question_body;
  let questionHelpfulness = questions[0].question_helpfulness;
  let answerList = Object.keys(questions[0].answers);

  it("should render the question body", () => {
    expect(screen.queryByText(`Q: ${text}`).toBeTruthy)
  })

  it("should render helpful count for the question", () => {
    expect(screen.queryByText(`${questionHelpfulness}`, {exact: false}).toBeTruthy)
  })


  it("should render 'Add Answer' link", () => {
    expect(screen.queryByText('Add Answers').toBeTruthy)
  })

  it("should render 'Add Answer' modal when click on the 'Add Answer' link", () => {
    const addAnswerLink = screen.queryByText('Add Answers')
    fireEvent.click(addAnswerLink)
    screen.debug()
    expect(screen.queryByText('Submit your Answer').toBeInTheDocument)
  })

  it("should render a list of answers for each question", () => {
    answer = answerList[0]
    const answerElementOne = screen.queryByText(//)
    expect(answerElementOne.toBeTruthy)
  })

  //integration test
  it("should increase the count of helpful when click 'Yes'", () => {

  })
})





describe("Each Answer", () => {


})



// describe("'More Answered Questions' button", () => {

//   it("should render 'More Answered Questions' when there are more than 2 questions ", () => {
//     const { queryByPlaceholderText} = render(<SearchQuestions />)
//     expect(queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...').toBeTruthy)
//   })

//   it("should hind 'More Answered Questions' when there are less than 2 questions ", () => {
//     const { queryByPlaceholderText} = render(<SearchQuestions />)
//     expect(queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...').toBeTruthy)
//   })

// })

// describe('Question Modal Window', () => {
//   it('should open ask a question modal on click', () => {
//     const mockOnClick = jest.fn()
//     const { getByTestId } = render(<AddReviewButton onClick={mockOnClick()}/>);
//     const clickIndicator = getByTestId('ClickIndicator')
//     fireEvent.click(clickIndicator)
//     expect(mockOnClick).toHaveBeenCalledTimes(1)
//   })

// })


// test('should match snapshot',  () => {
//   const tree = renderer.create(
//     <QA
//       questions={questions}
//       productId={'60205'}
//       productInfo={{'name': 'test name'}}
//     />).toJSON()
//   expect(tree).toMatchSnapshot();
// })