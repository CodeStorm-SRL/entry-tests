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
    <!-- Bottone "Next" che viene visualizzato solo se showNextButton è true -->
    <button class="main-btn" v-if="showNextButton" @click="nextQuestion">
      Next
    </button>
    <!-- Contenuto visualizzato quando showNextButton è false -->
    <div v-else>
      <iframe
        src="https://giphy.com/embed/8UF0EXzsc0Ckg"
        width="480"
        height="288"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <!-- Link per navigare alla pagina dei risultati -->
      <p>
        <router-link to="/result-page" class="main-btn"
          >scopri i risultati</router-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 15% auto;
  text-align: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 4rem;
}

iframe {
  width: 100%;
  height: auto;
  pointer-events: none;
}

/* Media query */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
}
</style>
