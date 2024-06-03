import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
//define your quiz question
const question = [
    {
        type:"list",
        name:"question1",
        message:"what is the capital of france?",
        Choice:['paris','london','berlin','rome'],
    },{
    type:"input",
    name:"question2",
    message:"who wrote romeo juliet"
    }
]
//main function to run the quiz
function runQuiz(){
    //ask the question
    inquirer.prompt(question).then((answer)=>{
        //check answer
        let score = 0;
        if(answer.question1.tolowercase() === 'paris'){
            score++;
        }
        if(answer.question2.tolowercase() === 'shakespeare'){
            score++;
        }
        //display the result
        console.log(`you scored ${score}/${question.length}`)
    })
}
//start the quix
runQuiz()