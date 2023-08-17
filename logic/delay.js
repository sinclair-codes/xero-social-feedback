async function progressUpdateScreenDelay() {
  // A cosmetic delay ensuring a minimum amount of time is spent
  // on the progress update screens (loading, success, error).
  console.log("Screen delay...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}