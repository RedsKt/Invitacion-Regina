// JavaScript source code
// Cronómetro de cuenta regresiva
var eventDate = new Date("2024-11-30T00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("dCount").innerHTML = days;
    document.getElementById("hCount").innerHTML = hours;
    document.getElementById("mCount").innerHTML = minutes;
    document.getElementById("sCount").innerHTML = seconds;


    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("dCount").innerHTML = "00";
        document.getElementById("hCount").innerHTML = "00";
        document.getElementById("mCount").innerHTML = "00";
        document.getElementById("sCount").innerHTML = "00";
    }
}, 1000);
