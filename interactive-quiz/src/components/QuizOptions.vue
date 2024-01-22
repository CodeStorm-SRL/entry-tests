<script>
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
      const currentQuestion =
        this.store.filmQuestions[this.store.currentQuestionIndex];
      currentQuestion.selected = selectedOption;

      // Verifica se l'opzione selezionata è corretta confrontandola con la risposta corretta
      const isCorrect =
        selectedOption === currentQuestion.options[currentQuestion.answer];

      // Incrementa lo score se corretto
      if (isCorrect) {
        this.store.score++;
      }
      console.log(`Selected option is correct: ${isCorrect}`);
    },

    // Verifica se l'opzione selezionata è corretta
    isOptionCorrect(option) {
      return (
        option ===
        this.store.filmQuestions[this.store.currentQuestionIndex].options[
          this.store.filmQuestions[this.store.currentQuestionIndex].answer
        ]
      );
    },
  },

  computed: {
    // controllo arrivo corretto delle opzioni
    currentQuestionOptions() {
      const currentQuestionIndex = store.currentQuestionIndex;
      const filmQuestions = store.filmQuestions;

      if (
        currentQuestionIndex >= 0 &&
        currentQuestionIndex < filmQuestions.length &&
        filmQuestions[currentQuestionIndex].options
      ) {
        return filmQuestions[currentQuestionIndex].options; // Restituisce le opzioni della domanda corrente se sono presenti
      } else {
        // Se l'indice non è valido o non ci sono opzioni, restituisce un array vuoto
        return [];
      }
    },
  },
};
</script>

<template>
  <!-- Itera sulle opzioni della domanda corrente -->
  <ul v-if="currentQuestionOptions.length > 0">
    <li
      v-for="(option, index) in currentQuestionOptions"
      :key="index"
      class="options-list"
    >
      <!-- Bottone per selezionare un'opzione -->
      <button
        @click="selectOption(option)"
        class="option-btn"
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
  background-color: rgb(6, 190, 6);
  color: white;
  animation: celebrate 1s linear infinite;
}

.incorrect {
  background-color: rgb(218, 90, 90);
  color: white;
}

/* Definizioni dell'animazione */
@keyframes celebrate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
