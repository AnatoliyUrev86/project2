// const add = {
//   legs: 4,
// };

// const dog = Object.create(add);
// Створили змінну dog і сказали що твоїм прототипом буде add тому в консолі ми бачимо
// в нашого dog прототип властивість legs: 4
// dog.name = "Patron";

// console.log(dog);
// Якщо ми під час виклику звернимся dog.name отримаємо "Patron" а якщо під час
// виклику звернимся dog.legs ми отримаємо 4 хоча у dog такої властивості не має
// але ми знайдемо у його прототипі
// Властивіть яка належить об'єкту називається власна dog.name - "Patron"
// Властивість яка не належить об'єкту називається не власна dog.legs - 4

// Object.keys(dog) коли ми звертаємось до нашго dog через Object.keys - ми отимуємо масив лише наших ключів
// const keys = Object.keys(dog);
// console.log(keys);

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj
// const objC = { c: "objC" };
// const objB = Object.create(objC);
// objB.b = objB;

// Тут ми кажемо objA за допомогою Object.create в тебе буде прототип objB
// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA);
// console.log(objA.a);
// console.log(objB);
// console.log(objC);

// КЛАСИ МОДУЛЬ 6

// Клас назва класу з великої літери та фігурні дужки

// Класи використовуються якщо нам потрібно створити багато однотипних об'єктів

class Car {
  constructor(brend) {
    //  constructor - під час свого виклику коли створюється екземпляр класу  new Car він беде
    // посилатися на ново створений об'єкт audi який записаний у змінній
    console.log(brend);
    // this.brend - після this назва може бути довільна в нашому випадку brend
    this.brend = brend;
  }
}

// Створюється змінна в яку присвоюється за ключовим словом new наш клас Car()
// new Car() - буде створений новий екземпляр класу
// Коли ми створюємо новий екземпляр класу автоматично запускаєтьмя метод  constructor і хоча як параметр
// ми передали у  constructor data але у консолі ми бачимо наші рядки  "audi" та "bmw"
const audi = new Car("audi");
// audi constructor - конструктор буде посилатися на них під час виклику
const bmw = new Car("bmw");
// bmw constructor - конструктор буде посилатися на них під час виклику

// "audi" "bmw" - передаються аргументи які під час виклику попадуть в наш об'єкт

console.log("audi", audi);
console.log("bmw", bmw);
