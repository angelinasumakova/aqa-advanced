const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
var positiveCount = 0;
var negativeCount = 0;
var zeroCount = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == 0){
        zeroCount++;
    }else if(numbers[i] < 0){
        negativeCount++;
    }else{
        positiveCount++;
    }
}
console.log('Amount of positive numbers: ' + positiveCount);
console.log('Amount of negative numbers: ' + negativeCount);
console.log('Amount of zero numbers: ' + zeroCount);