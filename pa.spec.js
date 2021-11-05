import { render } from "@testing-library/react";

/*
A "describe" block can be used to group together multiple tests
which check the same nodule or function.
 */
describe("Example tests", function(){
  // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
  it("Should complete simple math", function(){
    expect(1+1).toBe(2);
  });
});

describe("Overview Component Tests", function() {
  let overviewComponent = document.querySelector('#overview');

  // component should exist
  it('Overview component should exist', function() {
    expect(overviewComponent).to.exist;
  });

  // sub-components should exists

  // data and images should populate with the correct API data

  // thumbnail clicks should change the hero image + to the correct full image

  // style clicks should update all thumbnails + hero image

  // checkout options should all be stored for cart retrieval on "add to bag" click

  // favorite item should be stored on star button click

});