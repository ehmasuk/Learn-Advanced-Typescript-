// ! optional fields

interface User {
  name: string;
  email?: string; // ? optional field
  age?: number; // ? optional field
}

// !here i can add age or email, they are optional
const user: User = {
  name: "John",
};

console.log(user);

// !important
// !important
// !important
interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// ! Use all fields as optional from User
const userAddress: Partial<Address> = {
  street: "123 Main Street",
};

console.log(userAddress);
