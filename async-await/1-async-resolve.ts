const asyncAwaitResolve = async () => "called asynchronously"

console.log("calling sync method...");

(async () => {
  const result = await asyncAwaitResolve()

  console.log("await result", result)
})()

console.log("end");
