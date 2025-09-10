async function fetchTodo(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Функція повинна повертати як результат Promise що повертає об’єкт todo
const todoObj = await fetchTodo(8);
console.log('Single todo object: ', todoObj);

// Викориcтайте методи Promise.all та Promise.race передавши їм як аргумент масив. 
// Присвойте значення отримані від цих виразів до змінних
const toDoAllArray = await Promise.all([
    fetchTodo(1),
    fetchTodo(2),
    fetchTodo(3)
]);
console.log('Promise All: ', toDoAllArray);

const toDoRaceArray = await Promise.race([
    fetchTodo(4),
    fetchTodo(5),
    fetchTodo(6)
]);
console.log('Promise Race: ', toDoRaceArray);