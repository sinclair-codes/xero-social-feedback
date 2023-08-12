function getCurrentlySelectedEmojiRadioInput() {
  return document.querySelector('input[name="emoji-radio-input"]:checked');
}

async function submit() {
  if (isCurrentlySubmitting) {
    return; // Only submit one response at a time.
  }
  isCurrentlySubmitting = true;
  console.log("Submitting form...");

  await emojiSelectionDelay();
  hide(formScreen);
  show(loadingScreen);

  var selectedEmojiRadioInput = getCurrentlySelectedEmojiRadioInput();
  var prefix =
    "https://docs.google.com/forms/d/e/1FAIpQLSe6R9kxZOIQTu9jkGmZ3XDaENzwPBpdazybYX6puPOqGnbfow/formResponse?&submit=Submit?";
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

  await progressUpdateScreenDelay();
  hide(loadingScreen);
  console.log(
    "Always displaying success message because of no-cors requirement from google forms."
  );
  show(successScreen);

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
  await progressUpdateScreenDelay();
  resetForm();
}

async function handleSubmit(url) {}
