// Generate a UUIDv4
function createOrRetrieveUUID() {
  // If a UUID is already stored in localStorage, return it.
  // Otherwise, generate a new UUID, store it in localStorage, and return it.
  // Algorithm courtesy of chatGPT, but it seems to work well.
  const uuid = localStorage.getItem("uuid");
  if (uuid) {
    return uuid;
  } else {
    const hexDigits = "0123456789abcdef";
    let uuid = "";
    for (let i = 0; i < 36; i++) {
      if (i === 8 || i === 13 || i === 18 || i === 23) {
        uuid += "-";
      } else if (i === 14) {
        uuid += "4";
      } else if (i === 19) {
        uuid += hexDigits[(Math.random() * 4) | (0 + 8)];
      } else {
        uuid += hexDigits[(Math.random() * 16) | 0];
      }
    }
    localStorage.setItem("uuid", uuid);
    return uuid;
  }
}
