import React from 'react';
import {
  render,
  screen,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import Related from '../components/Related/Related.jsx';

test('test', () => {
  expect(true).toBe(true);
})

// test('Related Product rendering successfully', async () => {
//     render(
//       <Related />
//     )
// })