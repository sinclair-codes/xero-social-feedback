function locationSelection(locationOptions, tailwindBgColor) {
  // Main div for bg color, full screen
  var locationSelectionScreen = document.createElement("div");
  locationSelectionScreen.id = "location-selection";
  locationSelectionScreen.className = `absolute h-screen w-screen ${tailwindBgColor} flex flex-col items-center justify-center space-y-8`;

  // Div to hold the location buttons
  var locationButtonGroup = document.createElement("div");
  locationButtonGroup.className =
    "flex flex-col items-center justify-center space-y-4";

  // Loop to add each option as a button
  locationOptions.forEach((locationOption) => {
    var locationButton = document.createElement("div");
    locationButton.className =
      "bg-sky-500 hover:bg-sky-700 text-white font-bold p-8 w-full rounded-2xl";

    // Add the onclick event to each button. Should just set the location & move to the next screen.
    locationButton.onclick = () => {
      // add to local storage
      localStorage.setItem("selectedLocation", locationOption);
      hide(locationSelectionScreen);
      show(formScreen);
    };

    // Add the text to each button
    var locationText = document.createElement("h1");
    locationText.className = "text-white text-5xl text-center font-bold";
    locationText.innerText = locationOption;

    locationButton.appendChild(locationText); // Add the text to the button
    locationButtonGroup.appendChild(locationButton); // Add the button to the button group
  });

  // Add the button group to the main div
  locationSelectionScreen.appendChild(locationButtonGroup);

  return locationSelectionScreen;
}
