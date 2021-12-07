//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const pluralize = array => {
    return array.map(element => `${element}s`);
};
console.log(pluralize(animals));

const uppercase = array => {
    return array.map(element => element[0].toUpperCase() + element.slice(1));
};
console.log(uppercase(animals));

const longWords = array => {
    return array.filter(string => string.length > 3);
};
console.log(longWords(animals));

const shortWords = array => {
    return array.filter(string => string.length < 5);
};
console.log(shortWords(animals));

const oddLength = array => {
    return array.filter(element => (element.length % 2) !== 0);
};
console.log(oddLength(animals));

const longToShort = array => {
    return array.sort((animal, nextAnimal) => nextAnimal.length - animal.length);
};
console.log(longToShort(animals));

const sum = numsArray => {
    return numsArray.reduce((accum, currentValue) => accum + currentValue);
};
console.log(sum([22, 15, 1114, 416, 37, 4]));

