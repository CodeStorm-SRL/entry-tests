<script>
import QuizQuestion from "./QuizQuestion.vue";
import QuizOptions from "./QuizOptions.vue";
import store from "../store";

export default {
  data() {
    return {
      title: "🍿 Emoji Film Quiz 🎬",
      store,
    };
  },

  components: {
    QuizQuestion,
    QuizOptions,
  },
  computed: {
    showNextButton() {
      // Verifica se ci sono ancora domande
      return this.store.currentQuestionIndex < this.store.filmQuestions.length;
    },
  },
  methods: {
    // Passa alla prossima domanda
    nextQuestion() {
      // Incrementa l'indice della domanda corrente
      this.store.currentQuestionIndex++;

      // Verifica se ci sono ancora domande
      if (this.store.currentQuestionIndex >= this.store.filmQuestions.length) {
        // Se non ci sono più domande, gestisci il completamento del quiz
        console.log("Hai finito il quiz!");
      } else {
        // Reimposta l'opzione selezionata per la nuova domanda
        this.store.filmQuestions[this.store.currentQuestionIndex].selected =
          null;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <QuizQuestion />
    <QuizOptions />
    <button class="main-btn" v-if="showNextButton" @click="nextQuestion">
      Next
    </button>
    <!-- <p v-else>
      Hai finito il quiz! Il tuo punteggio finale è: {{ store.score }}
    </p> -->
    <router-link v-else to="/result-page" class="main-btn"
      >scopri i risultati</router-link
    >
  </div>
</template>

<style lang="css" scoped>
.title {
  font-size: 4rem;
}
</style>
