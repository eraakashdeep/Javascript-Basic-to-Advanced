/**
 * this exercise
 */

// ex-01

// function displayName() {
//   console.log(this);
// }

// const user1 = {
//   name: "Aakash",
//   showName: displayName,
// };
// // console.log(user1);
// user1.showName();

// ex-02

// function displayName() {
//   console.log(this);
// }

// const user2 = {
//   name: "Aakash",
//   showName: function () {
//     displayName();
//   },
// };

// user2.showName();

// ex-03
// const displayName = () => {
//   console.log(this);
// };

// const user2 = {
//   name: "Aakash",
// };

// displayName.apply(user2);

// ex-04

// function User() {
//   console.log(this);
// }

// const user1 = new User();

// ex-05

// const person = {
//   name: "Aakash",
//   sayHi: function () {
//     console.log(`Welcome ${this.name}`);
//   },
// };

// person.sayHi();

// ex-06

const person = {
  name: "Aakash",
  sayHi: function () {
    console.log(`Welcome ${this.name}`);
  },
};

let person2 = person.sayHi;
console.log(person2);
person2();
