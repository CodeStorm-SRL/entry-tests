import "./Quiz.css";
import { quizAnswersQuestions } from "../dataQuiz";

import { useState } from "react";
//import useRef per tenere traccia delle risposte date
import { useRef } from "react";



export default function Quiz() {

  //utilizzo useState per aggiornare dinamicamente l'indice per cambiare le domande, in maniera randomica, al click del button next
  const [actualIndex, setActualIndex] = useState(0);
  //aggiugno un altro useState per impedire all'utente di selezionare entrambe le risposte
  const [blockState, setBlock] = useState(false);

  //imposto uno useStaet per le domande corrette
  const [correctAnswers, setCorrectAnswers] = useState(0)



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


    //creo randomicamente un numero da 0 a 29, la lunghezza
    const newIndex = Math.floor(Math.random() * quizAnswersQuestions.length);
    console.log(previuosQuestion);
    //controllo se l'indice randomico è contenuto in previous. Se è contenuto faccio un return per non far succedere nulla
    if (previuosQuestion.current.includes(newIndex) === true) {
      return;
    } else {
      // se non è contenuto inserisco nell'array previousQuestion il nuovo indice tramite spread operator
      previuosQuestion.current = [...previuosQuestion.current, newIndex];
      //imposto quindi newIndex come state per far cambiare domanda
      setActualIndex(newIndex);
    }
    //ripulisco i true/ flase dai colori applicati
    cleanColorAnswers()
    console.log('Le risposte corrette sono ', correctAnswers);

  }

  //scrivo una funzione che controlli la risposta se è corretta o meno e dia un feedback visivo
  function check(e, answer) {
    //creo una condizione più grande, se sono arrivato in fondo con le domande dovrò avere un risultato


    //per evitare che l'utente selezioni più di una risposta, controllo prima il mio blockState che sia false, ossia come lo abbiamo impostato di default
    if (blockState === false || previuosQuestion.lenght != 1) {
      if (quizAnswersQuestions[actualIndex].correctAnswer === answer) {


        e.target.classList.add("correct");
        //una volta aggiunta la classe cambio il blockState in true, così l'utente non potrà scegliere un'altra ozpione
        setBlock(true);
        //se la risposta è corretta aumento di 1 lo useState delle risposte corrette
        setCorrectAnswers(correctAnswers => correctAnswers + 1)
      } else {

        e.target.classList.add("wrong");
        setBlock(true);

      }
    }

  }
  return (
    <>
      {/* to fix: non funziona la comparazione tra lunghezza array e 30. provato amche il -1  */}
      {previuosQuestion.lenght === 30 ? <><h1>Finito! Hai azzeccato {correctAnswers} domande</h1></> : <> <h1 className="m-auto mt-4 text-center text-black-500  text-4xl">
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
        </button> </>}

    </>
  );
}
