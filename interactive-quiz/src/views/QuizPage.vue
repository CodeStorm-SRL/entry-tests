<script>
import QuizApp from "../components/QuizApp.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    QuizApp,
  },
};
</script>

<template>
  <div class="container">
    <QuizApp />
  </div>
</template>

<style lang="scss" scoped></style>
