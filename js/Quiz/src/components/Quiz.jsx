import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  answerCorrect,
  wrongAnswer,
  finalResult,
} from "../features/result/resultSlice";

export default function Quiz({ questions }) {
  // state per tenere traccia a quale domanda siamo
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // state per la domanda selezionata dell'utente
  const [answerIdx, setAnswerIdx] = useState(null);

  // in caso di risposta corretta ad answer verrà assegnato true
  const [answer, setAnswer] = useState(null);

  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  // destrutturare l'array questions per ottenere la domanda, le opzioni e la risposta corretta in base a quale domanda siamo
  const { question, choices, correctAnswer } = questions[currentQuestion];

  //funzione per controllare quale scelta è stata selezionata e se è corretta
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onChange = (i) => {
    setSelected((prev) => (i === prev ? null : i));
  };

  // funzione per aggiornare lo state del risultato quando viene selezionata un'opzione
  const checkAnswer = (answer) => {
    if (answer) {
      dispatch(answerCorrect());
    } else {
      dispatch(wrongAnswer(question));
    }
  };

  // funzione per passare alla domanda successiva
  const nextQuestion = () => {
    if (currentQuestion < 6) {
      setCurrentQuestion((current) => (current += 1));
      setAnswerIdx(null);
      setSelected(null);
      checkAnswer(answer);
    } else {
      checkAnswer(answer);
      dispatch(finalResult());
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quiz Calcio</h1>
      <div className="questions-container">
        <span>
          {currentQuestion + 1}/{questions.length}
        </span>
        <h3 className="question-header">{question}</h3>
        <div>
          <form className="choices-form">
            {choices.map((choice, index) => {
              return (
                <label key={choice} className="choice">
                  <input
                    type="checkbox"
                    key={choice}
                    checked={index === selected}
                    onClick={() => onAnswerClick(choice, index)}
                    onChange={() => onChange(index)}
                  />
                  {choice}
                </label>
              );
            })}
          </form>
        </div>
        {currentQuestion === questions.length - 1 ? (
          <Link to="/result">
            <button
              className="prossima-btn"
              disabled={answerIdx === null}
              onClick={nextQuestion}
            >
              Risultato
            </button>
          </Link>
        ) : (
          <button
            className="prossima-btn"
            onClick={nextQuestion}
            disabled={selected === null}
          >
            Prossima
          </button>
        )}
      </div>
    </div>
  );
}
