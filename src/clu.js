import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const calc = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);


console.log('What is the result of the expression?')

    let randomNumber = getRandomArbitrary(1 , 20);
    let randomNumber2 = getRandomArbitrary(1 , 20);
    let sum = randomNumber + randomNumber2
    console.log(`Question: ${randomNumber} + ${randomNumber2}`)
    const ask = readlineSync.question('Your Answer: ') 

    if (sum == ask) {
     console.log('Correct!')
    } else {
      console.log(`${ask} is wrong answer ;(. Correct answer was ${sum}.`)
      console.log(`Let's try again, ${name}`)
        process.exit(0)
    }

    let randomNumber3 = getRandomArbitrary(30 , 80);
    let randomNumber4 = getRandomArbitrary(1 , 20);
    let min  = randomNumber3 - randomNumber4
    console.log(`Question: ${randomNumber3} - ${randomNumber4}`)
    const ask2 = readlineSync.question('Your Answer: ') 

    if (min == ask2) {
     console.log('Correct!')
    } else {
      console.log(`${ask2} is wrong answer ;(. Correct answer was ${min}.`)
      console.log(`Let's try again, ${name}`)
        process.exit(0)
    }

    let randomNumber5 = getRandomArbitrary(1 , 20);
    let randomNumber6 = getRandomArbitrary(1 , 20);
    let mult  = randomNumber5 * randomNumber6
    console.log(`Question: ${randomNumber5} * ${randomNumber6}`)
    const ask3 = readlineSync.question('Your Answer: ') 

    if (mult == ask3) {
     console.log('Correct!')
    } else {
      console.log(`${ask3} is wrong answer ;(. Correct answer was ${mult}.`)
      console.log(`Let's try again, ${name}`)
        process.exit(0)
    }

    console.log(`Congratulations, ${name}!`)

};

export default calc;