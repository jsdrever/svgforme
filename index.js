const inquirer = require("inquirer");
// import inquirer from 'inquirer';
const fs = require('fs');
const SVG = require("./lib/svg")
const {Circle,Square,Triangle} = require("./lib/shapes") 
// these import from my other files and the components to write files and run tests

const questions = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like for the svg?",
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: "list",
        name: "color",
        message: "What color would you like for the svg?",
        choices: ['red', 'green', 'blue']
    },
    {
        type: "input",
        name: "text",
        message: "What three or fewer letters would you like to display on the svg?"
    },
  // Selects the options for the svg
]
// This writes the file and puts the data on the file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')) 
}
// this function calls the questions/answers from inquirer
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        console.log(`The shape you chose is ${answers.shape}, the color you chose is ${answers.color}, and the text you're adding is ${answers.text}`);
        let shapeCreated
        switch (answers.shape){
            case "Circle":  
                shapeCreated = new Circle()
                break;
                //! how do i add the call to read square and triangle?
        
        }
        shapeCreated.setColor(answers.color)
        const svgArt = new SVG()
        svgArt.setShape(shapeCreated)
        svgArt.setText(answers.text)
        writeToFile('logo.svg',svgArt.render())
        // this applies all the answers and renders the text to the newly written file logo.svg
    })
}

init();