import "./Quiz.css";
import { quizAnswersQuestions } from "../dataQuiz";

import { useState } from "react";
//import useRef per tenere traccia delle risposte date
import { useRef } from "react";

//costruisco la logica della selezione random delle domande con il controllo che non sia già stata scelta
//creo il numero random
// const actualIndex = Math.floor(Math.random() * quizAnswersQuestions.length)
// console.log(randomNumber);

export default function Quiz() {
  //creo un metodo che crei un numero random e lo sostituisca alle src
  // console.log(actualIndex);
  //utilizzo useState per aggiornare dinamicamente l'indice per cambiare le domande, in maniera randomica, al click del button next
  const [actualIndex, setActualIndex] = useState(0);
  //aggiugno un altro useState per impedire all'utente di selezionare entrambe le risposte
  const [blockState, setBlock] = useState(false);

  //creo un useRef array inizale con il solo valore i di 0, perché è l'indice dal quale partiamo sempre, per poi scegliere randomicamente
  const previuosQuestion = useRef([0]);
  //creo innanzitutto un arrayvuoto che verrà popolato dalle risposte
  let userAnswersStart = [0];
  let userAnswersDef = [];


  //creo la funzione che rimuova i colori nel true / false
  function cleanColorAnswers() {

    document.getElementById('true').classList.remove('correct')
    document.getElementById('true').classList.remove('wrong')
    document.getElementById('false').classList.remove('correct')
    document.getElementById('false').classList.remove('wrong')
  }

  //creo la funzione che cambi l'index per cambiare domanda in maniera randomica, ma non ripetere la stessa

  function changeIndex() {
    //creo randomicamente un numero da 1 a 29, la lunghezza
    const newIndex = Math.floor(Math.random() * quizAnswersQuestions.length);
    console.log(previuosQuestion);
    //controllo se l'indice randomico è contenuto in previous
    if (previuosQuestion.current.includes(newIndex) === true) {
      return;
    } else {
      previuosQuestion.current = [...previuosQuestion.current, newIndex];

      setActualIndex(newIndex);
    }
    //ripulisco i true/ flase dai colori applicati
    cleanColorAnswers()
  }

  //scrivo una funzione che controlli la risposta se è corretta o meno e dia un feedback visivo
  function check(e, answer) {
    //per evitare che l'utente selezioni più di una risposta, controllo prima il mio blockState che sia false, ossia come lo abbiamo impostato di default
    if (blockState === false || previuosQuestion.lenght != 1) {
      if (quizAnswersQuestions[actualIndex].correctAnswer === answer) {


        e.target.classList.add("correct");
        //una volta aggiunta la classe cambio il blockState in true, così l'utente non potrà scegliere un'altra ozpione
        setBlock(true);
      } else {

        e.target.classList.add("wrong");
        setBlock(true);
      }
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
              onClick={(e) => {

                check(e, "T");
              }}
              id="true"
              className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
            >
              {quizAnswersQuestions[actualIndex].answers[0]}
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {

                check(e, "F");
              }}
              id="false"
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
