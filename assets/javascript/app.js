var questionCounter = 0;
var ansTimeout = 2000;

var correct = 0;
var incorrect = 0;
var missed = 0;

var questions = [{

            question: 'The Average American does what 22 times a day?',
            answers: ['Drink Beer', 'Toilet Break', 'Watching TV', 'Opens Fridge'],
            correctAnswer: 3
        },
        {

            question: 'What is Johny Depp Afraid of?',
            answers: ['Zuchinni', 'Clown', 'Fart', 'Marriage'],
            correctAnswer: 1
        }

        function submitAnsw() {
            $("#submit").on("click", function(e) {
                e.preventDefault();
                userAns.length = 0;

                var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
                userAns.push(userSelection);
                console.log(userAns);
                nextQ();
            });
        };

        var timeLeft = 8;
        var increment;

        function runTimer() {
            increment = setInterval(decrement, 1000);
        };

        function decrement() {
            timeLeft--;
            $("#time-left").html("Time remaining: " + timeLeft + " seconds");
            if (timeLeft === 0) {
                stopTimer();
                userAns.length = 0;
                //Record user answer to question
                var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
                userAns.push(userSelection);
                console.log(userAns);
                nextQ();
            };
        };

        function resetTimer() {
            timeLeft = 8;
            $("#time-left").html("Time remaining: " + timeLeft + " seconds");
        };

        function displayTimer() {
            $("#time-left").html("Answer Review");
        };

        function stopTimer() {
            clearInterval(increment);
        };