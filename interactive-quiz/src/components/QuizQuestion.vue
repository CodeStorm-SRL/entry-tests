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
    // controllo arrivo corretto delle domande
    currentQuestion() {
      const currentQuestionIndex = store.currentQuestionIndex;
      const filmQuestions = store.filmQuestions;

      if (
        currentQuestionIndex >= 0 &&
        currentQuestionIndex < filmQuestions.length
      ) {
        return filmQuestions[currentQuestionIndex];
      } else {
        return {};
      }
    },
  },
};
</script>

<template>
  <div>
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
</style>
