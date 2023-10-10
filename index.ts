import inquirer from "inquirer"
import chalk from "chalk"
const systemguess=Math.floor(Math.random() * 10);
type anstype ={
    userguess:number,
}
const answers : anstype= await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"Enter Number"

    }
]);
const {userguess} = answers;
console.log(userguess,chalk.bgRedBright("User Gues Numbrs"),systemguess,chalk.bgCyan("System Gyess number"))

if(userguess === systemguess)
{console.log(chalk.bgCyan("# Congratulations \n You Won The Match!"));}
else{
    console.log(chalk.bgCyan("# Please Try Again!"));
}

