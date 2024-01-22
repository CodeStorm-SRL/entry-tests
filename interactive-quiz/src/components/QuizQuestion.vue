<script>
import { reactive } from "vue";
import store from "../store";

export default {
  data() {
    return {
      title: "Quiz Question",
      store,
    };
  },

  computed: {
    // Computed property per ottenere la domanda corrente dallo store
    currentQuestion() {
      const currentQuestionIndex = store.currentQuestionIndex;
      const filmQuestions = store.filmQuestions;
      // Controlla se l'indice della domanda corrente è valido
      if (
        currentQuestionIndex >= 0 &&
        currentQuestionIndex < filmQuestions.length
      ) {
        // Restituisce la domanda corrente se l'indice è valido
        return filmQuestions[currentQuestionIndex];
      } else {
        // Se l'indice non è valido, restituisce un oggetto vuoto
        return {};
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- Visualizza la domanda solo se è presente e se l'indice è valido -->
    <p class="question" v-if="currentQuestion && currentQuestion.question">
      Domanda: {{ store.filmQuestions[store.currentQuestionIndex].question }}
    </p>
  </div>
</template>

<style lang="css" scoped>
.question {
  margin: 10px auto;
  font-size: 2rem;
  font-weight: 700;
}

/* Media query */
@media (max-width: 768px) {
  .question {
    font-size: 1rem;
    font-weight: 600;
    margin: 5px auto;
  }
}
</style>
