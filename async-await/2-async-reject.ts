const asyncAwaitReject = async () => {throw new Error("something went wrong...")}

console.log("calling sync method...");

(async () => {
  try {
    const result = await asyncAwaitReject()

    console.log("await result", result)
  } catch (error) {
    console.log("await error", error)
  }

})()

console.log("end");
