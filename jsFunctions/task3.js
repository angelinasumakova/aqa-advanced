function checkout(available, ordered){
    if(ordered == 0){
        console.log('Your order is empty');
        return;
    }
    if(ordered > available){
        console.log('Your order is too large, we don’t have enough goods.');
        return;
    }
    console.log('Your order is accepted');
}

console.log('Order #1: ');
checkout(300, 0);
console.log('\n');

console.log('Order #2: ');
checkout(300, 320);
console.log('\n');

console.log('Order #3: ');
checkout(300, 150);