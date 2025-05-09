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

// class Car {
// Ключі наших  об'єктів ми під час створення  constructor ми як параметри їх додаємо
// через літерал об'єкта тобто в середині фігурних дужок { brand, modal, price }
//   constructor({ brand, modal, price }) {
//   brend- конструктор приймає всі данні під час виклику
//  constructor - під час свого виклику коли створюється екземпляр класу  new Car він беде
// посилатися на ново створений об'єкт audi який записаний у змінній
// console.log(brend);
// this.brend - після this назва може бути довільна в нашому випадку brend
// this.brand = brand;
//   Тут ми звертаємось до наших об'єктів через this.modal і присвоюємо значення  modal
// this.modal = modal;
//    //   Тут ми звертаємось до наших об'єктів через this.price і присвоюємо значення  price
// this.price = price;
//   }

//   getModal() {
//     return this.modal;
//   }
// }

// Створюється змінна в яку присвоюється за ключовим словом new наш клас Car()
// new Car() - буде створений новий екземпляр класу
// Коли ми створюємо новий екземпляр класу автоматично запускаєтьмя метод  constructor і хоча як параметр
// ми передали у  constructor data але у консолі ми бачимо наші рядки  "audi" та "bmw"
// const audi = new Car("audi");
// audi constructor - конструктор буде посилатися на них під час виклику
// const bmw = new Car("bmw");
// bmw constructor - конструктор буде посилатися на них під час виклику

// "audi" "bmw" - передаються аргументи які під час виклику попадуть в наш об'єкт
//  Коли ми створюємо новий екземпляр класу ми можемо в середину додавати об'єкти
//                     ключ  значення вкладаємо в літерал об'єкта
// const audi = new Car({ brand: "audi", model: "Q7", price: 70000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 65000 });

// console.log("audi", audi);
// console.log("bmw", bmw);

// ПОМИЛКА ПЕРЕД ІНІЦАЛІЗАЦІЄЮ
// class Car {
//   constructor({ brand, modal, price }) {
//     this.brand = brand;
//     this.modal = modal;
//     this.price = price;
//   }
//   getModal() {
//     return this.modal;
//   }
// }

// const bmw = new Car({ brand: bmw, modal: "X7", price: 70000 });
// console.log(bmw.getModal());

// НАСЛІДУВАННЯ КЛАСІВ
// extends - відповідає за наслідквання класів
class Hero {
  constructor(obj) {
    this.name = obj.name;
    this.xp = obj.xp;
  }
  gainXp(amount) {
    this.xp += amount;
    console.log(`${this.name} received ${amount} xp`);
  }
}
// Warrior успадкувати від Hero все що знаходиться в середині об'єкта
class Warrior extends Hero {
  constructor(obj) {
    //   obj він передається у нашого Warrior як аргумент { name: "Arthas", xp: 1000, weapon: "sword"}
    // super - те що цей метод отримає як аргумент те і потрапить в наш constructor класу Hero класу від
    // якого ми наслідуємо методи
    super({ name: obj.name, xp: obj.xp });
    this.weapon = obj.weapon;
  }
  attack() {
    console.log(`${this.name} attack with ${this.weapon}`);
  }
}

const arthas = new Warrior({ name: "Arthas", xp: 1000, weapon: "sword" });

console.log(arthas);

class Mage extends Hero {
  // obj - він передається при створенні екземпляру класу new Mage({ name: "Khandgar", xp: 500, spels: ["lalala"] });
  // як аргумент
  constructor(obj) {
    super({ name: obj.name, xp: obj.xp });
    this.spels = obj.spels;
  }

  cast() {
    console.log(`${this.name} is casting`);
  }
}

// Ми створюємо новий екземпляр класу Mage і у ньго передаємо об'єкт тобто
// властивості нашого  Mage { name: "Khandgar", xp: 500, spels: [""] }
//Ці властивості name xp  мають відповідати класу  Hero  вони будуть спільні тому що клас Mage наслідує
// із класу Hero а ті що відрізняються spels: ["lalala"] як це наприклад пишемо що хочемо
const khandgar = new Mage({ name: "Khandgar", xp: 500, spels: ["lalala"] });

console.log(khandgar);
