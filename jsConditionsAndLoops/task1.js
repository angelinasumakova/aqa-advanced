var averageGrade = 'aa';

if(averageGrade >= 0){
    if(averageGrade < 60){
        console.log('Ваш результат - Незадовільно!');
    } else if(averageGrade <= 70){
        console.log('Ваш результат - Задовільно!');
    } else if(averageGrade <=80){
        console.log('Ваш результат - Добре!');
    } else if(averageGrade <= 90){
        console.log('Ваш результат - Дуже добре!');
    }else if(averageGrade <= 100){
        console.log('Ваш результат - Відмінно!');
    } else if (averageGrade > 100){
        console.log('Оцінка не може бути вище ніж 100!');
    }
} else{
    console.log('Оцінка введена невірно!');
} 