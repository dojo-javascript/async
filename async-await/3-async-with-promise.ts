const asyncAwaitWithPromise = () => new Promise((resolve) => resolve("called by async/await"))

console.log("calling sync method...");

(async () => {
  try {
    const result = await asyncAwaitWithPromise()

    console.log("await result", result)
  } catch (error) {
    console.log("await error", error)
  }

})()

console.log("end");
