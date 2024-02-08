import readlineSync from 'readline-sync';


const even = () => {
      console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);

  
  function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

    let randomNumber = getRandomArbitrary(1 , 100)


console.log('Answer "yes" if the number is even, otherwise answer "no".'),
  console.log(`Question: ${randomNumber}`)
  const number = readlineSync.question(
    'Your Answer: '
    ) 
    
    if ('yes') {
        console.log('Correct!');
    } else if (randomNumber % 2 > 0 == 'no') {
        console.log (`'yes' is wrong answer ;(. Correct answer was 'no'.`); 
        console.log(`Let's try again, ${name}!`)
        process.exit(0);
    } else {
        console.log('Wrong!')
        process.exit(0);
    };


  console.log('Question: 24')
    const number2 = readlineSync.question(
    'Your Answer: '
    ) 

    if (number2 == 'yes') {
        console.log('Correct!');
    } else if (number2 == 'no') {
        console.log (`'no' is wrong answer ;(. Correct answer was 'yes'.`); 
        console.log(`Let's try again, ${name}!`)
        process.exit(0);
    } else {
        console.log('Wrong!')
        process.exit(0);
    };


    console.log('Question: 73')
  const number3 =readlineSync.question(
    'Your Answer: '
    ) 

    if (number3 == 'no') {
        console.log('Correct!');
    } else if (number3 == 'yes') {
        console.log (`'yes' is wrong answer ;(. Correct answer was 'no'.`); 
        console.log(`Let's try again, ${name}!`)
        process.exit(0);
    } else {
        console.log('Wrong!')
        process.exit(0);
    };
};



export default even;

