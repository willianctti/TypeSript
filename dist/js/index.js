"use strict";
let x = 10;
x = 20;
console.log(x);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
console.log(myTuple);
const user = {
    name: "Willian",
    age: 18,
};
console.log(user);
let id = "10";
id = 200;
console.log(id);
let userId = 10;
userId = "alex";
console.log(userId);
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Polo",
    size: Size.g
};
console.log(camisa);
// Funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
// também posso tipar uma variavel com isso:
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
