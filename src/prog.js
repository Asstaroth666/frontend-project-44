import readlineSync, { question } from 'readline-sync';


const progression = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games! ');
  const name = readlineSync.question(
    'May I have your name? ',
  );
  console.log(`Hello, ${name}!`);

// Функция для генерации случайного числа в диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации прогрессии
function generateProgression() {
  const length = getRandomInt(5, 10); // случайная длина прогрессии от 5 до 10 чисел
  const missingIndex = getRandomInt(0, length - 2); // случайная позиция пропущенного элемента
  const step = getRandomInt(1, 10); // случайный шаг прогрессии

  let progression = [];
  let currentNumber = getRandomInt(1, 100); // случайное начальное число

  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      progression.push("..");
    } else {
      progression.push(currentNumber);
      currentNumber += step;
    }
  }

  return {
    progression: progression.join(" "), // преобразуем массив в строку для вывода
    missingNumber: currentNumber - step // пропущенное число
  };
}

// Функция для проверки ответа
function checkAnswer(progression, answer) {
  return answer == progression.missingNumber;
}

// Пример использования
const progression = generateProgression();
console.log("What number is missing in the progression?");
console.log("Question:", progression.progression);

// Предположим, что пользователь вводит ответ 15
let ask =readlineSync.question("Your answer: ");
console.log(checkAnswer(progression, ask) ? "Correct!" : "Incorrect!");
console.log(`Correct answer was ${currentNumber}!`)


};






export default progression;