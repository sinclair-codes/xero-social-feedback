function emojiRadioInput(emojiName, value) {
  // The radio input. Hidden, but used to store the selected emoji.
  var emojiRadioInput = document.createElement("input");
  emojiRadioInput.id = emojiName;
  emojiRadioInput.className = `hidden peer/${emojiName}`; // Hide the radio input, and link to the corresponding label (same emojiName)
  emojiRadioInput.type = "radio";
  emojiRadioInput.name = "emoji-radio-input"; // Same name for all radio inputs
  emojiRadioInput.value = value;
  return emojiRadioInput;
}

function emojiLabel(emojiName) {
  // The label to be shown. Has more flexibility in styling than the radioInput.
  var newLabel = document.createElement("label");
  newLabel.id = `label-${emojiName}`;
  newLabel.htmlFor = emojiName;
  newLabel.className = `max-w-32 max-h-32 transition-opacity transition-scale opacity-50 hover:opacity-100 peer-checked/${emojiName}:opacity-100 hover:scale-125 peer-checked/${emojiName}:scale-125 peer-checked/${emojiName}:scale-150 cursor-pointer`; // Set the class attribute
  newLabel.addEventListener("click", submit);
  return newLabel;
}

function emojiImage(emojiName) {
  // Image element, placed inside the label
  var newImage = document.createElement("img");
  newImage.src = `./assets/options/${emojiName}.png`;
  newImage.alt = emojiName;
  newImage.className = "w-full h-full object-contain";
  return newImage;
}

function form(promptString) {
  // Create the background
  const formScreen = document.createElement("div");
  formScreen.id = "form-screen";
  formScreen.className =
    "bg-sky-300 p-4 w-screen h-screen flex flex-col items-center justify-center hidden";

  // Create the form
  var form = document.createElement("div");
  form.className =
    "bg-sky-500 max-w-2xl p-8 flex flex-col justify-center rounded-2xl space-y-8";
  formScreen.appendChild(form);

  // Create the header of the form
  var header = document.createElement("h1");
  header.className = "text-white text-5xl text-center font-bold";
  header.innerText = promptString;
  form.appendChild(header);

  // Create the
  var emojiFieldSet = document.createElement("fieldset");
  emojiFieldSet.id = "emoji-field-set";
  emojiFieldSet.className =
    "relative flex justify-evenly flex-row bg-sky-100 rounded-2xl p-4 space-x-4";
  form.appendChild(emojiFieldSet);

  options = localStorage.getItem("options").split(",");

  for (var idx = 0; idx < options.length; idx++) {
    var currentEmojiName = options[idx];
    var currentEmojiLabel = emojiLabel(currentEmojiName);
    emojiFieldSet.appendChild(
      emojiRadioInput(
        currentEmojiName,
        calculateHappinessScore(idx, options.length)
      )
    ); // For styling to work, the radioInput must come before the corresponding emojiLabel
    currentEmojiLabel.appendChild(emojiImage(currentEmojiName));
    emojiFieldSet.appendChild(currentEmojiLabel);
  }
  return formScreen;
}
