function calculateHappinessScore(idx, numberOfOptions) {
  const lastOptionIndex = numberOfOptions - 1;
  return Math.floor((idx / lastOptionIndex) * 100);
}
