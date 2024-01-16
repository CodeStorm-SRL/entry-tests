import "./Quiz.css";
import { quizAnswersQuestions } from "../dataQuiz";
import { useState } from "react";

//costruisco la logica della selezione random delle domande con il controllo che non sia già stata scelta
//creo il numero random
// const actualIndex = Math.floor(Math.random() * quizAnswersQuestions.length)
// console.log(randomNumber);

export default function Quiz() {
  //creo innanzitutto un arrayvuoto che verrà popolato dalle risposte
  const userAnswers = [];
  //creo un metodo che crei un numero random e lo sostituisca alle src
  // console.log(actualIndex);
  const [actualIndex, setActualIndex] = useState(0);


  function changeIndex() {
    const newIndex = Math.floor(Math.random() * quizAnswersQuestions.length)
    setActualIndex(newIndex)
    userAnswers.push(newIndex)
    console.log(userAnswers);
  }

  //scrivo una funzione che controllli la risposta se è corretta o meno e dia un feedback visivo
  function check(e, answer) {
    if (quizAnswersQuestions[actualIndex].correctAnswer === answer) {
      e.target.classList.remove("correct")
      e.target.classList.add("correct")
    } else {
      e.target.classList.remove("wrong")
      e.target.classList.add("wrong")
    }
  }
  return (
    <>
      <h1 className="m-auto mt-4 text-center text-black-500  text-4xl">
        Quiz Patente
      </h1>
      <main className=" flex flex-col m-auto">
        {quizAnswersQuestions[actualIndex].image != "" ? (
          <img
            className="w-40 h-40 mt-10 m-auto "
            src={quizAnswersQuestions[actualIndex].image}
            alt="noImage"
          />
        ) : (
          <div className="w-40 h-40 mt-10 m-auto"></div>
        )}
        <h2 className=" mt-5 text-center">
          {quizAnswersQuestions[actualIndex].question}
        </h2>
        <ul className="m-auto flex justify-evenly">
          <li>
            <button
              className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                check(e, "T");
              }}
            >
              {quizAnswersQuestions[actualIndex].answers[0]}
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                check(e, "F");
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {quizAnswersQuestions[actualIndex].answers[1]}
            </button>
          </li>
        </ul>
      </main>
      <button
        onClick={changeIndex}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        next
      </button>
    </>
  );
}
