function saySomethingWithDelay(phrase, delay){
    setTimeout(() => {
        console.log(phrase);
    }, delay);
};

saySomethingWithDelay('Hello World!', 5000);