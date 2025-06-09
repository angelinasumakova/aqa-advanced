var randomNumber = 8;
var count = 1;

console.log('--- LOOP FOR ---');
for(let index = 1; index <= 10; index++){
    let result = randomNumber * index;
    console.log(randomNumber + ' X ' + index + ' = ' + result);
}
console.log('\t');

console.log('--- LOOP WHILE ---');
while(count <=10){
    let result = randomNumber * count;
    console.log(randomNumber + ' X ' + count + ' = ' + result);
    count++;
}