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


test('test', () => {
  expect(true).toBe(true);
})
