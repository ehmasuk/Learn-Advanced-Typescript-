//! we can pick specific properties from an interface with pick

interface User {
  name: string;
  email: string;
  age: number;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}


//! pick name,email and password from user
const RegisterUser: Pick<User, "name" | "email" | "password"> = {
  name: "John",
  email: "john@gmail.com",
  password: "123456",
};

console.log(RegisterUser);
