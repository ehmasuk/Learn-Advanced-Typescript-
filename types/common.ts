interface AddressType {
  city: string;
  street: number;
}

interface User {
  name: string;
  age: number;
  hobbies: string[]; // array of string
  address: AddressType;
  married?: boolean; // optional property
}

const user: User = {
  name: "john",
  age: 20,
  hobbies: ["reading", "coding"],
  address: {
    city: "new york",
    street: 201,
  },
};

console.log(user);
