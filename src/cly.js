import readlineSync from 'readline-sync';

const even = () => {
      console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".'),
  console.log('Question: 15')
  const number = readlineSync.question(
    'Your Answer: '
    ) 

    if (number == 'no') {
        console.log('Correct!');
    } else if (number == 'yes') {
        console.log (`'yes' is wrong answer ;(. Correct answer was 'no'.`); 
        console.log(`Let's try again, ${name}!`)
    } else {
        console.log('Wrong!')
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
    } else {
        console.log('Wrong!')
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
    } else {
        console.log('Wrong!')
    };
};

export default even;
