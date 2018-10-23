
const asyncFunction = (callback) => {
  setTimeout(() => callback("called asynchronously"), 1000);
};

console.log("calling async method...");

asyncFunction((result) => console.log("result:", result));

console.log("end");
