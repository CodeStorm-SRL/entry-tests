<script>
import store from "../store";

export default {
  data() {
    return {
      title: "Ecco i risultati!",
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
  <div class="container result">
    <div class="header">
      <h1>{{ title }}</h1>
      <p>
        Hai finito il quiz! Il tuo punteggio finale è: {{ finalScore }}
        <span v-if="finalScore == 0">😖</span>
        <span v-if="finalScore >= 1 && finalScore <= 3">😢</span>
        <span v-else-if="finalScore >= 4 && finalScore <= 7">😊</span>
        <span v-else-if="finalScore >= 8 && finalScore <= 10">😄</span>
      </p>
    </div>

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
          <td class="question">{{ question.question }}</td>
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

    <a href="/" class="main-btn">Torna alla home</a>
  </div>
</template>

<style lang="css" scoped>
.result {
  margin: 20px auto;
}
/* stili per l'header */
.header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin: 8px 0 10px 0;
}

.score-message {
  font-size: 18px;
  margin-top: 10px;
}

.emoji {
  font-size: 1.5em;
  margin-left: 5px;
}

/* Miglioramento dello stile della tabella */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #f2f2f2;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #4caf50;
  color: white;
}

.question {
  text-align: center;
}

.incorrect-answer {
  border: 2px solid red;
}

.missing-answer {
  border: 2px solid red;
  text-align: center;
  color: red;
}

.correct-answer {
  border: 2px solid green;
}
</style>
