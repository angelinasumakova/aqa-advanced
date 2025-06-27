function handleEven(num){
    console.log('number is even');
}

function handleOdd(num){
    console.log('number is odd');
}

function handleNum(number, handleEven, handleOdd){
    if (number % 2 == 0){
        handleEven(number);
    } else{
        handleOdd(number);
    }
}

handleNum(9, handleEven, handleOdd);