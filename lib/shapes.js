class Shape{
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="90" y="50" width="100" height="100" fill="${this.color}"/>`
    }
}
//! I have the color options to fill with the selected shapes but I need to have the data for colors too right?

module.exports = {Circle,Square,Triangle}
