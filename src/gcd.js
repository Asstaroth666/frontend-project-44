import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const getGcd = (x, y) => (y !== 0) ? getGcd(y, x % y) : x;

const gcd = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games! ');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

        

    for (let i = 0; i < 3; i += 1){
      let randomNumber = getRandomArbitrary(1 , 20);
      let randomNumber2 = getRandomArbitrary(1 , 20);

    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${randomNumber} ${randomNumber2} `)
    const ask = readlineSync.question(`Your answer: `);
    let max;
    let min;

    if (randomNumber2 >= randomNumber){
      max = randomNumber2;
      min = randomNumber;
    }
    else {
      max = randomNumber;
      min = randomNumber2;
    }

    let rightAnswer = getGcd(max, min);



    if (rightAnswer === Number(ask)) {
      console.log('Correct!')
    } else {
      console.log(`${ask} is wrong answer ;(. Correct answer was ${rightAnswer}`)
      process.exit(0)
    }
  }
  console.log(`Congratulations, ${name}!`)
    };




export default gcd;

