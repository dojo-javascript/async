const asyncPromiseRejectException = () => new Promise((resolve, reject) => {
  throw new Error("something went wrong")
})
console.log("calling sync method...");

asyncPromiseRejectException()
  .then((result) => console.log("result", result))
  .catch((error) => console.log("error", error))

console.log("end");
