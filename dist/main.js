"use strict";
/* Introduction
interface User {
  name: string;
  id: number;
}

const user : User = {
  name: 'Sercan',
  id: 1,
};

console.log(user.name);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet(user.name + ' :)', new Date());
*/
/* Type Aliases
A type alias is used to name any type

type Coordinates = {
  x: number;
  y: number;
};

function printCoord(c: Coordinates) {
  console.log(`Coordinates: ${c.x}, ${c.y}`);
}

printCoord({ x: 100, y: 100 });
*/
/* Interfaces
Almost same with the type aliases

type Coordinates = {
  x: number;
  y: number;
};

function printCoord(c: Coordinates) {
  console.log(`Coordinates: ${c.x}, ${c.y}`);
}

printCoord({ x: 100, y: 100 });
*/
/* Type Aliases vs Interfaces
1-) When we want to extend a Type we use intersection
type Animal = {
  name: string;
}

type Bear = Animal & {
  carrot: boolean;
}

2-) When we want to extend an Interface we use "extends" keyword:
internace Animal = {
  name: string;
}

internace Bear extends Animal{
  carrot: boolean;
}
*/
/* Type Assertions
1-) Type assertions are used to tell TypeScript the type of the variable that it does not exactly know.

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

here TypeScript knows that myCanvas is an Html element but nothing more. We
simply define this element is an HTMLCanvasElement.
*/
/* Literal Types
We can define a type can only take a certain value of any of the regular JavaScript types.

let greeting: "hello" = "hello";

here the value of greeting can only be "hello".
*/
//# sourceMappingURL=main.js.map