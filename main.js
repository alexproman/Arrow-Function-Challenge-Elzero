// Arrow Function Challenge

// [1] One Statment In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Argument May Change]

let names = function (...names) {
  // Params ?
  return `String [${names.join("],[")}] => Done !`;
};
// Convert To Arrow Function
let Users =  (...users )=> `String [${users.join("],[")}] => Done !`;


console.log (names("Osama","Mohamed","Ali","Ibrahim"));
console.log (Users("Osama","Mohamed","Ali","Ibrahim"));
// String [Osama],[Mohamed],[Ali],[Ibrahim] => Done !

// =============

//[1] Replace ??? In Return Statment To Get The Output
//[2] Create The Same Function With Regular Syntax
//[3] Use Array Inside The Arguments To Get The Output


let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => +nums + two + one - one;

// // console.log(calc(10, "???","???")); //80

// console.log(calc(10, myNumbers.pop(), myNumbers.shift()));

//======================================================
// Convert to Regular func:-
let Calc = function (one, two, ...nums){
  return (+nums + two + one - one);
};
console.log(Calc(10, myNumbers.pop(), myNumbers.shift()));