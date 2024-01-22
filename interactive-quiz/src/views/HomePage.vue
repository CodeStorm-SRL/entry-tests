<script></script>

<template>
  <div class="home-container">
    <h1 class="home-title">Benvenuto su CodeStorm Quiz!</h1>
    <p class="home-subtitle">
      Mettiti alla prova con questo divertente quiz! <br />
      Riconosci tutti i film da queste emoji?
    </p>
    <section class="info-box">
      <div class="info-title">
        <span>Le regole del quiz</span>
      </div>
      <hr />
      <ol class="info-list">
        <li class="info">
          1. Una volta selezionata una risposta non puoi cambiarla.
        </li>
        <li class="info">
          2. Non puoi uscire dal quiz mentre lo stai svolgendo.
        </li>
        <li class="info">3. Ogni risposta corretta vale un punto.</li>
      </ol>
      <hr />
      <div class="start-btn">
        <router-link to="/quiz-page" class="main-btn"
          >Inizia il Quiz</router-link
        >
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 100%;
  margin: 15rem auto;
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

.info-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.info-list {
  text-align: left;
}

/* Media query per schermi con larghezza inferiore a 768px */
@media (max-width: 768px) {
  .home-container {
    margin: 8rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .home-title {
    font-size: 1.5rem;
  }

  .home-subtitle {
    font-size: 1rem;
  }
}
</style>
