import readlineSync from 'readline-sync';
  
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const even = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
for (let i = 0; i < 3; i += 1){
    let randomNumber = getRandomArbitrary(1 , 100);
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your Answer: ') 

    if (randomNumber % 2 === 0){
        if (answer === 'yes'){
            console.log('Correct!');
        }
        else if (answer === 'no'){
            console.log (`'no' is wrong answer ;(. Correct answer was 'yes'.`); 
            console.log(`Let's try again, ${name}!`)
            process.exit(0);
        }
    }
    else if (randomNumber % 2 !== 0) {
        if (answer === 'no'){
            console.log('Correct!');
        }
        else if (answer === 'yes'){
            console.log (`'yes' is wrong answer ;(. Correct answer was 'no'.`); 
            console.log(`Let's try again, ${name}!`)
            process.exit(0);
        }
    }
}
}

export default even;

