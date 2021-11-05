import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom';
import QA from '../components/QA/QA.jsx';
import questions from './questions.js'


afterEach(() => {
  cleanup()
})

test('should render QA component', () => {
  render(<QA/>);
  const qaElement = screen.getByTestId('QA-render');
  expect(qaElement).toBeInTheDocument();
})


test('matches snaoshot',  () => {
  const tree = renderer.create(
    <QA
      questions={questions}
      productId={'60205'}
      productInfo={{'name': 'test name'}}
    />).toJSON()
  expect(tree).toMatchSnapshot();
})
//it should have the 4 subcomponents? or does the QA one settles it

//Search{questions, productId, productInfo}

//Questions:

//when it has no questions, one of the button should not be there
