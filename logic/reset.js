function resetForm() {
  console.log("Resetting form...");
  isCurrentlySubmitting = false;
  getCurrentlySelectedEmojiRadioInput().checked = false; // Uncheck the currently selected emoji
  hide(loadingScreen);
  hide(successScreen);
  hide(errorScreen);
  show(formScreen);
}
