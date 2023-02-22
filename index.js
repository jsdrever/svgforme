const inquirer = require("inquirer");
const fs = require('fs');
const SVG = require("./lib/svg")
const {Circle,Square,Triangle} = require("./lib/shapes") 
function generateSvg(data) {
    return `# ${data.shape}
    
    ${data.color}
    
    ${<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text>}`
    // how write this?
}
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
  
]

function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')) 
}

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
        
        }
        shapeCreated.setColor(answers.color)
        const svgArt = new SVG()
        svgArt.setShape(shapeCreated)
        svgArt.setText(answers.text)
        writeToFile('logo.svg',svgArt.render())
    })
}

init();