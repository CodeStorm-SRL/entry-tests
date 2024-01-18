//importo il css
import "./Quiz.css";
//importo l'array di oggeti contenente domande, risposte, risposte corrette e immagini
import { quizAnswersQuestions } from "../dataQuiz";
//importo useState per lo stato
import { useState } from "react";
//import useRef per tenere traccia delle risposte date
import { useRef } from "react";

export default function Quiz() {
  //utilizzo useState per aggiornare dinamicamente l'indice per cambiare le domande
  const [actualIndex, setActualIndex] = useState(0);
  //aggiugno un altro useState per impedire all'utente di selezionare entrambe le risposte
  const [blockState, setBlock] = useState(false);
  //imposto un terzo useState per le domande corrette
  const [correctAnswers, setCorrectAnswers] = useState(0);
  //creo un ultimo stato dimodoché la app capisca quando è finito il quiz.
  const [completeState, setCompleteState] = useState(0);
  //creo un useRef array inizale con il solo valore di di 0, perché è l'indice dal quale partiamo sempre, per poi scegliere randomicamente
  const previuosQuestion = useRef([0]);

  //creo la funzione che rimuova i colori nel true / false
  function cleanColorAnswers() {
    document.getElementById("true").classList.remove("correct");
    document.getElementById("true").classList.remove("wrong");
    document.getElementById("false").classList.remove("correct");
    document.getElementById("false").classList.remove("wrong");
  }

  //creo la funzione che cambi l'index per cambiare domanda in maniera randomica, ma non ripetere la stessa.
  function changeIndex() {
    //reimposto il blockState al suo stato di default, il false. Questo è necessario per il funzionamento della funzione check()
    setBlock(false);
    //inizializzo un index vuoto (housato una stringa vuota per evitare di usare il numero 0)
    let indexRandom = "";
    //creo la funzione che mi restituisce un numero random tra 0 e 30
    function randomIndex() {
      let newIndex = Math.floor(Math.random() * quizAnswersQuestions.length);
      //faccio equivalere la variabile vuota inizializzata sopra al numero creato
      indexRandom = newIndex;
    }
    //devo quindi ripetere la funzione randomIndex tante volte fino a che il numero che viene creato non è contenuto in previousQurstion, lo useref che mi tiene traccia delle domanda già fatte
    //con do for riesco a far partire la funzione fintatnto che il numero è ontenuto nell'array dello useRef
    do {
      randomIndex();
    } while (previuosQuestion.current.includes(indexRandom) === true);

    // se non è contenuto inserisco nell'array previousQuestion il nuovo indice tramite spread operator
    previuosQuestion.current = [...previuosQuestion.current, indexRandom];
    //imposto quindi newIndex come state per far cambiare domanda
    setActualIndex(indexRandom);
    //ripulisco i true/ flase dai colori applicati
    cleanColorAnswers();
    //setto una condizione per quale se l'array di useRef è completo mi imposta lo stato di complete 30, che farà terminare il quiz
    //lo state complete viene utilizzato solo a questo scopo. avrei potuto usare anche un booleano.
    if (previuosQuestion.current.length === 30) {
      setCompleteState(30);
    }
  }

  //scrivo una funzione che controlli la risposta se è corretta o meno e dia un feedback visivo
  function check(e, answer) {
    //per evitare che l'utente selezioni più di una risposta, controllo prima il mio blockState che sia false, ossia come è impostato di default
    if (blockState === false) {
      //se passa la condizione ne imposto un'altra: se la risposta cliccata equivale alla domanda corretta:
      if (quizAnswersQuestions[actualIndex].correctAnswer === answer) {
        //aggiungiamo la classe correct al button, che si colorerà di verde
        e.target.classList.add("correct");
        //se la risposta è corretta aumento di 1 lo useState delle risposte corrette
        setCorrectAnswers((correctAnswers) => correctAnswers + 1);
        //una volta aggiunta la classe e aggiunta la risposta corretta acambio il blockState in true, così l'utente non potrà scegliere un'altra opzione
        setBlock(true);
      } else {
        //aggiungiamo la classe wrong al button, che si colorerà di rosso

        e.target.classList.add("wrong");
        setBlock(true);
      }
    }
  }
  //creo una funzione che refreshi la pagina, per poter ricominciare il quiz
  function pageReload() {
    window.location.reload(true);
  }
  return (
    <>
      {/* imposto un ternary: se completeState equivale a 30 allora il quiz è terminato ed avremo i risultati. Il ternary ha 3 condizioni: se è finito e l'utente ha fatto più di 3 errori verrà detto lui che è bocciato e potrà ricominciare, se ha fatto meno di 4 errori sarà stato promosso e potrà ricominciare, la terza condizione riconosce che il quiz non è finito e va avanti*/}
      {completeState === 30 && correctAnswers > 26 ? (
        <>
          <h1>
            Quiz completato. Sei passato! Hai fatto {30 - correctAnswers} errori
          </h1>
          <button onClick={pageReload}>Ricomincia Quiz</button>
        </>
      ) : completeState === 30 && correctAnswers <= 26 ? (
        <>
          <h1>
            Quiz completato. Purtroppo sei bocciato.... Hai fatto{" "}
            {30 - correctAnswers} errori
          </h1>
          <button onClick={pageReload}>Ricomincia Quiz</button>
        </>
      ) : (
        <>
          {" "}
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
          </button>{" "}
        </>
      )}
    </>
  );
}
