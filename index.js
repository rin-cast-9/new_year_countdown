const now = new Date();
const nextYear = now.getFullYear() + 1;
const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

function updateCountdown() {
    const now = new Date();
    const timeUntilNewYear = newYear - now;

    const seconds = Math.floor((timeUntilNewYear / 1000) % 60);
    const minutes = Math.floor((timeUntilNewYear / 60000) % 60);
    const hours = Math.floor((timeUntilNewYear / 3600000) % 24);
    const days = Math.floor(timeUntilNewYear / 86400000);

    process.stdout.write(`\rTime until New Year: ${days} d ${hours} h ${minutes} m ${seconds} s`);

    if (timeUntilNewYear <= 0) {
        clearInterval(timer);
        console.log("\nHappy New Year!🎉");
    }
}

const timer = setInterval(updateCountdown, 1000);