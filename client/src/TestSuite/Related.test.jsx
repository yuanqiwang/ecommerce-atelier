import React from 'react';
import {
  MemoryRouter
 } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
/* React Component Below */
import Related from '../components/Related/Related.jsx';
import RP_row from '../components/Related/related_components/RP-row.jsx';
import YO_row from '../components/Related/related_components/YO-row.jsx';
import ComparisonModal from '../components/Related/related_components/RP-Modal.jsx';
import YO_sub from '../components/Related/related_components/YO-subcard.jsx';
import RP_sub from '../components/Related/related_components/RP-subcard.jsx';

/* Dummy data below */
import outfit from './RelatedDummyData/related.js';
import productInfo from './RelatedDummyData/productInfo.js';
import productStyle from './RelatedDummyData/productStyle.js';
import response from './RelatedDummyData/response.js';
import rp_response from './RelatedDummyData/rp_response.js';


beforeEach(() => {
  jest.mock('axios');
  axios.get = jest.fn().mockResolvedValue(rp_response);
  axios.post = jest.fn().mockResolvedValue('');
});

afterEach(() => {
  cleanup()
})

/* Render below */
it('should render All Related component',   () => {
    const {getByText} = render(
      <MemoryRouter>
        <Related relatedProductArr={[59980, 59712, 59912, 60374, 60042]} outfits = {outfit}/>
      </MemoryRouter>);
    const title1 =  getByText('Related Products',{exact: false});
    const title2 =  getByText('YOUR OUTFIT');

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
});

it('should render Comparison Modal',   () => {
  const {getByText} = render(
      <ComparisonModal isOpen ={true} mainFeature={[
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]} currentFeature = {[
      {
          "feature": "Fabric",
          "value": "100% Cotton"
      },
      {
          "feature": "Cut",
          "value": "Skinny"
      }
  ]}  mainName = {'Camo Onesie'} currentName={'Morning Joggers'} />
  );
  const currentName = getByText('Morning Joggers');
  expect(currentName).toBeInTheDocument();
});


it('should render Your Outfit Sub-card',   () => {
  const {getByText} = render(
    <MemoryRouter>
      <YO_sub response={response}/>
    </MemoryRouter>);

  const name =  getByText('Camo Onesie');
  expect(name).toBeInTheDocument();
});


it('should render Relate Product Sub-card',   () => {
  const {getByTestId} = render(
    <MemoryRouter>
      <RP_sub item = {59980} mainInfo = {productInfo}/>
    </MemoryRouter>);

  const name =  getByTestId('rp-subcard');
  expect(name).toBeInTheDocument();
});

/* click function below */
it('Right Button on RP row should work', async  () => {
  const mockFunction = jest.fn(() => console.info('button clicked'));
  // const ref = React.createRef();
  const { getByTestId } = render (
    <MemoryRouter>
        <RP_row relatedProductArr={[59980, 59712, 59912, 60374, 60042]} productInfo = {productInfo} productStyle={productStyle} onClick={mockFunction()} />
    </MemoryRouter>
  )
  const rightButton = getByTestId('rp-right-button')
  userEvent.click(rightButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(getByTestId('rp-left-button')).toBeEnabled();
});


it('Button Button on YO row should work', async  () => {
  const mockFunction = jest.fn(() => console.info('button clicked'));
  // const ref = React.createRef();
  const { getByTestId } = render (
    <MemoryRouter>
        <YO_row outfits={outfit} onClick={mockFunction()} />
    </MemoryRouter>
  )
  const addButton = getByTestId('rp-add-button')
  userEvent.click(addButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

//npm test Related.test.jsx