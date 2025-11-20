// ! Type alias
type HomeAddress = {
  street: string;
  city: string;
};
type WorkAddress = {
  street: string;
  city: string;
};

type Person = HomeAddress & WorkAddress & {
    name: string;
    age: number;
  };

// ! interface
interface HomeAddress2 {
  street: string;
  city: string;
}

interface WorkAddress2 {
  street: string;
  city: string;
}

interface Person2 extends HomeAddress2, WorkAddress2 {
  name: string;
  age: number;
}
