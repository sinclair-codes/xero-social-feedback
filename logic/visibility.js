function hide(element) {
  console.log(`Hiding ${element.id}`);
  element.classList.add("hidden");
}

function show(element) {
  console.log(`Showing ${element.id}`);
  element.classList.remove("hidden");
}
