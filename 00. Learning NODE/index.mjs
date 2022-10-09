console.log(process.platform)
console.log(process.env.USER)







//to input and output name in terminal like c++
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });
  
  readline.question('Who are you?', name => {
	console.log(`Hey there ${name}!`);
	readline.close();
  });
