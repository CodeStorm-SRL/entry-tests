import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import { nextQuestion, submitAnswer } from "../store/quizSlice";

function useGameLogic() {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<number | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [submittedAnswer, setSubmittedAnswer] = useState<string>("");

  // Seleziono la risposta. Guard se la risposta è già stata data
  function handleSelected(id: number, currentAnswer: string): void {
    if (submittedAnswer) return;

    if (selected === id) {
      setSelected(null);
      setCurrentAnswer("");
      return;
    }

    setSelected(id);
    setCurrentAnswer(currentAnswer);
  }

  // Do la risposta
  function handleSubmitAnswer() {
    setSubmittedAnswer(currentAnswer);
    dispatch(submitAnswer(currentAnswer));
  }

  // Domanda successiva
  function handleNextQuestion() {
    dispatch(nextQuestion());
    setCurrentAnswer("");
    setSelected(null);
    setSubmittedAnswer("");
  }
  return {
    selected,
    submittedAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
    handleSelected,
  };
}

export default useGameLogic;
