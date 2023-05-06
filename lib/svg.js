// class SVG  {
//   // this class is where i store the users selections to call in my init function
//     constructor() {
//         this.textElement = ""
//         this.shapeElement = ""
//     }
//     render() {
//         return `<svg version="1.1"
//         width="300" height="200"
//         xmlns="http://www.w3.org/2000/svg">
   
//      ${this.shapeElement}
//      ${this.textElement}
    
//    </svg> `
//     } 
//     // this function renders the text the user inputs
//     setText(message) {
//         if(message.length > 3) {
//             throw new Error("There must be three letters or less")
//         }
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${message}</text>`
//       }
//       setShape(shape) {
//         this.shapeElement = shape.render() 
//       }
// }

// module.exports = SVG


// // git init  then get add  then heroku create   then git push heroku main
class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;
