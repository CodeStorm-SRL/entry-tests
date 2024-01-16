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

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div>
    <p v-if="store.filmQuestions && store.filmQuestions.length > 0">
      Domanda: {{ store.filmQuestions[store.currentQuestionIndex].question }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
