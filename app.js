// ? Task: Создайте альтернативу функции setTimeout,
// использующую промисы.Функция delay(ms)
// возвращать промис, который перейдёт в состояние
// «выполнен» через ms миллисекунд, так чтобы мы
// могли добавить к нему.then.

// Solution

const delay = ms => new Promise(res => setTimeout(res, ms))

delay(10000).then(() => console.log('Completed in 10 seconds'));
delay(5000).then(() => console.log('Completed in 5 seconds'));
delay(2000).then(() => console.log('Completed in 2 seconds'));
delay(7000).then(() => console.log('Completed in 7 seconds'));



// ! Explanation:

// ** Функция delay возвращает промис, которые резволвится через заданное время (ms), что позволяет нам использовать .then после вызова функции delay.