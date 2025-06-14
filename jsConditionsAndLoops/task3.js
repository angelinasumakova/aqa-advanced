var randomNumber = 8;
var count = 1;

console.log('--- LOOP FOR ---');
for(let index = 1; index <= 10; index++){
    console.log(randomNumber + ' X ' + index + ' = ' + `${randomNumber * index}`);
}
console.log('\t');

console.log('--- LOOP WHILE ---');
while(count <=10){
    console.log(randomNumber + ' X ' + count + ' = ' + `${randomNumber * count}`);
    count++;
}