import Text from "../atoms/Text";
import { initialSettings, startQuiz } from "../../store/quizSlice";

import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import { arrOfQuestions } from "../../data";

const numOfQuestions = arrOfQuestions.length;

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleStartQuiz() {
    dispatch(startQuiz());
    navigate("/quiz");
  }

  // settaggi iniziali del gioco al mount(dispatch non cambia)
  useEffect(
    function () {
      dispatch(initialSettings());
    },
    [dispatch]
  );

  if (!numOfQuestions) return <Text as="h2">No questions 😥</Text>;

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="space-y-3 text-center">
        <Text as="h2">Welcome to the Quiz</Text>
        <Text as="h4">{numOfQuestions} questions to test your Mastery</Text>
      </div>

      <Button variant="primary" onClick={handleStartQuiz}>
        Start Quiz
      </Button>
    </div>
  );
};

export default MainPage;
