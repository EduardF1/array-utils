import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import { Emoji } from './models/emoji';
//import emojiList from "./models/emoji-list";

//const numbers: number[] = [3, 56, 2, 48, 5];

// 1) Map -Create a new array by doing something with each item in an array.
// const doubledNumbers: number[] = numbers.map((x:number) => { return x * 2;})
// const doubledNumbers: number[] = [];
// numbers.forEach((x:number) => doubledNumbers.push(x * 2));
// console.log(doubledNumbers);

//  2) Filter - Create a new array by keeping the items that return true.
// const numbersGreaterThan10 = numbers.filter((x:number)=> {return x > 10});
// console.log(numbersGreaterThan10);
// const numbersGreaterThan10: number[] = [];
// numbers.forEach((x: number) => {
//     if (x > 10) {
//         numbersGreaterThan10.push(x)
//     }
// });
// console.log(numbersGreaterThan10);

//  3) Reduce - Accumulate a value by doing something to each item in an array.
// let sum = 0;
// numbers.forEach((currentNumber:number) => {sum += currentNumber});
// console.log(sum);
// const numbersSum = numbers.reduce((accumulator:number, currentNumber:number) => {return accumulator + currentNumber});
// console.log(numbersSum);

//  4)  Find - find the first item that matches from an array.
// const firstMatch = numbers.find((x: number) => {
//     return x > 10
// });
// console.log(firstMatch);

//  5)  FindIndex - find the index of the first item that matches.
// const firstIndexMatch = numbers.findIndex((x: number) => {
//     return x > 10
// });
// console.log(firstIndexMatch);

/* ----------------------------------- Using the emoji-list --------------------------------------------------------*/

// const mentions: string[] = [];
// emojiList.map((emoji:Emoji) => {return mentions.push(emoji.meaning.substring(0,97) + '...')});

// const mentionsCapped = emojiList.map((emoji:Emoji) => {return emoji.meaning.substring(0,97) + '...'});
// console.log(mentionsCapped);

//////////////////////// ARROW FUNCTIONS/FAT ARROWS /////////////////////////////////////////////////////////////////////
// input(s) => `return` output

// const doubledNumbers = numbers.map(x => Math.pow(x, 2));
// console.log(doubledNumbers);

// 1) Map -Create a new array by doing something with each item in an array.
//const doubledNumbers: number[] = numbers.map(x => x * 2);
//console.log(doubledNumbers);

//  2) Filter - Create a new array by keeping the items that return true.
// const numbersGreaterThan10 = numbers.filter(x => x > 10);
// console.log(numbersGreaterThan10);

//  3) Reduce - Accumulate a value by doing something to each item in an array.
// const numbersSum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
// console.log(numbersSum);

//  4)  Find - find the first item that matches from an array.
// const firstMatch = numbers.find(x =>  x > 10);
// console.log(firstMatch);

//  5)  FindIndex - find the index of the first item that matches.
// const firstIndexMatch = numbers.findIndex(x => x > 10);
// console.log(firstIndexMatch);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

