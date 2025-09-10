async function fetchUsers(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Функція повинна повертати як результат Promise що повертає об’єкт user
const userObj = await fetchUsers(8);
console.log('Single user object: ', userObj);

// Викориcтайте методи Promise.all та Promise.race передавши їм як аргумент масив. 
// Присвойте значення отримані від цих виразів до змінних
const usersAllArray = await Promise.all([
    fetchUsers(1),
    fetchUsers(2),
    fetchUsers(3)
]);
console.log('Promise All: ', usersAllArray);

const usersRaceArray = await Promise.race([
    fetchUsers(4),
    fetchUsers(5),
    fetchUsers(6)
]);
console.log('Promise Race: ', usersRaceArray);