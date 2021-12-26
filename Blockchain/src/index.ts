class Human{
  public name:string;
  public age:number;
  public gender:string;
  constructor(name:string,age:number,gender?:string){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
}

const dan = new Human("Dan",24,"male");

const sayHi = (person): string => {
  return `${person.name} 넌${person.age}살이구나 ${person.gender}고.`;
};

console.log(sayHi(dan));

export {}; 
