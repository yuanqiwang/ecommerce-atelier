import React from 'react';
import ReactDOM from 'react-dom';
import Overview from '../components/Overview/Overview.jsx';
import {
  render,
  screen,
  cleanUp,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanUp);

// component should exist and render
it('Overview Component renders correctly', () => {
  render(<Overview />);

  const overviewComponent = screen.getByTestId('overview');
  expect(overviewComponent).toBeInTheDocument();
});

// sub-components should exists
it('All Sub-Components render correctly', () => {
  render(<Overview />);

  expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
  expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
  expect(screen.getByTestId('product-bullets')).toBeInTheDocument();
  expect(screen.getByTestId('product-headline')).toBeInTheDocument();
  expect(screen.getByTestId('product-info')).toBeInTheDocument();
  expect(screen.getByTestId('product-options')).toBeInTheDocument();
  expect(screen.getByTestId('select-size')).toBeInTheDocument();
  expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  expect(screen.getByTestId('styles')).toBeInTheDocument();
  expect(screen.getByTestId('style-selector')).toBeInTheDocument();
  expect(screen.getByTestId('thumbnails')).toBeInTheDocument();

});


// TESTS TO WRITE FOR //

// data and images should populate with the correct API data

// favorite item should be stored on star button click



// Image Gallery
// =============

// the photos in the gallery are specific to the currently selected product style

// each time a new style is chosen, the gallery updates to show photos corresponding to the new style

// each style has a set of images associated with it

// the gallery allows customers to browse between and zoom in on these photos

// The gallery is viewable in two states:
  // a default collapsed view
  // an expanded view

// Default View
// ------------

// is a single main image overlaid by the list of thumbnail images

// the first image in the set is displayed as the main image, which matches the smaller thumbnail image shown first

// when switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style

// clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked

// the thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection

// clicking on the currently selected thumbnail has no effect

// up to 7 thumbnail images should be displayed at a given time

// if more than 7 images are in the set for the style selected, the user should be able to scroll forward and backwards through the thumbnails
  // an arrow button pointing either direction should allow the customer to scroll through the remaining thumbnails in either direction

// customers should be able to change to the next or previous image in the set using forward and backwards arrow buttons
  // appearing near the right and left edges of the image, respectively

// upon clicking the right or left arrow, the main image and the thumbnail highlighted should update

// if upon navigating to the previous or next image using the arrows, the thumbnail corresponding to the now selected image is no longer visible,
  // then the thumbnail list should scroll similarly such that the newly selected thumbnail is visible

// if the user hovers over the main image anywhere other than the thumbnails, the left arrow, or the right arrow,
  // the mouse icon should change to show a magnifying glass

// if the user clicks on the image, the image gallery should change to the expanded view

// if the first image is selected, the left arrow should not appear

// if the last image is selected, the right arrow should not appear


// Expanded View
// -------------

// the expanded view of the image gallery should overlay the rest of the item detail page

// the main image should span the entire screen

// the main image still offers right and left arrows, which have the same function of scrolling through the image set

// thumbnails do not appear over the main image

// icons indicating each image in the set appear, and are much smaller, but have the same functionality
  // clicking on them skips to that image in the set

// the icon for the currently selected image is distinguishably different from the rest

// clicking on the main image zooms the image by 2.5 times.

// the mouse should become a “+” symbol while hovering over the main image

// after clicking, if the zoomed image is too large to display in the space provided,
  // the portion of the image shown within the window should correspond to the current mouse position relative to the screen
  // example: by moving the mouse right, the portion of the zoomed image shown should pan to the right

// the position of the mouse relative to the centering of the zoomed image should be proportional

// if the mouse is all the way in the bottom left corner of the expanded image gallery window, the bottom left corner of the zoomed image should be displayed

// moving the mouse to the top right should smoothly move the zoomed image available such until the top right of the image is displayed

// while the image is zoomed, no arrow buttons or thumbnail selection icons are available
  // the mouse should display as a “-” symbol.

// upon clicking the image in this state, the user should be returned to the normal expanded image gallery view




// Product Information
// ===================

// Star Rating + # of Reviews
// represented by an array of solid or outlined stars
// should be representative of up to a quarter of a review point
// ex: if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
// a link stating “Read all [#] reviews” will show
// clicking this link should scroll the page to the Ratings & Reviews module
// if there are no reviews, this entire section should be hidden
// Product Category
// Product Title
// Price
// The price is derived from the style currently selected
// It should update dynamically with the user’s updates to style selected
// A default style will be designated for each product
// This style should appear if no further selection has been made
// The price may be on sale
// If the SKU is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.
// Product Overview
// This free form text field may exist on some items
// If it is available it should be displayed
// Clicking the star
// should toggle a product being part of “My Outfit” carousel



// Style Selector
// ==============

// the user should be presented all the styles of the product and have the ability to toggle between them
// Each style should be displayed as a thumbnail
// all styles should display for the current product at all times
// there is no limit to the number of styles a product can have
// the thumbnails should appear in rows of 4
// the current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style
// additionally, the title for that style should appear typed out in full above the thumbnail list
// a user will be able to change the selected style by clicking on the thumbnail displaying that style
// clicking on the thumbnail for the currently selected style will have no impact
// by default, the style selected will be the first in the list
// a product will always have at least one style
// only one style can be selected at a time
// a style must be selected at all times.



// Add to Cart
// ===========
// Size Selector
// will list all of the available sizes for the currently selected style.
// only sizes that are currently in stock for the style selected should be listed.
// Sizes not available should not appear within the list.
// If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”.
// When collapsed, the dropdown should show the currently selected size.
// By default, the dropdown should show “Select Size”.
// Quantity Selector
// will allow the user to select a quantity of the current style and size to add to their cart.
// The options in this dropdown will be a sequence of integers ranging from 1 to the maximum.  The maximum selection will be capped by either the quantity of this style and size in stock, or a hard limit of 15.   For example, if the SKU for the selected product style and size has 4 units left in stock, the dropdown will allow choice of 1, 2, 3 or 4.  However if there are 30 units in stock, the dropdown will only present from 1 to 15.
// If the size has not been selected, then the quantity dropdown will display ‘-’ and the dropdown will be disabled.
// Once a size has been selected, the dropdown should default to 1.
// Add to cart
// A button labeled “Add to Cart” will appear below the size and quantity dropdowns.  This button will be used to place the style, size and quantity of the product selected into the user’s cart.
// Depending on the current selection in the size and quantity dropdowns, this button will have differing functionality.
// If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.
// If there is no stock: This button should be hidden
// If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.
