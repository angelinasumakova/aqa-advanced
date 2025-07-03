const person = {
    firstName: 'Ivan',
    lstName: 'Ivanov',
    age: 30
};

person.email = 'ivan.ivanov@gmail.com';

delete person.age;

console.log(person);