// !This is a type gurad function
const isError = (error: unknown) => {
  return error instanceof Error;
};

try {
  Promise.resolve();
} catch (error) {
  if (isError(error)) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}
