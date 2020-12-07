//utility functions

//...........................
//returns a random number in the specified range inclusive of both limits
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((max - min + 1) * Math.random() + min);
};

//randomly select an element in a list
export function randomSelection(list) {
  return list[getRandomIntInclusive(0, list.length - 1)];
}
