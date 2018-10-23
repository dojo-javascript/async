
const syncFunction = (callback) => {
  callback("called synchronously");
};

console.log("calling sync method...");

syncFunction((result) => console.log("result:", result));

console.log("end");
