const getRandomNumber = () => {
  const randomN = Math.floor(Math.random() * 255) + 1;
  return randomN.toString(16).padStart(2, 0).toUpperCase();
};

// Get simple colors
const simpleColors = [
  "black",
  "white",
  "gray",
  "silver",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
];

export const getSimpleColor = () => {
  const randomIndex = Math.floor(Math.random() * simpleColors.length);

  console.log(randomIndex);
  return simpleColors[randomIndex];
};

// Get hex colors
export const getHexColor = () => {
  const hex1 = getRandomNumber();
  const hex2 = getRandomNumber();
  const hex3 = getRandomNumber();

  return "#" + hex1 + hex2 + hex3;
};
