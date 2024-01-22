<script>
export default {
  // Definizione delle props che il componente può ricevere
  props: ["image"],

  data() {
    return {
      showTitleOnHover: false, // Indica se il titolo deve essere mostrato quando il mouse è sopra l'immagine
      modalVisible: false, // Indica se la finestra modale è visibile o no
      currentImageIndex: 0, // Indice dell'immagine corrente nella finestra modale
    };
  },

  methods: {
    // Mostra il titolo quando il mouse è sopra l'immagine
    showTitle() {
      this.showTitleOnHover = true;
    },

    // Nasconde il titolo quando il mouse esce dall'immagine
    hideTitle() {
      this.showTitleOnHover = false;
    },

    // Apre la finestra modale e imposta l'indice dell'immagine corrente
    openModal() {
      this.modalVisible = true;
      this.currentImageIndex = this.$store.state.images.findIndex(
        (img) => img.id === this.image.id
      );
    },

    // Chiude la finestra modale
    closeModal() {
      this.modalVisible = false;
    },

    // Comandi della modale

    // Vai all'immagine precedente
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.$store.state.images.length) %
        this.$store.state.images.length;
    },

    // Vai all'immagine successiva
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.$store.state.images.length;
    },
  },
};
</script>

<template>
  <div>
    <!-- Card che mostra l'immagine e il titolo quando il mouse è in hover -->
    <div
      class="card"
      @mouseover="showTitle"
      @mouseout="hideTitle"
      @click="openModal"
    >
      <img :src="image.url" alt="Card Image" />
      <div v-if="showTitleOnHover" class="card-title">{{ image.title }}</div>
    </div>

    <!-- Finestra modale che mostra l'immagine, il titolo e la descrizione -->
    <div v-if="modalVisible" class="modal" @click="closeModal">
      <img
        :src="$store.state.images[currentImageIndex].url"
        alt="Modal Image"
      />
      <div class="container">
        <!-- Pulsante per andare all'immagine precedente -->
        <button @click.stop="prevImage" class="nav-button">←</button>
        <!-- Titolo e descrizione dell'immagine corrente -->
        <div class="modal-text">
          <h2 class="modal-title">
            {{ $store.state.images[currentImageIndex].title }}
          </h2>
          <p class="modal-description">
            {{ $store.state.images[currentImageIndex].description }}
          </p>
        </div>
        <!-- Pulsante per andare all'immagine successiva -->
        <button @click.stop="nextImage" class="nav-button">→</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
/********************** Stile card **********************/
.card {
  position: relative;
  margin: 20px 0;
  width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

/*********************** Stile modale ***********************/

.modal {
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
}

.modal-description {
  word-wrap: break-word;
}
.container {
  background-color: #fff;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.modal img {
  width: 500px;
  height: 700px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.nav-button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #ccc;
  color: #fff;
  transition: background-color 0.3s ease;
}

/* Stili per schermi piccoli */
@media (max-width: 480px) {
  .card {
    width: 300px;
    height: 500px;
  }

  .modal img {
    width: 300px;
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .container {
    width: 300px;
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
