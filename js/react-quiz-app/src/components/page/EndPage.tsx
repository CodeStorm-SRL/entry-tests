import Button from "../atoms/Button";
import Text from "../atoms/Text";

import useMainNav from "../../hooks/useMainNav";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { saveGame } from "../../store/userSlice";
import { initialSettings } from "../../store/quizSlice";

const EndPage = () => {
  const { score } = useAppSelector((state) => state.quiz);
  const { userRecord } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [gameSaved, setGameSaved] = useState(false);
  const { appState, navigate } = useMainNav();

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
  }

  return (
    <div className="animate-slide-up">
      <Text>END PAGE</Text>
      <Text>Your score is: {score}</Text>
      <Button onClick={restart}>Restart</Button>
      {gameSaved && <Text>Game saved!</Text>}
      {!gameSaved && score > userRecord && (
        <Button onClick={handleSaveGame}>Save game</Button>
      )}
    </div>
  );
};

export default EndPage;
