const isLessOrEqual = (string, length) => string.length <= length;

isLessOrEqual('проверяемая строка', 20);

const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaseAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrome('топот');

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('qwerty', 4, '0');
