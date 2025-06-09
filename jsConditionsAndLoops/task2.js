var averageGrade = 100;

switch(true){
    case averageGrade >= 0 && averageGrade < 60:
        console.log('Ваш результат - Незадовільно!');
        break;
    case averageGrade > 0 && averageGrade <= 70:
        console.log('Ваш результат - Задовільно!');
        break;
    case averageGrade > 0 && averageGrade <= 80:
        console.log('Ваш результат - Добре!');
        break;
    case averageGrade > 0 && averageGrade <= 90:
        console.log('Ваш результат - Дуже добре!');
        break;
    case averageGrade > 0 && averageGrade <= 100:
        console.log('Ваш результат - Відмінно!');
        break;
    case averageGrade > 100:
        console.log('Оцінка не може бути вище ніж 100!');
        break;
    default:
        console.log('Оцінка введена невірно!'); // in case user enters negative value or string
}