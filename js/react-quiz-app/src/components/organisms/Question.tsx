import { FC, useEffect } from "react";
import { QuestionType } from "../../data";

import Text from "../atoms/Text";
import Answer from "../molecules/Answer";
import Button from "../atoms/Button";

import useGameLogic from "../../hooks/useGameLogic";
import useMainNav from "../../hooks/useMainNav";
import { useAppSelector } from "../../hooks/reduxHooks";

type QuestionProps = {
  questionObj: QuestionType;
};

// Question riceverà una domanda in base all'index
// L'index è una proprietà del reducer che aumenta di 1 ogni volta che l'utente
// passa alla domanda successiva
const Question: FC<QuestionProps> = ({ questionObj }) => {
  const { score } = useAppSelector((state) => state.quiz);
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
    <div className="max-w-[600px] flex flex-col items-center text-center pt-5">
      <Text as="h4" isBold>
        {question}
      </Text>
      <div className="text-start w-full py-8 px-3 space-y-3">
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

        <div className="flex justify-between items-center pt-3">
          <Text>Your score: {score}</Text>
          {!submittedAnswer ? (
            <Button onClick={handleSubmitAnswer} disabled={disableButton}>
              Sumbit answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>Next</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
