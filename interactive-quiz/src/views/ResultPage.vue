<script>
import store from "../store";

export default {
  data() {
    return {
      title: "ecco i risultati",
      store,
    };
  },
  computed: {
    finalScore() {
      return this.store.score;
    },
  },
  methods: {
    isAnswerCorrect(question) {
      return question.options[question.answer] === question.selected;
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      Hai finito il quiz! Il tuo punteggio finale è: {{ finalScore }}
      <span v-if="finalScore == 0">😖</span>
      <span v-if="finalScore >= 1 && finalScore <= 3">😢</span>
      <span v-else-if="finalScore >= 4 && finalScore <= 7">😊</span>
      <span v-else-if="finalScore >= 8 && finalScore <= 10">😄</span>
    </p>

    <table>
      <thead>
        <tr>
          <th>Domanda</th>
          <th>Risposta</th>
          <th>Risposta data</th>
          <!-- Nuova colonna -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in store.filmQuestions" :key="index">
          <td>{{ question.question }}</td>
          <td>{{ question.options[question.answer] }}</td>
          <td
            :class="{
              'correct-answer': isAnswerCorrect(question),
              'incorrect-answer': !isAnswerCorrect(question),
              'missing-answer': !question.selected,
            }"
          >
            {{ question.selected || "X" }}
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to="/" class="main-btn">Torna alla home</router-link>
  </div>
</template>

<style lang="css" scoped>
.correct-answer {
  border: 2px solid green;
}

.incorrect-answer {
  border: 2px solid red;
}

.missing-answer {
  border: 2px solid red;
  text-align: center;
  color: red;
}
</style>
