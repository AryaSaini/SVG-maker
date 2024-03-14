const createSVG = (text, textColor, shape, shapeColor, shapeFillColor) => {
  let svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
               <text y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
             </svg>`;

  if (shape === 'circle') {
    const circleRadius = 100;
    const textHeight = 60;
    const textY = circleRadius + textHeight / 2;
    svg = svg.replace(`<text y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`, `<circle cx="150" cy="125" r="${circleRadius}" fill="${shapeFillColor}" fill-opacity="0.5"><title>${text}</title></circle><text x="150" y="${textY}" font-size="${textHeight}" text-anchor="middle" fill="${textColor}"></text>`).replace('text-anchor="middle"', 'cx="150" cy="125"').replace('y="125"', `y="${textY}"`).replace('font-size="60"', `font-size="${textHeight}"`);
  } else if (shape === 'square') {
    const textHeight = 60; // The font-size of the text
    const squareWidth = 220; // The width of the square
    const squareHeight = 220; // The height of the square
    const textY = (squareHeight - textHeight) / 2; // The vertical position of the text
    svg = svg.replace('<svg width="300" height="200"', '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">').replace('<text', `<rect x="10" y="10" width="${squareWidth}" height="${squareHeight}" fill="${shapeFillColor}" fill-opacity="0.5"><title>${text}</title></rect><g transform="translate(110,${textY + 60})"><text font-size="${textHeight}" text-anchor="middle" fill="${textColor}">${text}</text></g></text>`).replace('text-anchor="middle"', 'x="110" y="110"').replace('y="125"', `y="${textY + 60}"`).replace('font-size="60"', `font-size="${textHeight}"`).replace('<rect/>', '<rect x="10" y="10" width="220" height="220" fill="${shapeFillColor}" />');
  } else if (shape === 'triangle') {
    const textHeight = 60; // The font-size of the text
    const triangleHeight = 180; // The height of the triangle
    const textY = (triangleHeight - textHeight) / 2; // The vertical position of the text
    svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,10 250,190 50,190" fill="${shapeColor}" />
              <g transform="translate(150,${triangleHeight})">
                <text y="-${textY}" font-size="${textHeight}" text-anchor="middle" fill="${textColor}">${text}</text>
              </g>
            </svg>`;
  }

  return svg;
};

module.exports = createSVG;