async function progressUpdateScreenDelay() {
  // A cosmetic delay ensuring a minimum amount of time is spent
  // on the progress update screens (loading, success, error).
  console.log("Screen delay...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function emojiSelectionDelay() {
  // The delay after selecting an emoji before the loading screen appears.
  // This allows the user to see the emoji they selected,
  // and a brief moment to change it if they accidentally selected the wrong one.
  console.log("Selection delay...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
