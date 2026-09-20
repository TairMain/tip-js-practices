"use strict";

const totalTasks = 10;
const completedTasks = 7;
const dailyLimit = 3;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
    console.log("Ошибка: totalTasks и completedTasks должны быть числами.");
} else if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: количество задач должно быть целым.");
} else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество.");
} else if (totalTasks > 1000 || completedTasks > totalTasks) {
    console.log("Ошибка: некорректное число выполненных задач.");
} else if (typeof dailyLimit !== "number" || Number.isNaN(dailyLimit)) {
    console.log("Ошибка: дневная норма задана строкой.");
} else if (!Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дневная норма должна быть целым числом.");
} else if (dailyLimit < 1) {
    console.log("Ошибка: дневная норма должна быть не меньше 1.");
} else if (dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница нормы.");
} else {
    let remainingTasks = totalTasks - completedTasks;
    let day = 0;

    if (remainingTasks === 0) {
        console.log("Все задачи уже выполнены");
        console.log("Потребуется дней: 0");
    } else {
        console.log("Осталось задач:", remainingTasks);

        while (remainingTasks > 0) {
            day++;

            const tasksToday = Math.min(dailyLimit, remainingTasks);
            remainingTasks -= tasksToday;

            console.log(
                `День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`
            );
        }

        console.log("Потребуется дней:", day);
    }
}