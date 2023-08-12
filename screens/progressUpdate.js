function progressUpdate(
  screenId,
  tailwindBgColor,
  headerTextStr,
  subHeaderTextStr,
  imageSourcePath,
  imageRotationTailwind
) {
  // Large div for the background
  var progressUpdateScreen = document.createElement("div");
  progressUpdateScreen.id = screenId;
  progressUpdateScreen.className = `absolute h-screen w-screen ${tailwindBgColor} flex flex-col items-center justify-center hidden space-y-8`;

  // The image to display center screen
  var image = document.createElement("img");
  image.src = imageSourcePath;
  image.className = `max-w-96 max-h-96 object-cover ${imageRotationTailwind}`;
  progressUpdateScreen.appendChild(image);

  // Header
  var header = document.createElement("h1");
  header.className = "text-white text-5xl text-center font-bold";
  header.innerText = headerTextStr;

  // Subheader
  var subHeader = document.createElement("h2");
  subHeader.className = "text-white text-2xl text-center";
  subHeader.innerText = subHeaderTextStr;

  // Div to hold the text
  var textDiv = document.createElement("div");
  textDiv.className = "flex flex-col items-center justify-center space-y-4";
  textDiv.appendChild(header);
  textDiv.appendChild(subHeader);

  progressUpdateScreen.appendChild(textDiv);

  return progressUpdateScreen;
}
