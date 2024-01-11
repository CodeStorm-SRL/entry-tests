import { useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Question from "../organisms/Question";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";

const QuizPage = () => {
  const { index, arrOfQuestions, appState, score } = useAppSelector(
    (state) => state.quiz
  );
  // Numero di domande
  const numOfQuestions = arrOfQuestions.length;

  // Se non sono presenti domande torna alla main page
  // Se lo stato del gioco è "end" va alla end page
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!numOfQuestions) navigate("/");
      if (appState === "end") navigate("/end");
    },
    [numOfQuestions, appState, navigate]
  );

  if (!numOfQuestions) return null;
  return (
    <div className="w-full">
      <Question questionObj={arrOfQuestions[index]} />
      <Text>Your score: {score}</Text>
    </div>
  );
};
export default QuizPage;
