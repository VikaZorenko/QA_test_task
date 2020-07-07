"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr;

rl.question('Введіть масив у форматы [n1, n2,...., nN], де n - числа: ', (answer) => {
  arr = JSON.parse(answer);
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] % 3 === 0) {
	  console.log(arr[i]);
    }
  }
  rl.close();
});

