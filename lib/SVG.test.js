const SVG = require("./svg");

describe('svg testing', function (){
    
    it('it should create an svg', function(){
        const SvgWorked = new SVG
        expect(true).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">`);
    }); 
});