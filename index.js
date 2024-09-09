var now = new Date();
var nextYear = now.getFullYear() + 1;
var newYear = new Date("January 1, ".concat(nextYear, " 00:00:00"));
function updateCountdown() {
    var now = new Date();
    var timeUntilNewYear = newYear.getTime() - now.getTime();
    var seconds = Math.floor((timeUntilNewYear / 1000) % 60);
    var minutes = Math.floor((timeUntilNewYear / 60000) % 60);
    var hours = Math.floor((timeUntilNewYear / 3600000) % 24);
    var days = Math.floor(timeUntilNewYear / 86400000);
    process.stdout.write("\r".concat(' '.repeat(50), "\r"));
    process.stdout.write("Time until New Year: ".concat(days, " d ").concat(hours, " h ").concat(minutes, " m ").concat(seconds, " s"));
    if (timeUntilNewYear <= 0) {
        clearInterval(timer);
        console.log("\nHappy new Year!🎉");
    }
}
var timer = setInterval(updateCountdown, 1000);
