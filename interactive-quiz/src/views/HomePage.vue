<script>
export default {
  methods: {
    // navigaAQuizPage() {
    //   // Naviga a /quiz-page
    //   this.$router.push("/quiz-page").then(() => {
    //     // Dopo la navigazione, ricarica la pagina
    //     location.reload();
    //   });
    // },
  },
};
</script>

<template>
  <div class="home-container">
    <h1 class="home-title">Benvenuto su CodeStorm Quiz</h1>
    <p class="home-subtitle">
      Mettiti alla prova con questo divertente quiz sugli emoji dei film!
    </p>
    <router-link to="/quiz-page" class="main-btn">Inizia il Quiz</router-link>
  </div>
</template>

<style lang="css" scoped>
.home-container {
  max-width: 800px;
  margin: 10rem auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.home-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.home-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}
</style>
