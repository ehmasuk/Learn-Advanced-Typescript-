/**
 * ! Suppose we need to create a type from the return values of a fucntion
 */

const getValues = () => {
  return {
    name: "John",
    email: "john@gmail.com",
    age: 23,
    password: "123456",
  };
};

type ResturnValuesOfFunction = ReturnType<typeof getValues>;

const user: ResturnValuesOfFunction = {
  name: "John",
  email: "john@gmail.com",
  age: 23,
  password: "123456",
};

console.log(user);

// ! For promised functions

const getUser = () => {
  return Promise.resolve({ name: "John", email: "john@gmail.com", age: 23, password: "123456" });
};

type ResturnValuesOfPromise = Awaited<ReturnType<typeof getUser>>;

/**
 * Suppose we need to create a type from the parameters of a fucntion
 */

// const greet = (msg: string, count: number) => {
//   for (let i = 0; i < count; i++) {
//     console.log(msg);
//   }
// };
// type parametersOfGreet = Parameters<typeof greet>;

// const greetType: parametersOfGreet = {
//   msg: "Hello",
//   count: 10,
// };

// console.log(greetType);
