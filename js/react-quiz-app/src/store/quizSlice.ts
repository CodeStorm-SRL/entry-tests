import { createSlice } from "@reduxjs/toolkit";
import { QuestionType, arrOfQuestions } from "../data";

// stato dell'app:
// start indica che il gioco è pronto a partire
// active che il gioco è in corso
// end che il gioco è finito
type appState = "start" | "active" | "end";

// index indica la domanda corrente
interface QuizState {
  appState: appState;
  arrOfQuestions: QuestionType[];
  score: number;
  index: number;
}

const initialState: QuizState = {
  appState: "start",
  arrOfQuestions: [],
  score: 0,
  index: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      // il gioco parte, le domande sono settate
      state.arrOfQuestions = arrOfQuestions;
      state.appState = "active";
    },
    endQuiz: (state) => {
      // il gioco finisce
      state.appState = "end";
    },
    submitAnswer: (state, { payload }) => {
      // risposta effettuata, se corretta
      // lo score aumenta
      if (state.arrOfQuestions[state.index].correctAnswer === payload) {
        state.score += 10;
      }
    },
    nextQuestion: (state) => {
      // passo alla prossima domanda
      // se è l'ultima il gioco finisce
      if (state.index === state.arrOfQuestions.length - 1) {
        quizSlice.caseReducers.endQuiz(state);
        return;
      }
      state.index++;
    },
    // il gioco è resettato
    initialSettings: () => initialState,
  },
});

export const {
  startQuiz,
  endQuiz,
  submitAnswer,
  nextQuestion,
  initialSettings,
} = quizSlice.actions;

export default quizSlice.reducer;
