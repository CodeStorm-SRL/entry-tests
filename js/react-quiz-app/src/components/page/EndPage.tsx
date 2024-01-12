import Button from "../atoms/Button";
import Text from "../atoms/Text";

import useMainNav from "../../hooks/useMainNav";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { saveGame } from "../../store/userSlice";
import { initialSettings } from "../../store/quizSlice";
import toast from "react-hot-toast";
import { POINT_PER_QUESTION } from "../../data";

const EndPage = () => {
  const { score, arrOfQuestions } = useAppSelector((state) => state.quiz);
  const { userRecord } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [gameSaved, setGameSaved] = useState(false);
  const { appState, navigate } = useMainNav();

  const maxScore = arrOfQuestions.length * POINT_PER_QUESTION;

  useEffect(
    function () {
      if (appState !== "end") navigate("/");
    },
    [appState, navigate]
  );

  function restart() {
    dispatch(initialSettings());
  }

  function handleSaveGame() {
    dispatch(saveGame(score));
    setGameSaved(true);
    toast.success("Game Saved");
  }

  return (
    <div className="animate-slide-up space-y-8">
      <div className="btn py-5 bg-secondary text-center">
        <Text as="h4" className="text-[1.4rem]">
          Your score is: {score}/{maxScore}
        </Text>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-2">
        <Button onClick={restart}>Restart</Button>
        {!gameSaved && score > userRecord && (
          <Button onClick={handleSaveGame}>Save game</Button>
        )}
        <Button onClick={() => navigate("/result")}>Result</Button>
      </div>
    </div>
  );
};

export default EndPage;
