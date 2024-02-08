import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const gcd = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games! ');
    const name = readlineSync.question(
      'May I have your name? ',
    );
    console.log(`Hello, ${name}!`);


    let randomNumber = getRandomArbitrary(1 , 50);
    let randomNumber2 = getRandomArbitrary(1 , 50);
    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${randomNumber} ${randomNumber2} `)
    const ask = readlineSync.question(`Your answer: `)
    
    while (randomNumber != 0 && randomNumber2 != 0) 
    if (randomNumber > randomNumber2) {
        let answer = randomNumber % randomNumber2
    } else {
        (asnwer = randomNumber2 % randomNumber) 
    };



    };




export default gcd;

