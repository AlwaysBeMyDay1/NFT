interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Dan",
  age: 24,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `${person.name} 넌${person.age}살이구나 ${person.gender}고.`;
};

console.log(sayHi(person));

export {};
