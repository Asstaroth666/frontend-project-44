import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




const prime = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1){
let randomNumber = getRandomArbitrary(1 , 20);

const isPrime = (randomNumber % randomNumber == 0 && randomNumber % 1 == randomNumber)


console.log(`Question: ${randomNumber}`)
const ask = readlineSync.question('Your answer: ')

if (isPrime) {
    if (ask == 'yes') {
        console.log('Correct!')
    } else {
        if (ask == 'no') {
        console.log('Correct!')
        }
    }
} else if (randomNumber % 2 == 0) {
    if (ask == 'no') {
        console.log('Correct')
    } else {
        console.log('Wrong!')
        process.exit(0)
    }
}
    };

  };

export default prime;
