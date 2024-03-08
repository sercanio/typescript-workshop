"use strict";
const user = {
    name: 'Sercan',
    id: 1,
};
console.log(user.name);
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet(user.name + ' :)', new Date());
//# sourceMappingURL=main.js.map