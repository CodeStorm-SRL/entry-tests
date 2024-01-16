<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "ecco i risultati",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <router-link to="/" class="my-router-link">Torna alla home</router-link>
</template>

<style lang="scss" scoped></style>
