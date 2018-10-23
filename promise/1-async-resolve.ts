const asyncPromiseResolve = () => new Promise((resolve) => {
  resolve("called asynchronously");
})
console.log("calling sync method...");

asyncPromiseResolve()
  .then((result) => console.log("result", result))
  .catch((error) => console.log("error", error));

console.log("end");
