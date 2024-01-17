import "./App.css";
import { Routes, Route } from "react-router";
import { questionsQuiz } from "./questionsQuiz";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Quiz questions={questionsQuiz.questions} />}
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
