const generateRandom = (min , max) => {

  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

const getRandomArrayElement = (array) => array[generateRandom(0,array.length - 1)];

const createIdGenerator = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

const commentIdGenerator = createIdGenerator();

export {generateRandom, getRandomArrayElement, commentIdGenerator};
