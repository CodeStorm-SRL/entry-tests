<script>
// Importa il modulo store contenente lo stato dell'applicazione
import store from "../store";

export default {
  data() {
    return {
      title: "Ecco i risultati!",
      store, // Oggetto Vuex store per accedere allo stato dell'applicazione
    };
  },
  // Computed property per ottenere il punteggio finale dallo store
  computed: {
    finalScore() {
      return this.store.score;
    },
  },
  methods: {
    // Verifica se la risposta data a una domanda è corretta
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

      <!-- Visualizza il punteggio finale e un emoji in base al risultato -->
      <p>
        Hai finito il quiz! Il tuo punteggio finale è: {{ finalScore }}
        <span v-if="finalScore == 0">😖</span>
        <span v-if="finalScore >= 1 && finalScore <= 3">😢</span>
        <span v-else-if="finalScore >= 4 && finalScore <= 7">😊</span>
        <span v-else-if="finalScore >= 8 && finalScore <= 10">😄</span>
      </p>
    </div>

    <!-- Tabella che mostra le domande, le risposte corrette e le risposte date -->
    <table>
      <thead>
        <tr>
          <th>Domanda</th>
          <th>Risposta</th>
          <th>Risposta data</th>
        </tr>
      </thead>
      <tbody>
        <!-- Itera sulle domande e visualizza le informazioni nella tabella -->
        <tr v-for="(question, index) in store.filmQuestions" :key="index">
          <td class="question">{{ question.question }}</td>
          <td>{{ question.options[question.answer] }}</td>
          <!-- Applica classi dinamiche in base alla correttezza della risposta -->
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
    <!-- Link per tornare alla home -->
    <a href="/" class="main-btn">Torna alla home</a>
  </div>
</template>

<style lang="css" scoped>
.result {
  margin: 3rem auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

/********************  media query ******************/
@media (max-width: 768px) {
  .result {
    margin: 3rem 1.5rem;
  }
  table {
    font-size: 14px;
  }

  th,
  td {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .result {
    margin: 1.5rem 1.5rem;
  }

  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 4px;
  }
}
</style>
