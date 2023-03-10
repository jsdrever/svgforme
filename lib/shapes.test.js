const { Square, Triangle, Circle } = require("../lib/shapes")
describe("Circle Testing", () => {
    it("should test circle", function(){
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
    })
})

describe("Triangle Testing", () => {
    it("should test triangle", function(){
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    })
})

describe("Square Testing", () => {
    it("should test square", function(){
    const shape = new Square();
    shape.setColor("blue");
    console.log(shape.color)
    expect(shape.render()).toEqual(`<rect x="90" y="50" width="100" height="100" fill="blue"/>`);
    })
})

// these tests check to see that when triangle, circle and square are selected it uses the code for the correct option