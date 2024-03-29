import {generateRandom, getRandomArrayElement, commentIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_COUNT = 10;

const COMMENT_MESSAGES = [
  'Все отлично!',
  'В целом все неплохо. Но не все.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто не профессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у нее получилась фотография лучше.',
  'Я поскольснулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [

  'Большой зеленый дом. #bigGreenHouse',
  'Большой белый дом. #bigWhiteHouse',
  'Большой серый дом. #bigGrayHouse',
  'Большой черный дом. #bigBlackHouse',
  'Большой желтый дом. #bigYellowHouse',
  'Большой красный дом. #bigRedHouse',

  'Маленький зеленый дом. #smallGreenHouse',
  'Маленький белый дом. #smallWhiteHouse',
  'Маленький серый дом. #smallGrayHouse',
  'Маленький черный дом. #smallBlackHouse',
  'Маленький желтый дом. #smallYellowHouse',
  'Маленький красный дом. #smallRedHouse',

  'Средний зеленый дом. #smallGreenHouse',
  'Средний белый дом. #smallWhiteHouse',
  'Средний серый дом. #smallGrayHouse',
  'Средний черный дом. #smallBlackHouse',
  'Средний желтый дом. #smallYellowHouse',
  'Средний красный дом. #smallRedHouse',

  'Средний зеленый дом. #smallGreenHouse',
  'Средний белый дом. #smallWhiteHouse',
  'Средний серый дом. #smallGrayHouse',
  'Средний черный дом. #smallBlackHouse',
  'Средний желтый дом. #smallYellowHouse',
  'Средний красный дом. #smallRedHouse',
];

const NAMES = ['Николай','Аким','Ким','Харитон','Тимур','Степан'];

const createComment = () => ({
  id: commentIdGenerator(),
  avatar: `img/avatar-${generateRandom(1,6)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: generateRandom(LIKES_MIN_COUNT,LIKES_MAX_COUNT),
  comments: Array.from({ length: generateRandom(0,COMMENT_COUNT)} , createComment)
});

const getPictures = () => {
  const arr = [];
  for(let i = 0; i < PICTURE_COUNT;i++){
    arr[i] = createPicture(i);
  }

  return arr;
};

export {getPictures};
