// const { Square, Triangle, Circle } = require("../lib/shapes")
// describe("Circle Testing", () => {
//     it("should test circle", function(){
//     const shape = new Circle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
//     })
// })

// describe("Triangle Testing", () => {
//     it("should test triangle", function(){
//     const shape = new Triangle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
//     })
// })

// describe("Square Testing", () => {
//     it("should test square", function(){
//     const shape = new Square();
//     shape.setColor("blue");
//     console.log(shape.color)
//     expect(shape.render()).toEqual(`<rect x="90" y="50" width="100" height="100" fill="blue"/>`);
//     })
// })

// // these tests check to see that when triangle, circle and square are selected it uses the code for the correct option
const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
