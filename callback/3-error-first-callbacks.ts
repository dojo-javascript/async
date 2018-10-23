
const nodeAsyncFunction = (isError, callback) => {
  if ( isError ) {
    return setTimeout(() => callback(new Error("something went wrong..."), null), 1000);
  }
  setTimeout(() => callback(null, "called asynchronously"), 1000);
};

const myCallback = (error, result) => {
  if ( error ) { return console.log("error", error.toString()) }

  console.log("result:", result)
}

console.log("calling async method...");

nodeAsyncFunction(false, myCallback);
nodeAsyncFunction(true, myCallback);

console.log("end");
