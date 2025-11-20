// ! OMIT = opposite of pick

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// ! remove password field from api response
const ApiRespose: Omit<User, "password"> = {
  id: "1",
  name: "John",
  email: "john@gmail.com",
};

console.log(ApiRespose);
