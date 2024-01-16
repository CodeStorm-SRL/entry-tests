import styles from "./Quiz.module.css"
import { quizAnswersQuestions } from "../dataQuiz";
const prova=quizAnswersQuestions[2].answers[0]
console.log(quizAnswersQuestions[0].image);
export default function Quiz() {
  return (
    <>
      <h1 className="m-auto mt-4 text-center text-blue-500 text-4xl">Quiz Patente</h1>
      <main className=" flex flex-col m-auto">
        <h2 className=" mt-5 text-center">{quizAnswersQuestions[1].question}</h2>

<img className="w-50 h-50" src={quizAnswersQuestions[0].image} alt="" /> 
        <ul>
          <li>{quizAnswersQuestions[1].answers[0]}</li>
          <li>{quizAnswersQuestions[1].answers[1]}</li>
        </ul>
      </main>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">next
   </button>
   
    </>
  );
}
