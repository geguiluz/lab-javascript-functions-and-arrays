//Check valid arrays 

let checkValidArray = array => {
  if (array === undefined){
    // console.log("El arreglo es incorrecto");
    return false;
  } else if(array.length === 0){
      // console.log("El arreglo está vacío");
      return false;
    } else{  
      // console.log("El arreglo es correcto");
      return true;
    }
}
// Find the maximum
let maxOfTwoNumbers = (numberOne, numberTwo) =>{
  if(numberOne >= numberTwo){
    console.log(numberOne);
    return numberOne;
  } else {
    console.log(numberOne);
    return numberTwo;
  }
}
maxOfTwoNumbers(4,4);

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
let champion = 0;
function findLongestWord(wordArray){
  let longestWorld = "";
  if(checkValidArray(wordArray) === true)
  {  
    if (wordArray.length > 1){
      wordArray.forEach(wordTournament)
      function wordTournament(data, index){
        // console.log(data.length,words[index].length);
        if(wordArray[index].length > wordArray[champion].length){
          //  console.log("New Champion is",words[champion]);
          //  console.log("New Champion is",words[index]);
          champion = index;
        }
      }
      console.log("Longest word is",wordArray[champion]);
      longestWord = wordArray[champion];
      return longestWord;
    } else{
      return wordArray[0];
    }

  } else{
    // console.log("El arreglo está cucho o algo");
    return undefined;
  }
}
findLongestWord(words);

// // Checking for empty arrays
// let arrayIsEmpty = (arrayToBeChecked, function) =>{
//   if (arrayToBeChecked.length = 0){
//     return 0;
//   } 
//   else{
//     function();
//   }
// }

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumArray = arrNumbers =>{
  // if (arrNumbers.length > 0){
  if (checkValidArray(arrNumbers) === true){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(arrNumbers.reduce(reducer));
    return arrNumbers.reduce(reducer);
  } else {
    return 0;
  }
}
sumArray(numbers);

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
let averageNumbers = avgArray => {
  if (avgArray.length > 0){
    return sumArray(avgArray)/avgArray.length;
  } else {
    // return 0;
    return undefined;
  }
}
averageNumbers(numbersAvg);

// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

let lengthsArray = [];
let averageWordLength = someArray => {
  if (checkValidArray(someArray) === true){
    someArray.forEach(wordLengths);
    // console.log(lengthsArray);
    // console.log(averageNumbers(lengthsArray));
    return averageNumbers(lengthsArray);
  } else {
    return undefined;
  }
}
function wordLengths(data){
    // console.log(data.length);
    lengthsArray.push(data.length)
    // console.log(lengthsArray);
    return lengthsArray;
}
averageWordLength(wordsArr);

// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

var uniquifyArray = arrayWithDuplicates => {
  if (arrayWithDuplicates.length > 0){
    return arrayWithDuplicates.filter((item, index, array) => {
      // Duda: Preguntar qué es lo que hace esta línea!
      return array.indexOf(item) == index;
    });
  }
  else {
    return undefined;
  }
}
  
uniquifyArray(wordsUnique);

// Counting Repetion


var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

let numbersInWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five'
];

let howManyTimes = (word, array) => {
  let count = 0;
  if (checkValidArray(array) === true){
      array.forEach((item, index) => {
        // console.log("Item is", item);
        // console.log("Word is", word);
        // console.log("Match count",count);
        if(item === word){
          // console.log("Match!")
          count++;
        }
      });
      // return count;
      return numbersInWords[count]; 
    } else{
    return false;
  }
}
//Duda: No sé por qué está dando este error en Jasmine: 
//Counting Repetition - howManyTimes returns one when the word appears only one time on the array 
//TypeError: array.forEach is not a function
howManyTimes("subset",wordsCount);

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

let doesWordExist = (word, array) => {
  if (checkValidArray(array) === true){
      if(howManyTimes(word,array) !== 'zero'){
        return true;
      }
      else{
        return false;
      }
    } else{
    return false;
  }
}
doesWordExist("subset",wordsCount);

// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

/************ENTENDÍ MAL LA PREGUNTA (LOL)************/
// console.log("Altura de la matriz",arr.length)
// console.log("Ancho de la matriz",arr[1].length)
function multiplyMatrix(matrixIn, direction){
  let x = 0;
  let y = 0;
  if (direction === "h"){
    x = matrixIn.length;
    y = matrixIn[1].length;
  } else if(direction === "v"){
    y = matrixIn.length;
    x = matrixIn[1].length;
  }
  let displayArray = [];
  let productsArray = [];
  for(let i=0 ; i<x; i++){
    let producto = 1;
    for(let j=0 ; j<y; j++){
      // console.log(matrixIn[i][j]);
      // console.log("Ciclo interno número", j);
      if (direction === "h"){
        displayArray.push(matrixIn[i][j]);
        producto *= matrixIn[i][j];
      } else{
        displayArray.push(matrixIn[j][i]);
        producto *= matrixIn[j][i];
      }
    }
    // console.log("Ciclo EXTERNO número", i);
    // console.log("-------Resultado:", producto);
    productsArray.push(producto);
  }
  return productsArray;
}

// multiplyMatrix(arr, "v");
let findGreatestElement = array => {

}
let greatestProduct = matrixIn => {
  let verticalArray = multiplyMatrix(matrixIn,"v");
  let horizontalArray = multiplyMatrix(matrixIn,"h");
  let allProducts = verticalArray.concat(horizontalArray);
  // return allProducts;
  return allProducts.reduce((p, v) => {
    return ( p > v ? p : v );
  });
 }
greatestProduct(matrix);