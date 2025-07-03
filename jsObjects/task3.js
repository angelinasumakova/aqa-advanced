const car1 = {
    brand: 'Audi',
    model: 'Q9',
    year: 2025
};

const car2 = {
    brand: 'Vokswagen',
    model: 'Golf 8',
    owner: 'Anhelina'
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);