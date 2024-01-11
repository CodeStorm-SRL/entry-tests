import Text from "../atoms/Text";
import { initialSettings, startQuiz } from "../../store/quizSlice";

import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

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

  return (
    <>
      <Text variant="primary">MAIN PAGE</Text>
      <Button onClick={handleStartQuiz}>Start Quiz</Button>
    </>
  );
};

export default MainPage;
