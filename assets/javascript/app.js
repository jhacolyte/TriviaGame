var intervalId
var timer = 10;
var questionArray = [{

    question: 'The Average American does what 22 times a day??',
    answers: ['Drink Beer', 'Toilet Break', 'Watching TV', 'Opens Fridge'],
    correctAnswer: 'Opens Fridge',
}, {

    question: 'What is Johny Depp Afraid of?',
    answers: ['Zuchinni', 'Clown', 'Fart', 'Marriage'],
    correctAnswer: 'Clown',
}
}];

$("#startGame").on("click", function() {
    $("#startGame").replaceWith();
    startTimer();
    decrement();
    firstQuestion();
    //renderButtons();
})

function startTimer() {
    intervalId = setInterval(decrement, 1000);
}