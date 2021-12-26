const name = "Dan",
  age = 24,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `${name} 넌${age}살이구나 ${gender}고.`;
};

console.log(sayHi(name, age, gender));

export {};
