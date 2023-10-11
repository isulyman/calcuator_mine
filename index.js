#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Value",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Value",
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "division", "multiplication", "substraction"],
    },
]);
if (answers.operation === "addition") {
    console.log(`The Answer is ${answers.num1 + answers.num2}`);
}
else if (answers.operation === "division") {
    console.log(`The Answer is ${answers.num1 / answers.num2}`);
}
else if (answers.operation === "multiplication") {
    console.log(`The Answer is ${answers.num1 * answers.num2}`);
}
else if (answers.operation === "substraction") {
    console.log(`The Answer is ${answers.num1 - answers.num2}`);
}
