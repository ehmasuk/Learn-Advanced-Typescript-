// ! REQUIRED = oppoiste of optional

// all files are optional here
interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

//! Convert all fields to required
const user: Required<User> = {
  id: "1",
  name: "John",
  email: "john@gmail.com",
  password: "123456",
};

console.log(user);
