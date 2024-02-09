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


    let randomNumber = getRandomArbitrary(1 , 20);
    let randomNumber2 = getRandomArbitrary(1 , 20);
        


    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${randomNumber} ${randomNumber2} `)
    const ask = readlineSync.question(`Your answer: `)

    function answer(randomNumber, randomNumber2) {
      while (randomNumber !== randomNumber2) {
        if (randomNumber > randomNumber2) {
          randomNumber = randomNumber - randomNumber2 ;
        } else {
          randomNumber2 = randomNumber2 - randomNumber
        }
      }
      return randomNumber
    }

    if (answer == ask) {
      console.log('Correct!')
    } else {
      console.log(`${ask} is wrong answer ;(. Correct answer was ${}.`)
    }


    };




export default gcd;

