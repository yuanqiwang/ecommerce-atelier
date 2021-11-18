
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, cleanup, fireEvent, waitForElement, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import QA from '../components/QA/QA.jsx';
// import SearchQuestions from '../search.jsx';
import QuestionsList from '../components/QA/qa_components/QuestionsList.jsx';
import Question from '../components/QA/qa_components/Question.jsx';
import questions from './questions.js'
import AnswerModal from '../components/QA/qa_components/AnswerModal.jsx'
import Answer from '../components/QA/qa_components/Answer.jsx';
import QuestionModal from '../components/QA/qa_components/QuestionModal.jsx';
import Helpful from '../components/QA/qa_components/Helpful.jsx';


afterEach(cleanup);

describe('QA Component', () => {
  it('should render QA component', () => {
    const {getByTestId} = render(<QA/>);
    const qaElement = getByTestId('QA-render');
    expect(qaElement).toBeInTheDocument();

  })
  it('should filter results based on search input', ()=> {
    let container = render(<QA questions={questions}/>);
    const searchInput = container.queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...');
    fireEvent.change(searchInput, {target: {value: "temporibus"}})
    expect(container.getAllByText('temporibus', {exact: false}).length).toBe(1);
  })
})

describe("Search function", () => {

  it("should render the search bar", () => {//{questions, productId, productInfo}
    const {queryByPlaceholderText} = render(<QA />)
    const searchInput = queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...');
    expect(searchInput).toBeTruthy;
  })

  it('should change when type in the search bar', () => {
    const {debug, queryByPlaceholderText} = render(<QA />)
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

describe("Each Question", () => {

  beforeEach(() => {
    render(<Question question={questions[0]} productName={'product1'}/>)
  })

  let text = questions[0].question_body;
  let questionHelpfulness = questions[0].question_helpfulness;
  let answerList = Object.keys(questions[0].answers);

  it("should render the question body", () => {
    expect(screen.queryByText(`Q: ${text}`).toBeInTheDocument)
  })

  it("should render helpful count for the question", () => {
    expect(screen.queryByText(`${questionHelpfulness}`, {exact: false}).toBeTruthy)
  })


  it("should render 'Add Answer' link", () => {
    expect(screen.queryByText('Add Answers').toBeInTheDocument)
  })

  it("should render 'LOAD MORE ANSWERS' button when there are more than 2 answers", () => {
    expect(screen.queryByText('LOAD MORE ANSWERS').toBeInTheDocument)
  })

  it("should render 'LOAD MORE ANSWERS' button when there are more than 2 answers", () => {
    let loadMoreAnswers = screen.queryByText('LOAD MORE ANSWERS')
    fireEvent.click(loadMoreAnswers)
    let answers = screen.getAllByText('Report', {exact:false});
    expect(answers.length).toBe(13)
  })

  // it("should render a list of answers for each question", () => {
  //   answer = answerList[0]
  //   // const answerElementOne = screen.queryByText(//)
  //   expect(answerElementOne.toBeTruthy)
  // })

  //integration test
  // it("should increase the count of helpful when click 'Yes'", () => {

  // })

  it("should render 'Add Answer' modal when click on the 'Add Answer' link", () => {
    const addAnswerLink = screen.queryByText('Add Answers')
    fireEvent.click(addAnswerLink)
    expect(screen.queryByText('Submit your Answer').toBeInTheDocument)
  })
  // it('should open ask a question modal on click', () => {
  //   const mockOnClick = jest.fn()
  //   const { getByTestId } = render(<AddReviewButton onClick={mockOnClick()}/>);
  //   const clickIndicator = getByTestId('ClickIndicator')
  //   fireEvent.click(clickIndicator)
  //   expect(mockOnClick).toHaveBeenCalledTimes(1)
  // })
})

describe("Each Answer", () => {
  const answer = questions[0].answers['4871274']
  let container
  beforeEach(() => {
    localStorage.clear();
    container = render(<Answer answer={answer}/> )
  })

  it("should render each answer with answer body", () => {
    const answerElement = container.queryByText(answer.body)
    expect(answerElement).toBeInTheDocument();
  })
  it("should render each answer with user name", () => {
    const answerByElement = container.getByText('Haylee11', {exact: false})
    expect(answerByElement).toBeInTheDocument();
  })

  it("should show image modal window when clicked on the photo", () => {
    const firstImage = container.getByAltText(`answer image 0`)
    fireEvent.click(firstImage)
    expect(screen.getByTestId('image-modal')).toBeInTheDocument();
  })

  it("should increment helpful account when first click on the link", async () => {
    // localStorage.clear();
    const clickHelpfulness = container.getByText('Yes')
    fireEvent.click(clickHelpfulness, {
      preventDefault: () => {
      }})
    expect(await container.findByText('5',{exact: false})).toBeInTheDocument();
  })

  it("should display 'reported' when click on 'Report' ", async () => {
    let clickReport = container.getByText('Report')
    // fireEvent.click(clickReport)
    // let Reported = await container.findByText('Reported')
    // expect(Reported).toBeInTheDocument();
  })

})

describe('Answer Modal', () => {

  const questionId=questions[0].question_id;
  const productName='product1';
  const question=questions[0].question_body;
  const handleClose = jest.fn((e)=> e.preventDefault())
  const handleSubmit = jest.fn((e)=> e.preventDefault())
  let container

  beforeEach(() => {
    container = render(<AnswerModal  open={true} productName={productName} question={question} questionId={questionId}
      onClose={handleClose} onSubmitAnswer={handleSubmit}
    /> )
  })

  it("should render the product name and question in the header", () => {
    expect(container.queryByText(`${productName}: ${question}`, {exact: false}).toBeTruthy)
  })

  it("should change values when type in 'Answer' area", () => {
    let answerInput = container.getByLabelText('answer-input')
    fireEvent.change(answerInput, {target: {value: 'This is a test answer'}})
    expect(answerInput.value).toBe('This is a test answer')
  })

  it("should change values when type in 'nickname' area", () => {
    let nameInput = container.getByPlaceholderText('Example: jackson543!')
    fireEvent.change(nameInput, {target: {value: 'MockName'}})
    expect(nameInput.value).toBe('MockName')
  })

  it("should change values when type in 'email' area", () => {
    let emailInput = container.getByPlaceholderText('Example: jack@email.com')
    fireEvent.change(emailInput, {target: {value: 'test@mockmail.com'}})
    expect(emailInput.value).toBe('test@mockmail.com')
  })

  it("should prevent submitting when the input does not meet requirements", () => {
    let submitButton = container.getByText('Submit')
    fireEvent.click(submitButton)
    expect(container.getByText('You must enter the following:')).toBeInTheDocument();
  })

  it("should close the modal window when clicking close", () => {
    fireEvent.click(container.getByText(/close/i))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("should show 'loading' when click the 'choose files' button", () => {
    let uploader = container.getByTestId('upload-image')
    // let file = new File(['(⌐□_□)'], 'chucknorris3.png', { type: 'image/png' });
    // fireEvent.change(uploader, {
    //   target: { files: [file] }
    // })
    // await waitFor(() => {
    //   // let image = document.getElementsByClassName('form-group');
    //   // expect(image.files[0].name).toBe('chucknorris.png');
    //   expect(container.findByTestId('image-loaded')).toBeInTheDocument();
    // });
      // let image = document.getElementsByClassName('form-group');
      // expect(image.files[0].name).toBe('chucknorris.png');
    // });
    expect(uploader).toBeInTheDocument();

  });
})


  // it("should close the modal window after successful submission", () => {
  //   expect(screen.queryByText(`${productName}: ${question.question_body}`, {exact: false}).toBeTruthy)
  // })


  // it("should submit when the input meets requirements", async () => {
  //   let answerInput = container.getByLabelText('answer-input')
  //   let nameInput = container.getByPlaceholderText('Example: jackson543!')
  //   let emailInput = container.getByPlaceholderText('Example: jack@email.com')

  //   fireEvent.change(answerInput, {target: {value: 'This is a test answer'}})
  //   fireEvent.change(nameInput, {target: {value: 'MockName'}})
  //   fireEvent.change(emailInput, {target: {value: 'test@mockmail.com'}})

  //   let submitButton = container.getByText('Submit')
  //   userEvent.click(submitButton)
  //   expect(await screen.findByText('MockName')).toBeVisible()
  // })


describe('Question Modal', () => {

  const questionId=questions[0].question_id;
  const productName='product1';
  const productID='52345';
  const handleClose = jest.fn(e => e.preventDefault())
  const handleSubmit = jest.fn(e => e.preventDefault())
  beforeEach(() => {
    render(<QuestionModal  open={true} productName={productName} productID={productID} questionId={questionId}
    onClose={handleClose} onSubmitQuestion={handleSubmit}/> )
  })

  it("should render the Ask a Question header", () => {
    expect(screen.queryByText('Ask Your Question', {exact: false})).toBeTruthy();
  })
  it("should change values when type in 'Answer' area", () => {
    let questionInput = screen.getByLabelText('question-input')
    fireEvent.change(questionInput, {target: {value: 'This is a test question'}})
    expect(questionInput.value).toBe('This is a test question')
  })

  it("should change values when type in 'nickname' area", () => {
    let nameInput = screen.getByPlaceholderText('Example: jackson11!')
    fireEvent.change(nameInput, {target: {value: 'MockName'}})
    expect(nameInput.value).toBe('MockName')
  })

  it("should change values when type in 'email' area", () => {
    let emailInput = screen.getByPlaceholderText('Example: jack@email.com')
    fireEvent.change(emailInput, {target: {value: 'test@mockmail.com'}})
    expect(emailInput.value).toBe('test@mockmail.com')
  })

  it("should prevent submitting when the inputs are empty", () => {
    let submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)
    expect(screen.getByText('Nickname required')).toBeInTheDocument();
  })

  it("should prevent submitting when email format does not meet requirements", () => {
    let emailInput = screen.getByPlaceholderText('Example: jack@email.com')
    fireEvent.change(emailInput, {target: {value: 'test'}})
    let submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)
    expect(screen.getByText('Email address is invalid')).toBeInTheDocument();
  })

  it("should close when click on Close button", () => {
    let closeButton = screen.getByText('Close')
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

})


describe("Question List", () => {

  const productInfo={'name': 'test name'}
  const productId='12345';
  let container

  beforeEach(() => {
    container = render(<QuestionsList questions={questions} productId={productId} productInfo={productInfo}/> )
  })

  it("should render 'More Answered Questions' when there are more than 2 questions ", () => {
    expect(container.getByText('MORE ANSWERED QUESTIONS')).toBeInTheDocument()
  })

  it("should render 'ASK A QUESTION' button", () => {
    expect(container.getByText('ASK A QUESTION +')).toBeInTheDocument()
  })

  it("should show the popup window when 'ASK A QUESTION' button is clicked", () => {
    let askQuestionBtn = container.getByText('ASK A QUESTION +')
    userEvent.click(askQuestionBtn)
    expect(screen.getByText('Ask Your Question')).toBeInTheDocument()
  })

  // it("should hind 'More Answered Questions' when there are less than 2 questions ", () => {
  //   const { queryByPlaceholderText} = render(<SearchQuestions />)
  //   expect(queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWER...').toBeTruthy)
  // })


})

// test('should match snapshot',  () => {
//   const tree = renderer.create(
//     <QA
//       questions={questions}
//       productId={'60205'}
//       productInfo={{'name': 'test name'}}
//     />).toJSON()
//   expect(tree).toMatchSnapshot();
// })
