function divide(numerator, denominator){
    if(denominator == 0){
        throw new Error('Deniminator cannot be 0');
    }
    if(typeof numerator != 'number' || typeof denominator != 'number'){
        throw new TypeError('Numerator or Denominator cannot be anything else than number value');
    }
    return numerator / denominator;
}

console.log('Test 1');
try {
    console.log(divide(15, 3));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished\n');
}

console.log('Test 2');
try {
    console.log(divide(0, 9));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished\n');
}

console.log('Test 3');
try {
    console.log(divide(8, 0));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished\n');
}


console.log('Test 4');
try {
    console.log(divide(8, 'two'));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished\n');
}

console.log('Test 5');
try {
    console.log(divide('ten', 5));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished\n');
}

console.log('Test 6');
try {
    console.log(divide('ten', 'two'));
} catch (error) {
    throw error;
} finally{
    console.log('Flow is finished');
}