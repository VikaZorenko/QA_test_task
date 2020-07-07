"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;

rl.question('Введіть ім\'я: ', (answer) => {
  name = answer;
  if (name == 'Вячеслав') {
	console.log('Привет, Вячеслав');
  } else {
  	console.log('Нет такого имени');
  }
  rl.close();
});

