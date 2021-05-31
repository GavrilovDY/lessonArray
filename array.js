const cars = ["Мазда", "Мерседес", "Форд"];

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
