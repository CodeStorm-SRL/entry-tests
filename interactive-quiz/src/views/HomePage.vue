<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>Hello Codestorm!</h1>
  <router-link to="/quiz-page" class="my-router-link">Vai al quiz</router-link>
</template>

<style lang="scss" scoped></style>
