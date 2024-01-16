<script>
import { reactive } from "vue";
import store from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    // Seleziona un'opzione e gestisce la logica di correttezza
    selectOption(selectedOption) {
      // Imposta l'opzione selezionata nel modulo store
      this.store.filmQuestions[this.store.currentQuestionIndex].selected =
        selectedOption;

      // Verifica se l'opzione selezionata è corretta confrontandola con la risposta corretta
      const isCorrect =
        this.store.filmQuestions[this.store.currentQuestionIndex].selected ===
        this.store.filmQuestions[this.store.currentQuestionIndex].options[
          this.store.filmQuestions[this.store.currentQuestionIndex].answer
        ];

      console.log(`L'opzione selezionata è corretta: ${isCorrect}`);
    },

    
    isOptionCorrect(option) {
      return (
        option ===
        this.store.filmQuestions[this.store.currentQuestionIndex].options[
          this.store.filmQuestions[this.store.currentQuestionIndex].answer
        ]
      );
    },
  },
};
</script>

<template>
  <ul v-if="store.filmQuestions && store.filmQuestions.length > 0">
    <li
      v-for="(option, index) in store.filmQuestions[store.currentQuestionIndex]
        .options"
      :key="index"
    >
      <button
        @click="selectOption(option)"
        :class="{
          correct:
            isOptionCorrect(option) &&
            store.filmQuestions[store.currentQuestionIndex].selected,
          incorrect:
            !isOptionCorrect(option) &&
            store.filmQuestions[store.currentQuestionIndex].selected,
        }"
      >
        {{ option }}
      </button>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.correct {
  background-color: green;
  color: white;
}

.incorrect {
  background-color: red;
  color: white;
}
</style>
