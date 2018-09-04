$(document).ready(function () {



var quiz = document.getElementById("quiz");
var results = document.getElementById("afterSubmit");
var submitButton = document.getElementById("button");
var correct = 0;
var incorrect = 0;
var timeLeft = 30;

var timeoutFunc = setInterval(function(){ 
    timeLeft -= 1;
    $("#docTimer").text(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(timeoutFunc)
        check()
    }
}, 1000 )

function check () {
    if ($("#correct0:checked").val()) {
        correct += 1;
    }     if ($("#correct1:checked").val()) {
        correct += 1;
    }     if ($("#correct2:checked").val()) {
        correct += 1;
    }    if ($("#correct3:checked").val()) {
        correct += 1;
    }    if ($("#correct4:checked").val()) {
        correct += 1;
    }    if ($("#correct5:checked").val()) {
        correct += 1;
    }    if ($("#correct6:checked").val()) {
        correct += 1;
    }    if ($("#correct7:checked").val()) {
        correct += 1;
    }
    document.getElementById("afterSubmit").style.visibility = "visible";
    $("#quiz").remove();
    

    if (correct <= 3) {
        $("#numberCorrect").text("You got " + correct + " correct. I am unimpressed, but also jealous of how much time you haven't spent at my desk.")
    } else if (correct >= 4 && correct <= 7) {
        $("#numberCorrect").text("You got " + correct + " correct. You did all right.")
    } else if (correct > 7)
    $("#numberCorrect").text("You got " + correct + " correct! How did you get so many right, are you me? Why are you spending so much time at my desk! Anywho, congrats.")

}

$("#button").click(function() {
    check()
});



});

