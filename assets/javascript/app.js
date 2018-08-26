$(document).ready(function () {



var check = function () {

document.getElementById("afterSubmit").style.visibility = "visible";
document.getElementById("quiz").style.visibility = "hidden";
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct!"

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0

if (question1 == "Green") {
    correct++
}
if (question2 == "Red") {
    correct++
}
if (question3 == "Orange") {
    correct++
} 
}

$('#button').click(function() {
    check()
}

)


})
