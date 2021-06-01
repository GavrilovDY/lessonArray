/*const cars = ["Мазда", "Мерседес", "Форд"];

//console.log(cars);
//console.log(cars[2]);
console.log(cars.length);
cars[0] = "porsche"; //не смотря на то что массив - константа
console.log(cars[0]);
cars[cars.length] = "mazda";
console.log(cars);
for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
for (let car of cars) {
  console.log(car);
}

// теперь объекты

const person = {
  firstName: "Dmitry",
  lastName: "Gavrilov",
  year: 1994,
  hasWife: false,
  languages: ["Russian", "English"],
  greet: function () {
    console.log("greet");
  },
};
console.log(person);
console.log(person["lastName"]);
const key = "year";
console.log(person[key]);
person.greet();
person.isProgrammer = true;
console.log(person);
*/
const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
const people = [
  { name: "Sergey", budget: 4200 },
  { name: "Elena", budget: 4100 },
  { name: "Misha", budget: 4000 },
];
const fib = [1, 1, 2, 3, 5, 8, 13];
cars.push("Рено"); //добавили элемент массива в конец
cars.unshift("Волга"); // добавили элемент массива в начало

/*
const firstCar = cars.shift(); //выдергивает первый элемент массива
const lastCar = cars.pop(); //выдергивает последний элемент массива
console.log(firstCar);
console.log(lastCar);
console.log(cars);
console.log(cars.reverse()); //переворачивает массив

const text = "Привет, мы изучаем JavaScript";
//const reverseText = text.split(","); //делим строчку на элементы массива, в скобках разделитель
//без разделителя - разобьет посимвольно

const reverseText = text.split("").reverse().join(""); //перевернем текст
console.log(reverseText);

const index = cars.indexOf("БМВ"); // находим индекс конкретного элемента
cars[index] = "Porsche"; //заменяем БМВ на Порш
*/
/*const index = people.findIndex(function (person) {
  return person.budget === 4000;
});
// или персону можно найти и так:
const person = people.find(function (person) {
  return person.budget === 4000;
}); */

// Поиск объекта в массиве объектов по значению его свойства (два варианта)
/*
let findedPerson;
for (const person of people) {
  if (person.budget === 4000) {
    findedPerson = person;
  }
}
const person = people.find((person) => person.budget === 4100);
console.log(findedPerson);
console.log(findedPerson);
*/
/*
console.log(cars.includes("Мазда")); //а есть ли такой элемент?
//метод мэп создает новый массив (в нашей ситуации приводит все к верхнему регистру)
const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

console.log(upperCaseCars);
console.log(cars);
// Краткая запись со стрелочной функцией
const pow2 = (num) => num ** 2;
const sqrt = (num) => Math.sqrt(num);

const pow2Fib = fib.map(pow2); //возводит в квадрат числа Фибоначи
//const sqrtFib = fib.map(sqrt);
//метод фильтр возвращает новый массив отфильтровав по условию
const filteredNumbers = pow2Fib.filter((num) => {
  return num > 20;
});
console.log(pow2Fib);
console.log(filteredNumbers);
*/
// Сейчас проссумируем зп всех сотрудников,  которых она больше 4к
// Способ называется чейнинг (вызывание методов подряд)

const allBudget = people
  .filter((person) => person.budget > 4000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(allBudget);
