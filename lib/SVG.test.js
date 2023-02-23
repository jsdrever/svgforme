const SVG = require("./svg");

describe('svg testing', function (){
    
    it('it should create an svg', function(){
        const SvgTextWorked = message;
        expect(true).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`);
    }); 
});

//! what other parameters could i test for?