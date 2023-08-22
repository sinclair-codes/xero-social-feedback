function textInput(
  screenId,
  tailwindBgColor,
  headerTextStr,
  imageSourcePath,
  placeholderTextStr,
  submitButtonCallback
) {
  // Large div for the background
  var progressUpdateScreen = document.createElement("div");
  progressUpdateScreen.id = screenId;
  progressUpdateScreen.className = `absolute h-screen w-screen ${tailwindBgColor} flex flex-col items-center justify-center space-y-8`;

  // The image to display center screen
  var image = document.createElement("img");
  image.src = imageSourcePath;
  image.className = `max-w-96 max-h-96 rounded-2xl object-cover`;
  progressUpdateScreen.appendChild(image);

  // Header
  var header = document.createElement("h1");
  header.className = "text-white text-5xl text-center font-bold";
  header.innerText = headerTextStr;

  // Input
  var input = document.createElement("input");
  input.className =
    "text-black text-3xl text-center w-full px-4 py-2 rounded-xl";
  input.placeholder = placeholderTextStr;

  // Submit button
  var submitButton = document.createElement("button");
  submitButton.className =
    "bg-green-600 text-white text-3xl font-bold px-4 py-2 rounded-xl";
  submitButton.innerText = "Next";
  // Div to hold the text
  submitButton.addEventListener("click", function () {
    hide(progressUpdateScreen);
    submitButtonCallback(input.value);
  });

  var textDiv = document.createElement("div");
  textDiv.className =
    "flex flex-col items-center justify-center space-y-4 w-full max-w-2xl p-16";
  textDiv.appendChild(header);
  textDiv.appendChild(input);
  textDiv.appendChild(submitButton);

  progressUpdateScreen.appendChild(textDiv);

  return progressUpdateScreen;
}
