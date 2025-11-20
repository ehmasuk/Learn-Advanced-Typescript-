interface Person {
  name: string;
  age: number;
}

/**
 * suppose i want somethong like this
 * {
 *  admin: User,
 *  user: User,
 * }
 */

const personOrAdmin: Record<"admin" | "user", Person> = {
  admin: {
    name: "John",
    age: 23,
  },
  user: {
    name: "Cina",
    age: 23,
  },
};
console.log(personOrAdmin);

// !here key can be any valid js poperty but value must be Person
const personOrAdmin2: Record<PropertyKey, Person> = {
  thisCanBeAnything: {
    name: "John",
    age: 23,
  },
  anyValidJs: {
    name: "Cina",
    age: 23,
  },
};

console.log(personOrAdmin2);


