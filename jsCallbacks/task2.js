function myF(num){
    console.log(num);
    if(num > 0){
        myF(num - 1);
    }
}

myF(5);