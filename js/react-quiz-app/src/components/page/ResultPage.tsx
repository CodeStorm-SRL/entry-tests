import { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Result from "../molecules/Result";
import ResultList from "../organisms/ResultList";
import useMainNav from "../../hooks/useMainNav";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const ResultPage: FC = () => {
  const { arrOfQuestions, userAnswers } = useAppSelector((state) => state.quiz);
  const { appState, navigate } = useMainNav();

  useEffect(
    function () {
      if (appState !== "end") navigate("/");
    },
    [appState, navigate]
  );

  const questions = arrOfQuestions.map(
    ({ question, correctAnswer, id }, i) => ({
      id,
      question,
      correctAnswer,
      userAnser: userAnswers[i],
      numOfQuestion: i + 1,
    })
  );

  return (
    <div className="space-y-7 pb-5">
      <Text onClick={() => navigate(-1)}>&larr; Back</Text>
      <ResultList>
        {questions.map(
          ({ id, question, correctAnswer, userAnser, numOfQuestion }) => (
            <Result
              key={id + question}
              numQuestion={numOfQuestion}
              correctAnswer={correctAnswer}
              userAnswer={userAnser}
            >
              {question}
            </Result>
          )
        )}
      </ResultList>
    </div>
  );
};
export default ResultPage;
