const asyncPromiseReject = () => new Promise((resolve, reject) => {
  reject("called asynchronously");
})
console.log("calling sync method...");

asyncPromiseReject()
  .then((result) => console.log("result", result))
  .catch((error) => console.log("error", error))

console.log("end");
