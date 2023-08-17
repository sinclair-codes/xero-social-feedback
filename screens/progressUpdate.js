function progressUpdate(
  screenId,
  tailwindBgColor,
  headerTextStr,
  imageSourcePath
) {
  // Large div for the background
  var progressUpdateScreen = document.createElement("div");
  progressUpdateScreen.id = screenId;
  progressUpdateScreen.className = `absolute h-screen w-screen ${tailwindBgColor} flex flex-col items-center justify-center hidden space-y-8`;

  // The image to display center screen
  var image = document.createElement("img");
  image.src = imageSourcePath;
  image.className = `max-w-96 max-h-96 object-cover`;
  progressUpdateScreen.appendChild(image);

  // Header
  var header = document.createElement("h1");
  header.className = "text-white text-5xl text-center font-bold";
  header.innerText = headerTextStr;

  // Div to hold the text
  var textDiv = document.createElement("div");
  textDiv.className = "flex flex-col items-center justify-center space-y-4";
  textDiv.appendChild(header);

  progressUpdateScreen.appendChild(textDiv);

  return progressUpdateScreen;
}
