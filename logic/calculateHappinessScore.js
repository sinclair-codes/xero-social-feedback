function calculateHappinessScore(idx, numberOfOptions) {
  const lastOptionIndex = numberOfOptions - 1;
  return 100 - Math.floor((idx / lastOptionIndex) * 100);
}
