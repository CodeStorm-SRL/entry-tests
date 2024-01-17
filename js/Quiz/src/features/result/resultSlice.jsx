import { createSlice } from "@reduxjs/toolkit";

// state iniziale per lo store
const initialState = {
  correct: 0,
  wrong: 0,
  questionsFailed: [],
  result: 0,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    // se la risposta è corretta correct aumenta di 1
    answerCorrect: (state) => {
      state.correct += 1;
    },
    // se la risposta è errata wrong aumenta di uno
    wrongAnswer: (state, action) => {
      state.wrong += 1;
      // aggiungere il testo della domanda sbagliata all'array nello store
      state.questionsFailed.push(action.payload);
    },
    // calcolo rispultato finale
    finalResult: (state) => {
      state.result = (state.correct / (state.wrong + state.correct)) * 100;
    },
    // riportare lo state allo stato inziale
    resetState: (state) => {
      state.correct = 0;
      state.wrong = 0;
      state.finalResult = 0;
      state.questionsFailed = [];
      state.result = 0;
    },
  },
});

export const {
  answerCorrect,
  wrongAnswer,
  finalResult,
  resetState,
  getTheWrongs,
} = resultSlice.actions;

export default resultSlice.reducer;
