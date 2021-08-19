var readLineSync = require('readline-sync');
const chalk = require("chalk");


var currentScore=0;
const highScores = [
  {
    name: "Shivani",
    score: 5,
  },

  {
    name: "Shivam",
    score: 4,
  }
]

const Questions=[
  {
  question:'How many sisters does Joey have ?',
  answer:'7',
  
  },
  {
  question:'How many times has Ross been married ?',
  answer:'3',
  
  },
  {
  question:'Which character has a twin?  ',
  answer:'Phoebe',
  
 
  },
  {
    question:'Who was Monica’s first kiss ?',
    answer:'Ross',
    
    
  },
  {
    question:'Who is the manager of Central Perk ?',
    answer:'Gunther',
   
    
  }
]
function LetsPlay(ques)
{

  // console.log(ques)
  var UserAnswer=readLineSync.question(ques.question)
  if(UserAnswer.toLowerCase()===ques.answer.toLowerCase())
  {
    currentScore=currentScore+1
    console.log(chalk.green("Right!"))
  }
  else{
    console.log(chalk.red("Wrong!"))
  }  

  console.log("Current Score: "+currentScore)
  console.log("-----------------")
  

}
var username=readLineSync.question("what is your name ? ")

console.log(chalk.blue(`Welcome ${username} to this game `))
console.log("")
console.log(chalk.red.underline(`Let's see how much you know F.R.I.E.N.D.S`))
console.log("")
for(let i =0;i<Questions.length;i++)
{
  LetsPlay(Questions[i])
} 

console.log("Yay! you score "+currentScore)
console.log("Check out the high scores, and Send me a screenshot I'll update it")

for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name,":",highScores[i].score)
}
