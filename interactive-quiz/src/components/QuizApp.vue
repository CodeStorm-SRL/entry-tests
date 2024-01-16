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
  <div>
    <h1>{{ title }}</h1>
    <QuizQuestion />
    <QuizOptions />
    <button v-if="showNextButton" @click="nextQuestion">Next</button>
    <p v-else>
      Hai finito il quiz! Il tuo punteggio finale è: {{ store.score }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
