#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
const answer=await inquirer.prompt([{
    name:"firstNumber",
    type:"number",
    message:"Please input your first number"
},
{
    name:"secondNumber",
    type:"number",
    message:"Please input your second number"
},
{
    name:"operators",
    type:"list",
    message:"Please select one operator to perform further function",
    choices:["Addition" , "Subtraction" ,"Multiplication","Division","Modulus","Exponentiation"
]},
])
if(answer.operators==="Addition"){
    console.log(chalk.bgBlue(answer.firstNumber+answer.secondNumber)+"is your answer."
)}
else if(answer.operators==="Subtraction"){
    console.log(chalk.bgYellowBright(answer.firstNumber-answer.secondNumber)+"is your answer.")
}
else if (answer.operators==="Multiplication"){
    console.log(chalk.gray(answer.firstNumber*answer.secondNumber)+"is your answer."
)}
else if (answer.operators==="Division"){
    console.log(chalk.bgGrey(answer.firstNumber/answer.secondNumber)+"is your answer."
)}
else if (answer.operators==="Modulus"){
    console.log(chalk.yellowBright(answer.firstNumber%answer.secondNumber)+"is your answer.")
}
else if (answer.operators==="Exponentiation"){
    console.log(chalk.green(answer.firstNumber**answer.secondNumber)+"is your answer."
)}
else{
    console.log(chalk.underline.redBright("PLEASE ENTER A VALID INPUT"))
}
console.log("Function performed successsfully...");