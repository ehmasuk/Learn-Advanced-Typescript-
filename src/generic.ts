// ! basic generic type
const getValue = <CustomGenericType>(val: CustomGenericType): CustomGenericType => {
  return val;
};

getValue(23);

//! generic with interface
interface ApiResposeType<T> {
  code: number;
  message: string;
  data?: T[];
}

interface UserResponseDataType {
  id: number;
  name: string;
  email: string;
}

const respose: ApiResposeType<UserResponseDataType> = {
  code: 200,
  message: "success",
  data: [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Cina",
      email: "cina@gmail.com",
    },
  ],
};

console.log(respose);
