const React = require('react');
const {render, screen, cleanup} = require('!testing-library/react');
const QA = require('./QA.jsx');

test('QA test', () => {
  expect(true).toBe(true);
})

//

test('should render QA component', () => {
  // render(<QA/>);
  const qaElement = screen.getByTestId('QA-render');
  expect(qaElement).toBeInTheDocument();
})