function getRadioInput(emojiName) {
  // Get the radio input element
  return document.getElementById(emojiName);
}

async function submit(googleFormId, emojiName) {
  if (isCurrentlySubmitting) {
    return; // Only submit one response at a time.
  }
  isCurrentlySubmitting = true;
  console.log("Submitting form...");

  var selectedEmojiRadioInput = getRadioInput(emojiName);

  var prefix = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse?&submit=Submit?`;
  var googleFormFields = [
    `&entry.1935440836=${localStorage.getItem("options")}`, // Selection Options
    `&entry.498218418=${selectedEmojiRadioInput.id}`, // Response name
    `&entry.1633997278=${selectedEmojiRadioInput.value}`, // Happiness Score
    `&entry.2128993084=${createOrRetrieveUUID()}`, // Device Fingerprint
    `&entry.202822596=${localStorage.getItem("selectedLocation")}`, // Location
  ];
  console.log("Submitting form with fields:", googleFormFields);
  var url = prefix + googleFormFields.join("");
  // response not currently used as it does not contain any useful info
  const response = await fetch(url, { mode: "no-cors" });

  console.log(
    "Always displaying success message because of no-cors requirement from google forms."
  );

  // It would be a better idea to implement conditional success / failure
  // handling when the response is not no-cors. This is only possible with server-side auth somewhere.
  // (when it gives information as to whether the request succeeds). Example below.
  //
  // success = someSuccessCondition
  // if (success) {
  //   show(successScreen);
  //   console.log("Success!");
  // } else {
  //   show(errorScreen);
  //   console.error("Request failed:", response.status);
  // }
  show(successScreen);
  hide(formScreen);
  isCurrentlySubmitting = false;
  selectedEmojiRadioInput.checked = false; // Uncheck the currently selected emoji
  await progressUpdateScreenDelay();
  hide(successScreen);
  show(formScreen);
}
