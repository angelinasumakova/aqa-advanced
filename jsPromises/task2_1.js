function fetchTodo(id){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .catch((error) => {
        console.log(error);
        return null;
    });
}

const toDoAllArray = Promise.all([
    fetchTodo(1),
    fetchTodo(2),
    fetchTodo(3)
]);
const toDoRaceArray = Promise.race([
    fetchTodo(4),
    fetchTodo(5),
    fetchTodo(6)
]);

// Функція повинна повертати як результат Promise що повертає об’єкт todo
fetchTodo(5).then((toDoId) => { console.log(toDoId)});

// Викориcтайте методи Promise.all та Promise.race передавши їм як аргумент масив. 
// Присвойте значення отримані від цих виразів до змінних
toDoAllArray.then((resultAll) => {console.log(resultAll)});
toDoRaceArray.then((resultRace) => {console.log(resultRace)});