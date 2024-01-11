import { FC, useEffect } from "react";
import { QuestionType } from "../../data";

import Text from "../atoms/Text";
import Answer from "../molecules/Answer";
import Button from "../atoms/Button";

import useGameLogic from "../../hooks/useGameLogic";
import useMainNav from "../../hooks/useMainNav";

type QuestionProps = {
  questionObj: QuestionType;
};

// Question riceverà una domanda in base all'index
// L'index è una proprietà del reducer che aumenta di 1 ogni volta che l'utente
// passa alla domanda successiva
const Question: FC<QuestionProps> = ({ questionObj }) => {
  // estraggo id, domanda e risposte
  const { id, question, answers } = questionObj;

  // Logica di Gioco
  const {
    selected, // risposta selezionata
    submittedAnswer, // risposta effettuata
    handleNextQuestion, // vado alla prossima domanda
    handleSubmitAnswer, // effettuo la risposta
    handleSelected, // seleziono la risposta
  } = useGameLogic();

  // Riporta alla main page se lo stato dell'applicazione non è "active"
  const { appState, navigate } = useMainNav();
  useEffect(
    function () {
      if (appState !== "active") navigate("/");
    },
    [appState, navigate]
  );

  // Il bottone per rispondere è disabilitato se non vi sono risposte selezionate
  const disableButton = !(!submittedAnswer && selected !== null);

  return (
    <div>
      <Text>{question}</Text>
      {answers.map((answer, i) => (
        <Answer
          key={i + id}
          id={i}
          selected={selected}
          submittedAnswer={submittedAnswer}
          onClick={handleSelected}
        >
          {answer}
        </Answer>
      ))}

      {!submittedAnswer ? (
        <Button onClick={handleSubmitAnswer} disabled={disableButton}>
          Sumbit answer
        </Button>
      ) : (
        <Button onClick={handleNextQuestion}>Next</Button>
      )}
    </div>
  );
};

export default Question;
