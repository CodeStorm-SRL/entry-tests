<script>
export default {
  props: ["image"],

  data() {
    return {
      showTitleOnHover: false,
      modalVisible: false,
      currentImageIndex: 0,
    };
  },
  // NON PRENDE LA MODALE GIUSTA!

  methods: {
    showTitle() {
      this.showTitleOnHover = true;
    },
    hideTitle() {
      this.showTitleOnHover = false;
    },
    openModal() {
      this.modalVisible = true;
      this.currentImageIndex = this.$store.state.images.findIndex(
        (img) => img.id === this.image.id
      );
    },
    closeModal() {
      this.modalVisible = false;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.$store.state.images.length) %
        this.$store.state.images.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.$store.state.images.length;
    },
  },
};
</script>

<template>
  <div>
    <div
      class="card"
      @mouseover="showTitle"
      @mouseout="hideTitle"
      @click="openModal"
    >
      <img :src="image.url" alt="Card Image" />
      <div v-if="showTitleOnHover" class="card-title">{{ image.title }}</div>
    </div>

    <div v-if="modalVisible" class="modal" @click="closeModal">
      <!-- <div class="modal-content">
       
       
        
      </div> -->
      <img
        :src="$store.state.images[currentImageIndex].url"
        alt="Modal Image"
      />
      <div class="container">
        <button @click.stop="prevImage" class="nav-button">←</button>

        <div class="modal-text">
          <h2 class="modal-title">
            {{ $store.state.images[currentImageIndex].title }}
          </h2>
          <p class="modal-description">
            {{ $store.state.images[currentImageIndex].description }}
          </p>
        </div>

        <button @click.stop="nextImage" class="nav-button">→</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
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

/* Stile modale */

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
