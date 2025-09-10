function fetchUsers(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .catch((error) => {
        console.log(error);
        return null;
    });
}

const usersAllArray = Promise.all([
    fetchUsers(1),
    fetchUsers(2),
    fetchUsers(3)
]);
const usersRaceArray = Promise.race([
    fetchUsers(4),
    fetchUsers(5),
    fetchUsers(6)
]);

// Функція повинна повертати як результат Promise що повертає об’єкт user
fetchUsers(3).then((userId) => { console.log(userId)});

// Викориcтайте методи Promise.all та Promise.race передавши їм як аргумент масив. 
// Присвойте значення отримані від цих виразів до змінних
usersAllArray.then((resultAll) => {console.log(resultAll)});
usersRaceArray.then((resultRace) => {console.log(resultRace)});