const users = [
    {name: 'Name 1', age: 23, email: 'name1@gmail.com'},
    {name: 'Name 2', age: 54, email: 'name2@gmail.com'},
    {name: 'Name 3', age: 16, email: 'name3@gmail.com'},
];

for(const {name, age, email} of users){
    console.log(name);
    console.log(age);
    console.log(email);
    console.log('\t');
}