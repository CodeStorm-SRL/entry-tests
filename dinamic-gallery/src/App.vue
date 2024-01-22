<script setup>
import GalleryApp from "./components/GalleryApp.vue";
</script>

<template>
  <div class="gallery-container">
    <h1>Giro del mondo a portata di click!</h1>
    <h2>
      Scorri tra questi passaggi naturali e lasciati ispirare per il tuo
      prossimo viaggio.
    </h2>
    <GalleryApp />
  </div>
</template>

<style scoped>
.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* Stili per schermi medi */
@media (max-width: 768px) {
  .gallery-container {
    padding: 10px;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1rem;
  }
}

/* Stili per schermi piccoli */
@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
}
</style>
