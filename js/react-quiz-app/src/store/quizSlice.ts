import { createSlice } from "@reduxjs/toolkit";
import { QuestionType } from "../data";

type appState = "start" | "active" | "end";

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
  reducers: {},
});

export default quizSlice.reducer;
