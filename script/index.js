import { defaultLanguague, translates } from "./constnats.js";
import {valueSetter, tegCreator  } from "./helpers.js";
import { questions  } from "./db.js";

const speed = 50;
let i = 0;  
const typeWriter = () =>{
  const warningText = translates[defaultLanguague].warningText;
  const warningContainer = document.getElementById("warning");
  
  if( i < warningText.length){
    warningContainer.innerHTML += warningText[i];
    i++
    setTimeout(typeWriter, speed);
  }
  else{
    warningContainer.style.display = "none";
    document.getElementById("quiz_section").style.transform = "translate(0,50px)";
}
}
typeWriter();

//quiz code area------------------------------------

function  quizGenerator(quizList)  {
  let quizStep = 0;
  const question = quizList[quizStep];
return () => {
  valueSetter("#quiz_title", question.quizTitle);
  valueSetter("#helpers", question.quiz);

  question.options.forEach((quiz, index) => {
    const liTag = tegCreator("li", document.getElementById('quiz_option'), quiz, index);
    
  });
  document.getElementById("quiz_option").addEventListener("click", (event) =>{
    if(event.target.tagName === "LI"){
     if(event.target.dataset.option == question.currentOption){
      console.log(event.target)
      event.target.classList.add("correct_answer");
     }
     else{
      event.target.classList.add("error_answer");
      console.log(event.target)
     }
    }
  }) 
}

}
 const quizConfig = quizGenerator(questions);

quizConfig();






