<script>
import QuizQuestion from "./QuizQuestion.vue";
import QuizOptions from "./QuizOptions.vue";
import store from "../store";
export default {
  data() {
    return {
      title: "Film Quiz",
      store,
    };
  },

  components: {
    QuizQuestion,
    QuizOptions,
  },

  methods: {
    nextQuestion() {
      // incrementa index domada
      this.store.currentQuestionIndex++;

      // resetta domanda selezionata ogni volta
      this.store.filmQuestions[this.store.currentQuestionIndex].selected = null;
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <QuizQuestion />
    <QuizOptions />
    <button @click="nextQuestion">Next</button>
  </div>
</template>

<style lang="scss" scoped></style>
