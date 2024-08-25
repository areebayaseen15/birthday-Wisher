#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { differenceInSeconds } from "date-fns";
async function birthdayWish() {
    const name = await inquirer.prompt({
        name: "HBDPerson",
        type: "input",
        message: chalk.bgCyanBright("Enter the name whom you want to wish!"),
    });
    console.log(chalk.yellowBright(`               *****************Today is someone's birthday. Let's Count******************`));
    function startTimer(value) {
        const initialTime = new Date().setSeconds(new Date().getSeconds() + value);
        const intervalTime = new Date(initialTime);
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const timeDiff = differenceInSeconds(intervalTime, currentTime);
            if (timeDiff <= 0) {
                clearInterval(intervalId);
                console.log(chalk.green("Time's up!"));
                displayBirthdayMessage();
                return;
            }
            const min = Math.floor((timeDiff % 3600) / 60);
            const sec = Math.floor(timeDiff % 60);
            console.log(chalk.yellow(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`));
        }, 1000);
    }
    function displayBirthdayMessage() {
        console.log(chalk.red(`
                                                | | | |                     
                                              (.........)                   
                                              (>>>>>>>>>)
                                              (_________)
    `));
        console.log(chalk.magentaBright(figlet.textSync(`Happy Birthday ${name.HBDPerson}`)));
        const animation = chalkAnimation.rainbow('\n        Wish You a very Happy Birthday. May this year bring you joy, happiness, and fulfillment');
        setTimeout(() => {
            animation.stop(); // Stop the animation after a certain time
        }, 5000);
    }
    startTimer(10);
}
birthdayWish();
