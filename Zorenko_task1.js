"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number;

rl.question('Введіть число: ', (answer) => {
  number = answer;
  number = parseInt(number, 10);
  if (number > 7) {
	console.log('Привет');
  } 
  rl.close();
});

