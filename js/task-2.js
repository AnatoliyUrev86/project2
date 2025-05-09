// class User {
// # ставиться перед назвою властивості якщо ми її хочемо зробити приватною і робимо ми це перед
// конструктором у нашому класі User
//   #name;
//   #email;
//   constructor({ params }) {
//     this.name = params.name;
//     this.email = params.email;
//     //   У конструкторі ми до них звертаємось через #
//     this.#email = email;
//     this.#name = name;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Car {
//     constructor({ brand, modal, price }) {
//     this.brand = brand;
//     this.modal = modal;
//     this.price = price;
//   }

//   getModal() {
//     return this.modal;
//   }
// }

// const audi = new Car({ brand: "audi", model: "Q7", price: 70000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 65000 });

// console.log("audi", audi);
// console.log("bmw", bmw);


