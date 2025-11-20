//! function without any return type
const printNumber = (num: number): void => {
  console.log(num);
};
printNumber(10); //? 10

//! function with return type
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(10, 20)); //? 30

//! multiple agruments
const printName = (firstName: string, lastName: string): void => {
  console.log(firstName + " " + lastName);
};
printName("Eh", "Masuk"); //? Eh Masuk

//! optional parameters
const printName2 = (firstName: string, lastName?: string): void => {
  console.log(firstName + " " + lastName);
};
printName2("Eh"); //? Eh undefined
printName2("Eh", "Masuk"); //? Eh Masuk

// rest parameters
const printName3 = (...names: string[]): void => {
  console.log(names);
};
printName3("Eh", "Masuk"); //? [ "Eh", "Masuk" ]
printName3("Eh", "Masuk", "Sleeping"); //? [ "Eh", "Masuk", "Sleeping" ]

//! function with default parameters
const printName4 = (firstName: string, lastName: string = "Masuk"): void => {
  console.log(firstName + " " + lastName);
};
printName4("Eh"); //? Eh Masuk
printName4("Eh", "Masuk"); //? Eh Masuk

//! NEVER return type = function that never ends
const errorThrower = (msg: string): never => {
  throw new Error(msg);
};
errorThrower("Our custom error...");
