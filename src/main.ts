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