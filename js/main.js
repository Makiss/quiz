/*
	Создать “Онлайн тест”, 
	который состоит из вопросов с двумя вариантами ответов,
	один из которых верный с счетчиком верных ответов 
	и выводом количества верных ответов в конце теста
*/

// 1. Создать объект теста списком вопросов и счетчиком ответов
var quiz = {
	questions: [],
	rightAnswersCounter: 0
};
// 2. Создать список вопросов, который состоят из вариантов ответов 
//  и меткой на правильный вариант ответа.
var questions = [
	{
		questionText: 'Какое волшебное слово в этикете?',
		questionAnswers: ['Сизам откройся', 'Пожалуйста'],
		rightAnswer: 'Пожалуйста'
	},
	{
		questionText: 'Какой фрукт упал Ньютону на голову?',
		questionAnswers: ['Яблоко', 'Арбуз'],
		rightAnswer: 'Яблоко'
	},
	{
		questionText: 'Какой формы Земля?',
		questionAnswers: ['Шар', 'Пирамида'],
		rightAnswer: 'Шар'
	}
];

quiz.questions = questions;

// 3. Запустить тест для пользователя с выводом каждого вопроса 
//  с вариантами ответов и ввести свой ответ

var userAnswer;
var questionText;
var questionItem;
var questionsCounter = quiz.questions.length;

// для каждого вопроса в тесте
for(
	var i = 0; 
	i < questionsCounter;
	i++
) {
	// сохраняем вопрос
	questionItem = quiz.questions[i];
	// Создаем текст с вопросом
	questionText = 'Вопрос: ' + questionItem.questionText;
// для каждого ответа в вопросе
	for(
		var j = 0, answersCounter = questionItem.questionAnswers.length;
		j < answersCounter;
		j++
	) {
		// добавляем к тексту с вопросом текст варианта ответа с порядковым номером
		questionText += '\n' + (j + 1) + '. ' + questionItem.questionAnswers[j];
	}

	userAnswer = prompt(questionText);

// 4. При каждом введенном ответе вести счет правильных ответов.
	userAnswer === questionItem.rightAnswer && quiz.rightAnswersCounter++;
}

// 5. Вывести информацию о пройденном тесте.
alert('У Вас ' + quiz.rightAnswersCounter + ' верных ответов из ' + questionsCounter + ' вопросов.');
