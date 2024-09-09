const now: Date = new Date();
const nextYear: number = now.getFullYear() + 1;
const newYear: Date = new Date(`January 1, ${nextYear} 00:00:00`);

function updateCountdown(): void {
    const now: Date = new Date();
    const timeUntilNewYear: number = newYear.getTime() - now.getTime();

    const seconds: number = Math.floor((timeUntilNewYear / 1000) % 60);
    const minutes: number = Math.floor((timeUntilNewYear / 60000) % 60);
    const hours: number = Math.floor((timeUntilNewYear / 3600000) % 24);
    const days: number = Math.floor(timeUntilNewYear / 86400000);

    process.stdout.write(`\r${' '.repeat(50)}\r`);
    process.stdout.write(`Time until New Year: ${days} d ${hours} h ${minutes} m ${seconds} s`);

    if (timeUntilNewYear <= 0) {
        clearInterval(timer);
        console.log("\nHappy new Year!🎉");
    }
}

const timer: NodeJS.Timeout = setInterval(updateCountdown, 1000);