const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newList = [...numbersList];

newList.sort((a, b) => a - b);

console.log('original array: ' + numbersList);
console.log('copied and sorted array: ' + newList);