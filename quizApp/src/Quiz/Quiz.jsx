//importo il css
import "./Quiz.css";
//importo l'array di oggeti contenente domande, risposte, risposte corrette e immagini
import { quizAnswersQuestions } from "../dataQuiz";
//importo useState per lo stato
import { useState } from "react";
//import useRef per tenere traccia delle risposte date
import { useRef } from "react";

//import le immagini per i risultati
import passed from "../assets/passed.jpeg"
import failed from "../assets/failed.jpg"

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
        <>          <main className="flex m-auto justify-center flex-col p-10 ">
          <div className="max-w-sm rounded bg-amber-100 overflow-hidden shadow-lg m-auto">
            <img className="w-full" src={passed} alt="failed" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Test superato.</div>
              <h1>
                Quiz completato. Bravissimo! Hai superato il quiz con {30 - correctAnswers} errori.

              </h1>

              <button onClick={pageReload} className=" mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Ricomincia Quiz
              </button>

            </div>

          </div>

        </main>

        </>
      ) : completeState === 30 && correctAnswers <= 26 ? (
        <>
          <main className="flex m-auto justify-center flex-col p-10 ">
            <div className="max-w-sm rounded bg-amber-100 overflow-hidden shadow-lg m-auto">
              <img className="w-full" src={failed} alt="failed" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Test non superato</div>
                <h1>
                  Quiz completato. Purtroppo non hai superato il test.... Hai fatto{" "}
                  {30 - correctAnswers} errori
                </h1>

                <button onClick={pageReload} className=" mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Ricomincia Quiz
                </button>

              </div>

            </div>

          </main>
        </>
      ) : (
        <>
          <h1 className="m-auto p-6 text-center text-black-500  text-4xl">
            Quiz Patente
          </h1>
          <section className="p-3 w-[90%] sm:w-1/2 lg:w-1/3 xl:w-1/3 m-auto bg-amber-100 h-[85vh] rounded-lg">
            <main className=" flex flex-col m-auto">
              {quizAnswersQuestions[actualIndex].image != "" ? (
                <img
                  className="w-32 h-32 mt-10 m-auto "
                  src={quizAnswersQuestions[actualIndex].image}
                  alt="noImage"
                />
              ) : (
                <div className="w-2 h-2 mt-2 m-auto "></div>
              )}
              <div className=" w-4/5 m-auto mt-5 mb-5 p-3 pb-6 bg-white rounded-md h-1/2">
                <h2 className=" mt-5 text-center ">
                  {quizAnswersQuestions[actualIndex].question}
                </h2>
              </div>
              <ul className="m-auto flex justify-around ">
                <li>
                  <button
                    onClick={(e) => {
                      check(e, "T");
                    }}
                    id="true"
                    className="bg-blue-500  text-white font-bold py-2 px-4 rounded  mr-7"
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
              <button
                onClick={changeIndex}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-16 ml-60 w-1/10 self-center flex justify-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>{" "}
            </main>
          </section>
        </>
      )}
    </>
  );
}
