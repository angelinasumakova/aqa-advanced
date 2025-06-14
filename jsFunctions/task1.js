// function declaration
function rectangleSquare_1(width, height){
    return width * height;
}
console.log('Resul of function declaration: ' + rectangleSquare_1(20, 35));

// function expression
const recSquare = function(width, height){
    return width * height;
}
console.log('Result of function expression: ' + recSquare(32, 56));

// arrow function expression
const newRecSquare = (width, height) => {
    return width * height;
}
console.log('Result of arrow function expression: ' + newRecSquare(21, 47));