# svgforme
This application is to use node.js in the command-line to take in user input such as color, shape, and text for the logo to generate a SVG to a .svg file.

## link to video


## setup and usage instructions





if(data.shape === cirlce) return `<circle cx="150" cy="100" r="80" />`
else(data.shape === square) return `<rect width="100" height="100" fill="red" />`
else(data.shape === triangle) return `<svg height="500" width="500"> <polygon points="250,60 100,400 400,400" class="triangle" />`

I wish i could find an example of how to write it as a || to shorten it.

Then we can repeat this strategy for the colors red green or blue

## example from docs
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');













not gonna bother with this now but very cool. linear gradients on the badges would be a nice addition
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <style>
      <![CDATA[
              #rect1 { fill: url(#Gradient1); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>